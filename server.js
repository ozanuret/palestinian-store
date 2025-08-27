const express = require('express');
const stripe = require('stripe');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Initialize Stripe with your secret key
// Replace with your actual Stripe secret key
const stripeInstance = stripe('sk_test_51OZANEXAMPLE'); // Replace with your actual test key

// In-memory storage for orders (in production, use a database)
let orders = [];
let orderCounter = 1;

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Create Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
    try {
        const { amount, currency, order } = req.body;
        
        console.log('Creating payment intent:', { amount, currency });
        
        // Create payment intent
        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: amount,
            currency: currency,
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                order_id: `order_${orderCounter}`,
                customer_email: order.customer?.email || '',
            }
        });
        
        console.log('Payment intent created:', paymentIntent.id);
        
        res.json({
            paymentIntent: {
                id: paymentIntent.id,
                client_secret: paymentIntent.client_secret,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency
            }
        });
        
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({
            error: 'Failed to create payment intent',
            message: error.message
        });
    }
});

// Confirm Payment
app.post('/api/confirm-payment', async (req, res) => {
    try {
        const { paymentIntentId } = req.body;
        
        const paymentIntent = await stripeInstance.paymentIntents.retrieve(paymentIntentId);
        
        if (paymentIntent.status === 'succeeded') {
            res.json({
                success: true,
                paymentIntent: paymentIntent
            });
        } else {
            res.status(400).json({
                success: false,
                status: paymentIntent.status
            });
        }
        
    } catch (error) {
        console.error('Error confirming payment:', error);
        res.status(500).json({
            error: 'Failed to confirm payment',
            message: error.message
        });
    }
});

// Create Order
app.post('/api/create-order', async (req, res) => {
    try {
        const orderData = req.body;
        
        // Generate order ID
        const orderId = `PAL_${Date.now()}_${orderCounter++}`;
        
        // Create order object
        const order = {
            id: orderId,
            paymentIntentId: orderData.paymentIntentId,
            amount: orderData.amount,
            currency: orderData.currency,
            status: orderData.status,
            customer: orderData.customer,
            items: orderData.items,
            shipping: orderData.shipping,
            billing: orderData.billing,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        // Store order
        orders.push(order);
        
        // Save to file (in production, save to database)
        saveOrdersToFile();
        
        console.log('Order created:', orderId);
        
        res.json({
            success: true,
            order: order
        });
        
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            error: 'Failed to create order',
            message: error.message
        });
    }
});

// Get Order
app.get('/api/orders/:orderId', (req, res) => {
    try {
        const { orderId } = req.params;
        
        const order = orders.find(o => o.id === orderId);
        
        if (!order) {
            return res.status(404).json({
                error: 'Order not found'
            });
        }
        
        res.json({
            success: true,
            order: order
        });
        
    } catch (error) {
        console.error('Error getting order:', error);
        res.status(500).json({
            error: 'Failed to get order',
            message: error.message
        });
    }
});

// Get All Orders
app.get('/api/orders', (req, res) => {
    try {
        res.json({
            success: true,
            orders: orders
        });
        
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).json({
            error: 'Failed to get orders',
            message: error.message
        });
    }
});

// Update Order Status
app.put('/api/orders/:orderId/status', (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        
        const order = orders.find(o => o.id === orderId);
        
        if (!order) {
            return res.status(404).json({
                error: 'Order not found'
            });
        }
        
        order.status = status;
        order.updatedAt = new Date().toISOString();
        
        // Save to file
        saveOrdersToFile();
        
        res.json({
            success: true,
            order: order
        });
        
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({
            error: 'Failed to update order status',
            message: error.message
        });
    }
});

// Webhook for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'whsec_YOUR_WEBHOOK_SECRET'; // Replace with your webhook secret
    
    let event;
    
    try {
        event = stripeInstance.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('Payment succeeded:', paymentIntent.id);
            
            // Update order status
            const order = orders.find(o => o.paymentIntentId === paymentIntent.id);
            if (order) {
                order.status = 'paid';
                order.updatedAt = new Date().toISOString();
                saveOrdersToFile();
            }
            break;
            
        case 'payment_intent.payment_failed':
            const failedPayment = event.data.object;
            console.log('Payment failed:', failedPayment.id);
            
            // Update order status
            const failedOrder = orders.find(o => o.paymentIntentId === failedPayment.id);
            if (failedOrder) {
                failedOrder.status = 'failed';
                failedOrder.updatedAt = new Date().toISOString();
                saveOrdersToFile();
            }
            break;
            
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({ received: true });
});

// Helper function to save orders to file
function saveOrdersToFile() {
    try {
        fs.writeFileSync('orders.json', JSON.stringify(orders, null, 2));
    } catch (error) {
        console.error('Error saving orders to file:', error);
    }
}

// Helper function to load orders from file
function loadOrdersFromFile() {
    try {
        if (fs.existsSync('orders.json')) {
            const data = fs.readFileSync('orders.json', 'utf8');
            orders = JSON.parse(data);
            
            // Update order counter
            if (orders.length > 0) {
                const lastOrder = orders[orders.length - 1];
                const lastOrderNumber = parseInt(lastOrder.id.split('_')[2]);
                orderCounter = lastOrderNumber + 1;
            }
        }
    } catch (error) {
        console.error('Error loading orders from file:', error);
    }
}

// Load orders on startup
loadOrdersFromFile();

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Palæstinensisk Arv Butik server running on port ${PORT}`);
    console.log(`📱 Local: http://localhost:${PORT}`);
    console.log(`🌐 Network: http://0.0.0.0:${PORT}`);
    console.log(`💳 Stripe integration ready`);
});

module.exports = app;
