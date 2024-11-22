import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  components: {
    VCalendar,
  },
})
