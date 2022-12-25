import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import logIn from '../views/logIn.vue'
import signUp from '../views/signUp.vue'
import myAccount from '../views/dashboard/myAccount.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/log-in',
    name: 'logIn',
    component: logIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'myAccount',
    component: myAccount,
    meta: {
      requiredLogin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
