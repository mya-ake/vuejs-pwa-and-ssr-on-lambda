import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import routes from './router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app-root',
  router,
  render: h => h(App),
});
