import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

import routes from './router/routes';
import moduleMemo from './store/memo';
import moduleControl from './store/control';

Vue.use(VueRouter);
Vue.use(Vuex);

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

new Vue({
  el: '#app-root',
  router,
  store,
  render: h => h(App),
});
