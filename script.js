// Product Data - Palæstinensisk Arv Produkter
const products = [
    {
        id: 2,
        name: {
            da: "Palæstina Kort T-Shirt - Hvid",
            en: "Palestine Map T-Shirt - White"
        },
        description: {
            da: "Hvid t-shirt med Palæstina-kort design fyldt med traditionel keffiyeh-mønster. Arabisk tekst 'فلسطين' (Palæstina) på begge sider af kortet. 100% bomuld.",
            en: "White t-shirt with Palestine map design filled with traditional keffiyeh pattern. Arabic text 'فلسطين' (Palestine) on both sides of the map. 100% cotton."
        },
        price: 199.99,
        image: "images/palestine-map-white-tshirt.jpg",
        category: "tøj",
        colors: ["sort", "hvid"],
        sizes: ["S", "M", "L", "XL"],
        material: "bomuld",
        inStock: true,
        isNew: false,
        isTrending: true,
        onSale: false,
        rating: 4.7,
        reviewCount: 18,
        popularity: 8,
        imageAlt: {
            da: "Hvid t-shirt med Palæstina-kort og keffiyeh-mønster",
            en: "White t-shirt with Palestine map and keffiyeh pattern"
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
    {
        id: 3,
        name: {
            da: "FREE PALESTINE T-Shirt - Beige",
            en: "FREE PALESTINE T-Shirt - Beige"
        },
        description: {
            da: "Beige t-shirt med 'FREE PALESTINE' tekst og vajende palæstinensisk flag. Design inkluderer 'It is the will of all of us to maintain world peace' og 'LOVE AND PEACE'. Hurtigtørrende materiale.",
            en: "Beige t-shirt with 'FREE PALESTINE' text and waving Palestinian flag. Design includes 'It is the will of all of us to maintain world peace' and 'LOVE AND PEACE'. Quick-drying material."
        },
        price: 149.99,
        image: "images/free-palestine-beige-tshirt.jpg",
        category: "tøj",
        colors: ["beige", "sort", "hvid"],
        sizes: ["S", "M", "L", "XL"],
        material: "bomuld",
        inStock: true,
        isNew: false,
        isTrending: false,
        onSale: true,
        rating: 4.6,
        reviewCount: 15,
        popularity: 7,
        imageAlt: "Beige t-shirt med FREE PALESTINE design og flag",
        features: [
            "Hurtigtørrende materiale",
            "Eco-friendly tryk",
            "Komfortabel pasform",
            "Bæredygtig produktion",
            "Støtter fred og retfærdighed"
        ],
        material: "Hurtigtørrende polyester/bomuld blanding",
        care: "Vask ved 30°C, ikke stryg"
    },
    {
        id: 4,
        name: "FREE PALESTINE T-Shirt - Sort",
        description: "Sort t-shirt med 'FREE PALESTINE' tekst og vajende palæstinensisk flag. Design inkluderer 'It is the will of all of us to maintain world peace' og 'LOVE AND PEACE'. Hurtigtørrende materiale.",
        price: 149.99,
        image: "images/free-palestine-black-tshirt.jpg",
        category: "tøj",
        colors: ["beige", "sort", "hvid"],
        imageAlt: "Sort t-shirt med FREE PALESTINE design og flag",
        features: [
            "Hurtigtørrende materiale",
            "Eco-friendly tryk",
            "Komfortabel pasform",
            "Bæredygtig produktion",
            "Støtter fred og retfærdighed"
        ],
        material: "Hurtigtørrende polyester/bomuld blanding",
        care: "Vask ved 30°C, ikke stryg"
    },
    {
        id: 5,
        name: "FREE PALESTINE T-Shirt - Hvid",
        description: "Hvid t-shirt med 'FREE PALESTINE' tekst og vajende palæstinensisk flag. Design inkluderer 'It is the will of all of us to maintain world peace' og 'LOVE AND PEACE'. Hurtigtørrende materiale.",
        price: 149.99,
        image: "images/free-palestine-white-tshirt.jpg",
        category: "tøj",
        colors: ["beige", "sort", "hvid"],
        imageAlt: "Hvid t-shirt med FREE PALESTINE design og flag",
        features: [
            "Hurtigtørrende materiale",
            "Eco-friendly tryk",
            "Komfortabel pasform",
            "Bæredygtig produktion",
            "Støtter fred og retfærdighed"
        ],
        material: "Hurtigtørrende polyester/bomuld blanding",
        care: "Vask ved 30°C, ikke stryg"
    },
    {
        id: 6,
        name: "Palæstina Vertikale Striber T-Shirt - Hvid",
        description: "Hvid t-shirt med røde og grønne vertikale striber og arabisk tekst 'فلسطين' (Palæstina). Inkluderer palæstinensisk flag emblem og traditionelle symboler. 100% bomuld.",
        price: 179.99,
        image: "images/palestine-stripes-white-tshirt.jpg",
        category: "tøj",
        colors: ["hvid", "sort", "pink", "blå"],
        imageAlt: "Hvid t-shirt med vertikale striber og arabisk tekst",
        features: [
            "100% bomuld",
            "Vertikale striber design",
            "Arabisk tekst",
            "Palæstinensisk flag emblem",
            "Komfortabel pasform"
        ],
        material: "100% bomuld",
        care: "Vask ved 30°C, stryg ved lav temperatur"
    },
    {
        id: 7,
        name: "Palæstina Vertikale Striber T-Shirt - Sort",
        description: "Sort t-shirt med røde og grønne vertikale striber og arabisk tekst 'فلسطين' (Palæstina). Inkluderer palæstinensisk flag emblem og traditionelle symboler. 100% bomuld.",
        price: 179.99,
        image: "images/palestine-stripes-black-tshirt.jpg",
        category: "tøj",
        colors: ["hvid", "sort", "pink", "blå"],
        imageAlt: "Sort t-shirt med vertikale striber og arabisk tekst",
        features: [
            "100% bomuld",
            "Vertikale striber design",
            "Arabisk tekst",
            "Palæstinensisk flag emblem",
            "Komfortabel pasform"
        ],
        material: "100% bomuld",
        care: "Vask ved 30°C, stryg ved lav temperatur"
    },
    {
        id: 8,
        name: "Palæstina Vertikale Striber T-Shirt - Pink",
        description: "Pink t-shirt med røde og grønne vertikale striber og arabisk tekst 'فلسطين' (Palæstina). Inkluderer palæstinensisk flag emblem og traditionelle symboler. 100% bomuld.",
        price: 179.99,
        image: "images/palestine-stripes-pink-tshirt.jpg",
        category: "tøj",
        colors: ["hvid", "sort", "pink", "blå"],
        imageAlt: "Pink t-shirt med vertikale striber og arabisk tekst",
        features: [
            "100% bomuld",
            "Vertikale striber design",
            "Arabisk tekst",
            "Palæstinensisk flag emblem",
            "Komfortabel pasform"
        ],
        material: "100% bomuld",
        care: "Vask ved 30°C, stryg ved lav temperatur"
    },
    {
        id: 9,
        name: "Palæstina Vertikale Striber T-Shirt - Blå",
        description: "Mørkeblå t-shirt med røde og grønne vertikale striber og 'PALESTINE' tekst i hvid. Inkluderer palæstinensisk flag emblem og traditionelle symboler. 100% bomuld.",
        price: 179.99,
        image: "images/palestine-stripes-blue-tshirt.jpg",
        category: "tøj",
        colors: ["hvid", "sort", "pink", "blå"],
        imageAlt: "Blå t-shirt med vertikale striber og PALESTINE tekst",
        features: [
            "100% bomuld",
            "Vertikale striber design",
            "Engelsk tekst",
            "Palæstinensisk flag emblem",
            "Komfortabel pasform"
        ],
        material: "100% bomuld",
        care: "Vask ved 30°C, stryg ved lav temperatur"
    },
    {
        id: 10,
        name: "Palæstina Mønster T-Shirt - Grå",
        description: "Mørkegrå t-shirt med floral mønster og pink arabisk tekst 'فلسطين' (Palæstina). Inkluderer 'FC PALESTINA' emblem og traditionelle symboler. 100% bomuld.",
        price: 189.99,
        image: "images/palestine-pattern-grey-tshirt.jpg",
        category: "tøj",
        colors: ["grå", "pink"],
        imageAlt: "Grå t-shirt med floral mønster og FC PALESTINA emblem",
        features: [
            "100% bomuld",
            "Floral mønster design",
            "FC PALESTINA emblem",
            "Arabisk tekst",
            "Unik håndtrykt design"
        ],
        material: "100% bomuld",
        care: "Vask ved 30°C, stryg ved lav temperatur"
    },
    {
        id: 11,
        name: "Palæstina Mønster T-Shirt - Pink",
        description: "Pink t-shirt med floral mønster og hvid arabisk tekst 'فلسطين' (Palæstina). Inkluderer 'FC PALESTINA' emblem og traditionelle symboler. 100% bomuld.",
        price: 189.99,
        image: "images/palestine-pattern-pink-tshirt.jpg",
        category: "tøj",
        colors: ["grå", "pink"],
        imageAlt: "Pink t-shirt med floral mønster og FC PALESTINA emblem",
        features: [
            "100% bomuld",
            "Floral mønster design",
            "FC PALESTINA emblem",
            "Arabisk tekst",
            "Unik håndtrykt design"
        ],
        material: "100% bomuld",
        care: "Vask ved 30°C, stryg ved lav temperatur"
    },
    {
        id: 12,
        name: "From River to Sea Badge",
        description: "Rund badge med Palæstina-kort design og tekst 'FROM THE RIVER TO THE SEA PALESTINE WILL BE FREE'. Håndlavet med autentiske palæstinensiske farver og symboler.",
        price: 29.99,
        image: "images/from-river-to-sea-badge.jpg",
        category: "tilbehør",
        imageAlt: "Rund badge med Palæstina-kort og From River to Sea tekst",
        features: [
            "Håndlavet design",
            "Autentiske palæstinensiske farver",
            "Høj kvalitet metal",
            "Sikker nål",
            "Symbolsk budskab"
        ],
        material: "Metal med emalje",
        care: "Tør af med blød klud"
    },
    {
        id: 13,
        name: "Humanity Palestine Badge",
        description: "Rund badge med palæstinensisk flag design og tekst 'ALL UNITED FOR FREE HUMANITY PALESTINE'. Håndlavet med autentiske palæstinensiske farver og symboler.",
        price: 29.99,
        image: "images/humanity-palestine-badge.jpg",
        category: "tilbehør",
        imageAlt: "Rund badge med palæstinensisk flag og Humanity tekst",
        features: [
            "Håndlavet design",
            "Palæstinensisk flag design",
            "Høj kvalitet metal",
            "Sikker nål",
            "Budskab om menneskehed"
        ],
        material: "Metal med emalje",
        care: "Tør af med blød klud"
    },
    {
        id: 14,
        name: "Aaron Bushnell Badge",
        description: "Rund badge med Palæstina-kort design og tekst 'I WILL NO LONGER BE COMPLICIT IN GENOCIDE - AARON BUSHNELL'. Håndlavet med autentiske palæstinensiske farver og symboler.",
        price: 29.99,
        image: "images/aaron-bushnell-badge.jpg",
        category: "tilbehør",
        imageAlt: "Rund badge med Palæstina-kort og Aaron Bushnell tekst",
        features: [
            "Håndlavet design",
            "Palæstina-kort design",
            "Høj kvalitet metal",
            "Sikker nål",
            "Tribute til Aaron Bushnell"
        ],
        material: "Metal med emalje",
        care: "Tør af med blød klud"
    },
    {
        id: 4,
        name: {
            da: "Palæstinensisk Kaftan - Traditionel",
            en: "Palestinian Kaftan - Traditional"
        },
        description: {
            da: "Traditionel palæstinensisk kaftan med håndbroderede mønstre og autentiske farver. Perfekt til særlige lejligheder og kulturelle fejringer.",
            en: "Traditional Palestinian kaftan with hand-embroidered patterns and authentic colors. Perfect for special occasions and cultural celebrations."
        },
        price: 599.99,
        image: "images/palestine-map-black-tshirt.jpg",
        category: "tøj",
        colors: ["blå", "grøn", "rød"],
        sizes: ["S", "M", "L", "XL"],
        material: "silke",
        inStock: true,
        isNew: true,
        isTrending: true,
        onSale: false,
        rating: 4.9,
        reviewCount: 31,
        popularity: 10
    },
    {
        id: 5,
        name: {
            da: "Keffiyeh - Klassisk Sort/Hvid",
            en: "Keffiyeh - Classic Black/White"
        },
        description: {
            da: "Autentisk palæstinensisk keffiyeh i klassisk sort og hvid. Håndvævet af 100% bomuld med traditionelle mønstre.",
            en: "Authentic Palestinian keffiyeh in classic black and white. Hand-woven from 100% cotton with traditional patterns."
        },
        price: 89.99,
        image: "images/from-river-to-sea-badge.jpg",
        category: "tilbehør",
        colors: ["sort", "hvid"],
        sizes: ["One Size"],
        material: "bomuld",
        inStock: true,
        isNew: false,
        isTrending: true,
        onSale: false,
        rating: 4.7,
        reviewCount: 45,
        popularity: 9
    },
    {
        id: 6,
        name: {
            da: "Palæstinensisk Smykke - Halskæde",
            en: "Palestinian Jewelry - Necklace"
        },
        description: {
            da: "Håndlavet palæstinensisk halskæde med traditionelle mønstre og ægte sten. Perfekt som gave eller til særlige lejligheder.",
            en: "Handcrafted Palestinian necklace with traditional patterns and genuine stones. Perfect as a gift or for special occasions."
        },
        price: 299.99,
        image: "images/humanity-palestine-badge.jpg",
        category: "tilbehør",
        colors: ["guld", "sølv"],
        sizes: ["One Size"],
        material: "metal",
        inStock: true,
        isNew: false,
        isTrending: false,
        onSale: true,
        rating: 4.5,
        reviewCount: 12,
        popularity: 6
    },
    {
        id: 7,
        name: {
            da: "Oliven Træ Skål - Håndlavet",
            en: "Olive Wood Bowl - Handcrafted"
        },
        description: {
            da: "Håndlavet skål af palæstinensisk oliventræ. Hver skål er unik med naturlige mønstre og perfekt til servering eller dekoration.",
            en: "Handcrafted bowl from Palestinian olive wood. Each bowl is unique with natural patterns and perfect for serving or decoration."
        },
        price: 199.99,
        image: "images/aaron-bushnell-badge.jpg",
        category: "hjem",
        colors: ["brun"],
        sizes: ["One Size"],
        material: "træ",
        inStock: true,
        isNew: true,
        isTrending: false,
        onSale: false,
        rating: 4.8,
        reviewCount: 8,
        popularity: 7
    },
    {
        id: 8,
        name: {
            da: "Palæstinensisk Broderi - Vægtæppe",
            en: "Palestinian Embroidery - Wall Hanging"
        },
        description: {
            da: "Håndbroderet vægtæppe med traditionelle palæstinensiske mønstre. Perfekt til at tilføje farve og kultur til dit hjem.",
            en: "Hand-embroidered wall hanging with traditional Palestinian patterns. Perfect for adding color and culture to your home."
        },
        price: 399.99,
        image: "images/palestine-pattern-pink-tshirt.jpg",
        category: "hjem",
        colors: ["rød", "grøn", "blå"],
        sizes: ["One Size"],
        material: "bomuld",
        inStock: true,
        isNew: false,
        isTrending: true,
        onSale: false,
        rating: 4.6,
        reviewCount: 15,
        popularity: 8
    },
    {
        id: 15,
        name: {
            da: "Palæstina Striber T-Shirt - Pink",
            en: "Palestine Stripes T-Shirt - Pink"
        },
        description: {
            da: "Pink t-shirt med palæstinensiske striber og traditionelle mønstre. Elegant design der fejrer palæstinensk kultur.",
            en: "Pink t-shirt with Palestinian stripes and traditional patterns. Elegant design celebrating Palestinian culture."
        },
        price: 179.99,
        image: "images/palestine-stripes-pink-tshirt.jpg",
        category: "tøj",
        colors: ["pink", "hvid"],
        sizes: ["S", "M", "L", "XL"],
        material: "bomuld",
        inStock: true,
        isNew: true,
        isTrending: true,
        onSale: false,
        rating: 4.6,
        reviewCount: 12,
        popularity: 7,
        imageAlt: {
            da: "Pink t-shirt med palæstinensiske striber",
            en: "Pink t-shirt with Palestinian stripes"
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
    {
        id: 16,
        name: {
            da: "Palæstina Striber T-Shirt - Blå",
            en: "Palestine Stripes T-Shirt - Blue"
        },
        description: {
            da: "Blå t-shirt med palæstinensiske striber og moderne design. Perfekt til daglig brug.",
            en: "Blue t-shirt with Palestinian stripes and modern design. Perfect for everyday wear."
        },
        price: 179.99,
        image: "images/palestine-stripes-blue-tshirt.jpg",
        category: "tøj",
        colors: ["blå", "hvid"],
        sizes: ["S", "M", "L", "XL"],
        material: "bomuld",
        inStock: true,
        isNew: false,
        isTrending: true,
        onSale: true,
        rating: 4.5,
        reviewCount: 8,
        popularity: 6,
        imageAlt: {
            da: "Blå t-shirt med palæstinensiske striber",
            en: "Blue t-shirt with Palestinian stripes"
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
    {
        id: 1,
        name: {
            da: "Palestinian T-shirt",
            en: "Palestinian T-shirt"
        },
        description: {
            da: "Autentisk palæstinensisk t-shirt i både hvid og sort. Håndlavet med kærlighed til palæstinensk kultur og historie. 100% bomuld med høj kvalitet.",
            en: "Authentic Palestinian t-shirt available in both white and black. Handcrafted with love for Palestinian culture and history. 100% cotton with high quality."
        },
        price: 499,
        image: "images/images:palestinian-tshirt-white.jpg",
        category: "tøj",
        colors: ["hvid", "sort"],
        sizes: ["S", "M", "L", "XL"],
        material: "bomuld",
        inStock: true,
        isNew: true,
        isTrending: true,
        onSale: false,
        rating: 5.0,
        reviewCount: 0,
        popularity: 10,
        stripeProductId: "prod_SwRfCCjvqqh007",
        imageAlt: {
            da: "Palestinian T-shirt i hvid og sort",
            en: "Palestinian T-shirt in white and black"
        },
        features: {
            da: [
                "100% bomuld",
                "Håndlavet design",
                "Autentisk palæstinensisk stil",
                "Bæredygtig produktion",
                "Støtter palæstinensk kultur"
            ],
            en: [
                "100% cotton",
                "Handcrafted design",
                "Authentic Palestinian style",
                "Sustainable production",
                "Supports Palestinian culture"
            ]
        },
        material: {
            da: "100% bomuld",
            en: "100% cotton"
        },
        care: {
            da: "Vask ved 30°C, ikke brug blegemiddel",
            en: "Wash at 30°C, do not use bleach"
        },
        // Color-specific images
        colorImages: {
            hvid: "images/images:palestinian-tshirt-white.jpg",
            sort: "images/images:palestinian-tshirt-black.jpg"
        }
    }
];

// Shopping Cart
let cart = [];

// Current product detail state
let currentProductDetail = null;
let selectedColor = null;
let selectedQuantity = 1;

// Wishlist state
let wishlist = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const productModal = document.getElementById('productModal');
const productModalOverlay = document.getElementById('productModalOverlay');
const productModalBody = document.getElementById('productModalBody');
const mobileMenu = document.getElementById('mobileMenu');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistItems = document.getElementById('wishlistItems');
const wishlistCount = document.getElementById('wishlistCount');
const notificationContainer = document.getElementById('notificationContainer');
const loadingSpinner = document.getElementById('loadingSpinner');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Performance optimization: Use requestIdleCallback for non-critical operations
    const initCritical = () => {
        loadCartFromLocalStorage();
        loadWishlistFromLocalStorage();
        updateCartCount();
        updateWishlistCount();
        setupMobileMenu();

        setupProductFilters();
        
        // Initialize products page if we're on it
        if (window.location.pathname.includes('produkter.html')) {
            initializeProductsPage();
        } else {
            displayProducts();
            displayFeaturedProducts();
        }
        
        // Set selectors to current values
        const languageSelector = document.getElementById('languageSelector');
        const currencySelector = document.getElementById('currencySelector');
        
        if (languageSelector) languageSelector.value = currentLanguage;
        if (currencySelector) currencySelector.value = currentCurrency;
        
        // Initialize dropdown displays
        const languageDisplay = document.getElementById('currentLanguageDisplay');
        const currencyDisplay = document.getElementById('currentCurrencyDisplay');
        
        if (languageDisplay) {
            if (currentLanguage === 'da') {
                languageDisplay.textContent = '🇩🇰 Dansk';
            } else if (currentLanguage === 'en') {
                languageDisplay.textContent = '🇺🇸 English';
            }
        }
        
        if (currencyDisplay) {
            currencyDisplay.textContent = currentCurrency;
        }
        
        // Update displays
        updateLanguage();
        updateCurrency();
    };
    
    const initNonCritical = () => {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Contact form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Tak for din besked! Vi vender tilbage til dig snart.');
                this.reset();
            });
        }
        
        // Add intersection observer for lazy loading and animations
        setupIntersectionObserver();
        
        // Add service worker for offline functionality
        if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
            navigator.serviceWorker.register('/sw.js').catch(console.error);
        }
    };
    
    // Initialize critical functions immediately
    initCritical();
    
    // Initialize non-critical functions when browser is idle
    if ('requestIdleCallback' in window) {
        requestIdleCallback(initNonCritical);
    } else {
        setTimeout(initNonCritical, 100);
    }
});

// Mobile Menu Functions
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}





// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Tak for din tilmelding til vores nyhedsbrev!');
        event.target.reset();
    }
}

// Display Featured Products
function displayFeaturedProducts() {
    const featuredProductsGrid = document.getElementById('featuredProductsGrid');
    if (!featuredProductsGrid) return;
    
    // Get new and trending products first, then fill with other products
    const newProducts = products.filter(product => product.isNew);
    const trendingProducts = products.filter(product => product.isTrending && !product.isNew);
    const otherProducts = products.filter(product => !product.isNew && !product.isTrending);
    
    // Combine products: new first, then trending, then others
    const featuredProducts = [...newProducts, ...trendingProducts, ...otherProducts].slice(0, 6);
    
    featuredProductsGrid.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsGrid.appendChild(productCard);
    });
}

/* Removed duplicate createProductCard function - using the enhanced version below */

// Display Products
function displayProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Open Product Modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductDetail = product;
    selectedColor = null;
    selectedQuantity = 1;
    
    // Show modal
    const modal = document.getElementById('productModal');
    const modalOverlay = document.getElementById('productModalOverlay');
    
    if (modal && modalOverlay) {
        modal.style.display = 'flex';
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Update modal content
        updateProductModalContent(product);
    }
}

// Update Product Modal Content
function updateProductModalContent(product) {
    const modalBody = document.getElementById('productModalBody');
    if (!modalBody) return;
    
    const translatedProduct = getTranslatedProduct(product);
    
    // Create color options HTML
    let colorOptions = '';
    if (product.colors && product.colors.length > 1) {
        colorOptions = `
            <div class="color-selection">
                <h4>${translations[currentLanguage].selectColor || 'Vælg farve'}:</h4>
                <div class="color-options">
                    ${product.colors.map(color => `
                        <label class="color-option">
                            <input type="radio" name="color" value="${color}" ${selectedColor === color ? 'checked' : ''} onchange="selectColor('${color}')">
                            <span class="color-dot" style="background-color: ${getColorCode(color)}"></span>
                            <span>${translations[currentLanguage][color] || color}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${translatedProduct.name}</h2>
            <button class="close-btn" onclick="closeProductModal()">×</button>
        </div>
        <div class="modal-content">
            <div class="product-image">
                <img src="${product.image}" alt="${translatedProduct.imageAlt}" id="modalProductImage">
            </div>
            <div class="product-details">
                <p class="product-description">${translatedProduct.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                ${colorOptions}
                <div class="quantity-selector">
                    <label>${translations[currentLanguage].quantity || 'Antal'}:</label>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(-1)">-</button>
                        <span id="modalQuantity">1</span>
                        <button onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                <button class="proceed-to-checkout-btn" onclick="proceedToCheckout()" disabled>
                    ${translations[currentLanguage].proceedToCheckout || 'Gå til checkout'}
                </button>
            </div>
        </div>
    `;
    
    // Enable/disable checkout button based on color selection
    updateCheckoutButton();
}

// Close Product Detail Modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    const modalOverlay = document.getElementById('productModalOverlay');
    
    if (modal && modalOverlay) {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    currentProductDetail = null;
    selectedColor = null;
    selectedQuantity = 1;
}

// Select Color in Product Detail
function selectColor(color) {
    selectedColor = color;
    
    // Update selected color in UI
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.closest('.color-option').classList.add('selected');
    
    // Update product image if color-specific images are available
    if (currentProductDetail && currentProductDetail.colorImages && currentProductDetail.colorImages[color]) {
        const productImage = document.getElementById('modalProductImage');
        if (productImage) {
            productImage.src = currentProductDetail.colorImages[color];
            productImage.alt = `${currentProductDetail.name[currentLanguage]} - ${translations[currentLanguage][color] || color}`;
        }
    }
    
    // Update checkout button
    updateCheckoutButton();
}

// Update checkout button state
function updateCheckoutButton() {
    const checkoutBtn = document.querySelector('.proceed-to-checkout-btn');
    if (checkoutBtn) {
        if (selectedColor) {
            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove('disabled');
        } else {
            checkoutBtn.disabled = true;
            checkoutBtn.classList.add('disabled');
        }
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (!currentProductDetail || !selectedColor) {
        alert('Vælg venligst en farve først');
        return;
    }
    
    // Store checkout data in localStorage
    const checkoutData = {
        productId: currentProductDetail.id,
        productName: currentProductDetail.name[currentLanguage] || currentProductDetail.name,
        price: currentProductDetail.price,
        selectedColor: selectedColor,
        quantity: selectedQuantity,
        image: currentProductDetail.colorImages && currentProductDetail.colorImages[selectedColor] 
            ? currentProductDetail.colorImages[selectedColor] 
            : currentProductDetail.image
    };
    
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    
    // Close modal and navigate to checkout
    closeProductModal();
    window.location.href = 'checkout.html';
}

// Change Quantity in Product Detail
function changeQuantity(change) {
    selectedQuantity = Math.max(1, selectedQuantity + change);
    document.getElementById('detailQuantity').textContent = selectedQuantity;
    
    if (currentProductDetail) {
        const totalPrice = formatPrice(currentProductDetail.price * selectedQuantity);
        document.querySelector('.add-to-cart-detail').textContent = `${translations[currentLanguage].addToCart} - ${totalPrice}`;
    }
}

// Add to Cart from Product Detail
function addToCartFromDetail() {
    if (!currentProductDetail) return;
    
    // Use selected color or default to first color
    const colorToAdd = selectedColor || (currentProductDetail.colors && currentProductDetail.colors[0]);
    
    // Create a unique cart item ID that includes color if applicable
    const cartItemId = colorToAdd ? `${currentProductDetail.id}-${colorToAdd}` : currentProductDetail.id;
    
    // Check if item with same ID and color already exists
    const existingItem = cart.find(item => {
        const itemId = item.selectedColor ? `${item.id}-${item.selectedColor}` : item.id;
        return itemId === cartItemId;
    });
    
    if (existingItem) {
        existingItem.quantity += selectedQuantity;
    } else {
        cart.push({
            ...currentProductDetail,
            quantity: selectedQuantity,
            selectedColor: colorToAdd
        });
    }
    
    updateCart();
    closeProductModal();
    showNotification(`${selectedQuantity} ${selectedQuantity === 1 ? translations[currentLanguage].item : translations[currentLanguage].items} ${translations[currentLanguage].addedToCart}`, 'success');
}

// Get emoji for product category
function getProductEmoji(category) {
    const emojiMap = {
        'tøj': '👕',
        'clothing': '👕',
        'tilbehør': '🖼️',
        'accessories': '🖼️',
        'hjem': '🏠',
        'home': '🏠'
    };
    return emojiMap[category] || '🛍️';
}

// Get color code for color dots
function getColorCode(color) {
    const colorMap = {
        'sort': '#000000',
        'hvid': '#ffffff',
        'beige': '#f5f5dc',
        'pink': '#ffc0cb',
        'blå': '#000080',
        'grå': '#808080'
    };
    return colorMap[color] || '#cccccc';
}

// Add to Cart
function addToCart(productId, selectedColor = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // If product has multiple colors and no color is selected, use the first color
    if (product.colors && product.colors.length > 1 && !selectedColor) {
        selectedColor = product.colors[0];
    }
    
    // Create a unique cart item ID that includes color if applicable
    const cartItemId = selectedColor ? `${productId}-${selectedColor}` : productId;
    
    // Check if item with same ID and color already exists
    const existingItem = cart.find(item => {
        const itemId = item.selectedColor ? `${item.id}-${item.selectedColor}` : item.id;
        return itemId === cartItemId;
    });
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedColor: selectedColor
        });
    }
    
    updateCart();
    showNotification(translations[currentLanguage].addedToCart, 'success');
}

// Remove from Cart
function removeFromCart(productId, selectedColor = null) {
    cart = cart.filter(item => {
        if (selectedColor) {
            return !(item.id === productId && item.selectedColor === selectedColor);
        }
        return item.id !== productId;
    });
    updateCart();
    showNotification(translations[currentLanguage].removedFromCart);
}

// Update Quantity
function updateQuantity(productId, change, selectedColor = null) {
    const item = cart.find(item => {
        if (selectedColor) {
            return item.id === productId && item.selectedColor === selectedColor;
        }
        return item.id === productId;
    });
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, selectedColor);
        } else {
            updateCart();
        }
    }
}

// Update Cart Display
function updateCart() {
    updateCartCount();
    updateCartItems();
    updateCartTotal();
    saveCartToLocalStorage();
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update Cart Items Display
function updateCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Din kurv er tom</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        // Use color-specific image if available
        const itemImage = item.selectedColor && item.colorImages && item.colorImages[item.selectedColor] 
            ? item.colorImages[item.selectedColor] 
            : item.image;
            
        // Get translated name
        const translatedName = item.name[currentLanguage] || item.name;
        
        // Add color to title if selected
        const itemTitle = item.selectedColor 
            ? `${translatedName} (${translations[currentLanguage][item.selectedColor] || item.selectedColor})`
            : translatedName;
            
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${itemImage}" alt="${item.imageAlt}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="cart-item-placeholder" style="display: none;">
                    <span style="font-size: 1.5rem;">${getProductEmoji(item.category)}</span>
                </div>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${itemTitle}</div>
                <div class="cart-item-price">${item.price.toFixed(2)} kr</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1, '${item.selectedColor || ''}')">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1, '${item.selectedColor || ''}')">+</button>
                </div>
            </div>
            <button class="quantity-btn" onclick="removeFromCart(${item.id}, '${item.selectedColor || ''}')" style="background: #ff6b6b; color: white;">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total.toFixed(2)} kr`;
}

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        showNotification('Din kurv er tom!', 'error');
        return;
    }
    
    // Redirect to checkout page
    window.location.href = 'checkout.html';
}



// Local Storage Functions
function saveCartToLocalStorage() {
    localStorage.setItem('palestinensiskArvCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('palestinensiskArvCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Load cart from localStorage on page load
loadCartFromLocalStorage();

// Enhanced click-outside-to-close functionality for all pop-ups
document.addEventListener('click', function(e) {
    // Cart sidebar - close when clicking overlay
    if (e.target === cartOverlay) {
        toggleCart();
    }
    
    // Wishlist sidebar - close when clicking overlay
    if (e.target === wishlistOverlay) {
        toggleWishlist();
    }
    


    
    // Language dropdown - close when clicking outside
    const languageDropdown = document.getElementById('languageDropdown');
    const languageBtn = document.querySelector('.language-selector-btn');
    if (languageDropdown && languageDropdown.classList.contains('show') && 
        !languageDropdown.contains(e.target) && 
        !languageBtn.contains(e.target)) {
        languageDropdown.classList.remove('show');
        languageBtn.classList.remove('active');
    }
    
    // Currency dropdown - close when clicking outside
    const currencyDropdown = document.getElementById('currencyDropdown');
    const currencyBtn = document.querySelector('.currency-selector-btn');
    if (currencyDropdown && currencyDropdown.classList.contains('show') && 
        !currencyDropdown.contains(e.target) && 
        !currencyBtn.contains(e.target)) {
        currencyDropdown.classList.remove('show');
        currencyBtn.classList.remove('active');
    }
    
    // Product modal - close when clicking overlay
    const productModal = document.getElementById('productModal');
    const productModalOverlay = document.getElementById('productModalOverlay');
    if (productModal && productModalOverlay && 
        productModal.style.display !== 'none' && 
        e.target === productModalOverlay) {
        closeProductModal();
    }
    
    // Quick view modal - close when clicking outside
    const quickViewModal = document.getElementById('quickViewModal');
    if (quickViewModal && quickViewModal.style.display === 'flex' && 
        !quickViewModal.contains(e.target)) {
        closeQuickView();
    }
    
    // Mobile menu - close when clicking outside
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenu && mobileMenu.classList.contains('open') && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// Enhanced keyboard navigation for all pop-ups
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close cart sidebar
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            toggleCart();
        }
        
        // Close wishlist sidebar
        if (wishlistSidebar && wishlistSidebar.classList.contains('open')) {
            toggleWishlist();
        }
        
        // Close product modal
        const productModal = document.getElementById('productModal');
        if (productModal && productModal.style.display !== 'none') {
            closeProductModal();
        }
        
        // Close quick view modal
        const quickViewModal = document.getElementById('quickViewModal');
        if (quickViewModal && quickViewModal.style.display === 'flex') {
            closeQuickView();
        }
        


        
        // Close language dropdown
        const languageDropdown = document.getElementById('languageDropdown');
        const languageBtn = document.querySelector('.language-selector-btn');
        if (languageDropdown && languageDropdown.classList.contains('show')) {
            languageDropdown.classList.remove('show');
            languageBtn.classList.remove('active');
        }
        
        // Close currency dropdown
        const currencyDropdown = document.getElementById('currencyDropdown');
        const currencyBtn = document.querySelector('.currency-selector-btn');
        if (currencyDropdown && currencyDropdown.classList.contains('show')) {
            currencyDropdown.classList.remove('show');
            currencyBtn.classList.remove('active');
        }
        
        // Close mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
        }
    }
});

// Enhanced intersection observer for performance
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Lazy load images
                const img = entry.target.querySelector('img[data-src]');
                if (img) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            }
        });
    }, observerOptions);
    
    // Observe product cards and other elements
    document.querySelectorAll('.product-card, .category-card, .value-card, .timeline-item, .tradition-card, .symbol-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Add some interactive animations
function addScrollAnimations() {
    setupIntersectionObserver();
}

// Initialize scroll animations with performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => setTimeout(addScrollAnimations, 500));
} else {
    setTimeout(addScrollAnimations, 500);
}

// Add loading animation for images (placeholder)
function addImageLoadingAnimation() {
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize image animations
addImageLoadingAnimation();

// Language and Currency System
let currentLanguage = localStorage.getItem('selectedLanguage') || 'da';
let currentCurrency = localStorage.getItem('selectedCurrency') || 'DKK';

// Helper function to get translated product data
function getTranslatedProduct(product) {
    return {
        ...product,
        name: typeof product.name === 'object' ? product.name[currentLanguage] : product.name,
        description: typeof product.description === 'object' ? product.description[currentLanguage] : product.description,
        category: typeof product.category === 'object' ? product.category[currentLanguage] : product.category,
        imageAlt: typeof product.imageAlt === 'object' ? product.imageAlt[currentLanguage] : product.imageAlt,
        features: typeof product.features === 'object' ? product.features[currentLanguage] : product.features,
        material: typeof product.material === 'object' ? product.material[currentLanguage] : product.material,
        care: typeof product.care === 'object' ? product.care[currentLanguage] : product.care
    };
}

const exchangeRates = {
    DKK: 1,
    EUR: 0.134,
    USD: 0.146
};

const currencySymbols = {
    DKK: 'kr',
    EUR: '€',
    USD: '$'
};

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
        products: 'Produkter',
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
        productsFound: 'produkter fundet for',
        
        // Colors
        black: 'Sort',
        white: 'Hvid',
        beige: 'Beige',
        pink: 'Pink',
        blue: 'Blå',
        grey: 'Grå',
        
        // Additional translations
        features: 'Funktioner',
        chooseColor: 'Vælg Farve',
        material: 'Materiale',
        care: 'Pleje',
        item: 'vare',
        items: 'varer',
        languageChanged: 'Sprog ændret til',
        currencyChanged: 'Valuta ændret til',
        
        // Home page translations
        heroBadge: '🇵🇸 Autentisk Palæstinensisk Arv',
        heroTitle1: 'Fejr',
        heroTitle2: 'Palæstinensisk',
        heroTitle3: 'Arv',
        heroSubtitle: 'Opdag smukke traditionelle tøjer og kulturelle produkter, der fejrer palæstinensisk arv og håndværk. Hvert stykke fortæller en historie om modstandskraft, skønhed og kulturel stolthed.',
        statCustomers: 'Tilfredse Kunder',
        statProducts: 'Unikke Produkter',
        statHandmade: 'Håndlavet',
        shopNow: 'Shop Nu',

        floatingCard1Title: 'Traditionelle Tøjer',
        floatingCard1Subtitle: 'Håndtrykt & Broderet',
        floatingCard2Title: 'Håndlavede Produkter',
        floatingCard2Subtitle: 'Autentisk Kvalitet',
        floatingCard3Title: 'Kulturel Stolthed',
        floatingCard3Subtitle: 'Støt Lokale Kunstnere',
        exploreCollection: 'Udforsk vores samling',
        categoriesTitle: 'Vores Kategorier',
        categoriesSubtitle: 'Udforsk vores autentiske palæstinensiske produkter',
        clothingTitle: 'Tøj & Mode',
        clothingDesc: 'Traditionelle og moderne palæstinensiske tøjdesigns med autentiske mønstre og symboler',
        accessoriesTitle: 'Tilbehør',
        accessoriesDesc: 'Badges, smykker og andre kulturelle tilbehør der fejrer palæstinensisk arv',
        popularProducts: 'Populære Produkter',
        viewAllProducts: 'Se Alle Produkter',
        ourStory: 'Vores Historie',
        storyText1: 'Vi er dedikerede til at bevare og dele den rige kulturelle arv fra Palæstina gennem autentiske traditionelle tøjer og håndlavede produkter. Hvert stykke fortæller en historie om modstandskraft, skønhed og kulturel stolthed.',
        storyText2: 'Vores produkter er omhyggeligt udvalgt til at repræsentere de forskelligartede traditioner og kunstneriske udtryk af palæstinensisk kultur, fra traditionel broderi til moderne fortolkninger af klassiske designs.',
        readMore: 'Læs Mere',
        ourValues: 'Vores Værdier',
        supportArtisans: 'Støtte til Håndværkere',
        supportArtisansDesc: 'Vi støtter direkte palæstinensiske håndværkere og deres familier',
        sustainability: 'Bæredygtighed',
        sustainabilityDesc: 'Alle vores produkter er fremstillet med bæredygtige materialer',
        culturalPreservation: 'Kulturel Bevarelse',
        culturalPreservationDesc: 'Vi bevarer og fejrer palæstinensisk kultur og traditioner',
        quality: 'Kvalitet',
        qualityDesc: 'Hvert produkt er håndlavet med omhu og opmærksomhed på detaljer',
        newsletterTitle: 'Tilmeld dig vores nyhedsbrev',
        newsletterDesc: 'Få de seneste nyheder om nye produkter, kulturelle begivenheder og særlige tilbud',
        emailPlaceholder: 'Din email adresse',
        subscribe: 'Tilmeld',
        footerTitle: 'Palæstinensisk Arv',
        footerDesc: 'Fejrer kultur gennem autentiske produkter og støtter palæstinensiske håndværkere verden over.',
        quickLinks: 'Hurtige Links',
        categories: 'Kategorier',
        customerService: 'Kundeservice',
        contactUs: 'Kontakt Os',
        deliveryReturns: 'Levering & Returnering',
        privacyPolicy: 'Privatlivspolitik',
        paymentsAccepted: 'Betalinger accepteres:',
        allRightsReserved: 'Alle rettigheder forbeholdes.',
        loading: 'Indlæser...',
        
        // Additional translations for comprehensive language switching
        seeMore: 'Se Mere',
        buyNow: 'Køb Nu',
        search: 'Søg',
        emailPlaceholder: 'Din email adresse',
        namePlaceholder: 'Dit navn',
        messagePlaceholder: 'Din besked',
        freeShipping: 'Gratis forsendelse over 500 kr',
        authentic: '100% autentisk',
        supportArtisans: 'Støt palæstinensiske håndværkere',
        newsletterTitle: 'Tilmeld dig vores nyhedsbrev',
        newsletterText: 'Få de seneste nyheder om nye produkter, kulturelle begivenheder og særlige tilbud',
        heroTitle: 'Fejr Palæstinensisk Arv',
        
        // Page titles and headers
        contactUs: 'Kontakt Os',
        faq: 'FAQ',
        frequentlyAskedQuestions: 'Ofte Stillede Spørgsmål',
        deliveryReturns: 'Levering & Returnering',
        privacyPolicy: 'Privatlivspolitik',
        orderConfirmation: 'Ordre Bekræftet',
        
        // FAQ categories
        allQuestions: 'Alle Spørgsmål',
        products: 'Produkter',
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
        paymentConfirmed: 'Din betaling er bekræftet og din ordre er under behandling',
        
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
        subscribe: 'Tilmeld'
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
        products: 'Products',
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
        
        // Additional translations for comprehensive language switching
        seeMore: 'See More',
        buyNow: 'Buy Now',
        search: 'Search',
        emailPlaceholder: 'Your email address',
        namePlaceholder: 'Your name',
        messagePlaceholder: 'Your message',
        freeShipping: 'Free shipping over 500 kr',
        authentic: '100% authentic',
        supportArtisans: 'Support Palestinian artisans',
        newsletterTitle: 'Subscribe to our newsletter',
        newsletterText: 'Get the latest news about new products, cultural events and special offers',
        heroTitle: 'Celebrate Palestinian Heritage',
        
        // Page titles and headers
        contactUs: 'Contact Us',
        faq: 'FAQ',
        frequentlyAskedQuestions: 'Frequently Asked Questions',
        deliveryReturns: 'Delivery & Returns',
        privacyPolicy: 'Privacy Policy',
        orderConfirmation: 'Order Confirmed',
        
        // FAQ categories
        allQuestions: 'All Questions',
        products: 'Products',
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
        paymentConfirmed: 'Your payment is confirmed and your order is being processed',
        
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
        productsFound: 'products found for',
        
        // Colors
        black: 'Black',
        white: 'White',
        beige: 'Beige',
        pink: 'Pink',
        blue: 'Blue',
        grey: 'Grey',
        
        // Additional translations
        features: 'Features',
        chooseColor: 'Choose Color',
        material: 'Material',
        care: 'Care',
        item: 'item',
        items: 'items',
        languageChanged: 'Language changed to',
        currencyChanged: 'Currency changed to',
        
        // Home page translations
        heroBadge: '🇵🇸 Authentic Palestinian Heritage',
        heroTitle1: 'Celebrate',
        heroTitle2: 'Palestinian',
        heroTitle3: 'Heritage',
        heroSubtitle: 'Discover beautiful traditional clothing and cultural products that celebrate Palestinian heritage and craftsmanship. Each piece tells a story of resilience, beauty, and cultural pride.',
        statCustomers: 'Happy Customers',
        statProducts: 'Unique Products',
        statHandmade: 'Handmade',
        shopNow: 'Shop Now',

        floatingCard1Title: 'Traditional Clothing',
        floatingCard1Subtitle: 'Hand-Printed & Embroidered',
        floatingCard2Title: 'Handcrafted Products',
        floatingCard2Subtitle: 'Authentic Quality',
        floatingCard3Title: 'Cultural Pride',
        floatingCard3Subtitle: 'Support Local Artisans',
        exploreCollection: 'Explore our collection',
        categoriesTitle: 'Our Categories',
        categoriesSubtitle: 'Explore our authentic Palestinian products',
        clothingTitle: 'Clothing & Fashion',
        clothingDesc: 'Traditional and modern Palestinian clothing designs with authentic patterns and symbols',
        accessoriesTitle: 'Accessories',
        accessoriesDesc: 'Badges, jewelry and other cultural accessories that celebrate Palestinian heritage',
        popularProducts: 'Popular Products',
        viewAllProducts: 'View All Products',
        ourStory: 'Our Story',
        storyText1: 'We are dedicated to preserving and sharing the rich cultural heritage from Palestine through authentic traditional clothing and handcrafted products. Each piece tells a story of resilience, beauty, and cultural pride.',
        storyText2: 'Our products are carefully selected to represent the diverse traditions and artistic expressions of Palestinian culture, from traditional embroidery to modern interpretations of classic designs.',
        readMore: 'Read More',
        ourValues: 'Our Values',
        supportArtisans: 'Support for Artisans',
        supportArtisansDesc: 'We directly support Palestinian artisans and their families',
        sustainability: 'Sustainability',
        sustainabilityDesc: 'All our products are made with sustainable materials',
        culturalPreservation: 'Cultural Preservation',
        culturalPreservationDesc: 'We preserve and celebrate Palestinian culture and traditions',
        quality: 'Quality',
        qualityDesc: 'Each product is handcrafted with care and attention to detail',
        newsletterTitle: 'Subscribe to our newsletter',
        newsletterDesc: 'Get the latest news about new products, cultural events and special offers',
        emailPlaceholder: 'Your email address',
        subscribe: 'Subscribe',
        footerTitle: 'Palestinian Heritage',
        footerDesc: 'Celebrating culture through authentic products and supporting Palestinian artisans worldwide.',
        quickLinks: 'Quick Links',
        categories: 'Categories',
        customerService: 'Customer Service',
        contactUs: 'Contact Us',
        deliveryReturns: 'Delivery & Returns',
        privacyPolicy: 'Privacy Policy',
        paymentsAccepted: 'Payments accepted:',
        allRightsReserved: 'All rights reserved.',
        loading: 'Loading...'
    }
};

function changeLanguage() {
    const languageSelector = document.getElementById('languageSelector');
    currentLanguage = languageSelector.value;
    localStorage.setItem('selectedLanguage', currentLanguage);
    
    // Update language immediately without page refresh
    updateLanguage();
    updateAllContent();
    
    showNotification(`${translations[currentLanguage].languageChanged} ${currentLanguage === 'da' ? 'Dansk' : 'English'}`, 'success');
}

function changeCurrency() {
    const currencySelector = document.getElementById('currencySelector');
    currentCurrency = currencySelector.value;
    localStorage.setItem('selectedCurrency', currentCurrency);
    updateCurrency();
    showNotification(`${translations[currentLanguage].currencyChanged} ${currentCurrency}`, 'success');
}

function updateLanguage() {
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = translations[currentLanguage].home;
        if (href === 'produkter.html') link.textContent = translations[currentLanguage].products;
        if (href === 'kontakt.html') link.textContent = translations[currentLanguage].contact;
    });
    
    // Update mobile menu
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = translations[currentLanguage].home;
        if (href === 'produkter.html') link.textContent = translations[currentLanguage].products;
        if (href === 'kontakt.html') link.textContent = translations[currentLanguage].contact;
    });
    
    // Update cart and wishlist
    const cartHeaders = document.querySelectorAll('.cart-header h3');
    cartHeaders.forEach(header => {
        header.textContent = translations[currentLanguage].cart;
    });
    
    const wishlistHeaders = document.querySelectorAll('.wishlist-header h3');
    wishlistHeaders.forEach(header => {
        header.textContent = translations[currentLanguage].wishlist;
    });
    
    // Update filter sections
    const filterSections = document.querySelectorAll('.filter-section h3');
    filterSections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes('kategorier') || text.includes('categories')) {
            section.textContent = translations[currentLanguage].categories;
        } else if (text.includes('farver') || text.includes('colors')) {
            section.textContent = translations[currentLanguage].colors;
        } else if (text.includes('pris') || text.includes('price')) {
            section.textContent = translations[currentLanguage].price;
        }
    });
    
    // Update filter options
    const filterOptions = document.querySelectorAll('.filter-option span');
    filterOptions.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes('tøj & mode')) {
            option.textContent = currentLanguage === 'da' ? 'Tøj & Mode (11)' : 'Clothing & Fashion (11)';
        } else if (text.includes('tilbehør')) {
            option.textContent = currentLanguage === 'da' ? 'Tilbehør (3)' : 'Accessories (3)';
        } else if (text.includes('sort') || text.includes('black')) {
            option.textContent = translations[currentLanguage].black;
        } else if (text.includes('hvid') || text.includes('white')) {
            option.textContent = translations[currentLanguage].white;
        } else if (text.includes('beige')) {
            option.textContent = translations[currentLanguage].beige;
        } else if (text.includes('pink')) {
            option.textContent = translations[currentLanguage].pink;
        } else if (text.includes('blå') || text.includes('blue')) {
            option.textContent = translations[currentLanguage].blue;
        } else if (text.includes('grå') || text.includes('grey')) {
            option.textContent = translations[currentLanguage].grey;
        }
    });
    
    // Update clear filters button
    const clearFiltersBtn = document.querySelector('.clear-filters-btn');
    if (clearFiltersBtn) {
        clearFiltersBtn.textContent = translations[currentLanguage].clearFilters;
    }
    
    // Update products count and controls
    const productsCount = document.querySelector('.products-count');
    if (productsCount) {
        const count = productsCount.textContent.match(/\d+/);
        if (count) {
            productsCount.textContent = `${count[0]} ${translations[currentLanguage].products}`;
        }
    }
    
    // Update sort options
    const sortSelect = document.querySelector('.products-controls select');
    if (sortSelect) {
        const options = sortSelect.querySelectorAll('option');
        options.forEach(option => {
            const text = option.textContent.toLowerCase();
            if (text.includes('anbefalet') || text.includes('recommended')) {
                option.textContent = translations[currentLanguage].recommended;
            } else if (text.includes('pris: lav til høj') || text.includes('price: low to high')) {
                option.textContent = translations[currentLanguage].priceLowToHigh;
            } else if (text.includes('pris: høj til lav') || text.includes('price: high to low')) {
                option.textContent = translations[currentLanguage].priceHighToLow;
            } else if (text.includes('navn: a-z') || text.includes('name: a-z')) {
                option.textContent = translations[currentLanguage].nameAZ;
            } else if (text.includes('nyeste') || text.includes('newest')) {
                option.textContent = translations[currentLanguage].newest;
            }
        });
    }
    
    // Update page headers
    const pageHeaders = document.querySelectorAll('.page-header h1');
    pageHeaders.forEach(header => {
        if (header.textContent.includes('Vores Produkter') || header.textContent.includes('Our Products')) {
            header.textContent = translations[currentLanguage].ourProducts;
        }
    });
    
    const pageDescriptions = document.querySelectorAll('.page-header p');
    pageDescriptions.forEach(desc => {
        if (desc.textContent.includes('Udforsk vores samling')) {
            desc.textContent = translations[currentLanguage].exploreCollection;
        }
    });
    

    
    // Update pagination
    const paginationInfo = document.querySelector('.pagination-info');
    if (paginationInfo) {
        const currentPage = document.getElementById('currentPage');
        const totalPages = document.getElementById('totalPages');
        if (currentPage && totalPages) {
            paginationInfo.innerHTML = `${translations[currentLanguage].page} <span id="currentPage">${currentPage.textContent}</span> ${translations[currentLanguage].of} <span id="totalPages">${totalPages.textContent}</span>`;
        }
    }
    
    // Update home page content
    updateHomePageContent();
    
    // Update buttons and text
    updateProductCards();
    updateCartDisplay();
    updateWishlistDisplay();
}

// Comprehensive function to update ALL content on the website
function updateAllContent() {
    // Update all text content based on current language
    updateAllTextContent();
    
    // Update all buttons and interactive elements
    updateAllButtons();
    
    // Update all forms and inputs
    updateAllForms();
    
    // Update all links
    updateAllLinks();
    
    // Update all spans and other text elements
    updateAllSpans();
    
    // Update all product information
    updateAllProducts();
    
    // Update all static content
    updateAllStaticContent();
    
    // Update all dynamic content
    updateAllDynamicContent();
}

function updateAllTextContent() {
    // Update all headings
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        const text = heading.textContent.toLowerCase();
        
        // Skip the hero title that contains "Autentisk Kultur" - preserve this text
        if (heading.querySelector('#hero-autentisk') || heading.querySelector('#hero-kultur')) {
            return; // Skip this heading
        }
        
        // Hero section
        if (text.includes('fejr') && text.includes('palæstinensisk') && text.includes('arv')) {
            heading.innerHTML = translations[currentLanguage].heroTitle;
        }
        
        // Section titles
        if (text.includes('vores produkter') || text.includes('our products')) {
            heading.textContent = translations[currentLanguage].ourProducts;
        }
        if (text.includes('om os') || text.includes('about us')) {
            heading.textContent = translations[currentLanguage].about;
        }
        if (text.includes('kultur') || text.includes('culture')) {
            heading.textContent = translations[currentLanguage].culture;
        }
        if (text.includes('kontakt') || text.includes('contact')) {
            heading.textContent = translations[currentLanguage].contact;
        }
        if (text.includes('faq') || text.includes('frequently asked questions')) {
            heading.textContent = translations[currentLanguage].faq;
        }
        if (text.includes('levering') || text.includes('delivery')) {
            heading.textContent = translations[currentLanguage].deliveryReturns;
        }
        if (text.includes('privatlivspolitik') || text.includes('privacy policy')) {
            heading.textContent = translations[currentLanguage].privacyPolicy;
        }
        
        // Page specific headings
        if (text.includes('kontakt os') || text.includes('contact us')) {
            heading.textContent = translations[currentLanguage].contactUs;
        }
        if (text.includes('ofte stillede spørgsmål') || text.includes('frequently asked questions')) {
            heading.textContent = translations[currentLanguage].frequentlyAskedQuestions;
        }
        if (text.includes('levering & returnering') || text.includes('delivery & returns')) {
            heading.textContent = translations[currentLanguage].deliveryReturns;
        }
        if (text.includes('ordre bekræftet') || text.includes('order confirmed')) {
            heading.textContent = translations[currentLanguage].orderConfirmation;
        }
        if (text.includes('leveringsmuligheder') || text.includes('shipping options')) {
            heading.textContent = translations[currentLanguage].shippingOptions;
        }
        if (text.includes('returneringspolitik') || text.includes('return policy')) {
            heading.textContent = translations[currentLanguage].returnPolicy;
        }
        if (text.includes('kategorier') || text.includes('categories')) {
            heading.textContent = translations[currentLanguage].categories;
        }
        
        // Coming soon section
        if (text.includes('kommer snart') || text.includes('coming soon')) {
            heading.textContent = translations[currentLanguage].comingSoon;
        }
        if (text.includes('nye produkter kommer snart') || text.includes('new products coming soon')) {
            heading.textContent = translations[currentLanguage].newProductsComingSoon;
        }
        if (text.includes('traditionelle broderier') || text.includes('traditional embroidery')) {
            heading.textContent = translations[currentLanguage].traditionalEmbroidery;
        }
        if (text.includes('autentisk håndværk') || text.includes('authentic craftsmanship')) {
            heading.textContent = translations[currentLanguage].authenticCraftsmanship;
        }
        if (text.includes('moderne tøj') || text.includes('modern clothing')) {
            heading.textContent = translations[currentLanguage].modernClothing;
        }
        if (text.includes('kulturel stil') || text.includes('cultural style')) {
            heading.textContent = translations[currentLanguage].culturalStyle;
        }
    });
    
    // Update all paragraphs
    document.querySelectorAll('p').forEach(paragraph => {
        const text = paragraph.textContent.toLowerCase();
        
        // Hero subtitle
        if (text.includes('opdag smukke traditionelle tøjer')) {
            paragraph.textContent = translations[currentLanguage].heroSubtitle;
        }
        
        // Common phrases
        if (text.includes('gratis forsendelse')) {
            paragraph.textContent = translations[currentLanguage].freeShipping;
        }
        if (text.includes('100% autentisk')) {
            paragraph.textContent = translations[currentLanguage].authentic;
        }
        if (text.includes('støt palæstinensiske håndværkere')) {
            paragraph.textContent = translations[currentLanguage].supportArtisans;
        }
        
        // Page specific content
        if (text.includes('vi er her for at hjælpe dig')) {
            paragraph.textContent = translations[currentLanguage].emailSupportDesc;
        }
        if (text.includes('find hurtige svar')) {
            paragraph.textContent = translations[currentLanguage].faqSectionDesc;
        }
        if (text.includes('vælg den leveringsmetode')) {
            paragraph.textContent = translations[currentLanguage].shippingOptionsDesc;
        }
        if (text.includes('nem og fair returnering')) {
            paragraph.textContent = translations[currentLanguage].returnPolicyDesc;
        }
        if (text.includes('du kan returnere produkter i original tilstand')) {
            paragraph.textContent = translations[currentLanguage].returnWithin30Desc;
        }
        if (text.includes('kontakt os før du sender produkter tilbage')) {
            paragraph.textContent = translations[currentLanguage].contactBeforeReturnDesc;
        }
        if (text.includes('hvis et produkt ankommer beskadiget')) {
            paragraph.textContent = translations[currentLanguage].damagedProductsDesc;
        }
        if (text.includes('din betaling er bekræftet')) {
            paragraph.textContent = translations[currentLanguage].paymentConfirmed;
        }
        
        // Coming soon section
        if (text.includes('vi arbejder på at bringe dig de bedste')) {
            paragraph.textContent = translations[currentLanguage].workingOnBestProducts;
        }
        if (text.includes('håndlavet med kærlighed') || text.includes('handmade with love')) {
            paragraph.textContent = translations[currentLanguage].handmadeWithLove;
        }
        if (text.includes('vi forbereder en fantastisk samling')) {
            paragraph.textContent = translations[currentLanguage].preparingCollection;
        }
    });
}

function updateAllButtons() {
    // Update all buttons
    document.querySelectorAll('button').forEach(button => {
        const text = button.textContent.toLowerCase();
        
        if (text.includes('tilføj til kurv') || text.includes('add to cart')) {
            button.textContent = translations[currentLanguage].addToCart;
        }
        if (text.includes('tilføj til ønskeliste') || text.includes('add to wishlist')) {
            button.textContent = translations[currentLanguage].addToWishlist;
        }
        if (text.includes('se mere') || text.includes('see more')) {
            button.textContent = translations[currentLanguage].seeMore;
        }
        if (text.includes('køb nu') || text.includes('buy now')) {
            button.textContent = translations[currentLanguage].buyNow;
        }
        if (text.includes('checkout') || text.includes('til kassen')) {
            button.textContent = translations[currentLanguage].checkout;
        }
        if (text.includes('ryd filtre') || text.includes('clear filters')) {
            button.textContent = translations[currentLanguage].clearFilters;
        }
        if (text.includes('søg') || text.includes('search')) {
            button.textContent = translations[currentLanguage].search;
        }
        
        // FAQ and page specific buttons
        if (text.includes('alle spørgsmål') || text.includes('all questions')) {
            button.textContent = translations[currentLanguage].allQuestions;
        }
        if (text.includes('se faq') || text.includes('see faq')) {
            button.textContent = translations[currentLanguage].seeFAQ;
        }
        if (text.includes('tilbage til hjem') || text.includes('back to home')) {
            button.textContent = translations[currentLanguage].backToHome;
        }
        if (text.includes('shop flere produkter') || text.includes('shop more products')) {
            button.textContent = translations[currentLanguage].shopMoreProducts;
        }
        if (text.includes('tilmeld') || text.includes('subscribe')) {
            button.textContent = translations[currentLanguage].subscribe;
        }
    });
    
    // Update FAQ category buttons
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if (text.includes('alle spørgsmål') || text.includes('all questions')) {
            btn.textContent = translations[currentLanguage].allQuestions;
        } else if (text.includes('produkter') || text.includes('products')) {
            btn.textContent = translations[currentLanguage].products;
        } else if (text.includes('levering') || text.includes('shipping')) {
            btn.textContent = translations[currentLanguage].shipping;
        } else if (text.includes('returnering') || text.includes('returns')) {
            btn.textContent = translations[currentLanguage].returns;
        } else if (text.includes('betaling') || text.includes('payment')) {
            btn.textContent = translations[currentLanguage].payment;
        } else if (text.includes('support')) {
            btn.textContent = translations[currentLanguage].support;
        }
    });
}

function updateAllForms() {
    // Update all form placeholders and labels
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const placeholder = input.placeholder.toLowerCase();
        
        if (placeholder.includes('søg efter produkter') || placeholder.includes('search for products')) {
            input.placeholder = translations[currentLanguage].searchPlaceholder;
        }
        if (placeholder.includes('din email') || placeholder.includes('your email')) {
            input.placeholder = translations[currentLanguage].emailPlaceholder;
        }
        if (placeholder.includes('dit navn') || placeholder.includes('your name')) {
            input.placeholder = translations[currentLanguage].namePlaceholder;
        }
        if (placeholder.includes('besked') || placeholder.includes('message')) {
            input.placeholder = translations[currentLanguage].messagePlaceholder;
        }
        if (placeholder.includes('your email address') || placeholder.includes('din email adresse')) {
            input.placeholder = translations[currentLanguage].emailPlaceholder;
        }
    });
}

function updateAllLinks() {
    // Update all links
    document.querySelectorAll('a').forEach(link => {
        const text = link.textContent.toLowerCase();
        
        if (text.includes('kontakt os') || text.includes('contact us')) {
            link.textContent = translations[currentLanguage].contactUs;
        }
        if (text.includes('faq')) {
            link.textContent = translations[currentLanguage].faq;
        }
        if (text.includes('levering & returnering') || text.includes('delivery & returns')) {
            link.textContent = translations[currentLanguage].deliveryReturns;
        }
        if (text.includes('privatlivspolitik') || text.includes('privacy policy')) {
            link.textContent = translations[currentLanguage].privacyPolicy;
        }
        if (text.includes('se faq') || text.includes('see faq')) {
            link.textContent = translations[currentLanguage].seeFAQ;
        }
        if (text.includes('tilbage til hjem') || text.includes('back to home')) {
            link.textContent = translations[currentLanguage].backToHome;
        }
        if (text.includes('shop flere produkter') || text.includes('shop more products')) {
            link.textContent = translations[currentLanguage].shopMoreProducts;
        }
    });
}

function updateAllSpans() {
    // Update all span elements
    document.querySelectorAll('span').forEach(span => {
        const text = span.textContent.toLowerCase();
        
        if (text.includes('ordre detaljer') || text.includes('order details')) {
            span.textContent = translations[currentLanguage].orderDetails;
        }
        if (text.includes('ordre id') || text.includes('order id')) {
            span.textContent = translations[currentLanguage].orderId;
        }
        if (text.includes('dato') || text.includes('date')) {
            span.textContent = translations[currentLanguage].date;
        }
        if (text.includes('status')) {
            span.textContent = translations[currentLanguage].status;
        }
        if (text.includes('bekræftet') || text.includes('confirmed')) {
            span.textContent = translations[currentLanguage].confirmed;
        }
        if (text.includes('indlæser') || text.includes('loading')) {
            span.textContent = translations[currentLanguage].loading;
        }
        if (text.includes('tak for din ordre') || text.includes('thank you for your order')) {
            span.textContent = translations[currentLanguage].thankYouForOrder;
        }
    });
}

function updateAllProducts() {
    // Update all product cards
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = card.getAttribute('data-product-id');
        if (productId) {
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                const translatedProduct = getTranslatedProduct(product);
                
                // Update product name
                const nameElement = card.querySelector('h3');
                if (nameElement) {
                    nameElement.textContent = translatedProduct.name;
                }
                
                // Update product description
                const descElement = card.querySelector('p:not(.price)');
                if (descElement) {
                    descElement.textContent = translatedProduct.description;
                }
            }
        }
    });
}

function updateAllStaticContent() {
    // Update footer content
    const footer = document.querySelector('footer');
    if (footer) {
        const footerText = footer.textContent.toLowerCase();
        
        if (footerText.includes('alle rettigheder forbeholdes')) {
            footer.innerHTML = footer.innerHTML.replace(
                /alle rettigheder forbeholdes/gi,
                translations[currentLanguage].allRightsReserved
            );
        }
    }
    
    // Update newsletter section
    const newsletterSection = document.querySelector('.newsletter-section');
    if (newsletterSection) {
        const newsletterTitle = newsletterSection.querySelector('h3');
        if (newsletterTitle) {
            newsletterTitle.textContent = translations[currentLanguage].newsletterTitle;
        }
        
        const newsletterText = newsletterSection.querySelector('p');
        if (newsletterText) {
            newsletterText.textContent = translations[currentLanguage].newsletterText;
        }
    }
}

function updateAllDynamicContent() {
    // Update cart items
    if (window.advancedCart) {
        window.advancedCart.updateDisplay();
    } else {
        updateCartDisplay();
    }
    
    // Update wishlist items
    updateWishlistDisplay();
    
    // Update product counts
    const productCountElements = document.querySelectorAll('.product-count');
    productCountElements.forEach(element => {
        const count = element.textContent.match(/\d+/);
        if (count) {
            element.textContent = `${count[0]} ${translations[currentLanguage].products}`;
        }
    });
}

function updateCurrency() {
    updateProductCards();
    updateCartDisplay();
    updateWishlistDisplay();
}

function updateHomePageContent() {
    // Update hero section
    const heroBadge = document.querySelector('.hero-badge span');
    if (heroBadge) {
        heroBadge.textContent = translations[currentLanguage].heroBadge;
    }
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const lines = heroTitle.querySelectorAll('.hero-line');
        // Preserve "Autentisk Kultur" text - don't translate these specific elements
        const autentiskElement = document.getElementById('hero-autentisk');
        const kulturElement = document.getElementById('hero-kultur');
        
        if (autentiskElement) {
            autentiskElement.textContent = 'Autentisk';
        }
        if (kulturElement) {
            kulturElement.textContent = 'Kultur';
        }
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = translations[currentLanguage].heroSubtitle;
    }
    
    // Update stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = translations[currentLanguage].statCustomers;
        statLabels[1].textContent = translations[currentLanguage].statProducts;
        statLabels[2].textContent = translations[currentLanguage].statHandmade;
    }
    
    // Update CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Shop Nu') || btn.textContent.includes('Shop Now')) {
            btn.innerHTML = `<i class="fas fa-shopping-bag"></i> ${translations[currentLanguage].shopNow}`;
        }
    });
    
    // Update floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    if (floatingCards.length >= 3) {
        const card1 = floatingCards[0];
        const card2 = floatingCards[1];
        const card3 = floatingCards[2];
        
        card1.querySelector('span').textContent = translations[currentLanguage].floatingCard1Title;
        card1.querySelector('small').textContent = translations[currentLanguage].floatingCard1Subtitle;
        
        card2.querySelector('span').textContent = translations[currentLanguage].floatingCard2Title;
        card2.querySelector('small').textContent = translations[currentLanguage].floatingCard2Subtitle;
        
        card3.querySelector('span').textContent = translations[currentLanguage].floatingCard3Title;
        card3.querySelector('small').textContent = translations[currentLanguage].floatingCard3Subtitle;
    }
    
    // Update scroll text
    const heroScroll = document.querySelector('.hero-scroll span');
    if (heroScroll) {
        heroScroll.textContent = translations[currentLanguage].exploreCollection;
    }
    
    // Update categories section
    const categoriesTitle = document.querySelector('.categories .section-title');
    if (categoriesTitle) {
        categoriesTitle.textContent = translations[currentLanguage].categoriesTitle;
    }
    
    const categoriesSubtitle = document.querySelector('.categories .section-subtitle');
    if (categoriesSubtitle) {
        categoriesSubtitle.textContent = translations[currentLanguage].categoriesSubtitle;
    }
    
    // Update category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        
        if (index === 0 && title) {
            title.textContent = translations[currentLanguage].clothingTitle;
        } else if (index === 1 && title) {
            title.textContent = translations[currentLanguage].accessoriesTitle;
        }
        
        if (index === 0 && desc) {
            desc.textContent = translations[currentLanguage].clothingDesc;
        } else if (index === 1 && desc) {
            desc.textContent = translations[currentLanguage].accessoriesDesc;
        }
    });
    
    // Update featured products section
    const popularProductsTitle = document.querySelector('.featured-products .section-title');
    if (popularProductsTitle) {
        popularProductsTitle.textContent = translations[currentLanguage].popularProducts;
    }
    
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.textContent = translations[currentLanguage].viewAllProducts;
    }
    
    // Update story section
    const storyTitle = document.querySelector('.story h2');
    if (storyTitle) {
        storyTitle.textContent = translations[currentLanguage].ourStory;
    }
    
    const storyParagraphs = document.querySelectorAll('.story-text p');
    if (storyParagraphs.length >= 2) {
        storyParagraphs[0].textContent = translations[currentLanguage].storyText1;
        storyParagraphs[1].textContent = translations[currentLanguage].storyText2;
    }
    
    const storyBtn = document.querySelector('.story-btn');
    if (storyBtn) {
        storyBtn.textContent = translations[currentLanguage].readMore;
    }
    
    // Update values section
    const valuesTitle = document.querySelector('.values .section-title');
    if (valuesTitle) {
        valuesTitle.textContent = translations[currentLanguage].ourValues;
    }
    
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        
        if (index === 0 && title) {
            title.textContent = translations[currentLanguage].supportArtisans;
        } else if (index === 1 && title) {
            title.textContent = translations[currentLanguage].sustainability;
        } else if (index === 2 && title) {
            title.textContent = translations[currentLanguage].culturalPreservation;
        } else if (index === 3 && title) {
            title.textContent = translations[currentLanguage].quality;
        }
        
        if (index === 0 && desc) {
            desc.textContent = translations[currentLanguage].supportArtisansDesc;
        } else if (index === 1 && desc) {
            desc.textContent = translations[currentLanguage].sustainabilityDesc;
        } else if (index === 2 && desc) {
            desc.textContent = translations[currentLanguage].culturalPreservationDesc;
        } else if (index === 3 && desc) {
            desc.textContent = translations[currentLanguage].qualityDesc;
        }
    });
    
    // Update newsletter section
    const newsletterTitle = document.querySelector('.newsletter-content h2');
    if (newsletterTitle) {
        newsletterTitle.textContent = translations[currentLanguage].newsletterTitle;
    }
    
    const newsletterDesc = document.querySelector('.newsletter-content p');
    if (newsletterDesc) {
        newsletterDesc.textContent = translations[currentLanguage].newsletterDesc;
    }
    
    const emailInput = document.querySelector('.newsletter-form input');
    if (emailInput) {
        emailInput.placeholder = translations[currentLanguage].emailPlaceholder;
    }
    
    const subscribeBtn = document.querySelector('.newsletter-form button');
    if (subscribeBtn) {
        subscribeBtn.textContent = translations[currentLanguage].subscribe;
    }
    
    // Update footer
    const footerTitle = document.querySelector('.footer-section h3');
    if (footerTitle) {
        footerTitle.textContent = translations[currentLanguage].footerTitle;
    }
    
    const footerDesc = document.querySelector('.footer-section p');
    if (footerDesc) {
        footerDesc.textContent = translations[currentLanguage].footerDesc;
    }
    
    const footerLinks = document.querySelectorAll('.footer-section h4');
    footerLinks.forEach((link, index) => {
        if (index === 1) {
            link.textContent = translations[currentLanguage].quickLinks;
        } else if (index === 2) {
            link.textContent = translations[currentLanguage].categories;
        } else if (index === 3) {
            link.textContent = translations[currentLanguage].customerService;
        }
    });
    
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        footerBottom.innerHTML = `&copy; 2024 ${translations[currentLanguage].footerTitle}. ${translations[currentLanguage].allRightsReserved}`;
    }
    
    const paymentsText = document.querySelector('.footer-payment span');
    if (paymentsText) {
        paymentsText.textContent = translations[currentLanguage].paymentsAccepted;
    }
    
    // Update loading text
    const loadingText = document.querySelector('.loading-spinner p');
    if (loadingText) {
        loadingText.textContent = translations[currentLanguage].loading;
    }
}

function formatPrice(price) {
    const convertedPrice = price * exchangeRates[currentCurrency];
    return `${convertedPrice.toFixed(2)} ${currencySymbols[currentCurrency]}`;
}

function updateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const priceElement = card.querySelector('.product-price');
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        const wishlistBtn = card.querySelector('.wishlist-btn-product');
        
        if (priceElement) {
            const originalPrice = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));
            priceElement.textContent = formatPrice(originalPrice);
        }
        
        if (addToCartBtn) {
            addToCartBtn.textContent = translations[currentLanguage].addToCart;
        }
        
        if (wishlistBtn) {
            const isInWishlist = wishlistBtn.querySelector('i').classList.contains('active');
            wishlistBtn.title = isInWishlist ? 
                translations[currentLanguage].removeFromWishlist : 
                translations[currentLanguage].addToWishlist;
        }
    });
}

function updateCartDisplay() {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const priceElement = item.querySelector('.cart-item-price');
        if (priceElement) {
            const originalPrice = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));
            priceElement.textContent = formatPrice(originalPrice);
        }
    });
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartTotalElements = document.querySelectorAll('#cartTotal');
    cartTotalElements.forEach(element => {
        element.textContent = formatPrice(total);
    });
}

function updateWishlistDisplay() {
    const wishlistItems = document.querySelectorAll('.wishlist-item');
    wishlistItems.forEach(item => {
        const priceElement = item.querySelector('.wishlist-item-price');
        if (priceElement) {
            const originalPrice = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));
            priceElement.textContent = formatPrice(originalPrice);
        }
    });
}



// Wishlist Functions
function toggleWishlist() {
    wishlistSidebar.classList.toggle('open');
    wishlistOverlay.classList.toggle('open');
    document.body.style.overflow = wishlistSidebar.classList.contains('open') ? 'hidden' : '';
    updateWishlistItems();
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        saveWishlistToLocalStorage();
        updateWishlistCount();
        showNotification('Produkt tilføjet til ønskeliste!', 'success');
    } else {
        showNotification('Produkt er allerede i ønskelisten!', 'warning');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlistToLocalStorage();
    updateWishlistCount();
    updateWishlistItems();
    showNotification('Produkt fjernet fra ønskeliste!', 'success');
}

function clearWishlist() {
    wishlist = [];
    saveWishlistToLocalStorage();
    updateWishlistCount();
    updateWishlistItems();
    showNotification('Ønskeliste ryddet!', 'success');
}

function updateWishlistCount() {
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function updateWishlistItems() {
    if (!wishlistItems) return;
    
    wishlistItems.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>Din ønskeliste er tom</p>
            </div>
        `;
        return;
    }
    
    wishlist.forEach(product => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${product.image}" alt="${product.imageAlt}" class="wishlist-item-image">
            <div class="wishlist-item-info">
                <div class="wishlist-item-title">${product.name}</div>
                <div class="wishlist-item-price">${product.price.toFixed(2)} kr</div>
            </div>
            <div class="wishlist-item-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id}); removeFromWishlist(${product.id})" title="Tilføj til kurv">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="remove" onclick="removeFromWishlist(${product.id})" title="Fjern fra ønskeliste">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        wishlistItems.appendChild(wishlistItem);
    });
}

function saveWishlistToLocalStorage() {
    localStorage.setItem('palestinensiskArvWishlist', JSON.stringify(wishlist));
}

function loadWishlistFromLocalStorage() {
    const savedWishlist = localStorage.getItem('palestinensiskArvWishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
        updateWishlistCount();
    }
}

// Enhanced notification system with accessibility
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add accessibility attributes
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.setAttribute('aria-atomic', 'true');
    
    if (notificationContainer) {
        notificationContainer.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notificationContainer.contains(notification)) {
                    notificationContainer.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Loading spinner functions
function showLoading() {
    if (loadingSpinner) {
        loadingSpinner.classList.add('show');
    }
}

function hideLoading() {
    if (loadingSpinner) {
        loadingSpinner.classList.remove('show');
    }
}

// Enhanced product filtering
function setupProductFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = this.value + ' kr';
            filterProducts();
        });
    }
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-option input[value="tøj"], .filter-option input[value="tilbehør"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const selectedColors = Array.from(document.querySelectorAll('.filter-option input[value="sort"], .filter-option input[value="hvid"], .filter-option input[value="beige"], .filter-option input[value="pink"], .filter-option input[value="blå"], .filter-option input[value="grå"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : 200;
    
    let filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const colorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
        const priceMatch = product.price <= maxPrice;
        
        return categoryMatch && colorMatch && priceMatch;
    });
    
    displayFilteredProducts(filteredProducts);
}

function clearFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const priceRange = document.getElementById('priceRange');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    if (priceRange) {
        priceRange.value = 200;
        document.getElementById('priceValue').textContent = '200 kr';
    }
    
    filterProducts();
}

// Enhanced product card with wishlist button
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Add click handler for opening product detail
    productCard.addEventListener('click', (e) => {
        // Don't open modal if clicking on buttons
        if (e.target.closest('button')) {
            return;
        }
        openProductDetail(product.id);
    });
    
    const translatedProduct = getTranslatedProduct(product);
    const isInWishlist = wishlist.find(item => item.id === product.id);
    
    // Create color options if available
    let colorOptions = '';
    if (product.colors && product.colors.length > 1) {
        colorOptions = `
            <div class="color-options">
                <span>${translations[currentLanguage].colors}:</span>
                ${product.colors.map(color => `<span class="color-dot" style="background-color: ${getColorCode(color)}" title="${translations[currentLanguage][color] || color}"></span>`).join('')}
            </div>
        `;
    }
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${translatedProduct.imageAlt}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-placeholder" style="display: none;">
                <span style="font-size: 4rem;">${getProductEmoji(translatedProduct.category)}</span>
            </div>
            <button class="wishlist-btn-product" onclick="event.stopPropagation(); addToWishlist(${product.id})" title="${isInWishlist ? translations[currentLanguage].removeFromWishlist : translations[currentLanguage].addToWishlist}">
                <i class="fas fa-heart ${isInWishlist ? 'active' : ''}"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-title">${translatedProduct.name}</h3>
            <p class="product-description">${translatedProduct.description}</p>
            ${colorOptions}
            <div class="product-price">${formatPrice(product.price)}</div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                ${translations[currentLanguage].addToCart}
            </button>
        </div>
    `;
    
    return productCard;
}

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact Form Submission
function submitContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const newsletter = formData.get('newsletter');
    
    // Show loading
    showLoading();
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        hideLoading();
        
        // Show success message
        showNotification('Tak for din besked! Vi vender tilbage til dig hurtigst muligt.', 'success');
        
        // Reset form
        event.target.reset();
    }, 2000);
}



// Advanced Performance Monitoring
const performanceMetrics = {
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0
};

// Initialize performance monitoring
function initPerformanceMonitoring() {
    // Measure page load time
    window.addEventListener('load', () => {
        performanceMetrics.pageLoadTime = performance.now();
        console.log(`Page load time: ${performanceMetrics.pageLoadTime}ms`);
    });

    // First Contentful Paint
    new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
                performanceMetrics.firstContentfulPaint = entry.startTime;
                console.log(`FCP: ${entry.startTime}ms`);
            }
        });
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        performanceMetrics.largestContentfulPaint = lastEntry.startTime;
        console.log(`LCP: ${lastEntry.startTime}ms`);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
            cls += entry.value;
        }
        performanceMetrics.cumulativeLayoutShift = cls;
        console.log(`CLS: ${cls}`);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            performanceMetrics.firstInputDelay = entry.processingStart - entry.startTime;
            console.log(`FID: ${performanceMetrics.firstInputDelay}ms`);
        }
    }).observe({ entryTypes: ['first-input'] });
}

// AI-Powered Product Recommendations
class AIRecommendations {
    constructor() {
        this.userBehavior = {
            viewedProducts: [],
            cartItems: [],
            wishlistItems: [],
            searchQueries: [],
            timeOnPage: 0
        };
        this.recommendations = [];
    }

    trackUserBehavior(action, data) {
        switch (action) {
            case 'view_product':
                this.userBehavior.viewedProducts.push({
                    productId: data.productId,
                    timestamp: Date.now(),
                    timeSpent: data.timeSpent || 0
                });
                break;
            case 'add_to_cart':
                this.userBehavior.cartItems.push({
                    productId: data.productId,
                    timestamp: Date.now()
                });
                break;
            case 'add_to_wishlist':
                this.userBehavior.wishlistItems.push({
                    productId: data.productId,
                    timestamp: Date.now()
                });
                break;
            case 'search':
                this.userBehavior.searchQueries.push({
                    query: data.query,
                    timestamp: Date.now()
                });
                break;
        }
        this.updateRecommendations();
    }

    updateRecommendations() {
        // Simple collaborative filtering algorithm
        const recommendations = [];
        const userPreferences = this.analyzeUserPreferences();
        
        products.forEach(product => {
            let score = 0;
            
            // Category preference
            if (userPreferences.categories.includes(product.category.da || product.category)) {
                score += 3;
            }
            
            // Price range preference
            if (product.price >= userPreferences.priceRange.min && 
                product.price <= userPreferences.priceRange.max) {
                score += 2;
            }
            
            // Similar to recently viewed
            if (this.userBehavior.viewedProducts.some(vp => 
                products.find(p => p.id === vp.productId)?.category === product.category)) {
                score += 1;
            }
            
            if (score > 0) {
                recommendations.push({ product, score });
            }
        });
        
        this.recommendations = recommendations
            .sort((a, b) => b.score - a.score)
            .slice(0, 6)
            .map(r => r.product);
        
        this.displayRecommendations();
    }

    analyzeUserPreferences() {
        const categories = {};
        const prices = [];
        
        this.userBehavior.viewedProducts.forEach(vp => {
            const product = products.find(p => p.id === vp.productId);
            if (product) {
                const category = product.category.da || product.category;
                categories[category] = (categories[category] || 0) + 1;
                prices.push(product.price);
            }
        });
        
        return {
            categories: Object.keys(categories).sort((a, b) => categories[b] - categories[a]),
            priceRange: {
                min: Math.min(...prices, 0),
                max: Math.max(...prices, 1000)
            }
        };
    }

    displayRecommendations() {
        const container = document.getElementById('aiRecommendations');
        if (!container || this.recommendations.length === 0) return;
        
        container.innerHTML = `
            <div class="ai-recommendations">
                <h3>🤖 AI Anbefalinger for dig</h3>
                <div class="recommendations-grid">
                    ${this.recommendations.map(product => {
                        // Use the existing createProductCard function safely
                        if (typeof createProductCard === 'function') {
                            return createProductCard(product);
                        } else {
                            // Fallback if function not available
                            return `
                                <div class="product-card" onclick="openProductDetail(${product.id})">
                                    <img src="${product.image}" alt="${product.imageAlt?.da || product.name}">
                                    <h3>${product.name.da || product.name}</h3>
                                    <p class="price">${product.price} kr</p>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            </div>
        `;
    }
}

// Advanced Animation System
class AnimationSystem {
    constructor() {
        this.animations = new Map();
        this.intersectionObserver = null;
        this.init();
    }

    init() {
        this.intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateElement(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );
    }

    addAnimation(element, animationType, options = {}) {
        const animation = {
            type: animationType,
            options: {
                duration: 800,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                delay: 0,
                ...options
            }
        };
        
        this.animations.set(element, animation);
        this.intersectionObserver.observe(element);
    }

    animateElement(element) {
        const animation = this.animations.get(element);
        if (!animation) return;

        element.style.opacity = '0';
        element.style.transform = this.getInitialTransform(animation.type);
        element.style.transition = `all ${animation.options.duration}ms ${animation.options.easing} ${animation.options.delay}ms`;

        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = this.getFinalTransform(animation.type);
        });

        this.intersectionObserver.unobserve(element);
    }

    getInitialTransform(type) {
        const transforms = {
            'fade-up': 'translateY(30px)',
            'fade-down': 'translateY(-30px)',
            'fade-left': 'translateX(30px)',
            'fade-right': 'translateX(-30px)',
            'scale': 'scale(0.8)',
            'rotate': 'rotate(-10deg)',
            'slide-up': 'translateY(100%)',
            'slide-down': 'translateY(-100%)'
        };
        return transforms[type] || 'translateY(30px)';
    }

    getFinalTransform(type) {
        const transforms = {
            'fade-up': 'translateY(0)',
            'fade-down': 'translateY(0)',
            'fade-left': 'translateX(0)',
            'fade-right': 'translateX(0)',
            'scale': 'scale(1)',
            'rotate': 'rotate(0deg)',
            'slide-up': 'translateY(0)',
            'slide-down': 'translateY(0)'
        };
        return transforms[type] || 'translateY(0)';
    }
}

// Advanced Search with Fuzzy Matching
class AdvancedSearch {
    constructor() {
        this.searchIndex = this.buildSearchIndex();
        this.searchHistory = [];
    }

    buildSearchIndex() {
        const index = {};
        
        products.forEach(product => {
            const text = `${product.name.da || product.name} ${product.description.da || product.description}`.toLowerCase();
            const words = text.split(/\s+/);
            
            words.forEach(word => {
                if (word.length > 2) {
                    if (!index[word]) index[word] = [];
                    index[word].push(product.id);
                }
            });
        });
        
        return index;
    }

    search(query, options = {}) {
        const {
            fuzzy = true,
            limit = 10,
            includeHistory = true
        } = options;

        if (includeHistory) {
            this.searchHistory.push(query);
        }

        const results = [];
        const queryWords = query.toLowerCase().split(/\s+/);
        
        products.forEach(product => {
            let score = 0;
            const productText = `${product.name.da || product.name} ${product.description.da || product.description}`.toLowerCase();
            
            queryWords.forEach(word => {
                if (productText.includes(word)) {
                    score += 10;
                } else if (fuzzy) {
                    // Fuzzy matching with Levenshtein distance
                    const words = productText.split(/\s+/);
                    words.forEach(productWord => {
                        const distance = this.levenshteinDistance(word, productWord);
                        if (distance <= 2) {
                            score += (3 - distance);
                        }
                    });
                }
            });
            
            if (score > 0) {
                results.push({ product, score });
            }
        });
        
        return results
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(r => r.product);
    }

    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }

    getSearchSuggestions(query) {
        if (query.length < 2) return [];
        
        const suggestions = new Set();
        const queryLower = query.toLowerCase();
        
        // Add from search history
        this.searchHistory.forEach(historyQuery => {
            if (historyQuery.toLowerCase().includes(queryLower)) {
                suggestions.add(historyQuery);
            }
        });
        
        // Add from product names
        products.forEach(product => {
            const name = product.name.da || product.name;
            if (name.toLowerCase().includes(queryLower)) {
                suggestions.add(name);
            }
        });
        
        return Array.from(suggestions).slice(0, 5);
    }
}

// Advanced Cart Management with Local Storage and Sync
class AdvancedCart {
    constructor() {
        this.items = [];
        this.coupons = [];
        this.shipping = null;
        this.tax = 0;
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.updateDisplay();
        this.setupAutoSave();
    }

    addItem(product, quantity = 1, options = {}) {
        const existingItem = this.items.find(item => 
            item.productId === product.id && 
            item.selectedColor === (options.color || 'default')
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                productId: product.id,
                quantity: quantity,
                selectedColor: options.color || 'default',
                selectedSize: options.size || 'M',
                addedAt: Date.now(),
                price: product.price
            });
        }

        this.updateDisplay();
        this.saveToStorage();
        this.syncToServer();
        
        // Track for AI recommendations
        if (window.aiRecommendations) {
            window.aiRecommendations.trackUserBehavior('add_to_cart', { productId: product.id });
        }
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateDisplay();
        this.saveToStorage();
    }

    updateQuantity(index, change) {
        const item = this.items[index];
        item.quantity = Math.max(1, item.quantity + change);
        
        if (item.quantity === 0) {
            this.removeItem(index);
        } else {
            this.updateDisplay();
            this.saveToStorage();
        }
    }

    applyCoupon(code) {
        // Simulate coupon validation
        const validCoupons = {
            'PALESTINE10': { discount: 0.10, type: 'percentage' },
            'FREESHIP': { discount: 50, type: 'shipping' },
            'WELCOME20': { discount: 0.20, type: 'percentage' }
        };

        if (validCoupons[code] && !this.coupons.includes(code)) {
            this.coupons.push(code);
            this.updateDisplay();
            this.saveToStorage();
            return { success: true, message: 'Kupon anvendt!' };
        }
        
        return { success: false, message: 'Ugyldig kupon eller allerede anvendt' };
    }

    calculateSubtotal() {
        return this.items.reduce((total, item) => {
            const product = products.find(p => p.id === item.productId);
            return total + (product.price * item.quantity);
        }, 0);
    }

    calculateDiscount() {
        let discount = 0;
        this.coupons.forEach(code => {
            if (code === 'PALESTINE10') discount += this.calculateSubtotal() * 0.10;
            if (code === 'WELCOME20') discount += this.calculateSubtotal() * 0.20;
        });
        return discount;
    }

    calculateShipping() {
        const subtotal = this.calculateSubtotal();
        const hasFreeShipping = this.coupons.includes('FREESHIP');
        
        if (hasFreeShipping || subtotal >= 500) {
            return 0;
        }
        
        return 49; // Standard shipping cost
    }

    calculateTotal() {
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount();
        const shipping = this.calculateShipping();
        const tax = (subtotal - discount) * 0.25; // 25% VAT
        
        return subtotal - discount + shipping + tax;
    }

    updateDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (cartCount) {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
        
        if (cartItems) {
            cartItems.innerHTML = this.items.map((item, index) => {
                const product = products.find(p => p.id === item.productId);
                return `
                    <div class="cart-item">
                        <img src="${product.image}" alt="${product.imageAlt?.da || product.name}">
                        <div class="cart-item-details">
                            <h4>${product.name.da || product.name}</h4>
                            <p>${product.price} kr</p>
                            <div class="cart-item-controls">
                                <button onclick="advancedCart.updateQuantity(${index}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="advancedCart.updateQuantity(${index}, 1)">+</button>
                                <button onclick="advancedCart.removeItem(${index})" class="remove-btn">🗑️</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        if (cartTotal) {
            cartTotal.innerHTML = `
                <div class="cart-summary">
                    <div class="cart-row">
                        <span>Subtotal:</span>
                        <span>${this.calculateSubtotal().toFixed(2)} kr</span>
                    </div>
                    ${this.calculateDiscount() > 0 ? `
                        <div class="cart-row discount">
                            <span>Rabat:</span>
                            <span>-${this.calculateDiscount().toFixed(2)} kr</span>
                        </div>
                    ` : ''}
                    <div class="cart-row">
                        <span>Forsendelse:</span>
                        <span>${this.calculateShipping() === 0 ? 'Gratis' : this.calculateShipping() + ' kr'}</span>
                    </div>
                    <div class="cart-row">
                        <span>Moms (25%):</span>
                        <span>${((this.calculateSubtotal() - this.calculateDiscount()) * 0.25).toFixed(2)} kr</span>
                    </div>
                    <div class="cart-row total">
                        <span>Total:</span>
                        <span>${this.calculateTotal().toFixed(2)} kr</span>
                    </div>
                </div>
            `;
        }
    }

    saveToStorage() {
        localStorage.setItem('advancedCart', JSON.stringify({
            items: this.items,
            coupons: this.coupons,
            timestamp: Date.now()
        }));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('advancedCart');
        if (stored) {
            const data = JSON.parse(stored);
            this.items = data.items || [];
            this.coupons = data.coupons || [];
        }
    }

    setupAutoSave() {
        setInterval(() => {
            this.saveToStorage();
        }, 30000); // Auto-save every 30 seconds
    }

    async syncToServer() {
        // Simulate server sync
        try {
            const response = await fetch('/api/cart/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: this.items,
                    timestamp: Date.now()
                })
            });
            
            if (response.ok) {
                console.log('Cart synced to server');
            }
        } catch (error) {
            console.log('Cart sync failed, will retry later');
        }
    }

    clear() {
        this.items = [];
        this.coupons = [];
        this.updateDisplay();
        this.saveToStorage();
    }
}

// Initialize advanced features
let aiRecommendations, animationSystem, advancedSearch, advancedCart;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functionality FIRST
    // Note: initCritical is already called in the main DOMContentLoaded listener above
    
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Initialize advanced features AFTER original functionality
    setTimeout(() => {
        aiRecommendations = new AIRecommendations();
        animationSystem = new AnimationSystem();
        advancedSearch = new AdvancedSearch();
        advancedCart = new AdvancedCart();
        
        // Make available globally
        window.aiRecommendations = aiRecommendations;
        window.animationSystem = animationSystem;
        window.advancedSearch = advancedSearch;
        window.advancedCart = advancedCart;
        
        // Add advanced animations (but don't interfere with product cards)
        document.querySelectorAll('.hero-content, .section-title').forEach((element, index) => {
            animationSystem.addAnimation(element, 'fade-up', { delay: index * 100 });
        });
        

        
        console.log('🚀 Advanced features initialized!');
    }, 100);
});

// Contact Page Functions
function selectContactMethod(method) {
    const cards = document.querySelectorAll('.contact-card-interactive');
    cards.forEach(card => card.classList.remove('selected'));
    
    event.currentTarget.classList.add('selected');
    
    // Show different actions based on method
    switch(method) {
        case 'email':
            window.location.href = 'mailto:info@palestinsk-arv.dk';
            break;
        case 'phone':
            window.location.href = 'tel:+4512345678';
            break;
        case 'address':
            document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'chat':
            showNotification('Live chat kommer snart! Kontakt os i mellemtiden via email eller telefon.', 'info');
            break;
    }
}

// Multi-step form functionality
let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    currentStep = step;
}

function nextStep() {
    if (currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

// FAQ functionality
function showMoreFAQs() {
    showNotification('Flere FAQ kommer snart! Kontakt os direkte for hjælp.', 'info');
}

// Culture Page Functions
function changeSymbol(direction) {
    let currentSymbolIndex = 0;
    const symbolSlides = document.querySelectorAll('.symbol-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    // Find current active slide
    symbolSlides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentSymbolIndex = index;
        }
    });
    
    currentSymbolIndex += direction;
    
    if (currentSymbolIndex >= symbolSlides.length) {
        currentSymbolIndex = 0;
    } else if (currentSymbolIndex < 0) {
        currentSymbolIndex = symbolSlides.length - 1;
    }
    
    showSymbol(currentSymbolIndex);
}

function currentSymbol(index) {
    let currentSymbolIndex = index - 1;
    showSymbol(currentSymbolIndex);
}

function showSymbol(index) {
    const symbolSlides = document.querySelectorAll('.symbol-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    symbolSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    symbolSlides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Auto-rotate symbols for culture page
function initSymbolCarousel() {
    const symbolSlides = document.querySelectorAll('.symbol-slide');
    if (symbolSlides.length > 0) {
        setInterval(() => {
            changeSymbol(1);
        }, 5000);
    }
}

// Initialize culture page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize symbol carousel if on culture page
    if (document.querySelector('.symbol-slide')) {
        initSymbolCarousel();
    }
    
    // Initialize contact form if on contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Tak for din besked! Vi vender tilbage til dig hurtigst muligt.', 'success');
            contactForm.reset();
            // Reset to first step
            showStep(1);
        });
    }
    
    // Initialize smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize mosaic tile animations for culture page
    const mosaicTiles = document.querySelectorAll('.mosaic-tile');
    mosaicTiles.forEach((tile, index) => {
        tile.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Initialize timeline node animations for culture page
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    timelineNodes.forEach(node => {
        observer.observe(node);
    });
    
    // Initialize chat bubble animations for contact page
    const chatBubbles = document.querySelectorAll('.chat-bubble');
    chatBubbles.forEach((bubble, index) => {
        bubble.style.animationDelay = `${index * 0.5}s`;
    });
});

// Products Page Functions
function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect.value;
    
    let sortedProducts = [...products];
    
    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => {
                const nameA = (a.name.da || a.name).toLowerCase();
                const nameB = (b.name.da || b.name).toLowerCase();
                return nameA.localeCompare(nameB);
            });
            break;
        case 'newest':
            sortedProducts.sort((a, b) => (b.id || 0) - (a.id || 0));
            break;
        default:
            // Featured - keep original order
            break;
    }
    
    displayFilteredProducts(sortedProducts);
}

function toggleView() {
    const productsGrid = document.getElementById('productsGrid');
    const viewIcon = document.getElementById('viewIcon');
    
    if (productsGrid.classList.contains('list-view')) {
        productsGrid.classList.remove('list-view');
        productsGrid.classList.add('grid-view');
        viewIcon.className = 'fas fa-th';
    } else {
        productsGrid.classList.remove('grid-view');
        productsGrid.classList.add('list-view');
        viewIcon.className = 'fas fa-list';
    }
}

function changePage(direction) {
    const currentPageElement = document.getElementById('currentPage');
    const totalPagesElement = document.getElementById('totalPages');
    
    let currentPage = parseInt(currentPageElement.textContent);
    const totalPages = parseInt(totalPagesElement.textContent);
    
    currentPage += direction;
    
    if (currentPage < 1) {
        currentPage = totalPages;
    } else if (currentPage > totalPages) {
        currentPage = 1;
    }
    
    currentPageElement.textContent = currentPage;
    
    // Re-filter and display products for current page
    filterProducts();
}

function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    const productsCount = document.getElementById('productsCount');
    
    if (!productsGrid) return;
    
    // Update product count
    if (productsCount) {
        const count = filteredProducts.length;
        productsCount.textContent = `${count} produkt${count !== 1 ? 'er' : ''}`;
    }
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Display filtered products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update pagination
    updatePagination(filteredProducts.length);
}

function updatePagination(totalProducts) {
    const currentPageElement = document.getElementById('currentPage');
    const totalPagesElement = document.getElementById('totalPages');
    
    if (!currentPageElement || !totalPagesElement) return;
    
    const productsPerPage = 12;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    totalPagesElement.textContent = totalPages;
    
    // Reset to page 1 if current page is beyond total pages
    const currentPage = parseInt(currentPageElement.textContent);
    if (currentPage > totalPages) {
        currentPageElement.textContent = '1';
    }
}

// Enhanced displayProducts function for products page
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Display all products initially
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update product count
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        const count = products.length;
        productsCount.textContent = `${count} produkt${count !== 1 ? 'er' : ''}`;
    }
    
    // Update pagination
    updatePagination(products.length);
}

// Enhanced filterProducts function
function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-option input[value="tøj"], .filter-option input[value="tilbehør"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const selectedColors = Array.from(document.querySelectorAll('.filter-option input[value="sort"], .filter-option input[value="hvid"], .filter-option input[value="beige"], .filter-option input[value="pink"], .filter-option input[value="blå"], .filter-option input[value="grå"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : 200;
    
    let filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const colorMatch = selectedColors.length === 0 || (product.colors && product.colors.some(color => selectedColors.includes(color)));
        const priceMatch = product.price <= maxPrice;
        
        return categoryMatch && colorMatch && priceMatch;
    });
    
    // Apply sorting if sort select exists
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        
        switch(sortValue) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => {
                    const nameA = (a.name.da || a.name).toLowerCase();
                    const nameB = (b.name.da || b.name).toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'newest':
                filteredProducts.sort((a, b) => (b.id || 0) - (a.id || 0));
                break;
        }
    }
    
    displayFilteredProducts(filteredProducts);
}

// Enhanced Products Page Functions





// Advanced Filtering System
let currentFilters = {
    category: 'all',
    priceRange: { min: 0, max: 500 },
    colors: [],
    sizes: [],
    materials: [],
    availability: []
};

function filterByCategory(category) {
    currentFilters.category = category;
    
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    applyAllFilters();
}

function toggleAdvancedFilters() {
    const advancedFilters = document.getElementById('advancedFilters');
    advancedFilters.classList.toggle('show');
}

function updatePriceRange() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    
    document.getElementById('minPriceDisplay').textContent = `${minPrice} kr`;
    document.getElementById('maxPriceDisplay').textContent = `${maxPrice} kr`;
    
    currentFilters.priceRange = { min: parseInt(minPrice), max: parseInt(maxPrice) };
}

function applyFilters() {
    // Collect all filter values
    currentFilters.colors = Array.from(document.querySelectorAll('.color-option input:checked')).map(cb => cb.value);
    currentFilters.sizes = Array.from(document.querySelectorAll('.size-option input:checked')).map(cb => cb.value);
    currentFilters.materials = Array.from(document.querySelectorAll('.material-option input:checked')).map(cb => cb.value);
    currentFilters.availability = Array.from(document.querySelectorAll('.availability-option input:checked')).map(cb => cb.value);
    
    applyAllFilters();
    toggleAdvancedFilters();
}

function applyAllFilters() {
    let filteredProducts = products;
    
    // Category filter
    if (currentFilters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentFilters.category
        );
    }
    
    // Price filter
    filteredProducts = filteredProducts.filter(product =>
        product.price >= currentFilters.priceRange.min && 
        product.price <= currentFilters.priceRange.max
    );
    
    // Color filter
    if (currentFilters.colors.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            product.colors && product.colors.some(color => 
                currentFilters.colors.includes(color)
            )
        );
    }
    
    // Size filter
    if (currentFilters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            product.sizes && product.sizes.some(size => 
                currentFilters.sizes.includes(size)
            )
        );
    }
    
    // Material filter
    if (currentFilters.materials.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            product.material && currentFilters.materials.includes(product.material)
        );
    }
    
    // Availability filter
    if (currentFilters.availability.includes('på-lager')) {
        filteredProducts = filteredProducts.filter(product => product.inStock);
    }
    if (currentFilters.availability.includes('tilbud')) {
        filteredProducts = filteredProducts.filter(product => product.onSale);
    }
    if (currentFilters.availability.includes('nyhed')) {
        filteredProducts = filteredProducts.filter(product => product.isNew);
    }
    
    displayFilteredProducts(filteredProducts);
    updateActiveFiltersDisplay();
}

function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    const productsCount = document.getElementById('productsCount');
    const productsEmpty = document.getElementById('productsEmpty');
    
    productsCount.textContent = `${filteredProducts.length} produkter`;
    
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        productsEmpty.style.display = 'flex';
        return;
    }
    
    productsGrid.style.display = 'grid';
    productsEmpty.style.display = 'none';
    
    // Apply current sorting
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect.value !== 'featured') {
        sortProducts();
    } else {
        renderProducts(filteredProducts);
    }
}

function updateActiveFiltersDisplay() {
    const activeFilters = document.getElementById('activeFilters');
    const activeFiltersList = [];
    
    if (currentFilters.category !== 'all') {
        activeFiltersList.push(currentFilters.category);
    }
    if (currentFilters.colors.length > 0) {
        activeFiltersList.push(`${currentFilters.colors.length} farver`);
    }
    if (currentFilters.sizes.length > 0) {
        activeFiltersList.push(`${currentFilters.sizes.length} størrelser`);
    }
    if (currentFilters.materials.length > 0) {
        activeFiltersList.push(`${currentFilters.materials.length} materialer`);
    }
    if (currentFilters.availability.length > 0) {
        activeFiltersList.push(`${currentFilters.availability.length} tilgængelighed`);
    }
    
    activeFilters.textContent = activeFiltersList.length > 0 ? 
        activeFiltersList.join(', ') : 'Ingen filtre aktive';
}

function clearAllFilters() {
    currentFilters = {
        category: 'all',
        priceRange: { min: 0, max: 500 },
        colors: [],
        sizes: [],
        materials: [],
        availability: []
    };
    
    // Reset UI
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('minPrice').value = 0;
    document.getElementById('maxPrice').value = 500;
    updatePriceRange();
    
    // Reset category tab
    document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    
    applyAllFilters();
}

function resetFilters() {
    clearAllFilters();
    displayFilteredProducts(products);
}

// View Controls
function changeView(viewType) {
    const productsGrid = document.getElementById('productsGrid');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // Update active button
    viewButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${viewType}"]`).classList.add('active');
    
    // Apply view
    productsGrid.className = `products-grid ${viewType}-view`;
}

// Enhanced Sorting
function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect.value;
    
    let sortedProducts = [...products];
    
    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => {
                const nameA = (a.name.da || a.name).toLowerCase();
                const nameB = (b.name.da || b.name).toLowerCase();
                return nameA.localeCompare(nameB);
            });
            break;
        case 'newest':
            sortedProducts.sort((a, b) => (b.id || 0) - (a.id || 0));
            break;
        case 'popular':
            sortedProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
    }
    
    renderProducts(sortedProducts);
}

// Quick Actions
function showTrendingProducts() {
    const trendingProducts = products.filter(product => product.isTrending || product.popularity > 7);
    displayFilteredProducts(trendingProducts);
    document.getElementById('productsTitle').textContent = 'Trending Produkter';
    document.getElementById('productsSubtitle').textContent = 'De mest populære produkter lige nu';
}

function showNewArrivals() {
    const newProducts = products.filter(product => product.isNew);
    displayFilteredProducts(newProducts);
    document.getElementById('productsTitle').textContent = 'Nye Produkter';
    document.getElementById('productsSubtitle').textContent = 'Friske tilføjelser til vores samling';
}

function showBestSellers() {
    const bestSellers = products.filter(product => product.isBestSeller || product.popularity > 8);
    displayFilteredProducts(bestSellers);
    document.getElementById('productsTitle').textContent = 'Bestsellers';
    document.getElementById('productsSubtitle').textContent = 'Vores mest solgte produkter';
}

function showSaleItems() {
    const saleProducts = products.filter(product => product.onSale);
    displayFilteredProducts(saleProducts);
    document.getElementById('productsTitle').textContent = 'Tilbud';
    document.getElementById('productsSubtitle').textContent = 'Særlige priser på udvalgte produkter';
}

// AI Recommendations
function loadAIRecommendations() {
    const recommendationsGrid = document.getElementById('recommendationsGrid');
    
    // Simulate AI recommendations based on user behavior
    const recommendations = generateRecommendations();
    
    recommendationsGrid.innerHTML = recommendations.map(product => `
        <div class="product-card recommendation-card" onclick="openProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name.da || product.name}">
                <div class="product-badges">
                    <span class="product-badge trending">Anbefalet</span>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name.da || product.name}</h3>
                <p class="product-price">${product.price} kr</p>
            </div>
        </div>
    `).join('');
}

function generateRecommendations() {
    // Simple recommendation algorithm
    const recommendations = [];
    const categories = ['tøj', 'tilbehør'];
    
    categories.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);
        const randomProduct = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
        if (randomProduct && !recommendations.includes(randomProduct)) {
            recommendations.push(randomProduct);
        }
    });
    
    return recommendations.slice(0, 4);
}

// Enhanced Product Display
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    const currentView = document.querySelector('.view-btn.active').dataset.view;
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-product-id="${product.id}" onclick="openProductDetail(${product.id})" style="cursor: pointer;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name.da || product.name}" loading="lazy">
                <div class="product-badges">
                    ${product.isNew ? '<span class="product-badge new">Ny</span>' : ''}
                    ${product.onSale ? '<span class="product-badge sale">Tilbud</span>' : ''}
                    ${product.isTrending ? '<span class="product-badge trending">Trending</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="action-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})" title="Tilføj til ønskeliste">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); compareProduct(${product.id})" title="Sammenlign">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); openProductDetail(${product.id})" title="Se detaljer">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name.da || product.name}</h3>
                <p class="product-description">${(product.description.da || product.description).substring(0, 80)}...</p>
                <div class="product-meta">
                    <span class="product-price">${product.price} kr</span>
                    <div class="product-rating">
                        ${generateStarRating(product.rating || 4.5)}
                        <span>(${product.reviewCount || 12})</span>
                    </div>
                </div>
                ${product.colors ? `
                    <div class="product-colors">
                        ${product.colors.map(color => `
                            <div class="color-option" style="background: ${getColorValue(color)}" title="${color}"></div>
                        `).join('')}
                    </div>
                ` : ''}
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Tilføj til kurv</span>
                </button>
            </div>
        </div>
    `).join('');
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        ${Array(fullStars).fill('<i class="fas fa-star"></i>').join('')}
        ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${Array(emptyStars).fill('<i class="far fa-star"></i>').join('')}
    `;
}

function getColorValue(colorName) {
    const colorMap = {
        'sort': '#000000',
        'hvid': '#ffffff',
        'beige': '#f5f5dc',
        'pink': '#ffc0cb',
        'blå': '#0000ff',
        'grå': '#808080'
    };
    return colorMap[colorName] || '#cccccc';
}

// Product Comparison
let comparisonProducts = [];

function compareProduct(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    if (comparisonProducts.length >= 4) {
        showNotification('Du kan kun sammenligne op til 4 produkter ad gangen', 'warning');
        return;
    }
    
    if (!comparisonProducts.find(p => p.id === productId)) {
        comparisonProducts.push(product);
        updateComparisonBar();
        showNotification(`${product.name.da || product.name} tilføjet til sammenligning`, 'success');
    } else {
        showNotification('Produktet er allerede i sammenligningen', 'info');
    }
}

function updateComparisonBar() {
    const comparisonBar = document.getElementById('comparisonBar');
    const comparisonCount = document.getElementById('comparisonCount');
    
    comparisonCount.textContent = comparisonProducts.length;
    
    if (comparisonProducts.length > 0) {
        comparisonBar.classList.add('show');
    } else {
        comparisonBar.classList.remove('show');
    }
}

function compareProducts() {
    if (comparisonProducts.length < 2) {
        showNotification('Vælg mindst 2 produkter at sammenligne', 'warning');
        return;
    }
    
    // Open comparison modal or navigate to comparison page
    showNotification('Sammenligning åbner snart...', 'info');
}

function clearComparison() {
    comparisonProducts = [];
    updateComparisonBar();
    showNotification('Sammenligning ryddet', 'success');
}

// Enhanced Pagination
let currentPage = 1;
let itemsPerPage = 12;

function changeItemsPerPage() {
    const select = document.getElementById('itemsPerPage');
    itemsPerPage = parseInt(select.value);
    currentPage = 1;
    updatePagination();
}

function changePage(direction) {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    if (direction === -1 && currentPage > 1) {
        currentPage--;
    } else if (direction === 1 && currentPage < totalPages) {
        currentPage++;
    }
    
    updatePagination();
}

function updatePagination() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    
    renderProducts(currentProducts);
    
    // Update pagination info
    document.getElementById('showingStart').textContent = startIndex + 1;
    document.getElementById('showingEnd').textContent = Math.min(endIndex, products.length);
    document.getElementById('totalProducts').textContent = products.length;
    
    // Update page numbers
    generatePageNumbers();
    
    // Update button states
    const totalPages = Math.ceil(products.length / itemsPerPage);
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

function generatePageNumbers() {
    const pageNumbers = document.getElementById('pageNumbers');
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    let pageNumbersHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            pageNumbersHTML += `
                <div class="page-number ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
                    ${i}
                </div>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            pageNumbersHTML += '<div class="page-number">...</div>';
        }
    }
    
    pageNumbers.innerHTML = pageNumbersHTML;
}

function goToPage(page) {
    currentPage = page;
    updatePagination();
}

// Initialize Products Page
function initializeProductsPage() {
    console.log('Initializing products page...');
    if (window.location.pathname.includes('produkter.html')) {
        console.log('On products page, loading content...');
        
        // Check if productsGrid exists
        const productsGrid = document.getElementById('productsGrid');
        console.log('Products grid found:', !!productsGrid);
        
        // Check products array
        console.log('Number of products:', products.length);
        console.log('First product:', products[0]);
        
        loadAIRecommendations();
        displayFilteredProducts(products);
        updatePagination();
        

        
        // Initialize price range
        updatePriceRange();
        
        console.log('Products page initialized successfully');
    }
}

// Enhanced Modal Actions
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        showNotification(`${product.name.da || product.name} tilføjet til ønskeliste`, 'success');
    } else {
        showNotification('Produktet er allerede i ønskelisten', 'info');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // This will be called by the main initialization
});

// Enhanced Language and Currency Selector Functions
function toggleLanguageDropdown() {
    console.log('toggleLanguageDropdown called');
    
    const dropdown = document.getElementById('languageDropdown');
    const btn = document.querySelector('.language-selector-btn');
    
    console.log('Language dropdown:', dropdown);
    console.log('Language button:', btn);
    
    if (!dropdown || !btn) {
        console.warn('Language dropdown elements not found');
        return;
    }
    
    // Close currency dropdown if open
    const currencyDropdown = document.getElementById('currencyDropdown');
    const currencyBtn = document.querySelector('.currency-selector-btn');
    if (currencyDropdown && currencyBtn) {
        currencyDropdown.classList.remove('show');
        currencyBtn.classList.remove('active');
    }
    
    // Toggle language dropdown
    const wasVisible = dropdown.classList.contains('show');
    dropdown.classList.toggle('show');
    btn.classList.toggle('active');
    
    console.log('Language dropdown toggled. Was visible:', wasVisible, 'Now visible:', dropdown.classList.contains('show'));
}

function toggleCurrencyDropdown() {
    console.log('toggleCurrencyDropdown called');
    
    const dropdown = document.getElementById('currencyDropdown');
    const btn = document.querySelector('.currency-selector-btn');
    
    console.log('Currency dropdown:', dropdown);
    console.log('Currency button:', btn);
    
    if (!dropdown || !btn) {
        console.warn('Currency dropdown elements not found');
        return;
    }
    
    // Close language dropdown if open
    const languageDropdown = document.getElementById('languageDropdown');
    const languageBtn = document.querySelector('.language-selector-btn');
    if (languageDropdown && languageBtn) {
        languageDropdown.classList.remove('show');
        languageBtn.classList.remove('active');
    }
    
    // Toggle currency dropdown
    const wasVisible = dropdown.classList.contains('show');
    dropdown.classList.toggle('show');
    btn.classList.toggle('active');
    
    console.log('Currency dropdown toggled. Was visible:', wasVisible, 'Now visible:', dropdown.classList.contains('show'));
}

function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', currentLanguage);
    
    const display = document.getElementById('currentLanguageDisplay');
    if (display) {
        if (lang === 'da') {
            display.textContent = '🇩🇰 Dansk';
        } else if (lang === 'en') {
            display.textContent = '🇺🇸 English';
        }
    }
    
    toggleLanguageDropdown();
    
    // Update language immediately without page refresh
    updateLanguage();
    updateAllContent();
    
    // Ensure "Autentisk Kultur" stays preserved after all updates
    const autentiskElement = document.getElementById('hero-autentisk');
    const kulturElement = document.getElementById('hero-kultur');
    
    if (autentiskElement) {
        autentiskElement.textContent = 'Autentisk';
    }
    if (kulturElement) {
        kulturElement.textContent = 'Kultur';
    }
    
    showNotification(`Sprog ændret til ${lang === 'da' ? 'Dansk' : 'English'}`, 'success');
}

function changeCurrency(curr) {
    console.log('Changing currency to:', curr);
    
    currentCurrency = curr;
    localStorage.setItem('selectedCurrency', currentCurrency);
    
    const display = document.getElementById('currentCurrencyDisplay');
    if (display) {
        display.textContent = curr;
    }
    
    toggleCurrencyDropdown();
    
    // Update all prices on the page
    updateCurrency();
    
    showNotification(`Valuta ændret til ${curr}`, 'success');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const languageContainer = document.querySelector('.language-selector-btn');
    const currencyContainer = document.querySelector('.currency-selector-btn');
    
    if (languageContainer && !languageContainer.contains(event.target)) {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
            languageContainer.classList.remove('active');
        }
    }
    
    if (currencyContainer && !currencyContainer.contains(event.target)) {
        const dropdown = document.getElementById('currencyDropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
            currencyContainer.classList.remove('active');
        }
    }
});

// Test if functions are accessible globally
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.toggleCurrencyDropdown = toggleCurrencyDropdown;
    window.toggleCart = toggleCart;
    window.toggleWishlist = toggleWishlist;
    window.toggleMobileMenu = toggleMobileMenu;
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;

console.log('Language and currency functions loaded:', {
    toggleLanguageDropdown: typeof toggleLanguageDropdown,
    toggleCurrencyDropdown: typeof toggleCurrencyDropdown,
    changeLanguage: typeof changeLanguage,
    changeCurrency: typeof changeCurrency
});