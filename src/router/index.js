import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Home
  },
  {
    path: '/site',
    name: 'Сайт',
    component: () => import('../views/Site.vue')
  },
  {
    path: '/requests',
    name: 'Заявки',
    component: () => import('../views/Requests.vue')
  },
  {
    path: '/settings',
    name: 'Настройки',
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
