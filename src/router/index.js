import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies/:id',
    name: 'ShowMovie',
    component: () => import('../views/ShowMovie.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
