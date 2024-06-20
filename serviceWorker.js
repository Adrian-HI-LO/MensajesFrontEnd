// const staticPage = "dev-user-site-v1";
const CACHE_NAME = 'mensajeria-cache-v1';
const urlsToCache = [
     "/",
     "index.html",
     "registro.html",
     "chat.html",
     "/JS/aIndex.js",
     "/JS/aRegistrarse.js",
     "/JS/chat.js",
     "/JS/coneccionReg.js",
     "/JS/coneccionInd.js",
     "/JS/aIndeChat"
]


self.addEventListener('install', function(event) {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then(function(cache) {
           return cache.addAll(urlsToCache);
         })
     );
   });
   
   self.addEventListener('fetch', function(event) {
     event.respondWith(
       caches.match(event.request)
         .then(function(response) {
           if (response) {
             return response;
           }
           return fetch(event.request);
         })
     );
   });
   
   self.addEventListener('activate', function(event) {
     var cacheWhitelist = [CACHE_NAME];
     event.waitUntil(
       caches.keys().then(function(cacheNames) {
         return Promise.all(
           cacheNames.map(function(cacheName) {
             if (cacheWhitelist.indexOf(cacheName) === -1) {
               return caches.delete(cacheName);
             }
           })
         );
       })
     );
   });
/* self.addEventListener("install", (installEvent) => {
     installEvent.waitUntil(
          caches.open(staticPage).then((cache) =>{
               cache.addAll(assets);
          })
     )
});
self.addEventListener("fetch", (fetchEvent) =>{
     fetchEvent.respondWith(
          caches.match(fetchEvent.request).then(response => response || fetch(fetchEvent.request))
     )
}) */



// if ("serviceWorker" in navegator){
//      window.addEventListener("load",()=>{
//           navigator.serviceWorker.register("/serviceWorker.js").then(res => console.log("serviceWorker resgistrado"))
//      })
// }
if ('serviceWorker' in navigator) {
     window.addEventListener('load', function() {
       navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
         console.log('ServiceWorker registrado con éxito:', registration.scope);
       }, function(error) {
         console.log('Fallo al registrar el ServiceWorker:', error);
       });
     });
   }