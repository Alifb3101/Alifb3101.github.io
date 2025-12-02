'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ff84a5bb3c5de7bab722c35d656cf9e",
"version.json": "9ccd24e867cdc56791a717db4b509b89",
"index.html": "5a4cc6eeedebab2703ad66e0f1cc74c8",
"/": "5a4cc6eeedebab2703ad66e0f1cc74c8",
"main.dart.js": "e7ff3a827ff8063e34bd1762b6d4756f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dc8215f4612930e38691945bedb1b316",
"assets/AssetManifest.json": "61c32bbd1f1f51483f0af7dfd81ccb3d",
"assets/NOTICES": "0f96dafafda98522a4b23a94d377f985",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "54b8282b11d6b03e42184a252183db8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0c2cce3ed6232be0c0a506f7aee3a08a",
"assets/fonts/MaterialIcons-Regular.otf": "d0d19240cd125b024e15d7f9df7aacc2",
"assets/assets/ali2.jpg": "eb1e62fa38ab43d456c31d7ed0e51839",
"assets/assets/places/dubainight.jpeg": "4ad47d9634d4da7d8bc646dced74d8cc",
"assets/assets/places/andmaan.jpg": "ece7d0ccd47aaf8dfe4d180d19bec512",
"assets/assets/places/norwayflag.jpg": "ec48e23d1ce70a0e8d8829e316573045",
"assets/assets/places/norway.jpeg": "9318714b5f09d358b767d180f24b1321",
"assets/assets/places/usaplace.jpeg": "52c26dbb205dfa97e0ba51d52b63f1c7",
"assets/assets/places/turkey.jpeg": "eaa3c906527017fc0820d457eec2fb9b",
"assets/assets/places/switzerland.jpeg": "242364e8b565ab56c3545525974409f0",
"assets/assets/places/italy.jpeg": "b2486669f20d58df184e1220a39799ac",
"assets/assets/places/turkeyflag.png": "0514bd3f268c22db5626100ade06de3b",
"assets/assets/places/italyflag.jpeg": "28c7301d64c9564faef2b05ccfcc021c",
"assets/assets/places/germany.png": "242cc0eade7d840fad3619cc2c08788f",
"assets/assets/places/germany.jpg": "5b85480af1300c6b5cf3a3606e7b2e09",
"assets/assets/places/usa.jpeg": "836c70851e4de4a0b5f15a741c6667ed",
"assets/assets/places/uk.jpg": "a681af67d0ef8a2d9816f9a1f7bcc8a2",
"assets/assets/socialmedia_icon/img5.png": "10d22af94da2cb1d9ce75ce1e47bf968",
"assets/assets/socialmedia_icon/img4.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/socialmedia_icon/img3.png": "ae316b997bc26a989ef0cc4510b85788",
"assets/assets/socialmedia_icon/img2.png": "4f0ad67e90d2049b2b490287b2f55548",
"assets/assets/socialmedia_icon/img1.png": "aef43b236933641aa4081783fe027ff9",
"assets/assets/socialmedia_icon/social.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/upcoming_destination/paris.jpg": "8961b3199b1849712069d17b5c601bca",
"assets/assets/upcoming_destination/brazil.jpeg": "a2c959eec874e41dc77d9307d9dc482e",
"assets/assets/upcoming_destination/new%2520zeland.jpeg": "23fd5e5abef5e400ef8a512f75e8a6c7",
"assets/assets/upcoming_destination/maldives.jpeg": "c310ac4b3671af4b18a3a68d24b9a477",
"assets/assets/upcoming_destination/vietnam.jpeg": "ce8fa9065838126290d6d8e72ea11151",
"assets/assets/upcoming_destination/canada.jpeg": "55b49e8c737e5d6a037e256474b24c68",
"assets/assets/bg.png": "cda9270db6e74f0d442f8a96415174a8",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
