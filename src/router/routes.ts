import type { RouteRecordRaw } from 'vue-router'
import forms from '@/views/forms.vue'
import Buttons from '@/views/buttons.vue'

const routes: RouteRecordRaw[] = [
  { path: '/forms', name: 'forms', component: forms },
  { path: '/Buttons', name: 'Buttons', component: Buttons },
]

export default routes