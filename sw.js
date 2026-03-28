const CACHE_NAME = 'food-offers-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                return cache.addAll([
    '/restaurant-offers/',
    '/restaurant-offers/index.html',
    '/restaurant-offers/manifest.json',
    '/restaurant-offers/icon_192x192.png',
    '/restaurant-offers/icon_512x512.png'
]);
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Network first for Google API calls, cache first for app shell
    if (event.request.url.includes('googleapis.com') || 
        event.request.url.includes('accounts.google.com')) {
        return; // Let Google API calls go straight to network
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            return cached || fetch(event.request);
        })
    );
});
