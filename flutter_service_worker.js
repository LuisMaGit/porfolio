'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "03d2ecf02cfed3d799be1f0d2f0ef609",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "3a9b1a5d7a571e0e112e8cb763719c08",
"/": "3a9b1a5d7a571e0e112e8cb763719c08",
"main.dart.js": "2de4b7d7c4d2f1cc5b1eed837fb419ae",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "eba88d68eae7dde72a709dc99fdb9393",
"icons/Icon-192.png": "b6fe53f6aa783157a184d7ba3a59d9c7",
"icons/Icon-maskable-192.png": "b6fe53f6aa783157a184d7ba3a59d9c7",
"icons/Icon-maskable-512.png": "63cc67418c2fa2471b00dfcec0a64270",
"icons/Icon-512.png": "63cc67418c2fa2471b00dfcec0a64270",
"manifest.json": "5cc84874476a6db3ef1853fd16924b80",
"assets/AssetManifest.json": "6d5baf4706842d418868190d9046293d",
"assets/NOTICES": "71b3906a8cf0e2094226ccb53683d68a",
"assets/FontManifest.json": "42b9c2ceb79270b43112fcbdda0b8393",
"assets/AssetManifest.bin.json": "e32ec2ebcea9f7e0c318d75e51df7269",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/svg/github.svg": "a70650986892c70caf86ff6c9cb900e1",
"assets/lib/assets/svg/lodgify.svg": "291e8d42de2980768e10f5ff28752984",
"assets/lib/assets/svg/app_store.svg": "bb25045ebac5d28d774353ea5020c414",
"assets/lib/assets/svg/google_play.svg": "6f63ae5b48c65398305b465f17b99d48",
"assets/lib/assets/svg/conexiones.svg": "657f92a9bf94cbf58d91ab945d0ca2ad",
"assets/lib/assets/svg/linkedin.svg": "f2831dd379db936612a741d998082339",
"assets/lib/assets/svg/wordle.svg": "6084f0137b5cfc115a9b084fb849f568",
"assets/lib/assets/me.jpg": "33cef580c76a52ad79afed6e14bbb224",
"assets/lib/assets/projects_pics/crypto_light.png": "32df77fc5ff10d0de3becee9070bbe2b",
"assets/lib/assets/projects_pics/wordle_light.png": "0de68f14650566db4abb6a17b1e48fcb",
"assets/lib/assets/projects_pics/crypto_dark.png": "159785f9e81850e82f49560b40e8c9d1",
"assets/lib/assets/projects_pics/notes_light.png": "e4e43be39258e1d38b13e5197c8764dd",
"assets/lib/assets/projects_pics/conexiones_light.png": "136cfe703a7b6ab503f73ab17119eee2",
"assets/lib/assets/projects_pics/conexiones_dark.png": "2e31b9aa2fab5f3efcb19290f403b5ba",
"assets/lib/assets/projects_pics/notes_dark.png": "c1f54e0beb706fb6a83ac75e7d4676f1",
"assets/lib/assets/projects_pics/wordle_dark.png": "bd3ea46ade43018b5769537583256911",
"assets/lib/assets/projects_pics/lodgify.png": "434f4668bcbfb92112bbaaa95c893aa7",
"assets/lib/assets/fonts/MPLUS1Code-Medium.ttf": "39c2e181f47404298c327d0b09329780",
"assets/lib/assets/fonts/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/lib/assets/fonts/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/lib/assets/fonts/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/lib/assets/fonts/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/AssetManifest.bin": "790f4aad9277f409282623d9b766b245",
"assets/fonts/MaterialIcons-Regular.otf": "189718e5e3a6efaf9aac1ab8e41001c4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
