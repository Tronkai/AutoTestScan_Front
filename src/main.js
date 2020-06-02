import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme_mine/index.css'
import './plugins/element.js'
import Scan from './views/Scan.vue'
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://39.105.200.151:3000';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.component("Scan",Scan);
