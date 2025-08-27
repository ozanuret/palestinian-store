// Stripe Payment Handler for Palæstinensisk Arv Butik
class StripePaymentHandler {
    constructor() {
        this.stripe = null;
        this.elements = null;
        this.paymentElement = null;
        this.paymentIntent = null;
        this.currentOrder = null;
        this.isProcessing = false;
        
        this.init();
    }
    
    async init() {
        try {
            // Load Stripe.js
            await this.loadStripe();
            
            // Initialize Stripe
            this.stripe = Stripe(STRIPE_CONFIG.publishableKey);
            
            // Set up event listeners
            this.setupEventListeners();
            
            console.log('Stripe Payment Handler initialized successfully');
        } catch (error) {
            console.error('Failed to initialize Stripe Payment Handler:', error);
            this.showError('Kunne ikke indlæse betalingssystem. Prøv venligst igen.');
        }
    }
    
    async loadStripe() {
        return new Promise((resolve, reject) => {
            if (window.Stripe) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://js.stripe.com/v3/';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    setupEventListeners() {
        // Listen for payment method changes
        document.addEventListener('paymentMethodChanged', (e) => {
            this.handlePaymentMethodChange(e.detail.method);
        });
        
        // Listen for order updates
        document.addEventListener('orderUpdated', (e) => {
            this.updatePaymentAmount(e.detail.order);
        });
    }
    
    async createPaymentIntent(order) {
        try {
            this.showLoading('Opretter betaling...');
            
            const response = await fetch(STRIPE_CONFIG.endpoints.createPaymentIntent, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: this.calculateTotalAmount(order),
                    currency: STRIPE_CONFIG.currency,
                    order: order
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to create payment intent');
            }
            
            const data = await response.json();
            this.paymentIntent = data.paymentIntent;
            
            this.hideLoading();
            return data.paymentIntent;
            
        } catch (error) {
            console.error('Error creating payment intent:', error);
            this.hideLoading();
            this.showError('Kunne ikke oprette betaling. Prøv venligst igen.');
            throw error;
        }
    }
    
    async setupPaymentElement(order) {
        try {
            this.currentOrder = order;
            
            // Create payment intent
            await this.createPaymentIntent(order);
            
            // Create elements
            this.elements = this.stripe.elements({
                clientSecret: this.paymentIntent.client_secret,
                appearance: STRIPE_ELEMENTS_CONFIG.appearance
            });
            
            // Create payment element
            this.paymentElement = this.elements.create('payment');
            
            // Mount payment element
            const paymentContainer = document.getElementById('stripe-payment-element');
            if (paymentContainer) {
                this.paymentElement.mount(paymentContainer);
            }
            
            console.log('Payment element setup complete');
            
        } catch (error) {
            console.error('Error setting up payment element:', error);
            this.showError('Kunne ikke indlæse betalingsformular. Prøv venligst igen.');
        }
    }
    
    async processPayment() {
        if (this.isProcessing) {
            return;
        }
        
        try {
            this.isProcessing = true;
            this.showLoading('Behandler betaling...');
            
            // Confirm payment
            const { error, paymentIntent } = await this.stripe.confirmPayment({
                elements: this.elements,
                confirmParams: {
                    return_url: `${window.location.origin}/order-confirmation.html`,
                    payment_method_data: {
                        billing_details: this.getBillingDetails()
                    }
                },
                redirect: 'if_required'
            });
            
            if (error) {
                this.handlePaymentError(error);
                return;
            }
            
            if (paymentIntent.status === 'succeeded') {
                await this.handlePaymentSuccess(paymentIntent);
            } else if (paymentIntent.status === 'requires_action') {
                await this.handlePaymentAction(paymentIntent);
            }
            
        } catch (error) {
            console.error('Payment processing error:', error);
            this.handlePaymentError(error);
        } finally {
            this.isProcessing = false;
            this.hideLoading();
        }
    }
    
    async handlePaymentSuccess(paymentIntent) {
        try {
            // Create order in backend
            const orderData = {
                paymentIntentId: paymentIntent.id,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                status: 'paid',
                customer: this.getCustomerData(),
                items: this.currentOrder.items,
                shipping: this.currentOrder.shipping,
                billing: this.currentOrder.billing
            };
            
            const response = await fetch(STRIPE_CONFIG.endpoints.createOrder, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });
            
            if (!response.ok) {
                throw new Error('Failed to create order');
            }
            
            const order = await response.json();
            
            // Show success message
            this.showSuccess('Betaling gennemført! Din ordre er bekræftet.');
            
            // Store order in localStorage
            localStorage.setItem('lastOrder', JSON.stringify(order));
            
            // Redirect to confirmation page
            setTimeout(() => {
                window.location.href = `order-confirmation.html?orderId=${order.id}`;
            }, 2000);
            
        } catch (error) {
            console.error('Error handling payment success:', error);
            this.showError('Betaling gennemført, men der opstod en fejl med ordren. Kontakt venligst support.');
        }
    }
    
    async handlePaymentAction(paymentIntent) {
        try {
            const { error } = await this.stripe.confirmPayment({
                elements: this.elements,
                confirmParams: {
                    return_url: `${window.location.origin}/order-confirmation.html`,
                }
            });
            
            if (error) {
                this.handlePaymentError(error);
            }
            
        } catch (error) {
            console.error('Error handling payment action:', error);
            this.handlePaymentError(error);
        }
    }
    
    handlePaymentError(error) {
        console.error('Payment error:', error);
        
        let errorMessage = 'Der opstod en fejl under betalingen.';
        
        if (error.type === 'card_error' || error.type === 'validation_error') {
            errorMessage = error.message;
        } else if (error.type === 'authentication_error') {
            errorMessage = 'Betalingen kræver godkendelse. Prøv venligst igen.';
        } else if (error.type === 'api_error') {
            errorMessage = 'Der opstod en fejl i betalingssystemet. Prøv venligst igen senere.';
        }
        
        this.showError(errorMessage);
    }
    
    calculateTotalAmount(order) {
        let subtotal = 0;
        
        // Calculate items total
        order.items.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        
        // Add shipping cost
        const shippingCost = order.shipping.cost || 0;
        
        // Add tax (25% VAT for Denmark)
        const tax = (subtotal + shippingCost) * 0.25;
        
        const total = subtotal + shippingCost + tax;
        
        // Convert to cents (Stripe expects amounts in smallest currency unit)
        return Math.round(total * 100);
    }
    
    getBillingDetails() {
        const form = document.querySelector('.billing-form');
        if (!form) return {};
        
        return {
            name: `${form.querySelector('#firstName')?.value || ''} ${form.querySelector('#lastName')?.value || ''}`.trim(),
            email: form.querySelector('#email')?.value || '',
            phone: form.querySelector('#phone')?.value || '',
            address: {
                line1: form.querySelector('#address')?.value || '',
                city: form.querySelector('#city')?.value || '',
                postal_code: form.querySelector('#postalCode')?.value || '',
                country: form.querySelector('#country')?.value || 'DK'
            }
        };
    }
    
    getCustomerData() {
        return {
            firstName: document.getElementById('firstName')?.value || '',
            lastName: document.getElementById('lastName')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            shipping: {
                address: document.getElementById('address')?.value || '',
                city: document.getElementById('city')?.value || '',
                postalCode: document.getElementById('postalCode')?.value || '',
                country: document.getElementById('country')?.value || 'DK'
            }
        };
    }
    
    updatePaymentAmount(order) {
        this.currentOrder = order;
        
        // Update order summary display
        this.updateOrderSummary(order);
        
        // If payment intent exists, update it
        if (this.paymentIntent) {
            this.updatePaymentIntent(order);
        }
    }
    
    async updatePaymentIntent(order) {
        try {
            const response = await fetch(STRIPE_CONFIG.endpoints.createPaymentIntent, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: this.calculateTotalAmount(order),
                    currency: STRIPE_CONFIG.currency,
                    order: order
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                this.paymentIntent = data.paymentIntent;
            }
            
        } catch (error) {
            console.error('Error updating payment intent:', error);
        }
    }
    
    updateOrderSummary(order) {
        const summaryContainer = document.querySelector('.order-summary');
        if (!summaryContainer) return;
        
        // Update items
        const itemsContainer = summaryContainer.querySelector('.summary-items');
        if (itemsContainer) {
            itemsContainer.innerHTML = order.items.map(item => `
                <div class="summary-item">
                    <div class="item-info">
                        <span>${item.name}</span>
                        <small>${item.variant} x ${item.quantity}</small>
                    </div>
                    <span class="item-price">${item.price * item.quantity} ${STRIPE_CONFIG.currencySymbol}</span>
                </div>
            `).join('');
        }
        
        // Update totals
        const totalsContainer = summaryContainer.querySelector('.summary-totals');
        if (totalsContainer) {
            const subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = order.shipping.cost || 0;
            const tax = (subtotal + shipping) * 0.25;
            const total = subtotal + shipping + tax;
            
            totalsContainer.innerHTML = `
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)} ${STRIPE_CONFIG.currencySymbol}</span>
                </div>
                <div class="summary-row">
                    <span>Levering</span>
                    <span>${shipping.toFixed(2)} ${STRIPE_CONFIG.currencySymbol}</span>
                </div>
                <div class="summary-row">
                    <span>Moms (25%)</span>
                    <span>${tax.toFixed(2)} ${STRIPE_CONFIG.currencySymbol}</span>
                </div>
                <div class="summary-row total">
                    <span>Total</span>
                    <span>${total.toFixed(2)} ${STRIPE_CONFIG.currencySymbol}</span>
                </div>
            `;
        }
    }
    
    handlePaymentMethodChange(method) {
        const cardDetails = document.getElementById('cardDetails');
        const stripeElement = document.getElementById('stripe-payment-element');
        
        if (method === 'card') {
            if (cardDetails) cardDetails.style.display = 'block';
            if (stripeElement) stripeElement.style.display = 'block';
        } else {
            if (cardDetails) cardDetails.style.display = 'none';
            if (stripeElement) stripeElement.style.display = 'none';
        }
    }
    
    showLoading(message) {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            const messageElement = spinner.querySelector('p');
            if (messageElement) {
                messageElement.textContent = message;
            }
            spinner.style.display = 'flex';
        }
    }
    
    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    }
    
    showSuccess(message) {
        this.showNotification(message, 'success');
    }
    
    showError(message) {
        this.showNotification(message, 'error');
    }
    
    showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
    
    destroy() {
        if (this.paymentElement) {
            this.paymentElement.destroy();
        }
        if (this.elements) {
            this.elements.clear();
        }
    }
}

// Initialize Stripe Payment Handler
let stripePaymentHandler;

document.addEventListener('DOMContentLoaded', function() {
    stripePaymentHandler = new StripePaymentHandler();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StripePaymentHandler;
}
