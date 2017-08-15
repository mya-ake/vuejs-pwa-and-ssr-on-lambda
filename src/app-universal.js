import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';

import routes from './router/routes';
import moduleMemo from './store/memo';
import moduleControl from './store/control';
import { sync } from 'vuex-router-sync';

Vue.use(VueRouter);
Vue.use(Vuex);

export const createApp = () => {
  const router = new VueRouter({
    mode: 'history',
    routes,
  });

  const store = new Vuex.Store({
    modules: {
      memo: moduleMemo,
      control: moduleControl,
    },
  });

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
};
