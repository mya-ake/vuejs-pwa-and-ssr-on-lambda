import Vue from 'vue';
import App from './App.vue';

document.querySelector('#app-root-js').textContent = 'insert from JS';

new Vue({
  el: '#app-root',
  render: h => h(App),
});
