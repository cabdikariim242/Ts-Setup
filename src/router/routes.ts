import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  // src/router/index.ts
{ path: '/users/new', component: () => import('../views/CreateUserView.vue'), meta: { requiresAuth: true } },

]

export default routes