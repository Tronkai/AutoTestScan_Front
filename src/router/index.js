import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Tronscan from '../views/Tronscan.vue'
import BTTC from '../views/BTTC.vue'
import TronlinkAndroid from '../views/TronlinkAndroid.vue'
import TronlinkiOS from '../views/TronlinkiOS.vue'
import TronlinkServer from '../views/TronlinkServer.vue'
import USDD from '../views/USDD.vue'
import JustlendDao from '../views/JustlendDao.vue'
import Scan from '../views/Scan.vue'
import Login from '../components/Login.vue'
import TronlinkExtension from '../views/TronlinkExtension.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BTTC',
    component: BTTC
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan
  },
  {
    path: '/tronlinkExtension',
    name: 'TronlinkExtension',
    component: TronlinkExtension
  },
  {
    path: '/tronlinkserver',
    name: 'TronlinkServer',
    component: TronlinkServer
  },
  {
    path: '/tronscan',
    name: 'Tronscan',
    component: Tronscan
  },
  {
    path: '/tronlinkAndroid',
    name: 'TronlinkAndroid',
    component: TronlinkAndroid
  },
  {
    path: '/bttc',
    name: 'BTTC',
    component: BTTC
  },
  {
    path: '/tronlinkiOS',
    name: 'TronlinkiOS',
    component: TronlinkiOS
  },
  {
    path: '/usdd',
    name: 'USDD',
    component: USDD
  },
  {
    path: '/justlendDao',
    name: 'JustlendDao',
    component: JustlendDao
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
