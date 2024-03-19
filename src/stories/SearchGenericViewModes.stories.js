import SearchGenericViewModes from '@/lib-components//SearchGenericViewModes.vue'
import SvgIconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import SvgIconCalendar from 'ucla-library-design-tokens/assets/svgs/icon-calendar.svg'
import SvgIconCard from 'ucla-library-design-tokens/assets/svgs/icon-card.svg'
import SvgIconList from 'ucla-library-design-tokens/assets/svgs/icon-list.svg'

export default {
  title: 'Search / SearchGeneric / ViewModes',
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

const Template = (args) => ({
  components: {
    SearchGenericViewModes,
    SvgIconCaretDown,
    SvgIconCalendar,
    SvgIconCard,
    SvgIconList,
  },
  setup() {
    return { args }
  },
  template: `
    <SearchGenericViewModes v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  isOpened: false,
  items: [
    { slug: 'calendar', title: 'Calendar View', iconName: 'icon-calendar', classes: '' },
    { slug: 'card', title: 'Card View', iconName: 'icon-card', classes: '' },
    { slug: 'list', title: 'List View', iconName: 'icon-list', classes: '' },
  ],
  selected: 'calendar',
}

export const NotSelected = Template.bind({})
NotSelected.args = {
  isOpened: false,
  items: [
    { slug: 'calendar', title: 'Calendar View', iconName: 'icon-calendar', classes: '' },
    { slug: 'card', title: 'Card View', iconName: 'icon-card', classes: '' },
    { slug: 'list', title: 'List View', iconName: 'icon-list', classes: '' },
  ],
}
export const IsOpened = Template.bind({})
IsOpened.args = {
  isOpened: true,
  items: [
    { slug: 'calendar', title: 'Calendar View', iconName: 'icon-calendar', classes: '' },
    { slug: 'card', title: 'Card View', iconName: 'icon-card', classes: '' },
    { slug: 'list', title: 'List View', iconName: 'icon-list', classes: '' },
  ],
}
