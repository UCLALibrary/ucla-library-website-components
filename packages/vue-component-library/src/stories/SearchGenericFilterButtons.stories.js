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

function Template(args) {
  return {
    components: { SearchGenericFilterButtons },
    setup() {
      return { args }
    },
    template: '<SearchGenericFilterButtons v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  items: [
    { label: 'Filter 1', inputType: 'radio', esFieldName: 'filter1' },
    { label: 'Filter 2', inputType: 'checkbox', esFieldName: 'filter2' },
    { label: 'Filter 3', inputType: 'date', esFieldName: 'filter3' },
    { label: 'Filter 4', inputType: 'radio', esFieldName: 'filter4' },
    // Assuming your SingleCheckbox component expects a certain structure
    { label: 'Checkbox Label', inputType: 'single-checkbox', esFieldName: 'filter5' },
  ],
  singleCheckboxState: false,
}

export const Active = Template.bind({})
Active.args = {
  items: [
    { label: 'Filter 1', inputType: 'radio', isVisible: true, esFieldName: 'filter1' },
    { label: 'Filter 2', inputType: 'checkbox', esFieldName: 'filter2' },
    { label: 'Filter 3', inputType: 'date', esFieldName: 'filter3' },
    { label: 'Filter 4', inputType: 'radio', esFieldName: 'filter4' },
    // Assuming your SingleCheckbox component expects a certain structure
    { label: 'Checkbox Label', inputType: 'single-checkbox', esFieldName: 'filter5' },
  ],
  singleCheckboxState: false,
}

export const Checked = Template.bind({})
Checked.args = {
  items: [
    { label: 'Filter 1', inputType: 'radio', esFieldName: 'filter1' },
    { label: 'Filter 2', inputType: 'checkbox', esFieldName: 'filter2' },
    { label: 'Filter 3', inputType: 'date', isVisible: true, esFieldName: 'filter3' },
    { label: 'Filter 4', inputType: 'radio', esFieldName: 'filter4' },
    // Assuming your SingleCheckbox component expects a certain structure
    { label: 'Checkbox Label', inputType: 'single-checkbox' },
  ],
  singleCheckboxState: true,
}

export const NoSingleCheckbox = Template.bind({})
NoSingleCheckbox.args = {
  items: [
    { label: 'Filter 1', inputType: 'radio', esFieldName: 'filter1' },
    { label: 'Filter 2', inputType: 'checkbox', esFieldName: 'filter2' },
    { label: 'Filter 3', inputType: 'date', esFieldName: 'filter3' },
    { label: 'Filter 4', inputType: 'radio', isVisible: true, esFieldName: 'filter4' },
  ],
  singleCheckboxState: false,
}
