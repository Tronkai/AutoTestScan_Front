import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme_mine/index.css'
import './plugins/element.js'
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:5000';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
