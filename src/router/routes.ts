import type { RouteRecordRaw } from 'vue-router'
import forms from '@/views/forms.vue'
import inputGroup from '@/views/inputGroup.vue'
import buttons from '@/views/buttons.vue'
import alert from '@/views/alert.vue'
import RegularForm from '@/views/RegularForm.vue'
import accordingView from '@/views/accordingView.vue'
import TableView from '@/views/TableView.vue'
import DatePickerView from '@/views/DatePickerView.vue'
import SliderView from '@/views/SliderView.vue'
import Typography from '@/views/Typography.vue'
import ProgressBar from '@/views/ProgressBar.vue'
import TextAreaView from '@/views/TextAreaView.vue'
import TomSelect from '@/views/TomSelect.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'forms', component: forms },
  { path: '/input-group', name: 'inputGroup', component: inputGroup },
  { path: '/buttons', name: 'buttons', component: buttons },
  { path: '/alert', name: 'alert', component: alert },
  { path: '/RegularForm', name: 'RegularForm', component: RegularForm },
  { path: '/according', name: 'accordingView', component: accordingView },
  { path: '/table', name: 'TableView', component: TableView },
  { path: '/date-picker', name: 'DatePickerView', component: DatePickerView },
  { path: '/slider', name: 'SliderView', component: SliderView },
  { path: '/Typography', name: 'typography', component: Typography },
  {path: '/Progress', name: 'ProgressBar', component: ProgressBar },
  {path: '/TextAreaView', name: 'TextAreaView', component: TextAreaView },
  {path: '/TomSelect', name: 'TomSelect', component: TomSelect },
]

export default routes