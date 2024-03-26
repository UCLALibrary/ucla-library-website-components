import DateFilter from '@/lib-components/DateFilter'
import { useGlobalStore } from '@/stores/GlobalStore'

export default {
  title: 'DateFilter',
  component: DateFilter,
}

const mock = {
  hideInput: false,
  eventDates: ['2/29/2024', '2/29/2024', '2/29/2024', '2/29/2024', '3/1/2024', '3/2/2024', '3/2/2024', '3/4/2024', '3/6/2024', '3/8/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024', '3/19/2024',],
}

function Template(args) {
  return {
    data() {
      return {
        ...mock,
        ...args,
      }
    },
    created() {
      const globalStore = useGlobalStore()
      globalStore.winWidth = 1024
    },
    components: { DateFilter },
    template:
      '<div style="height:509px"><date-filter :eventDates="eventDates" :hideInput="hideInput"/></div> ',
  }
}

export const Default = Template.bind({})

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
