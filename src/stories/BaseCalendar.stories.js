import { computed } from 'vue'
import BaseCalendar from '../lib-components/BaseCalendar.vue'
import { mockCalendarEvents } from './mock/CalendarEvents'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import BlockEventDetail from '@/lib-components/BlockEventDetail.vue'

export default {
  title: 'Base Calendar',
  component: BaseCalendar,
}

export function DefaultVuetify() {
  return {
    data() {
      return { ...mockCalendarEvents }
    },
    components: { BaseCalendar },
    template: '<div style="display: flex;justify-content: center;"><base-calendar :events="events" :defaultEventCalendar="false" /></div>'
  }
}

export function DefaultEvent() {
  return {
    data() {
      return { ...mockCalendarEvents }
    },
    components: { BaseCalendar },
    template: '<div style="display: flex;justify-content: center;"><base-calendar :events="events" /></div>'
  }
}

export function DefaultFTVAEvent() {
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
    template: '<div style="display: flex;justify-content: center;"><base-calendar :events="events" /></div>'
  }
}

export function SetStartMonth() {
  return {
    data() {
      return {
        ...mockCalendarEvents,
        mockCalendarStart: [new Date('September 01, 2024 00:00:00')],
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BaseCalendar },
    template: `<div 
        style="display: flex;justify-content: center;">
        <base-calendar
          :events="events"
          :firstEventMonth="mockCalendarStart" />
      </div>`
  }
}

export function SameDayEvents() {
  return {
    data() {
      return {
        ...mockCalendarEvents,
        mockCalendarStart: [new Date('October 01, 2024 00:00:00')],
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BaseCalendar },
    template: `<div 
        style="display: flex;justify-content: center;">
        <base-calendar
          :events="events"
          :firstEventMonth="mockCalendarStart" />
      </div>`
  }
}
