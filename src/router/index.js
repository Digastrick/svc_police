import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/AboutView.vue'),    
    },
    {
      path: '/user/:id/albums',
      name: 'albums',
      component:() => import('../views/AboutView.vue')
    },
    {
      path:'/user/:id/posts',
      name:'posts',
      component:() => import('../views/AboutView.vue')
    }
  ]
})

export default router
