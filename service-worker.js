const CACHE_NAME = "tokumaru-book-v1";

const urlsToCache = [
  "./",
  "./index.html",

  "./images/page1.jpg",
  "./images/page2.jpg",
  "./images/page3.jpg",
  "./images/page4.jpg",
  "./images/page5.jpg",
  "./images/page6.jpg",
  "./images/page7.jpg",
  "./images/page8.jpg",
  "./images/page9.jpg",
  "./images/page10.jpg"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );

});