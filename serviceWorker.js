// const staticPage = "dev-user-site-v1";
const staticPage = 'TESJIchat-cache-v1';
const assets = [
     "/",
     "/index.html",
     "/registro.html",
     "/chat.html",
     "/JS/aIndex.js",
     "/JS/aRegistrarse.js",
     "/JS/chat.js",
     "/JS/coneccionReg.js",
     "/JS/coneccionInd.js",
     "/JS/aIndeChat"
]


/* self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); */
self.addEventListener("install", (installEvent) => {
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
})



// if ("serviceWorker" in navegator){
//      window.addEventListener("load",()=>{
//           navigator.serviceWorker.register("/serviceWorker.js").then(res => console.log("serviceWorker resgistrado"))
//      })
// }
/* if ('serviceWorker' in navigator) {
     window.addEventListener('load', function() {
       navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
         console.log('ServiceWorker registrado con éxito:', registration.scope);
       }, function(error) {
         console.log('Fallo al registrar el ServiceWorker:', error);
       });
     });
   } */
     if ( "serviceWorker" in navigator ) {
      window.addEventListener ( "load", (  ) => {
           navigator.serviceWorker.register ( "/serviceWorker.js" ).then ( response => console.log ( "serviceWorker registrado" ) ).catch ( err => console.log ( "serviceWorker no registrado" ) )
      } )
 }