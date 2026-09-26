import { computed, ref } from 'vue'
import BaseCalendar from '../lib-components/BaseCalendar.vue'
import { mockCalendarEvents } from './mock/CalendarEvents'

/**
 * Calendar component that extends Vuetify's `v-calendar` component and uses the `v-menu` component to display event item popup/dialog.
 *
 * Props:
 *
 * 1. defaultEventCalendar: Boolean value
 * - When `true` (default), renders an event calendar with preset inner components:
 *     - BlockCardWithImage, BlockEventDetail, and BlockTag
 *     - See __Default Event__ stories
 * - When `false`, BaseCalendar can either be:
 *     - a simplified calendar that uses Vuetify's `v-list` component; see __Default Vuetify__ story
 *     - a calendar with custom components if the slot `calendarSlotComponent` is used
 *
 *
 * 2. events: Array of event objects
 *
 *
 * 3. firstEventMonth: Array with a default `new Date()` object as its only item
 * - When used, sets the first month that the calendar displays on page load
 * - Example syntax: `[new Date('September 01, 2024 00:00:00')]`
 */

export default {
  title: 'Base Calendar',
  component: BaseCalendar,
}

const mockCalendarStartMonth = [new Date('September 01, 2024 00:00:00')]

export function DefaultVuetify() {
  return {
    data() {
      return { ...mockCalendarEvents, mockCalendarStartMonth }
    },
    components: { BaseCalendar },
    template: '<div style="display: flex;justify-content: center;"><base-calendar :events="events" :defaultEventCalendar="false" :firstEventMonth="mockCalendarStartMonth" /></div>'
  }
}

DefaultVuetify.parameters = {
  chromatic: { disableSnapshot: false },
}

export function DefaultEvent() {
  return {
    data() {
      return { ...mockCalendarEvents, mockCalendarStartMonth }
    },
    components: { BaseCalendar },
    template: '<div style="display: flex;justify-content: center;"><base-calendar :events="events" :firstEventMonth="mockCalendarStartMonth" /></div>'
  }
}

export function DefaultFTVAEvent() {
  return {
    data() {
      return { ...mockCalendarEvents, mockCalendarStartMonth }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BaseCalendar },
    template: '<div style="display: flex;justify-content: center;"><base-calendar :events="events" :firstEventMonth="mockCalendarStartMonth" /></div>'
  }
}

export function SameDayEvents() {
  return {
    data() {
      return {
        ...mockCalendarEvents,
        mockCalendarStart: [new Date('October 01, 2025 00:00:00')],
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
export function MonthToMonthEvents() {
  return {
    setup() {
      const today = new Date()

      const currentYear = today.getFullYear()
      const currentMonth = today.getMonth()

      const mockCalendarStartMonth = [
        new Date(currentYear, currentMonth, 1),
      ]

      function createEventsForMonth(date) {
        const year = date.getFullYear()
        const month = date.getMonth()

        return [
          {
            ...mockCalendarEvents.events[0],
            id: `calendar-event-${year}-${month}-1`,
            title: `Event 1 - ${date.toLocaleString('default', { month: 'long' })} ${year}`,
            startDateWithTime: new Date(
              year,
              month,
              5,
              19,
              0,
              0,
            ).toISOString(),
            startDate: new Date(
              year,
              month,
              5,
              19,
              0,
              0,
            ).toISOString(),
            startTime: new Date(
              year,
              month,
              5,
              19,
              0,
              0,
            ).toISOString(),
          },
          {
            ...mockCalendarEvents.events[1],
            id: `calendar-event-${year}-${month}-2`,
            title: `Event 2 - ${date.toLocaleString('default', { month: 'long' })} ${year}`,
            startDateWithTime: new Date(
              year,
              month,
              15,
              19,
              0,
              0,
            ).toISOString(),
            startDate: new Date(
              year,
              month,
              15,
              19,
              0,
              0,
            ).toISOString(),
            startTime: new Date(
              year,
              month,
              15,
              19,
              0,
              0,
            ).toISOString(),
          },
          {
            ...mockCalendarEvents.events[2],
            id: `calendar-event-${year}-${month}-3`,
            title: `Event 3 - ${date.toLocaleString('default', { month: 'long' })} ${year}`,
            startDateWithTime: new Date(
              year,
              month,
              25,
              19,
              0,
              0,
            ).toISOString(),
            startDate: new Date(
              year,
              month,
              25,
              19,
              0,
              0,
            ).toISOString(),
            startTime: new Date(
              year,
              month,
              25,
              19,
              0,
              0,
            ).toISOString(),
          },
        ]
      }

      const events = ref(
        createEventsForMonth(mockCalendarStartMonth[0]),
      )

      function handleMonthChange(date) {
        console.log('Story month-change:', date)
        events.value = createEventsForMonth(date)
      }

      return {
        events,
        mockCalendarStartMonth,
        handleMonthChange,
      }
    },

    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },

    components: { BaseCalendar },

    template: `
      <div style="display: flex; justify-content: center;">
        <base-calendar
          :events="events"
          :firstEventMonth="mockCalendarStartMonth"
          @month-change="handleMonthChange"
        />
      </div>
    `,
  }
}
