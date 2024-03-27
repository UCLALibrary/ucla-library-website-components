import { onMounted, onBeforeUnmount } from 'vue'
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
    setup() {
      // Setup function provides a context where you can use Composition API
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        // Set initial winWidth
        updateWinWidth()

        // Update winWidth on window resize
        window.addEventListener('resize', updateWinWidth)

        // Use onBeforeUnmount to clean up
        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })

      return { ...mock, ...args }
    },
    components: { DateFilter },
    template: '<div style="height:509px"><date-filter :eventDates="eventDates" :hideInput="hideInput"/></div>',
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
