(function () {
    var filesToCache = [
        '.',
        '/engagement-team-handbook/',
        '/engagement-team-handbook/manifest.json' ,
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

    var staticCacheName = 'engagement-handbook-v1';

    self.addEventListener('install', function (event) {
        event.waitUntil(
            caches.open(staticCacheName)
                .then(function (cache) {
                    return cache.addAll(filesToCache);
                })
        );
    });

    self.addEventListener('fetch', function (event) {
            event.respondWith(
                caches.match(event.request)
                .then(function (response) {
                        return response || fetchAndCache(event.request);
                    })
            );
    });

    self.addEventListener('activate', function (event) {
        console.log('Activating new service worker...');

        var cacheWhitelist = [staticCacheName];

        event.waitUntil(
            caches.keys().then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    });

    function fetchAndCache(url) {
        return fetch(url)
            .then(function (response) {
                // Check if we received a valid response
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return caches.open(CACHE_NAME)
                    .then(function (cache) {
                        cache.put(url, response.clone());
                        return response;
                    });
            })
            .catch(function (error) {
                console.log('Request failed:', error);
                // You could return a custom offline 404 page here
            });
    }
})();
