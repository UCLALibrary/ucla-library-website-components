import SearchGenericFilterButtons from '@/lib-components/SearchGenericFilterButtons'


export default {
  title: 'Search / Generic / FilterButtons',
  component: SearchGenericFilterButtons,
  argTypes: {
    items: {
      control: 'object',
      description: 'Items to display as filters',
    },
    activeIndex: {
      control: 'number',
      description: 'Index of the currently active filter',
    },
    singleCheckboxSelected: {
      control: 'object',
      description: 'Selection state for single checkbox filter',
    },
  },
}

const Template = (args) => ({
  components: { SearchGenericFilterButtons },
  setup() {
    return { args }
  },
  template: '<SearchGenericFilterButtons v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  items: [
    { label: 'Filter 1',  inputType: 'radio' },
    { label: 'Filter 2',  inputType: 'checkbox' },
    { label: 'Filter 3',  inputType: 'date' },
    { label: 'Filter 4',  inputType: 'radio' },
    // Assuming your SingleCheckbox component expects a certain structure
    { label: 'Checkbox Label',  inputType: 'single-checkbox' },
  ],
  activeIndex: -1,
  singleCheckboxState: false,
}

export const Active = Template.bind({})
Active.args = {
  items: [
    { label: 'Filter 1',  inputType: 'radio' },
    { label: 'Filter 2',  inputType: 'checkbox' },
    { label: 'Filter 3',  inputType: 'date' },
    { label: 'Filter 4',  inputType: 'radio' },
    // Assuming your SingleCheckbox component expects a certain structure
    { label: 'Checkbox Label',  inputType: 'single-checkbox' },
  ],
  activeIndex: 0,
  singleCheckboxState: false,
}

export const Checked = Template.bind({})
Checked.args = {
  items: [
    { label: 'Filter 1',  inputType: 'radio' },
    { label: 'Filter 2',  inputType: 'checkbox' },
    { label: 'Filter 3',  inputType: 'date' },
    { label: 'Filter 4',  inputType: 'radio' },
    // Assuming your SingleCheckbox component expects a certain structure
    { label: 'Checkbox Label',  inputType: 'single-checkbox' },
  ],
  activeIndex: 2,
  singleCheckboxState: true,
}

export const NoSingleCheckbox = Template.bind({})
NoSingleCheckbox.args = {
  items: [
    { label: 'Filter 1',  inputType: 'radio' },
    { label: 'Filter 2',  inputType: 'checkbox' },
    { label: 'Filter 3',  inputType: 'date' },
    { label: 'Filter 4',  inputType: 'radio' },
  ],
  activeIndex: 3,
  singleCheckboxState: false,
}
