import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: PrincipalView
  },
  {
    path: '/producto/detalle/:id',
    name: 'detalle',
    component: () => import('../views/DetalleProductoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
