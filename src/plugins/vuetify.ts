import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  components: {
    VCalendar,
  },
})
