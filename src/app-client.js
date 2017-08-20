import 'normalize.css/normalize.css';
import './styles.scss';

import { createApp } from './app-universal';


const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app-root');
});

if (window && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log(registration);
      if (registration.installing) {
        console.info('service worker installing');
      } else if (registration.waiting) {
        console.info('service worker waiting');
      } else if (registration.active) {
        console.info('service worker active');
      }
      return registration;
    })
    .then((registration) => {
      registration.addEventListener('updatefound', (evt) => {
        console.info('service worker update found', evt);
      }, false);
      return registration;
    })
    .then((registration) => {
      registration.update();
      console.info('service worker update checked');
      return registration;
    })
    .catch((err) => {
      console.error('service worker install failed', err);
    });
}