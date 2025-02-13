import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import('../views/UsuarioView.vue')
  }, 
  {
    path: '/anotacao',
    name: 'anotacao',
    component: () => import('../views/Anotacao.vue')
  }, 
  {
    path: '/buscar',
    name: 'buscar',
    component: () => import('../views/Buscar.vue')
  }, 
  {
    path: '/localidade',
    name: 'localidade',
    component: () => import('../views/Localidade.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
