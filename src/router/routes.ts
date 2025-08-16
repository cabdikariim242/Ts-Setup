import type { RouteRecordRaw } from 'vue-router'
import forms from '@/views/forms.vue'
import inputGroup from '@/views/inputGroup.vue'
import buttons from '@/views/buttons.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'forms', component: forms },
  { path: '/input-group', name: 'inputGroup', component: inputGroup },
  { path: '/buttons', name: 'buttons', component: buttons },
]

export default routes