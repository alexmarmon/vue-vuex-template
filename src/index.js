import Vue from 'vue';
import store from './state';
import router from './router';
import App from './app.vue';

// remove console tip
Vue.config.productionTip = false;

// render to route
new Vue({ // eslint-disable-line no-new
  router,
  store,
  render: h => h(App),
}).$mount('#app');
