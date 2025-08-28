import type { RouteRecordRaw } from 'vue-router'
import forms from '@/views/forms.vue'
import inputGroup from '@/views/inputGroup.vue'
import buttons from '@/views/buttons.vue'
import alert from '@/views/alert.vue'
import RegularForm from '@/views/RegularForm.vue'
import accordingView from '@/views/accordingView.vue'
import TableView from '@/views/TableView.vue'
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'forms', component: forms },
  { path: '/input-group', name: 'inputGroup', component: inputGroup },
  { path: '/buttons', name: 'buttons', component: buttons },
  { path: '/alert', name: 'alert', component: alert },
  { path: '/RegularForm', name: 'RegularForm', component: RegularForm },
  { path: '/according', name: 'accordingView', component: accordingView },
  { path: '/table', name: 'TableView', component: TableView },

]

export default routes