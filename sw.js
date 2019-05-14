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
    "revision": "422878234d9d7d6d272924611e0b6ba8"
  },
  {
    "url": "assets/css/style.css",
    "revision": "1524420b432f4bff7f8e26741e0b13dc"
  },
  {
    "url": "index.html",
    "revision": "88e178c2beb5ca4e2eaf4e1839a37d71"
  },
  {
    "url": "style.css",
    "revision": "476577e256d6babf0dd107c461aeec41"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
