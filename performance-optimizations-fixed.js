// ========================================
// PERFORMANCE OPTIMIZATIONS - FIXED VERSION
// ========================================

// Performance: Debounce function for search
function debounceOptimized(func, wait) {
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

// Performance: Throttle function for scroll events
function throttleOptimized(func, limit) {
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

// Performance: Intersection Observer for lazy loading
const lazyLoadObserverOptimized = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy');
                lazyLoadObserverOptimized.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

// Performance: Enhanced localStorage with error handling
const StorageOptimized = {
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

// Performance: Safe execution wrapper
function safeExecuteOptimized(func, fallback = null) {
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

// Performance: Enhanced search with debouncing
const performSearchOptimized = debounceOptimized((query) => {
    if (!query.trim()) return;
    
    // Show loading state
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.innerHTML = '<div style="text-align: center; padding: 2rem;">Søger...</div>';
    }
    
    // Simulate search delay for better UX
    setTimeout(() => {
        // Your search logic here
        console.log('Searching for:', query);
    }, 300);
}, 300);

// Performance: Initialize lazy loading
function initializeLazyLoadingOptimized() {
    document.querySelectorAll('img[data-src]').forEach(img => {
        lazyLoadObserverOptimized.observe(img);
    });
}

// Performance: Preload critical images
function preloadCriticalImagesOptimized() {
    const criticalImages = [
        'images/palestine-map-black-tshirt.jpg',
        'images/keffiyeh-scarf.jpg',
        'images/olive-wood-carving.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Performance: Optimize scroll events
const optimizedScrollHandler = throttleOptimized(() => {
    // Your scroll logic here
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scroll-based animations or effects
    if (scrollTop > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
}, 16); // ~60fps

// Performance: Service Worker registration with error handling
function registerServiceWorkerOptimized() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Performance: Initialize all optimizations
function initializePerformanceOptimizationsFixed() {
    initializeLazyLoadingOptimized();
    preloadCriticalImagesOptimized();
    registerServiceWorkerOptimized();
    
    // Add optimized scroll listener
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Add optimized search listener (only if search input exists and no existing listener)
    const searchInput = document.getElementById('searchInput');
    if (searchInput && !searchInput.hasAttribute('data-optimized-search')) {
        searchInput.setAttribute('data-optimized-search', 'true');
        searchInput.addEventListener('input', (e) => {
            performSearchOptimized(e.target.value);
        });
    }
    
    console.log('🚀 Performance optimizations initialized (fixed version)!');
}

// Performance: Enhanced notification system
function showNotificationOptimized(message, type = 'info', duration = 3000) {
    const notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add animation classes
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    
    notificationContainer.appendChild(notification);
    
    // Trigger animation
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove with animation
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Performance: Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePerformanceOptimizationsFixed);
} else {
    initializePerformanceOptimizationsFixed();
}

// Performance: Expose optimized functions globally (with unique names)
window.StorageOptimized = StorageOptimized;
window.safeExecuteOptimized = safeExecuteOptimized;
window.showNotificationOptimized = showNotificationOptimized;
window.performSearchOptimized = performSearchOptimized;
window.debounceOptimized = debounceOptimized;
window.throttleOptimized = throttleOptimized;
