import type { RouteRecordRaw } from 'vue-router'
import forms from '../views/forms.vue'

const routes: RouteRecordRaw[] = [
  { path: '/forms', name: 'forms', component: forms },
]

export default routes