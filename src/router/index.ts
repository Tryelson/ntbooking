import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComparisonView from "@/views/ComparisonView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/compare',
      name: 'compare',
      component: ComparisonView, // Add the comparison view route
    },
    {
      path: '/hotel/:id',
      name: 'Hotel',
      component: () => import('../views/SingleHotelView.vue')
    }
  ]
})

export default router
