import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: {} }, // Default path
  // Add more mock paths as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
