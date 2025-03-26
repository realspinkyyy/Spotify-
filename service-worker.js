self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('spotify-clone-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                'https://via.placeholder.com/50x50',
                'https://via.placeholder.com/180x180',
                // Add any other files you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
