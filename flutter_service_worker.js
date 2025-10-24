'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7c1d8adbd1785e0b8ef91a5233838b30",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "244b9ee9b0b933d16adde6dbfd0c20c8",
"/": "244b9ee9b0b933d16adde6dbfd0c20c8",
"main.dart.js": "c03afd033535804527bb9dc86140b519",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "eba88d68eae7dde72a709dc99fdb9393",
"icons/Icon-192.png": "b6fe53f6aa783157a184d7ba3a59d9c7",
"icons/Icon-maskable-192.png": "b6fe53f6aa783157a184d7ba3a59d9c7",
"icons/Icon-maskable-512.png": "63cc67418c2fa2471b00dfcec0a64270",
"icons/Icon-512.png": "63cc67418c2fa2471b00dfcec0a64270",
"manifest.json": "345e4fa5f0254e62b0428722127e7348",
"assets/AssetManifest.json": "141e75392f237ecd87f266c908777fc5",
"assets/NOTICES": "839a9316e0d62ba054e75d25e9fa4c88",
"assets/FontManifest.json": "42b9c2ceb79270b43112fcbdda0b8393",
"assets/AssetManifest.bin.json": "18d0d79f2dd51ee5a20cb9bbd9abc637",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/svg/pactype.svg": "8cf4286886d73161164208e7e858e33a",
"assets/lib/assets/svg/github.svg": "a70650986892c70caf86ff6c9cb900e1",
"assets/lib/assets/svg/lodgify.svg": "291e8d42de2980768e10f5ff28752984",
"assets/lib/assets/svg/app_store.svg": "bb25045ebac5d28d774353ea5020c414",
"assets/lib/assets/svg/google_play.svg": "6f63ae5b48c65398305b465f17b99d48",
"assets/lib/assets/svg/conexiones.svg": "657f92a9bf94cbf58d91ab945d0ca2ad",
"assets/lib/assets/svg/linkedin.svg": "f2831dd379db936612a741d998082339",
"assets/lib/assets/svg/wordle.svg": "6084f0137b5cfc115a9b084fb849f568",
"assets/lib/assets/svg/apple.svg": "88c9039cca97dacc377323cce1ec5703",
"assets/lib/assets/me.jpg": "33cef580c76a52ad79afed6e14bbb224",
"assets/lib/assets/projects_pics/crypto_light.png": "32df77fc5ff10d0de3becee9070bbe2b",
"assets/lib/assets/projects_pics/wordle_light.png": "0de68f14650566db4abb6a17b1e48fcb",
"assets/lib/assets/projects_pics/pactype.png": "be03cb8e48e87bcdc87779f9726e4372",
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
"assets/AssetManifest.bin": "605865c8bfc3e45fa29a94df5d33c23a",
"assets/fonts/MaterialIcons-Regular.otf": "96e0cf5eb009117ca854f277092aef7c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
