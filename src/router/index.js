import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from '../store'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/logingetcode',
    name: 'Logingetcode',
    component: () => import('../views/login/LogingetCode')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search')
  },
  {
    path: "/main",
    name: "Main",
    redirect: "/main/home",
    component: Main,
    children: [{
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/Home')
      },
      {
        path: 'classify',
        name: 'Classify',
        component: () => import('../views/classify/Classify')
      },
      {
        path: 'shopcar',
        name: 'Shopcar',
        component: () => import('../views/shopCar/Shopcar')
      },
      {
        path: 'info',
        name: 'Info',
        component: () => import('../views/info/Info')
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(JSON.stringify(vuex.state)).userInfo
  if (to.name != 'Logingetcode' && to.name != 'Login' && !userInfo) {
    next('/logingetcode')
  }
  next()
})
export default router
