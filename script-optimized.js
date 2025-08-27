// ========================================
// PALESTINIAN HERITAGE STORE - OPTIMIZED JS
// ========================================

// Performance optimization: Use strict mode
'use strict';

// Performance optimization: Cache DOM queries
const DOM = {
    cartSidebar: null,
    cartOverlay: null,
    cartItems: null,
    cartTotal: null,
    wishlistSidebar: null,
    wishlistOverlay: null,
    wishlistItems: null,
    wishlistCount: null,
    searchBar: null,
    searchInput: null,
    notificationContainer: null,
    loadingSpinner: null
};

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization: Intersection Observer for lazy loading
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy');
                lazyLoadObserver.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

// Performance optimization: Initialize DOM cache
function initializeDOM() {
    DOM.cartSidebar = document.getElementById('cartSidebar');
    DOM.cartOverlay = document.getElementById('cartOverlay');
    DOM.cartItems = document.getElementById('cartItems');
    DOM.cartTotal = document.getElementById('cartTotal');
    DOM.wishlistSidebar = document.getElementById('wishlistSidebar');
    DOM.wishlistOverlay = document.getElementById('wishlistOverlay');
    DOM.wishlistItems = document.getElementById('wishlistItems');
    DOM.wishlistCount = document.getElementById('wishlistCount');
    DOM.searchBar = document.getElementById('searchBar');
    DOM.searchInput = document.getElementById('searchInput');
    DOM.notificationContainer = document.getElementById('notificationContainer');
    DOM.loadingSpinner = document.getElementById('loadingSpinner');
}

// Performance optimization: Error handling wrapper
function safeExecute(func, fallback = null) {
    return function(...args) {
        try {
            return func.apply(this, args);
        } catch (error) {
            console.error(`Error in ${func.name || 'anonymous function'}:`, error);
            if (fallback) {
                return fallback.apply(this, args);
            }
        }
    };
}

// Performance optimization: Memory-efficient event delegation
function addEventDelegation(container, selector, event, handler) {
    if (!container) return;
    
    container.addEventListener(event, (e) => {
        const target = e.target.closest(selector);
        if (target && container.contains(target)) {
            handler.call(target, e);
        }
    });
}

// Performance optimization: Efficient localStorage operations
const Storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    },
    
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    }
};

// Performance optimization: Efficient cart operations
let cart = Storage.get('palestinensiskArvCart', []);
let wishlist = Storage.get('palestinensiskArvWishlist', []);
let currentLanguage = Storage.get('selectedLanguage', 'da');
let currentCurrency = Storage.get('selectedCurrency', 'DKK');

// Performance optimization: Product data with caching
const products = [
    {
        id: 1,
        name: {
            da: "Palæstina Kort T-Shirt - Sort",
            en: "Palestine Map T-Shirt - Black"
        },
        description: {
            da: "Sort t-shirt med Palæstina-kort design fyldt med traditionel keffiyeh-mønster. Arabisk tekst 'فلسطين' (Palæstina) på begge sider af kortet. 100% bomuld.",
            en: "Black t-shirt with Palestine map design filled with traditional keffiyeh pattern. Arabic text 'فلسطين' (Palestine) on both sides of the map. 100% cotton."
        },
        price: 199.99,
        image: "images/palestine-map-black-tshirt.jpg",
        category: "tøj",
        colors: ["sort", "hvid"],
        sizes: ["S", "M", "L", "XL"],
        material: "bomuld",
        inStock: true,
        isNew: true,
        isTrending: true,
        onSale: false,
        rating: 4.8,
        reviewCount: 24,
        popularity: 9,
        imageAlt: {
            da: "Sort t-shirt med Palæstina-kort og keffiyeh-mønster",
            en: "Black t-shirt with Palestine map and keffiyeh pattern"
        },
        features: {
            da: [
                "100% organisk bomuld",
                "Håndtrykt design",
                "Autentisk palæstinensisk mønster",
                "Bæredygtig produktion",
                "Støtter palæstinensiske håndværkere"
            ],
            en: [
                "100% organic cotton",
                "Hand-printed design",
                "Authentic Palestinian pattern",
                "Sustainable production",
                "Supports Palestinian artisans"
            ]
        },
        material: {
            da: "100% organisk bomuld",
            en: "100% organic cotton"
        },
        care: {
            da: "Vask ved 30°C, ikke brug blegemiddel",
            en: "Wash at 30°C, do not use bleach"
        }
    },
    // Add more products here...
];

// Performance optimization: Translation cache
const translations = {
    da: {
        // Navigation
        home: 'Hjem',
        products: 'Produkter',
        contact: 'Kontakt',
        
        // Products
        addToCart: 'Tilføj til Kurv',
        addToWishlist: 'Tilføj til Ønskeliste',
        removeFromWishlist: 'Fjern fra Ønskeliste',
        categories: 'Kategorier',
        colors: 'Farver',
        price: 'Pris',
        clearFilters: 'Ryd Filtre',
        recommended: 'Anbefalet',
        priceLowToHigh: 'Pris: Lav til Høj',
        priceHighToLow: 'Pris: Høj til Lav',
        nameAZ: 'Navn: A-Z',
        newest: 'Nyeste',
        ourProducts: 'Vores Produkter',
        exploreCollection: 'Udforsk vores samling af autentiske palæstinensiske produkter',
        clothing: 'Tøj & Mode',
        accessories: 'Tilbehør',
        black: 'Sort',
        white: 'Hvid',
        beige: 'Beige',
        pink: 'Pink',
        blue: 'Blå',
        grey: 'Grå',
        productsFound: 'produkter fundet',
        page: 'Side',
        of: 'af',
        searchPlaceholder: 'Søg efter produkter...',
        
        // Cart & Wishlist
        cart: 'Indkøbskurv',
        wishlist: 'Ønskeliste',
        emptyCart: 'Din kurv er tom',
        emptyWishlist: 'Din ønskeliste er tom',
        clearWishlist: 'Ryd Ønskeliste',
        total: 'Total',
        checkout: 'Gå til Kassen',
        
        // Notifications
        addedToCart: 'Produkt tilføjet til kurv!',
        removedFromCart: 'Vare fjernet fra kurv!',
        addedToWishlist: 'Produkt tilføjet til ønskeliste!',
        removedFromWishlist: 'Produkt fjernet fra ønskeliste!',
        alreadyInWishlist: 'Produkt er allerede i ønskelisten!',
        wishlistCleared: 'Ønskeliste ryddet!',
        
        // Additional translations
        features: 'Funktioner',
        chooseColor: 'Vælg Farve',
        material: 'Materiale',
        care: 'Pleje',
        item: 'vare',
        items: 'varer',
        languageChanged: 'Sprog ændret til',
        currencyChanged: 'Valuta ændret til',
        
        // Coming soon section
        comingSoon: 'Kommer Snart',
        newProductsComingSoon: 'Nye Produkter Kommer Snart',
        workingOnBestProducts: 'Vi arbejder på at bringe dig de bedste autentiske palæstinensiske produkter',
        
        // Product categories
        traditionalEmbroidery: 'Traditionelle Broderier',
        handmadeWithLove: 'Håndlavet med kærlighed',
        authenticCraftsmanship: 'Autentisk håndværk',
        modernClothing: 'Moderne Tøj',
        culturalStyle: 'Kulturel stil',
        
        // Newsletter section
        preparingCollection: 'Vi forbereder en fantastisk samling af traditionelle palæstinensiske produkter. Tilmeld dig vores nyhedsbrev for at få besked når de nye produkter er tilgængelige.',
        subscribe: 'Tilmeld',
        
        // Page titles and headers
        contactUs: 'Kontakt Os',
        faq: 'FAQ',
        frequentlyAskedQuestions: 'Ofte Stillede Spørgsmål',
        deliveryReturns: 'Levering & Returnering',
        privacyPolicy: 'Privatlivspolitik',
        orderConfirmation: 'Ordre Bekræftet',
        
        // FAQ categories
        allQuestions: 'Alle Spørgsmål',
        shipping: 'Levering',
        returns: 'Returnering',
        payment: 'Betaling',
        support: 'Support',
        
        // FAQ questions and answers
        faqProductQuality: 'Hvad er kvaliteten af jeres produkter?',
        faqProductQualityAnswer: 'Alle vores produkter er håndlavet af erfarne palæstinensiske håndværkere med de bedste materialer. Vi garanterer høj kvalitet og autenticitet.',
        faqShippingTime: 'Hvor lang tid tager levering?',
        faqShippingTimeAnswer: 'Standard levering tager 3-5 hverdage i Danmark. Express levering er tilgængelig for hurtigere levering.',
        faqReturns: 'Kan jeg returnere produkter?',
        faqReturnsAnswer: 'Ja, du kan returnere produkter inden for 30 dage. Kontakt os før returnering.',
        faqPayment: 'Hvilke betalingsmetoder accepterer I?',
        faqPaymentAnswer: 'Vi accepterer alle større kreditkort, MobilePay og bankoverførsel.',
        faqSupport: 'Hvordan kan jeg få hjælp?',
        faqSupportAnswer: 'Du kan kontakte os via email eller gennem vores FAQ sektion. Vi svarer inden for 24 timer.',
        
        // Contact page
        contactMethods: 'Kontaktmetoder',
        emailSupport: 'Email Support',
        emailSupportDesc: 'Få svar på dine spørgsmål inden for 24 timer',
        faqSection: 'FAQ',
        faqSectionDesc: 'Find hurtige svar på ofte stillede spørgsmål',
        seeFAQ: 'Se FAQ',
        
        // Delivery and returns
        shippingOptions: 'Leveringsmuligheder',
        shippingOptionsDesc: 'Vælg den leveringsmetode der passer dig bedst',
        standardShipping: 'Standard Levering',
        expressShipping: 'Express Levering',
        popular: 'POPULÆR',
        deliveryDays: 'hverdage',
        deliveryToDoor: 'Levering til din dør',
        emailConfirmation: 'Email bekræftelse',
        smsNotification: 'SMS når pakken er på vej',
        freeOver500: 'Gratis over 500 kr',
        nextDayDelivery: 'Næste dag levering',
        trackingNumber: 'Tracking nummer',
        prioritySupport: 'Prioriteret support',
        
        // Return policy
        returnPolicy: 'Returneringspolitik',
        returnPolicyDesc: 'Nem og fair returnering',
        returnWithin30: 'Returner inden for 30 dage',
        returnWithin30Desc: 'Du kan returnere produkter i original tilstand inden for 30 dage',
        contactBeforeReturn: 'Kontakt os før returnering',
        contactBeforeReturnDesc: 'Kontakt os før du sender produkter tilbage',
        damagedProducts: 'Beskadigede produkter',
        damagedProductsDesc: 'Hvis et produkt ankommer beskadiget, tag venligst billeder og kontakt os umiddelbart',
        
        // Common phrases
        findQuickAnswers: 'Find hurtige svar på ofte stillede spørgsmål',
        chooseShippingMethod: 'Vælg den leveringsmetode der passer dig bedst',
        easyAndFair: 'Nem og fair returnering',
        originalCondition: 'original tilstand',
        takePhotos: 'tag venligst billeder',
        contactImmediately: 'kontakt os umiddelbart',
        replacementOrRefund: 'erstatning eller give dig en fuld refusion',
        backToHome: 'Tilbage til Hjem',
        shopMoreProducts: 'Shop Flere Produkter',
        orderDetails: 'Ordre Detaljer',
        orderId: 'Ordre ID',
        date: 'Dato',
        status: 'Status',
        confirmed: 'Bekræftet',
        loading: 'Indlæser...',
        thankYouForOrder: 'Tak for din ordre!',
        paymentConfirmed: 'Din betaling er bekræftet og din ordre er under behandling'
    },
    en: {
        // Navigation
        home: 'Home',
        products: 'Products',
        contact: 'Contact',
        
        // Products
        addToCart: 'Add to Cart',
        addToWishlist: 'Add to Wishlist',
        removeFromWishlist: 'Remove from Wishlist',
        categories: 'Categories',
        colors: 'Colors',
        price: 'Price',
        clearFilters: 'Clear Filters',
        recommended: 'Recommended',
        priceLowToHigh: 'Price: Low to High',
        priceHighToLow: 'Price: High to Low',
        nameAZ: 'Name: A-Z',
        newest: 'Newest',
        ourProducts: 'Our Products',
        exploreCollection: 'Explore our collection of authentic Palestinian products',
        clothing: 'Clothing & Fashion',
        accessories: 'Accessories',
        black: 'Black',
        white: 'White',
        beige: 'Beige',
        pink: 'Pink',
        blue: 'Blue',
        grey: 'Grey',
        productsFound: 'products found',
        page: 'Page',
        of: 'of',
        searchPlaceholder: 'Search for products...',
        
        // Cart & Wishlist
        cart: 'Shopping Cart',
        wishlist: 'Wishlist',
        emptyCart: 'Your cart is empty',
        emptyWishlist: 'Your wishlist is empty',
        clearWishlist: 'Clear Wishlist',
        total: 'Total',
        checkout: 'Checkout',
        
        // Notifications
        addedToCart: 'Product added to cart!',
        removedFromCart: 'Item removed from cart!',
        addedToWishlist: 'Product added to wishlist!',
        removedFromWishlist: 'Product removed from wishlist!',
        alreadyInWishlist: 'Product is already in wishlist!',
        wishlistCleared: 'Wishlist cleared!',
        
        // Additional translations
        features: 'Features',
        chooseColor: 'Choose Color',
        material: 'Material',
        care: 'Care',
        item: 'item',
        items: 'items',
        languageChanged: 'Language changed to',
        currencyChanged: 'Currency changed to',
        
        // Coming soon section
        comingSoon: 'Coming Soon',
        newProductsComingSoon: 'New Products Coming Soon',
        workingOnBestProducts: 'We are working to bring you the best authentic Palestinian products',
        
        // Product categories
        traditionalEmbroidery: 'Traditional Embroidery',
        handmadeWithLove: 'Handmade with Love',
        authenticCraftsmanship: 'Authentic Craftsmanship',
        modernClothing: 'Modern Clothing',
        culturalStyle: 'Cultural Style',
        
        // Newsletter section
        preparingCollection: 'We are preparing an amazing collection of traditional Palestinian products. Subscribe to our newsletter to be notified when new products are available.',
        subscribe: 'Subscribe',
        
        // Page titles and headers
        contactUs: 'Contact Us',
        faq: 'FAQ',
        frequentlyAskedQuestions: 'Frequently Asked Questions',
        deliveryReturns: 'Delivery & Returns',
        privacyPolicy: 'Privacy Policy',
        orderConfirmation: 'Order Confirmed',
        
        // FAQ categories
        allQuestions: 'All Questions',
        shipping: 'Shipping',
        returns: 'Returns',
        payment: 'Payment',
        support: 'Support',
        
        // FAQ questions and answers
        faqProductQuality: 'What is the quality of your products?',
        faqProductQualityAnswer: 'All our products are handcrafted by experienced Palestinian artisans with the best materials. We guarantee high quality and authenticity.',
        faqShippingTime: 'How long does shipping take?',
        faqShippingTimeAnswer: 'Standard shipping takes 3-5 business days in Denmark. Express shipping is available for faster delivery.',
        faqReturns: 'Can I return products?',
        faqReturnsAnswer: 'Yes, you can return products within 30 days. Contact us before returning.',
        faqPayment: 'What payment methods do you accept?',
        faqPaymentAnswer: 'We accept all major credit cards, MobilePay and bank transfer.',
        faqSupport: 'How can I get help?',
        faqSupportAnswer: 'You can contact us via email or through our FAQ section. We respond within 24 hours.',
        
        // Contact page
        contactMethods: 'Contact Methods',
        emailSupport: 'Email Support',
        emailSupportDesc: 'Get answers to your questions within 24 hours',
        faqSection: 'FAQ',
        faqSectionDesc: 'Find quick answers to frequently asked questions',
        seeFAQ: 'See FAQ',
        
        // Delivery and returns
        shippingOptions: 'Shipping Options',
        shippingOptionsDesc: 'Choose the shipping method that suits you best',
        standardShipping: 'Standard Shipping',
        expressShipping: 'Express Shipping',
        popular: 'POPULAR',
        deliveryDays: 'business days',
        deliveryToDoor: 'Delivery to your door',
        emailConfirmation: 'Email confirmation',
        smsNotification: 'SMS when package is on the way',
        freeOver500: 'Free over 500 kr',
        nextDayDelivery: 'Next day delivery',
        trackingNumber: 'Tracking number',
        prioritySupport: 'Priority support',
        
        // Return policy
        returnPolicy: 'Return Policy',
        returnPolicyDesc: 'Easy and fair returns',
        returnWithin30: 'Return within 30 days',
        returnWithin30Desc: 'You can return products in original condition within 30 days',
        contactBeforeReturn: 'Contact us before returning',
        contactBeforeReturnDesc: 'Contact us before sending products back',
        damagedProducts: 'Damaged products',
        damagedProductsDesc: 'If a product arrives damaged, please take photos and contact us immediately',
        
        // Common phrases
        findQuickAnswers: 'Find quick answers to frequently asked questions',
        chooseShippingMethod: 'Choose the shipping method that suits you best',
        easyAndFair: 'Easy and fair returns',
        originalCondition: 'original condition',
        takePhotos: 'please take photos',
        contactImmediately: 'contact us immediately',
        replacementOrRefund: 'replacement or give you a full refund',
        backToHome: 'Back to Home',
        shopMoreProducts: 'Shop More Products',
        orderDetails: 'Order Details',
        orderId: 'Order ID',
        date: 'Date',
        status: 'Status',
        confirmed: 'Confirmed',
        loading: 'Loading...',
        thankYouForOrder: 'Thank you for your order!',
        paymentConfirmed: 'Your payment is confirmed and your order is being processed'
    }
};

// Performance optimization: Currency symbols
const currencySymbols = {
    DKK: 'kr',
    EUR: '€',
    USD: '$'
};

// Performance optimization: Get translated product
function getTranslatedProduct(product) {
    return {
        ...product,
        name: product.name[currentLanguage] || product.name.da,
        description: product.description[currentLanguage] || product.description.da,
        imageAlt: product.imageAlt[currentLanguage] || product.imageAlt.da,
        features: product.features[currentLanguage] || product.features.da,
        material: product.material[currentLanguage] || product.material.da,
        care: product.care[currentLanguage] || product.care.da
    };
}

// Performance optimization: Enhanced cart functions
const Cart = {
    add: safeExecute((productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return false;
        
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        Storage.set('palestinensiskArvCart', cart);
        Cart.update();
        showNotification(translations[currentLanguage].addedToCart, 'success');
        return true;
    }),
    
    remove: safeExecute((productId) => {
        cart = cart.filter(item => item.id !== productId);
        Storage.set('palestinensiskArvCart', cart);
        Cart.update();
        showNotification(translations[currentLanguage].removedFromCart, 'success');
    }),
    
    updateQuantity: safeExecute((productId, quantity) => {
        const item = cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                Cart.remove(productId);
            } else {
                item.quantity = quantity;
                Storage.set('palestinensiskArvCart', cart);
                Cart.update();
            }
        }
    }),
    
    update: safeExecute(() => {
        if (!DOM.cartItems) return;
        
        DOM.cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            DOM.cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>${translations[currentLanguage].emptyCart}</p>
                </div>
            `;
            if (DOM.cartTotal) DOM.cartTotal.textContent = '0,00 kr';
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.imageAlt?.da || item.name.da}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name[currentLanguage] || item.name.da}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} kr</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="Cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="Cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            `;
            DOM.cartItems.appendChild(cartItem);
        });
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (DOM.cartTotal) DOM.cartTotal.textContent = `${total.toFixed(2)} kr`;
    }),
    
    clear: safeExecute(() => {
        cart = [];
        Storage.set('palestinensiskArvCart', cart);
        Cart.update();
        showNotification('Cart cleared!', 'success');
    })
};

// Performance optimization: Enhanced wishlist functions
const Wishlist = {
    add: safeExecute((productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return false;
        
        if (!wishlist.find(item => item.id === productId)) {
            wishlist.push(product);
            Storage.set('palestinensiskArvWishlist', wishlist);
            Wishlist.update();
            showNotification(translations[currentLanguage].addedToWishlist, 'success');
            return true;
        } else {
            showNotification(translations[currentLanguage].alreadyInWishlist, 'warning');
            return false;
        }
    }),
    
    remove: safeExecute((productId) => {
        wishlist = wishlist.filter(item => item.id !== productId);
        Storage.set('palestinensiskArvWishlist', wishlist);
        Wishlist.update();
        showNotification(translations[currentLanguage].removedFromWishlist, 'success');
    }),
    
    clear: safeExecute(() => {
        wishlist = [];
        Storage.set('palestinensiskArvWishlist', wishlist);
        Wishlist.update();
        showNotification(translations[currentLanguage].wishlistCleared, 'success');
    }),
    
    update: safeExecute(() => {
        if (!DOM.wishlistItems) return;
        
        DOM.wishlistItems.innerHTML = '';
        
        if (wishlist.length === 0) {
            DOM.wishlistItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>${translations[currentLanguage].emptyWishlist}</p>
                </div>
            `;
            return;
        }
        
        wishlist.forEach(product => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.innerHTML = `
                <img src="${product.image}" alt="${product.imageAlt?.da || product.name.da}" class="wishlist-item-image" loading="lazy">
                <div class="wishlist-item-info">
                    <div class="wishlist-item-title">${product.name[currentLanguage] || product.name.da}</div>
                    <div class="wishlist-item-price">${product.price.toFixed(2)} kr</div>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-to-cart" onclick="Cart.add(${product.id}); Wishlist.remove(${product.id})" title="${translations[currentLanguage].addToCart}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="remove" onclick="Wishlist.remove(${product.id})" title="${translations[currentLanguage].removeFromWishlist}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            DOM.wishlistItems.appendChild(wishlistItem);
        });
    }),
    
    updateCount: safeExecute(() => {
        if (DOM.wishlistCount) {
            DOM.wishlistCount.textContent = wishlist.length;
        }
    })
};

// Performance optimization: Enhanced notification system
function showNotification(message, type = 'info', duration = 3000) {
    if (!DOM.notificationContainer) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    DOM.notificationContainer.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Performance optimization: Enhanced popup functions
function toggleCart() {
    if (!DOM.cartSidebar || !DOM.cartOverlay) return;
    
    DOM.cartSidebar.classList.toggle('open');
    DOM.cartOverlay.classList.toggle('active');
    document.body.style.overflow = DOM.cartSidebar.classList.contains('open') ? 'hidden' : '';
}

function toggleWishlist() {
    if (!DOM.wishlistSidebar || !DOM.wishlistOverlay) return;
    
    DOM.wishlistSidebar.classList.toggle('open');
    DOM.wishlistOverlay.classList.toggle('open');
    document.body.style.overflow = DOM.wishlistSidebar.classList.contains('open') ? 'hidden' : '';
    Wishlist.update();
}

function toggleSearch() {
    if (!DOM.searchBar) return;
    
    DOM.searchBar.classList.toggle('open');
    if (DOM.searchBar.classList.contains('open') && DOM.searchInput) {
        DOM.searchInput.focus();
    }
}

// Performance optimization: Enhanced search with debouncing
const performSearch = debounce((query) => {
    if (!query.trim()) return;
    
    const filteredProducts = products.filter(product => {
        const translatedProduct = getTranslatedProduct(product);
        return translatedProduct.name.toLowerCase().includes(query.toLowerCase()) ||
               translatedProduct.description.toLowerCase().includes(query.toLowerCase()) ||
               translatedProduct.category.toLowerCase().includes(query.toLowerCase());
    });
    
    displayFilteredProducts(filteredProducts);
    showNotification(`${filteredProducts.length} ${translations[currentLanguage].productsFound} for "${query}"`);
}, 300);

// Performance optimization: Enhanced language functions
function changeLanguage(lang) {
    currentLanguage = lang;
    Storage.set('selectedLanguage', currentLanguage);
    
    const display = document.getElementById('currentLanguageDisplay');
    if (display) {
        display.textContent = lang === 'da' ? '🇩🇰 Dansk' : '🇺🇸 English';
    }
    
    toggleLanguageDropdown();
    updateLanguage();
    updateAllContent();
    
    // Preserve "Autentisk Kultur" text
    const autentiskElement = document.getElementById('hero-autentisk');
    const kulturElement = document.getElementById('hero-kultur');
    
    if (autentiskElement) autentiskElement.textContent = 'Autentisk';
    if (kulturElement) kulturElement.textContent = 'Kultur';
    
    showNotification(`${translations[currentLanguage].languageChanged} ${lang === 'da' ? 'Dansk' : 'English'}`, 'success');
}

function changeCurrency(curr) {
    currentCurrency = curr;
    Storage.set('selectedCurrency', currentCurrency);
    
    const display = document.getElementById('currentCurrencyDisplay');
    if (display) {
        display.textContent = curr;
    }
    
    toggleCurrencyDropdown();
    updateCurrency();
    showNotification(`${translations[currentLanguage].currencyChanged} ${curr}`, 'success');
}

// Performance optimization: Enhanced dropdown functions
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    const btn = document.querySelector('.language-selector-btn');
    
    if (!dropdown || !btn) return;
    
    // Close currency dropdown
    const currencyDropdown = document.getElementById('currencyDropdown');
    const currencyBtn = document.querySelector('.currency-selector-btn');
    if (currencyDropdown && currencyBtn) {
        currencyDropdown.classList.remove('show');
        currencyBtn.classList.remove('active');
    }
    
    dropdown.classList.toggle('show');
    btn.classList.toggle('active');
}

function toggleCurrencyDropdown() {
    const dropdown = document.getElementById('currencyDropdown');
    const btn = document.querySelector('.currency-selector-btn');
    
    if (!dropdown || !btn) return;
    
    // Close language dropdown
    const languageDropdown = document.getElementById('languageDropdown');
    const languageBtn = document.querySelector('.language-selector-btn');
    if (languageDropdown && languageBtn) {
        languageDropdown.classList.remove('show');
        languageBtn.classList.remove('active');
    }
    
    dropdown.classList.toggle('show');
    btn.classList.toggle('active');
}

// Performance optimization: Enhanced content update functions
function updateLanguage() {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = translations[currentLanguage].home;
        if (href === 'produkter.html') link.textContent = translations[currentLanguage].products;
        if (href === 'kontakt.html') link.textContent = translations[currentLanguage].contact;
    });
    
    // Update mobile menu
    document.querySelectorAll('.mobile-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = translations[currentLanguage].home;
        if (href === 'produkter.html') link.textContent = translations[currentLanguage].products;
        if (href === 'kontakt.html') link.textContent = translations[currentLanguage].contact;
    });
    
    // Update cart and wishlist headers
    document.querySelectorAll('.cart-header h3').forEach(header => {
        header.textContent = translations[currentLanguage].cart;
    });
    
    document.querySelectorAll('.wishlist-header h3').forEach(header => {
        header.textContent = translations[currentLanguage].wishlist;
    });
}

function updateAllContent() {
    updateLanguage();
    updateAllTextContent();
    updateAllButtons();
    updateAllForms();
    updateAllLinks();
    updateAllSpans();
    Cart.update();
    Wishlist.update();
    Wishlist.updateCount();
}

// Performance optimization: Enhanced event listeners
function setupEventListeners() {
    // Click outside to close popups
    document.addEventListener('click', (e) => {
        // Cart sidebar
        if (e.target === DOM.cartOverlay) {
            toggleCart();
        }
        
        // Wishlist sidebar
        if (e.target === DOM.wishlistOverlay) {
            toggleWishlist();
        }
        
        // Search bar
        if (DOM.searchBar && DOM.searchBar.classList.contains('open') && 
            !DOM.searchBar.contains(e.target) && 
            !e.target.closest('.search-btn')) {
            DOM.searchBar.classList.remove('open');
        }
        
        // Language dropdown
        const languageDropdown = document.getElementById('languageDropdown');
        const languageBtn = document.querySelector('.language-selector-btn');
        if (languageDropdown && languageDropdown.classList.contains('show') && 
            !languageDropdown.contains(e.target) && 
            !languageBtn.contains(e.target)) {
            languageDropdown.classList.remove('show');
            languageBtn.classList.remove('active');
        }
        
        // Currency dropdown
        const currencyDropdown = document.getElementById('currencyDropdown');
        const currencyBtn = document.querySelector('.currency-selector-btn');
        if (currencyDropdown && currencyDropdown.classList.contains('show') && 
            !currencyDropdown.contains(e.target) && 
            !currencyBtn.contains(e.target)) {
            currencyDropdown.classList.remove('show');
            currencyBtn.classList.remove('active');
        }
        
        // Product modal
        const productModal = document.getElementById('productModal');
        const productModalOverlay = document.getElementById('productModalOverlay');
        if (productModal && productModalOverlay && 
            productModal.style.display !== 'none' && 
            e.target === productModalOverlay) {
            closeProductModal();
        }
        
        // Quick view modal
        const quickViewModal = document.getElementById('quickViewModal');
        if (quickViewModal && quickViewModal.style.display === 'flex' && 
            !quickViewModal.contains(e.target)) {
            closeQuickView();
        }
        
        // Mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenu && mobileMenu.classList.contains('open') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close all popups
            if (DOM.cartSidebar && DOM.cartSidebar.classList.contains('open')) {
                toggleCart();
            }
            if (DOM.wishlistSidebar && DOM.wishlistSidebar.classList.contains('open')) {
                toggleWishlist();
            }
            
            const productModal = document.getElementById('productModal');
            if (productModal && productModal.style.display !== 'none') {
                closeProductModal();
            }
            
            const quickViewModal = document.getElementById('quickViewModal');
            if (quickViewModal && quickViewModal.style.display === 'flex') {
                closeQuickView();
            }
            
            if (DOM.searchBar && DOM.searchBar.classList.contains('open')) {
                DOM.searchBar.classList.remove('open');
            }
            
            const languageDropdown = document.getElementById('languageDropdown');
            const languageBtn = document.querySelector('.language-selector-btn');
            if (languageDropdown && languageDropdown.classList.contains('show')) {
                languageDropdown.classList.remove('show');
                languageBtn.classList.remove('active');
            }
            
            const currencyDropdown = document.getElementById('currencyDropdown');
            const currencyBtn = document.querySelector('.currency-selector-btn');
            if (currencyDropdown && currencyDropdown.classList.contains('show')) {
                currencyDropdown.classList.remove('show');
                currencyBtn.classList.remove('active');
            }
            
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
            }
        }
    });
    
    // Search input
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
        
        DOM.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
                DOM.searchBar.classList.remove('open');
                e.target.value = '';
            }
        });
    }
    
    // Lazy load images
    document.querySelectorAll('img[data-src]').forEach(img => {
        lazyLoadObserver.observe(img);
    });
}

// Performance optimization: Initialize everything
function initialize() {
    initializeDOM();
    setupEventListeners();
    
    // Initialize cart and wishlist
    Cart.update();
    Wishlist.update();
    Wishlist.updateCount();
    
    // Initialize language and currency displays
    const languageDisplay = document.getElementById('currentLanguageDisplay');
    if (languageDisplay) {
        languageDisplay.textContent = currentLanguage === 'da' ? '🇩🇰 Dansk' : '🇺🇸 English';
    }
    
    const currencyDisplay = document.getElementById('currentCurrencyDisplay');
    if (currencyDisplay) {
        currencyDisplay.textContent = currentCurrency;
    }
    
    // Update all content
    updateAllContent();
    
    // Hide loading spinner
    if (DOM.loadingSpinner) {
        DOM.loadingSpinner.classList.remove('show');
    }
    
    console.log('🚀 Palestinian Heritage Store initialized successfully!');
}

// Performance optimization: Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// Performance optimization: Expose functions globally
window.Cart = Cart;
window.Wishlist = Wishlist;
window.toggleCart = toggleCart;
window.toggleWishlist = toggleWishlist;
window.toggleSearch = toggleSearch;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.toggleCurrencyDropdown = toggleCurrencyDropdown;
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;
window.showNotification = showNotification;
window.performSearch = performSearch;
window.getTranslatedProduct = getTranslatedProduct;
