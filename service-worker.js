self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    clients.claim();
});

self.addEventListener("fetch", event => {
    const hostname = new URL(event.request.url).hostname;
    // Firebase Auth y Firestore siempre deben ir a red; no se cachean respuestas de Google/Firebase.
    if (hostname.endsWith("firebaseio.com") || hostname.endsWith("googleapis.com") || hostname.endsWith("firebaseapp.com") || hostname.endsWith("gstatic.com")) return;
});
