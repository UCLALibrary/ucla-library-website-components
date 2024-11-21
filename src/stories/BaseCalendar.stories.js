import { computed } from 'vue'
import BaseCalendar from '../lib-components/BaseCalendar.vue'
import { mockCalendarEvents } from './mock/CalendarEvents'

export default {
  title: 'Base Calendar',
  component: BaseCalendar,
}

export function Default() {
  return {
    data() {
      return { ...mockCalendarEvents }
    },
    components: { BaseCalendar },
    template: '<base-calendar :events="events" />'
  }
}

export function DefaultFTVA() {
  return {
    data() {
      return { ...mockCalendarEvents }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BaseCalendar },
    template: '<base-calendar :events="events" />'
  }
}
