import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'

export default {
  title: 'DIVIDER / Way Finder',
  component: DividerWayFinder,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['visit', 'about', 'help'],
    },
  },
}

export function Template(args) {
  return {
    components: { DividerWayFinder },
    setup() {
      return { args }
    },
    template: '<divider-way-finder v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {}

export const Visit = Template.bind({})
Visit.args = {
  color: 'visit',
}

export const About = Template.bind({})
About.args = {
  color: 'about',
}

export const Help = Template.bind({})
Help.args = {
  color: 'help',
}
