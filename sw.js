self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // الحدث ده لازم يكون موجود عشان المتصفح يقبل تنزيل التطبيق
});