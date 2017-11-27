(function () {
    const filesToCache = [
        '.',
        '/engagement-team-handbook/',
        '/engagement-team-handbook/404',
        '/engagement-team-handbook/offline',
        '/engagement-team-handbook/manifest.json',
        '/engagement-team-handbook/css/master.css',
        '/engagement-team-handbook/js/main.js',
        '/engagement-team-handbook/service-worker.js',
        '/engagement-team-handbook/image/logo-mob.png',
        '/engagement-team-handbook/image/logo-white.png',
        '/engagement-team-handbook/image/tla-gitflow.svg',
        '/engagement-team-handbook/image/gulp-workflow.png',
        '/engagement-team-handbook/_fonts/BrandonGrotesque/bold.ttf',
        '/engagement-team-handbook/_fonts/BrandonGrotesque/bold.woff',
        '/engagement-team-handbook/_fonts/BrandonGrotesque/bold.woff2',
        '/engagement-team-handbook/_fonts/BrandonGrotesque/regular.ttf',
        '/engagement-team-handbook/_fonts/BrandonGrotesque/regular.woff',
        '/engagement-team-handbook/_fonts/BrandonGrotesque/regular.woff2',
        '/engagement-team-handbook/docs/what-we-do/',
        '/engagement-team-handbook/docs/team-aims/',
        '/engagement-team-handbook/docs/useful-links/',
        '/engagement-team-handbook/docs/source-control/',
        '/engagement-team-handbook/docs/jira/',
        '/engagement-team-handbook/docs/documentation/',
        '/engagement-team-handbook/docs/code-reviews/',
        '/engagement-team-handbook/docs/logging/',
        '/engagement-team-handbook/docs/incidents/',
        '/engagement-team-handbook/docs/general-best-practices/',
        '/engagement-team-handbook/docs/front-end-best-practices/',
        '/engagement-team-handbook/docs/back-end-best-practices/',
        '/engagement-team-handbook/docs/greenfield-project-checklist/'
    ];

    var staticCacheName = 'engagement-handbook-v1.1';

    self.addEventListener('install', (event) => {
        event.waitUntil(
            caches.open(staticCacheName)
                .then(function (cache) {
                    return cache.addAll(filesToCache);
                })
        );
    });

    self.addEventListener('fetch', (event) => {
        console.log('Fetch event for ', event.request.url);
        event.respondWith(
          caches.match(event.request).then(function(response) {
            if (response) {
              console.log('Found ', event.request.url, ' in cache');
              return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request).then(function(response) {
              if (response.status === 404) {
                return caches.match('pages/404.html');
              }
              return caches.open(staticCacheName).then(function(cache) {
                  if(event.request.url.startsWith('http'))
                  {
                      cache.put(event.request.url, response.clone());
                  }
                return response;
              });
            });
          }).catch(function(error) {
            console.log('Error, ', error);
            return caches.match('pages/offline.html');
          })
        );
    });

    self.addEventListener('activate', (event) => {
        console.log('Activating new service worker...');

        var cacheWhitelist = [staticCacheName];

        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    });
})();
