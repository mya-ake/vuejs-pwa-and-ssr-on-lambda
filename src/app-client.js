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
