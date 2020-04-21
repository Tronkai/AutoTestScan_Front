import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TronscanUI from '../views/TronscanUI.vue'
import TronscanAPI from '../views/TronscanAPI.vue'
import DjedAPI from '../views/DjedAPI.vue'
import Scan from '../views/Scan.vue'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan
  },
  {
    path: '/tronscanui',
    name: 'TronscanUI',
    component: TronscanUI
  },
  {
    path: '/tronscanapi',
    name: 'TronscanAPI',
    component: TronscanAPI
  },
  {
    path: '/djedapi',
    name: 'DjedAPI',
    component: DjedAPI
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
