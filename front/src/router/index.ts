import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Future routes:
    // {
    //   path: '/components',
    //   name: 'components',
    //   component: () => import('@/views/ComponentsView.vue')
    // },
    // {
    //   path: '/settings',
    //   name: 'settings',
    //   component: () => import('@/views/SettingsView.vue')
    // }
  ]
})

export default router
