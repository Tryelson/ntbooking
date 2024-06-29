import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/hotel/:id',
      name: 'Hotel',
      component: () => import('../views/SingleHotelView.vue')
    }
  ]
})

export default router
