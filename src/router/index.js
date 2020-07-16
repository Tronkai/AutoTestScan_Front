import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TronscanUI from '../views/TronscanUI.vue'
import TronscanAPI from '../views/TronscanAPI.vue'
import TronlinkAPI from '../views/TronlinkAPI.vue'
import TronlinkUI from '../views/TrongridAPI.vue'
import DjedAPI from '../views/DjedAPI.vue'
import DjedUI from '../views/DjedUI.vue'
import TronwebAPI from '../views/TronwebAPI.vue'
import Scan from '../views/Scan.vue'
import Runcase from '../views/Runcase.vue'
import Report from '../views/Report.vue'
import Runtronscanui from '../views/RunTronscanUI.vue'


// import Login from '../components/Login.vue'
// import LoginD from '../components/Login_Dialog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',name: 'Home',component: Home,
    children :[
      {
        path: '/scan',
        name: 'Scan',
        component: Scan
      },{
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
        path: '/djedui',
        name: 'DjedUI',
        component: DjedUI
      },
      {
        path: '/tronlinkAPI',
        name: 'TronlinkAPI',
        component: TronlinkAPI
      },
      {
        path: '/trongridapi',
        name: 'TrongridAPI',
        component: TronlinkUI
      },
      {
        path: '/tronwebapi',
        name: 'TronwebAPI',
        component: TronwebAPI
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/report',
    name: 'Report',
    component: Report,
    children :[
      {
        path: '/runtronscanui',
        name: 'Runtronscanui',
        component: Runtronscanui
      }
    ]
  },
  {
    path: '/runcase',
    name: 'Runcase',
    component: Runcase,
    children :[
      {
        path: '/runtronscanui',
        name: 'Runtronscanui',
        component: Runtronscanui
      }
    ]
  },
  // {
  //   path: '/loginD',
  //   name: 'LoginD',
  //   component: LoginD
  // }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to,from,next) => {
//     if(to.path == '/scan' ) return next('/tronscanui');
//   })
// router.beforeEach((to,from,next) => {
//   if(to.path == '/login' && !window.sessionStorage.getItem("token")) return next();
//   else if(to.path == '/login' && window.sessionStorage.getItem("token")){
//     return next('/scan');
//   }
//   else if(window.sessionStorage.getItem("token")) {
//     return next();
//   }
//   else {
//     return next('/login');
//   }
// })

export default router
