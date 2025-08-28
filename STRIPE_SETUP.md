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
