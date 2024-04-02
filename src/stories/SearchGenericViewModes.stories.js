import SearchGenericViewModes from '@/lib-components//SearchGenericViewModes.vue'

export default {
  title: 'Search / Generic / ViewModes',
  component: SearchGenericViewModes,
  argTypes: {
    isOpened: {
      control: 'boolean',
      description: 'Toggle view list open/close',
    },
    items: {
      control: 'object',
      description: 'List of items to display',
    },
    selected: {
      control: 'text',
      description: 'Slug of the selected item',
    },
  },
}

function Template(args) {
  return {
    components: {
      SearchGenericViewModes,
    },
    setup() {
      return { args }
    },
    template: `
    <SearchGenericViewModes v-bind="args" />
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  isOpened: false,
  items: [
    { slug: 'calendar', title: 'Calendar View', iconName: 'icon-calendar' },
    { slug: 'card', title: 'Card View', iconName: 'icon-card' },
    { slug: 'list', title: 'List View', iconName: 'icon-list' },
  ],
  selected: 'calendar',
}

export const NotSelected = Template.bind({})
NotSelected.args = {
  isOpened: false,
  items: [
    { slug: 'calendar', title: 'Calendar View', iconName: 'icon-calendar' },
    { slug: 'card', title: 'Card View', iconName: 'icon-card' },
    { slug: 'list', title: 'List View', iconName: 'icon-list' },
  ],
}
export const IsOpened = Template.bind({})
IsOpened.args = {
  isOpened: true,
  items: [
    { slug: 'calendar', title: 'Calendar View', iconName: 'icon-calendar' },
    { slug: 'card', title: 'Card View', iconName: 'icon-card' },
    { slug: 'list', title: 'List View', iconName: 'icon-list' },
  ],
}
