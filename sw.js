const CACHE = 'mjupa-v1';
const FILES = [
  '/Mjupa-chat/',
  '/Mjupa-chat/index.html',
  '/Mjupa-chat/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => 
      caches.match(e.request)
    )
  );
});
