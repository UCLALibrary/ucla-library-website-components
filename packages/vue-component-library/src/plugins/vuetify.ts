import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'
import '@mdi/font/css/materialdesignicons.css'
import { VCard, VList, VListItem, VMenu, VSheet } from 'vuetify/lib/components/index.mjs'

export const vuetify = createVuetify({
  components: {
    VCalendar, VSheet, VMenu, VList, VCard, VListItem
  },
})
