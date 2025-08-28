document.getElementById('ping').addEventListener("click", function(){

    document.getElementById('out').textContent= "JS is working";
})


//helper file (runs in background, separate from main page, helps with offline and overall perfomance)

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(()=> console.log('Service Worker Registered'))
    .catch(err => console.log('SW registration failed', err));
}