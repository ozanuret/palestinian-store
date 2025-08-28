// Configuration Example for Palæstinensisk Arv Butik
// Copy this file to config.js and fill in your actual values

module.exports = {
    // Stripe Configuration
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_your_test_key_here',
        secretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_your_secret_key_here',
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'whsec_your_webhook_secret_here'
    },
    
    // Server Configuration
    server: {
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    },
    
    // Database Configuration
    database: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/palestinian-store'
    },
    
    // Email Configuration
    email: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password'
    },
    
    // Security
    security: {
        jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret-key-here',
        sessionSecret: process.env.SESSION_SECRET || 'your-session-secret-here'
    }
};
