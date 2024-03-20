import DateFilter from '@/lib-components/DateFilter'

// import * as API from '@/stories/mock-api.json'

export default {
  title: 'DateFilter',
  component: DateFilter,
}

const mock = {}

function Template(args) {
  return {
    data() {
      return {
        // ...mock,
        ...args,
      }
    },
    components: { DateFilter },
    template:
    '<div style="height:509px"><date-filter /></div>',
  }
}

export const Default = Template.bind({})
