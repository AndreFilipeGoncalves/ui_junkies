import { createRouter, createWebHashHistory } from 'vue-router'
import mainRoutes from '@/router/main'

const routes = mainRoutes

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
