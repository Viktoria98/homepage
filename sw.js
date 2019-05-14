/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/animate.css",
    "revision": "8dbc6dc67b4724087e6d907ff95ac6db"
  },
  {
    "url": "assets/css/preloader.css",
    "revision": "60e1e16b73f0dad2dee8c0c8d64f17bd"
  },
  {
    "url": "assets/css/style.css",
    "revision": "1524420b432f4bff7f8e26741e0b13dc"
  },
  {
    "url": "index.html",
    "revision": "a1817b1ce300abcd020b306d709e974f"
  },
  {
    "url": "style.css",
    "revision": "c0ea746b973e13633df9a2110a939e44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
