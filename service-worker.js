/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-34c132b';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./favicon.png","./index.html","./manifest.json","./povidani_o_pejskovi_a_kocicce_002.html","./povidani_o_pejskovi_a_kocicce_005.html","./povidani_o_pejskovi_a_kocicce_006.html","./povidani_o_pejskovi_a_kocicce_007.html","./povidani_o_pejskovi_a_kocicce_008.html","./povidani_o_pejskovi_a_kocicce_009.html","./povidani_o_pejskovi_a_kocicce_010.html","./povidani_o_pejskovi_a_kocicce_011.html","./povidani_o_pejskovi_a_kocicce_012.html","./povidani_o_pejskovi_a_kocicce_013.html","./povidani_o_pejskovi_a_kocicce_014.html","./povidani_o_pejskovi_a_kocicce_015.html","./povidani_o_pejskovi_a_kocicce_016.html","./povidani_o_pejskovi_a_kocicce_017.html","./povidani_o_pejskovi_a_kocicce_018.html","./povidani_o_pejskovi_a_kocicce_019.html","./povidani_o_pejskovi_a_kocicce_020.html","./povidani_o_pejskovi_a_kocicce_021.html","./povidani_o_pejskovi_a_kocicce_022.html","./povidani_o_pejskovi_a_kocicce_023.html","./povidani_o_pejskovi_a_kocicce_024.html","./povidani_o_pejskovi_a_kocicce_025.html","./povidani_o_pejskovi_a_kocicce_026.html","./povidani_o_pejskovi_a_kocicce_027.html","./povidani_o_pejskovi_a_kocicce_028.html","./povidani_o_pejskovi_a_kocicce_029.html","./povidani_o_pejskovi_a_kocicce_030.html","./povidani_o_pejskovi_a_kocicce_031.html","./povidani_o_pejskovi_a_kocicce_032.html","./povidani_o_pejskovi_a_kocicce_033.html","./povidani_o_pejskovi_a_kocicce_034.html","./povidani_o_pejskovi_a_kocicce_035.html","./povidani_o_pejskovi_a_kocicce_036.html","./povidani_o_pejskovi_a_kocicce_037.html","./povidani_o_pejskovi_a_kocicce_038.html","./povidani_o_pejskovi_a_kocicce_039.html","./povidani_o_pejskovi_a_kocicce_040.html","./povidani_o_pejskovi_a_kocicce_041.html","./povidani_o_pejskovi_a_kocicce_042.html","./povidani_o_pejskovi_a_kocicce_043.html","./povidani_o_pejskovi_a_kocicce_044.html","./povidani_o_pejskovi_a_kocicce_045.html","./povidani_o_pejskovi_a_kocicce_046.html","./povidani_o_pejskovi_a_kocicce_047.html","./povidani_o_pejskovi_a_kocicce_048.html","./povidani_o_pejskovi_a_kocicce_049.html","./povidani_o_pejskovi_a_kocicce_050.html","./povidani_o_pejskovi_a_kocicce_051.html","./povidani_o_pejskovi_a_kocicce_052.html","./povidani_o_pejskovi_a_kocicce_053.html","./povidani_o_pejskovi_a_kocicce_054.html","./povidani_o_pejskovi_a_kocicce_055.html","./povidani_o_pejskovi_a_kocicce_056.html","./povidani_o_pejskovi_a_kocicce_057.html","./povidani_o_pejskovi_a_kocicce_058.html","./povidani_o_pejskovi_a_kocicce_059.html","./povidani_o_pejskovi_a_kocicce_060.html","./povidani_o_pejskovi_a_kocicce_061.html","./povidani_o_pejskovi_a_kocicce_062.html","./povidani_o_pejskovi_a_kocicce_063.html","./povidani_o_pejskovi_a_kocicce_064.html","./povidani_o_pejskovi_a_kocicce_065.html","./povidani_o_pejskovi_a_kocicce_066.html","./povidani_o_pejskovi_a_kocicce_067.html","./povidani_o_pejskovi_a_kocicce_068.html","./povidani_o_pejskovi_a_kocicce_069.html","./povidani_o_pejskovi_a_kocicce_070.html","./povidani_o_pejskovi_a_kocicce_071.html","./povidani_o_pejskovi_a_kocicce_072.html","./povidani_o_pejskovi_a_kocicce_073.html","./povidani_o_pejskovi_a_kocicce_074.html","./povidani_o_pejskovi_a_kocicce_075.html","./povidani_o_pejskovi_a_kocicce_076.html","./povidani_o_pejskovi_a_kocicce_077.html","./povidani_o_pejskovi_a_kocicce_078.html","./povidani_o_pejskovi_a_kocicce_079.html","./povidani_o_pejskovi_a_kocicce_080.html","./povidani_o_pejskovi_a_kocicce_081.html","./povidani_o_pejskovi_a_kocicce_082.html","./povidani_o_pejskovi_a_kocicce_083.html","./povidani_o_pejskovi_a_kocicce_084.html","./povidani_o_pejskovi_a_kocicce_085.html","./povidani_o_pejskovi_a_kocicce_086.html","./povidani_o_pejskovi_a_kocicce_087.html","./povidani_o_pejskovi_a_kocicce_088.html","./povidani_o_pejskovi_a_kocicce_089.html","./povidani_o_pejskovi_a_kocicce_090.html","./povidani_o_pejskovi_a_kocicce_091.html","./povidani_o_pejskovi_a_kocicce_092.html","./povidani_o_pejskovi_a_kocicce_093.html","./povidani_o_pejskovi_a_kocicce_094.html","./povidani_o_pejskovi_a_kocicce_095.html","./povidani_o_pejskovi_a_kocicce_096.html","./povidani_o_pejskovi_a_kocicce_097.html","./povidani_o_pejskovi_a_kocicce_098.html","./povidani_o_pejskovi_a_kocicce_099.html","./povidani_o_pejskovi_a_kocicce_100.html","./povidani_o_pejskovi_a_kocicce_101.html","./povidani_o_pejskovi_a_kocicce_102.html","./povidani_o_pejskovi_a_kocicce_103.html","./povidani_o_pejskovi_a_kocicce_104.html","./povidani_o_pejskovi_a_kocicce_105.html","./povidani_o_pejskovi_a_kocicce_106.html","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.png","./resources/obalka.jpg","./resources/povidani_o_pejskovi_a_kocicce_001.jpg","./resources/povidani_o_pejskovi_a_kocicce_002.jpg","./resources/povidani_o_pejskovi_a_kocicce_003.jpg","./resources/povidani_o_pejskovi_a_kocicce_004.jpg","./resources/povidani_o_pejskovi_a_kocicce_005.jpg","./resources/povidani_o_pejskovi_a_kocicce_006.jpg","./resources/povidani_o_pejskovi_a_kocicce_007.jpg","./resources/povidani_o_pejskovi_a_kocicce_008.jpg","./resources/povidani_o_pejskovi_a_kocicce_009.jpg","./resources/povidani_o_pejskovi_a_kocicce_010.jpg","./resources/povidani_o_pejskovi_a_kocicce_011.jpg","./resources/povidani_o_pejskovi_a_kocicce_012.jpg","./resources/povidani_o_pejskovi_a_kocicce_013.jpg","./resources/povidani_o_pejskovi_a_kocicce_014.jpg","./resources/povidani_o_pejskovi_a_kocicce_015.jpg","./resources/povidani_o_pejskovi_a_kocicce_016.jpg","./resources/povidani_o_pejskovi_a_kocicce_017.jpg","./resources/povidani_o_pejskovi_a_kocicce_018.jpg","./resources/povidani_o_pejskovi_a_kocicce_019.jpg","./resources/povidani_o_pejskovi_a_kocicce_020.jpg","./resources/povidani_o_pejskovi_a_kocicce_021.jpg","./resources/povidani_o_pejskovi_a_kocicce_022.jpg","./resources/povidani_o_pejskovi_a_kocicce_023.jpg","./resources/povidani_o_pejskovi_a_kocicce_024.jpg","./resources/povidani_o_pejskovi_a_kocicce_025.jpg","./resources/povidani_o_pejskovi_a_kocicce_026.jpg","./resources/povidani_o_pejskovi_a_kocicce_027.jpg","./resources/povidani_o_pejskovi_a_kocicce_028.jpg","./resources/povidani_o_pejskovi_a_kocicce_029.jpg","./resources/povidani_o_pejskovi_a_kocicce_030.jpg","./resources/povidani_o_pejskovi_a_kocicce_031.jpg","./resources/povidani_o_pejskovi_a_kocicce_032.jpg","./resources/povidani_o_pejskovi_a_kocicce_033.jpg","./resources/povidani_o_pejskovi_a_kocicce_034.jpg","./resources/povidani_o_pejskovi_a_kocicce_035.jpg","./resources/povidani_o_pejskovi_a_kocicce_036.jpg","./resources/povidani_o_pejskovi_a_kocicce_037.jpg","./resources/povidani_o_pejskovi_a_kocicce_038.jpg","./resources/povidani_o_pejskovi_a_kocicce_039.jpg","./resources/povidani_o_pejskovi_a_kocicce_040.jpg","./resources/povidani_o_pejskovi_a_kocicce_041.jpg","./resources/povidani_o_pejskovi_a_kocicce_042.jpg","./resources/povidani_o_pejskovi_a_kocicce_043.jpg","./resources/povidani_o_pejskovi_a_kocicce_044.jpg","./resources/povidani_o_pejskovi_a_kocicce_045.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
