# Deployment Guide - Palæstinensisk Arv Butik

## 🌐 **Recommended Hosting Platforms**

### **Option 1: Vercel (Recommended for beginners)**
- **Cost**: Free tier available
- **Features**: Automatic deployments, SSL, CDN
- **Setup**: Connect GitHub repository
- **URL**: [vercel.com](https://vercel.com)

### **Option 2: Netlify**
- **Cost**: Free tier available  
- **Features**: Form handling, serverless functions
- **Setup**: Drag & drop or Git integration
- **URL**: [netlify.com](https://netlify.com)

### **Option 3: Railway**
- **Cost**: $5/month (good for Node.js apps)
- **Features**: Database included, easy scaling
- **Setup**: GitHub integration
- **URL**: [railway.app](https://railway.app)

### **Option 4: Heroku**
- **Cost**: $7/month (basic dyno)
- **Features**: Full-stack hosting, add-ons
- **Setup**: Git deployment
- **URL**: [heroku.com](https://heroku.com)

## **🚀 Quick Deployment Steps**

### **For Vercel:**
1. Push code to GitHub
2. Connect Vercel to your repository
3. Set environment variables:
   ```
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_PUBLISHABLE_KEY=pk_live_...
   ```
4. Deploy automatically

### **For Railway:**
1. Connect GitHub repository
2. Add environment variables
3. Deploy with one click

## **🔧 Environment Variables**
Set these in your hosting platform:
```
STRIPE_SECRET_KEY=sk_live_your_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_key
NODE_ENV=production
PORT=3000
```

## **📊 Performance Optimization**
- Enable CDN
- Compress images
- Minify CSS/JS
- Enable caching
