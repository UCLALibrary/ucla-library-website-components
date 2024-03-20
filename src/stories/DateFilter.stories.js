import DateFilter from '@/lib-components/DateFilter'

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
