import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VAnimateCss from 'v-animate-css';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:61771/api';
Vue.use(VueRouter);
Vue.use(VAnimateCss);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

Vue.component('modal', {
  template: '#modal-template',
  props: {
      show: {
      type: Boolean,
      required: true,
      twoWay: true
      }
  }
});  

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})