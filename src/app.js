import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({
  el: '#app-root',
  render: h => h(App),
});
