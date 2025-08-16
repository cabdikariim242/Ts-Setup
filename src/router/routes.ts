import type { RouteRecordRaw } from 'vue-router'
import forms from '@/views/forms.vue'
import inputGroup from '@/views/inputGroup.vue'
import buttons from '@/views/buttons.vue'
import RegularForm from '@/views/RegularForm.vue'
import accordingView from '@/views/accordingView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'forms', component: forms },
  { path: '/input-group', name: 'inputGroup', component: inputGroup },
  { path: '/buttons', name: 'buttons', component: buttons },
  { path: '/RegularForm', name: 'RegularForm', component: RegularForm },
  { path: '/according', name: 'accordingView', component: accordingView },
]

export default routes