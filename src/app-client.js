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
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log(registration);
        if (registration.installing) {
          console.info('installing');
        } else if (registration.waiting) {
          console.info('waiting');
        } else if (registration.active) {
          console.info('active');
        }
        return navigator.serviceWorker.ready;
      })
      .then((registration) => {
        console.info(registration);
        return registration.update();
      })
      .then(() => {
        console.info('service worker update checked');
      })
      .catch((err) => {
        console.info('service worker update failed');
        console.error(err);
      });
  });
}