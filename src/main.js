import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme_mine/index.css'
import './plugins/element.js'
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://trontest.com:5001';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
