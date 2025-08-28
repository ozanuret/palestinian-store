# 🚀 Quick Setup Guide - Palæstinensisk Arv Butik

## **Step 1: Get Stripe API Keys (5 minutes)**

### **1.1 Create Stripe Account**
1. Go to [stripe.com](https://stripe.com)
2. Click "Start now" and sign up
3. Complete business verification (basic info)

### **1.2 Get Your API Keys**
1. Go to [Dashboard → Developers → API keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)

### **1.3 Update Your Configuration**
Replace the keys in your files:

**In `stripe-config.js`:**
```javascript
publishableKey: 'pk_test_YOUR_ACTUAL_KEY_HERE'
```

**In `server.js`:**
```javascript
const stripeInstance = stripe('sk_test_YOUR_ACTUAL_KEY_HERE');
```

## **Step 2: Deploy to Vercel (10 minutes)**

### **2.1 Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/palestinian-store.git
git push -u origin main
```

### **2.2 Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Set environment variables:
   - `STRIPE_SECRET_KEY`: `sk_test_your_key`
   - `STRIPE_PUBLISHABLE_KEY`: `pk_test_your_key`
6. Deploy!

## **Step 3: Add Database (5 minutes)**

### **3.1 Create MongoDB Atlas Account**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up for free account
3. Create a new cluster (free tier)
4. Get your connection string

### **3.2 Install MongoDB Driver**
```bash
npm install mongoose
```

### **3.3 Update Server**
Add database connection to `server.js`

## **Step 4: Test Everything (5 minutes)**

### **4.1 Test Payment Flow**
1. Go to your live site
2. Add product to cart
3. Go to checkout
4. Use test card: `4242 4242 4242 4242`
5. Complete payment

### **4.2 Test Order Storage**
1. Check if order appears in database
2. Verify email confirmation (if set up)

## **🎉 You're Live!**

Your Palestinian store is now:
- ✅ Accepting payments via Stripe
- ✅ Hosted on Vercel
- ✅ Storing orders in database
- ✅ Ready for customers

## **📈 Next Steps (Optional)**

### **Week 1:**
- Set up email marketing (Mailchimp)
- Add Google Analytics
- Test on mobile devices

### **Week 2:**
- Add more products
- Set up customer support
- Optimize for SEO

### **Month 1:**
- Go live with real Stripe keys
- Set up inventory management
- Add shipping integration

## **💰 Total Cost: $0-15/month**
- Vercel hosting: Free
- MongoDB Atlas: Free (512MB)
- Stripe: 2.9% + 30¢ per transaction
- Optional services: $10-50/month

## **🆘 Need Help?**

- **Stripe Support**: [support.stripe.com](https://support.stripe.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
