// Stripe Configuration for Palæstinensisk Arv Butik
const STRIPE_CONFIG = {
    // Live Stripe publishable key from environment variable
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    
    // Currency settings
    currency: 'dkk',
    currencySymbol: 'kr',
    
    // Payment methods
    paymentMethods: {
        card: {
            enabled: true,
            name: 'Kreditkort / Debetkort',
            description: 'Visa, Mastercard, American Express',
            icon: 'fas fa-credit-card'
        },
        mobilepay: {
            enabled: true,
            name: 'MobilePay',
            description: 'Hurtig og sikker betaling',
            icon: 'fas fa-mobile-alt'
        },
        paypal: {
            enabled: true,
            name: 'PayPal',
            description: 'Betaling via PayPal',
            icon: 'fab fa-paypal'
        }
    },
    
    // Shipping options
    shippingOptions: [
        {
            id: 'standard',
            name: 'Standard Levering',
            description: '3-5 hverdage',
            price: 49,
            icon: 'fas fa-truck'
        },
        {
            id: 'express',
            name: 'Express Levering',
            description: '1-2 hverdage',
            price: 99,
            icon: 'fas fa-rocket'
        }
    ],
    
    // API endpoints
    endpoints: {
        createPaymentIntent: '/api/create-payment-intent',
        confirmPayment: '/api/confirm-payment',
        createOrder: '/api/create-order'
    }
};

// Stripe Elements configuration
const STRIPE_ELEMENTS_CONFIG = {
    mode: 'payment',
    amount: 0, // Will be set dynamically
    currency: STRIPE_CONFIG.currency,
    appearance: {
        theme: 'stripe',
        variables: {
            colorPrimary: '#2c5530',
            colorBackground: '#ffffff',
            colorText: '#1a472a',
            colorDanger: '#df1b41',
            fontFamily: 'Poppins, system-ui, sans-serif',
            spacingUnit: '4px',
            borderRadius: '8px'
        },
        labels: 'floating'
    },
    loader: 'always'
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STRIPE_CONFIG, STRIPE_ELEMENTS_CONFIG };
}
