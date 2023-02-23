import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tronscan from '../views/Tronscan.vue'
import BTTC from '../views/BTTC.vue'
import TronlinkAndroid from '../views/TronlinkAndroid.vue'
import TronlinkiOS from '../views/TronlinkiOS.vue'
import TronlinkServer from '../views/TronlinkServer.vue'
import USDD from '../views/USDD.vue'
import JustlendDao from '../views/JustlendDao.vue'
import JavaTron from '../views/JavaTron.vue'
import Scan from '../views/Scan.vue'
import Login from '../components/Login.vue'
import TronlinkExtension from '../views/TronlinkExtension.vue'
import DEFI from '../views/DEFI.vue'
import TRONBOX from '../views/TRONBOX.vue'
import TRNWB from '../views/TRNWB.vue'
import WAT from '../views/WAT.vue'
import WTS from '../views/WTS.vue'
import WEB3 from '../views/WEB3.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DEFI',
    name: 'DEFI',
    component: DEFI
  },
  {
    path: '/TRONBOX',
    name: 'TRONBOX',
    component: TRONBOX
  },{
    path: '/TRNWB',
    name: 'TRNWB',
    component: TRNWB
  },{
    path: '/WAT',
    name: 'WAT',
    component: WAT
  },{
    path: '/WTS',
    name: 'WTS',
    component: WTS
  },
  {
    path: '/WEB3',
    name: 'WEB3',
    component: WEB3
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
    path: '/javaTron',
    name: 'JavaTron',
    component: JavaTron
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
