const staticPage = "dev-user-site-v1";
const assets = [
     "/",
     "/index.html",
     "/registro.html",
     "/chat.html",
     "/aIndex.js",
     "/aRegistrarse.js",
     "/chat.js",
     "/coneccion.js"
]
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
if ("serviceWorker" in navegator){
     window.addEventListener("load",()=>{
          navigator.serviceWorker.register("/serviceWorker.js").then(res => console.log("serviceWorker resgistrado"))
     })
}