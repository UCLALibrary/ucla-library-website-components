import { computed, ref } from 'vue'
import DateFilter from '@/lib-components/DateFilter'

export default {
  title: 'DateFilter',
  component: DateFilter,
}

const mock = {
  eventDates: ['2/29/2024', '2/29/2024', '2/29/2024', '2/29/2024', '3/1/2024', '3/2/2024', '3/2/2024', '3/4/2024', '3/6/2024', '3/8/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024',],
}

export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    setup() {
      // Provide a function to update the selected date, and a ref for it
      // So that the parent page can display / react to the date outside of the component once its selected
      const modelDate = ref(null)
      const updateDate = (date) => {
        modelDate.value = date
      }
      return { modelDate, updateDate }
    },
    components: { DateFilter },
    template: '<div style="height:509px">Sample Selected Date: <span data-test="selected-date">{{ modelDate }}</span><date-filter @input-selected="updateDate" :eventDates="eventDates" /></div>',
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
/* hideInput prop is not currently used anywhere in the app,
input is hidden automatically on mobile */
const mockNoInput = {
  hideInput: true,
  eventDates: ['2/29/2024', '2/29/2024', '2/29/2024', '2/29/2024', '3/1/2024', '3/2/2024', '3/2/2024', '3/4/2024', '3/6/2024', '3/8/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024',],
}
export function NoInput() {
  return {
    data() {
      return {
        ...mockNoInput,
      }
    },
    components: { DateFilter },
    template: '<date-filter :eventDates="eventDates" :hideInput="hideInput"/>',
  }
}

const mockInitialDates = {
  initialDates: { startDate: new Date('2024-03-19'), endDate: new Date('2024-03-29') },
}
export function InitialDates() {
  return {
    data() {
      return {
        ...mockInitialDates,
      }
    },
    components: { DateFilter },
    template: '<date-filter :eventDates="eventDates" :initialDates="initialDates"/>',
  }
}

export function FTVA() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { DateFilter },
    template: '<date-filter :eventDates="eventDates" :initialDates="initialDates"/>',
  }
}
