self.addEventListener('install', (e) => {
  self.skipWaiting(); // لتحديث التطبيق فوراً عند وجود تغيير
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => console.log('Offline mode not fully cached yet')));
});
