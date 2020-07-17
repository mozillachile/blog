importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const CACHE = "mozillachile-page";
const error = false;

const cacheElements = [ 
 "/offline.html",
 "/images/favicons/apple-touch-icon-180x180.png",
 "/images/favicons/favicon-196x196.png", 
 "/images/favicons/favicon.ico",
 "/stylesheets/pygment_trac.css", 
 "/themes/frontierline-rm/style.css",
 "/themes/frontierline/style.css",
 "/themes/frontierline-rm/js/functions.js",
 "/themes/frontierline-rm/js/jquery.min.js",
 "/themes/frontierline-rm/img/fox-tail.png",
 "/images/logos/750px-All-firefox-logos.png",
 "/themes/frontierline/img/icon-sprite.svg",
 "/themes/frontierline/img/mozilla-wordmark-black.svg",
 "/themes/frontierline/img/mozilla-wordmark-white.svg",
 "/themes/frontierline/img/social-icon-sprite.svg",
 "/themes/frontierline/fonts/opensans-regular.woff2",
 "/themes/frontierline/fonts/ZillaSlab-Regular.woff2",
 "/themes/frontierline/fonts/ZillaSlab-Bold.woff2",
 "/themes/frontierline/fonts/opensans-bold.woff2",
 "/themes/frontierline/img/icon-menu-white.svg",
 "/manifest.json"
];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(cacheElements))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method == "GET"){
    event.respondWith(
      caches.open(CACHE).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request).then(function(response) {
              return response;
            }).catch((error) => {
              return caches.match('/offline.html');
            });
          }
        });
      })
      );
  }
});