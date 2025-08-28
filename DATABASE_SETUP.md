# Database Setup Guide

## 🗄️ **Database Options for E-commerce**

### **Option 1: MongoDB Atlas (Recommended)**
- **Cost**: Free tier (512MB)
- **Features**: NoSQL, easy scaling, cloud-hosted
- **Setup**: 5-minute setup
- **URL**: [mongodb.com/atlas](https://mongodb.com/atlas)

### **Option 2: Supabase (PostgreSQL)**
- **Cost**: Free tier available
- **Features**: SQL database + real-time features
- **Setup**: GitHub integration
- **URL**: [supabase.com](https://supabase.com)

### **Option 3: PlanetScale (MySQL)**
- **Cost**: Free tier available
- **Features**: Serverless MySQL, branching
- **Setup**: Simple setup
- **URL**: [planetscale.com](https://planetscale.com)

## **📊 Required Database Tables**

### **Orders Table:**
```sql
CREATE TABLE orders (
    id VARCHAR(255) PRIMARY KEY,
    payment_intent_id VARCHAR(255),
    customer_email VARCHAR(255),
    customer_name VARCHAR(255),
    total_amount DECIMAL(10,2),
    currency VARCHAR(3),
    status VARCHAR(50),
    shipping_address JSON,
    billing_address JSON,
    items JSON,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### **Products Table:**
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2),
    category VARCHAR(100),
    image_url VARCHAR(500),
    stock_quantity INT,
    colors JSON,
    sizes JSON,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP
);
```

### **Customers Table:**
```sql
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    phone VARCHAR(50),
    address JSON,
    created_at TIMESTAMP
);
```

## **🔧 Integration Steps**

### **1. Install Database Driver**
```bash
# For MongoDB
npm install mongoose

# For PostgreSQL (Supabase)
npm install pg

# For MySQL (PlanetScale)
npm install mysql2
```

### **2. Update Server Configuration**
Add database connection to `server.js`

### **3. Replace In-Memory Storage**
Update order creation to use database instead of arrays

## **💰 Cost Comparison**
- **MongoDB Atlas**: Free → $9/month
- **Supabase**: Free → $25/month  
- **PlanetScale**: Free → $29/month
