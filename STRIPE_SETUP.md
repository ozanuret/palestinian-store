<<<<<<< HEAD
# Stripe Payment Setup Guide

## 🚀 Complete Stripe Integration for Palæstinensisk Arv Butik

### **Step 1: Create Stripe Account**
1. Go to [stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete business verification
4. Get your API keys

### **Step 2: Get Your API Keys**
- **Test Keys** (for development):
  - Publishable Key: `pk_test_...`
  - Secret Key: `sk_test_...`
- **Live Keys** (for production):
  - Publishable Key: `pk_live_...`
  - Secret Key: `sk_live_...`

### **Step 3: Update Configuration**
Replace the placeholder keys in your files:

**In `stripe-config.js`:**
```javascript
publishableKey: 'pk_test_YOUR_ACTUAL_TEST_KEY'
```

**In `server.js`:**
```javascript
const stripeInstance = stripe('sk_test_YOUR_ACTUAL_SECRET_KEY');
```

### **Step 4: Test Payment Flow**
1. Use Stripe's test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
2. Any future expiry date
3. Any 3-digit CVC

### **Step 5: Go Live**
1. Complete Stripe verification
2. Switch to live keys
3. Test with real payments

## **Supported Payment Methods**
- 💳 Credit/Debit Cards (Visa, Mastercard, Amex)
- 📱 MobilePay (Denmark)
- 💰 PayPal
- 🏦 Bank transfers (SEPA)

## **Security Features**
- PCI DSS compliant
- 3D Secure authentication
- Fraud detection
- Secure payment processing
=======
# Stripe Integration Setup Guide

## 🚀 Quick Start

This guide will help you set up Stripe payment processing for your Palestinian store.

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A Stripe account (sign up at [stripe.com](https://stripe.com))

## 🔧 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get your Stripe API keys:**
   - Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
   - Go to Developers → API keys
   - Copy your **Publishable key** and **Secret key**

3. **Update configuration files:**

   **Update `stripe-config.js`:**
   ```javascript
   const STRIPE_CONFIG = {
       publishableKey: 'pk_test_YOUR_PUBLISHABLE_KEY_HERE', // Replace with your actual key
       // ... rest of config
   };
   ```

   **Update `server.js`:**
   ```javascript
   const stripeInstance = stripe('sk_test_YOUR_SECRET_KEY_HERE'); // Replace with your actual key
   ```

## 🏃‍♂️ Running the Application

1. **Start the server:**
   ```bash
   npm start
   ```

2. **For development (with auto-restart):**
   ```bash
   npm run dev
   ```

3. **Access your store:**
   - Open your browser and go to `http://localhost:3000`
   - The Stripe integration will be active on the checkout page

## 🧪 Testing

### Test Card Numbers

Use these test card numbers for testing:

- **Successful payment:** `4242 4242 4242 4242`
- **Declined payment:** `4000 0000 0000 0002`
- **Requires authentication:** `4000 0025 0000 3155`

### Test Data

- **Expiry date:** Any future date (e.g., `12/25`)
- **CVC:** Any 3 digits (e.g., `123`)
- **ZIP code:** Any valid code (e.g., `12345`)

## 📁 File Structure

```
palestinian-store/
├── stripe-config.js          # Stripe configuration
├── stripe-payment.js         # Payment processing logic
├── server.js                 # Express server with Stripe API
├── checkout.html             # Updated checkout page
├── order-confirmation.html   # Order confirmation page
├── package.json              # Dependencies
└── STRIPE_SETUP.md          # This file
```

## 🔐 Security Features

- **PCI Compliance:** Stripe handles all sensitive card data
- **Tokenization:** Card details are never stored on your server
- **Webhook verification:** Ensures payment events are authentic
- **HTTPS required:** All communications are encrypted

## 🌐 Production Deployment

### 1. Environment Variables

Create a `.env` file:
```env
STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET
PORT=3000
NODE_ENV=production
```

### 2. Webhook Setup

1. In your Stripe Dashboard, go to Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the webhook secret and update your `.env` file

### 3. Database Integration

For production, replace the file-based storage with a proper database:

```javascript
// Example with MongoDB
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: String,
    paymentIntentId: String,
    amount: Number,
    currency: String,
    status: String,
    customer: Object,
    items: Array,
    shipping: Object,
    billing: Object,
    createdAt: Date,
    updatedAt: Date
});

const Order = mongoose.model('Order', OrderSchema);
```

## 🛠️ Customization

### Payment Methods

Add or remove payment methods in `stripe-config.js`:

```javascript
paymentMethods: {
    card: { enabled: true, ... },
    mobilepay: { enabled: true, ... },
    paypal: { enabled: false, ... }, // Disable PayPal
    // Add new methods here
}
```

### Currency

Change currency in `stripe-config.js`:

```javascript
currency: 'eur', // Change from 'dkk' to 'eur'
currencySymbol: '€', // Update symbol
```

### Styling

Customize Stripe Elements appearance in `stripe-config.js`:

```javascript
appearance: {
    theme: 'stripe',
    variables: {
        colorPrimary: '#your-brand-color',
        colorBackground: '#ffffff',
        // ... more customization
    }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid API key" error:**
   - Check that your API keys are correct
   - Ensure you're using test keys for development

2. **"Payment failed" errors:**
   - Use the test card numbers provided above
   - Check the Stripe Dashboard for detailed error logs

3. **Webhook errors:**
   - Verify webhook endpoint URL is accessible
   - Check webhook secret is correct
   - Ensure HTTPS is enabled in production

4. **CORS errors:**
   - Verify CORS configuration in `server.js`
   - Check that frontend and backend URLs match

### Debug Mode

Enable debug logging:

```javascript
// In server.js
const stripeInstance = stripe('sk_test_...', {
    apiVersion: '2023-10-16',
    typescript: true,
    appInfo: {
        name: 'Palestinian Store',
        version: '1.0.0'
    }
});
```

## 📞 Support

- **Stripe Documentation:** [stripe.com/docs](https://stripe.com/docs)
- **Stripe Support:** [support.stripe.com](https://support.stripe.com)
- **GitHub Issues:** Create an issue in this repository

## 🔄 Updates

Keep your Stripe integration updated:

```bash
npm update stripe
```

Check the [Stripe changelog](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md) for breaking changes.

## 📄 License

This integration is part of the Palestinian Store project. See the main LICENSE file for details.

---

**Happy coding! 🇵🇸💳**
>>>>>>> df19fb4927cdc5d5afdcfde05ed85c08e0c2b080
