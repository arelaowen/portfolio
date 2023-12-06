import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/owenarela',
    name: 'home',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/resume.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
