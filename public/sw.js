// Homecoming Philadelphia — offline service worker.
// Precache the crisis-critical pages so 988 and "Get help now" work with no
// signal, then cache every page/asset as it's visited. Cache-first with a
// background refresh keeps it fast on a slow connection and usable offline.

const CACHE = "homecoming-v1";
const CORE = [
  "/",
  "/en/",
  "/es/",
  "/en/help-now/",
  "/es/help-now/",
  "/icon-192.png",
  "/manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match("/en/"));
      // Serve from cache immediately when we have it; refresh in the background.
      return cached || network;
    }),
  );
});
