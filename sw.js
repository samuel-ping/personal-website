if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,n,t)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts("worker-g5NCKcwkLUYZtRqRyDwoX.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/05d954cf.09448133d75fcd4ba01d.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/3c692732985cea5fca8ec71e12b6da565789bb9f.dfc87468d477a5e1c55e.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/5eec9076b7122a47bb63baa280245b3614395d2a.4bf24ca0210c07002662.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/a697c2ee81f5fc03dacbdd863a5d48322808a22e.65efa138e7bb09582716.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/b8cd623695ec97ec665a179189d5bbe179d34bad.55d22a2cc88fa0e761cb.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/framework.f783f7e0d786735fc5cd.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/main-3634fedda1001bf07cd6.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/404-a458f546c26215fa52f0.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/_app-a0b363a5cb3bac12d458.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/_error-eaecbf88602a34db58d4.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/about-bfe92c7af60f48fde224.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/contact-807a99c4690d6ffaebe5.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/index-415bce07aba0e9f93b6f.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/involvement-5022279d948f4b4a2ae2.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/projects-4781878ae5833bb4840f.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/pages/work-8bd855366ea4e3154f48.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/polyfills-35a7e76dac76ed464290.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/g5NCKcwkLUYZtRqRyDwoX/_buildManifest.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/_next/static/g5NCKcwkLUYZtRqRyDwoX/_ssgManifest.js",revision:"g5NCKcwkLUYZtRqRyDwoX"},{url:"/admin/config.yml",revision:"3c6fa22bbcc67554484148e2cca28ee8"},{url:"/admin/index.html",revision:"debec3bdfca44fa61b0c2ad605df5ebc"},{url:"/apple-touch-icon.png",revision:"3590e59d26522ae20dbd1b7e8a5e5ee9"},{url:"/favicon.ico",revision:"806d2fed0677e688d8b9e9dbc8888314"},{url:"/icons/favicon-16x16.png",revision:"11d080c9914f3ca397ecdfd3d93de247"},{url:"/icons/favicon-32x32.png",revision:"2dc399ea3bc61ed7164e5b175b1efc7a"},{url:"/icons/icon-192x192.png",revision:"9bedfd1f4522380307a4398ab7b689ee"},{url:"/icons/icon-256x256.png",revision:"8e228211b0aa5327095dcbd6b18c8945"},{url:"/icons/icon-384x384.png",revision:"7dad8191325b286ec0d9c1f9f1600908"},{url:"/icons/icon-512x512.png",revision:"16f8b0a713cab8b8bc5480f2bb0a7e40"},{url:"/site.webmanifest",revision:"2b34276c8c0e6dddafaa29cd6a02632a"},{url:"/uploads/food-mood-thumbnail.jpg",revision:"c203daf47587d5f0f22bb83cf85f26c1"},{url:"/uploads/profile.jpg",revision:"9c21c941b0461de87d05fbc4cc5f36c9"},{url:"/uploads/streetcred-thumbnail.jpg",revision:"713601d834d3053b48916e7b946f13ae"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
