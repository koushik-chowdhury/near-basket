const CACHE_NAME = "nearbasket-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./cart.html",
  "./category.html",
  "./style.css",
  "./script.js",
  "./logo/logo.png",
];

// install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((res) => {
          return res;
        })
      );
    })
  );
});
