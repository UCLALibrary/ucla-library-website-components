import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'

export default {
  title: 'DIVIDER / Way Finder',
  component: DividerWayFinder,
}

export const Default = {
  args: {},
}

export const Visit = {
  args: {
    color: 'visit',
  },
}

export const About = {
  args: {
    color: 'about',
  },
}

export const Help = {
  args: {
    color: 'help',
  },
}

export const FTVA = {
  args: {
    color: 'ftva',
  },
}

export const IsHalfWidth = {
  render: () => ({
    components: { DividerWayFinder },
    template: '<divider-way-finder :is-half-width="true"/>',
  }),
}
