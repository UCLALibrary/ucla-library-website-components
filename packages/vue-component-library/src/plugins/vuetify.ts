import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'
import { VCard, VList, VListItem, VMenu, VSheet, VSlideGroup, VSlideGroupItem, VWindow, VWindowItem } from 'vuetify/lib/components/index.mjs'

export const vuetify = createVuetify({
  components: {
    VCalendar, VSheet, VMenu, VList, VCard, VListItem, VSlideGroup, VSlideGroupItem, VWindow, VWindowItem
  },
})
