// Service Worker for Palestinian Heritage Store
const CACHE_NAME = 'palestinensisk-arv-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';
const IMAGE_CACHE = 'images-v1.0.0';

// Critical resources for immediate loading
const CRITICAL_RESOURCES = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/offline.html'
];

// Static assets to cache
const STATIC_ASSETS = [
    '/produkter.html',
    '/om-os.html',
    '/kultur.html',
    '/kontakt.html',
    '/faq.html',
    '/levering-returnering.html',
    '/privatlivspolitik.html',
    '/checkout.html',
    '/order-confirmation.html'
];

// Image assets to cache (only local files that exist)
const IMAGE_ASSETS = [
    '/images/palestine-map-black-tshirt.jpg',
    '/images/palestine-map-white-tshirt.jpg',
    '/images/free-palestine-beige-tshirt.jpg',
    '/images/free-palestine-black-tshirt.jpg',
    '/images/free-palestine-white-tshirt.jpg',
    '/images/from-river-to-sea-badge.jpg',
    '/images/humanity-palestine-badge.jpg',
    '/images/aaron-bushnell-badge.jpg',
    '/images/palestine-stripes-white-tshirt.jpg',
    '/images/palestine-stripes-black-tshirt.jpg',
    '/images/palestine-stripes-pink-tshirt.jpg',
    '/images/palestine-stripes-blue-tshirt.jpg',
    '/images/palestine-pattern-grey-tshirt.jpg',
    '/images/palestine-pattern-pink-tshirt.jpg'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        Promise.all([
            // Cache critical resources immediately
            caches.open(STATIC_CACHE).then(cache => {
                console.log('Service Worker: Caching critical resources');
                return cache.addAll(CRITICAL_RESOURCES);
            }),
            
            // Cache static assets
            caches.open(STATIC_CACHE).then(cache => {
                console.log('Service Worker: Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            
            // Cache images
            caches.open(IMAGE_CACHE).then(cache => {
                console.log('Service Worker: Caching images');
                return cache.addAll(IMAGE_ASSETS);
            })
        ]).then(() => {
            console.log('Service Worker: Installation complete');
            return self.skipWaiting();
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== STATIC_CACHE && 
                        cacheName !== DYNAMIC_CACHE && 
                        cacheName !== IMAGE_CACHE) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker: Activation complete');
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Handle different types of requests
    if (request.destination === 'image') {
        event.respondWith(handleImageRequest(request));
    } else if (request.destination === 'style' || request.destination === 'script') {
        event.respondWith(handleStaticAssetRequest(request));
    } else if (request.destination === 'document') {
        event.respondWith(handleDocumentRequest(request));
    } else {
        event.respondWith(handleApiRequest(request));
    }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
    try {
        const cache = await caches.open(IMAGE_CACHE);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.log('Service Worker: Image fetch failed:', error);
        return new Response('Image not available', { status: 404 });
    }
}

// Handle static asset requests with cache-first strategy
async function handleStaticAssetRequest(request) {
    try {
        const cache = await caches.open(STATIC_CACHE);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.log('Service Worker: Static asset fetch failed:', error);
        return new Response('Asset not available', { status: 404 });
    }
}

// Handle document requests with network-first strategy
async function handleDocumentRequest(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.log('Service Worker: Document fetch failed, trying cache:', error);
        
        const cache = await caches.open(DYNAMIC_CACHE);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Return offline page for HTML requests
        if (request.destination === 'document') {
            const fallback = await caches.match('/offline.html');
            if (fallback) return fallback;
        }
        
        return new Response('Page not available offline', { status: 404 });
    }
}

// Handle API requests with network-first strategy
async function handleApiRequest(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.log('Service Worker: API fetch failed, trying cache:', error);
        
        const cache = await caches.open(DYNAMIC_CACHE);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        return new Response('API not available offline', { status: 503 });
    }
}

// Background sync for offline actions
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    try {
        // Sync offline cart data
        const offlineData = await getOfflineData();
        if (offlineData.cart && offlineData.cart.length > 0) {
            await syncCartData(offlineData.cart);
        }
        
        // Sync offline orders
        if (offlineData.orders && offlineData.orders.length > 0) {
            await syncOrderData(offlineData.orders);
        }
        
        console.log('Service Worker: Background sync completed');
    } catch (error) {
        console.log('Service Worker: Background sync failed:', error);
    }
}

// Push notification handling
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'Ny besked fra Palæstinensisk Arv',
        icon: '/images/palestine-map-black-tshirt.jpg',
        badge: '/images/palestine-map-white-tshirt.jpg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Se produkter',
                icon: '/images/palestine-stripes-black-tshirt.jpg'
            },
            {
                action: 'close',
                title: 'Luk',
                icon: '/images/palestine-stripes-white-tshirt.jpg'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Palæstinensisk Arv', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/produkter.html')
        );
    } else if (event.action === 'close') {
        // Just close the notification
    } else {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handling for communication with main thread
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
});

// Utility functions
async function getOfflineData() {
    // Implementation for getting offline data from IndexedDB
    return { cart: [], orders: [] };
}

async function syncCartData(cartData) {
    // Implementation for syncing cart data to server
    console.log('Syncing cart data:', cartData);
}

async function syncOrderData(orderData) {
    // Implementation for syncing order data to server
    console.log('Syncing order data:', orderData);
}

// Performance monitoring (lightweight, no extra fetch listener)
// Note: Avoid duplicate fetch listeners that may interfere with response handling.