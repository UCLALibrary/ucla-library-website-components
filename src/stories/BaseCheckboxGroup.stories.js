import BaseCheckboxGroup from '@/lib-components/BaseCheckboxGroup'

// Adjust the path as needed
// Ensure you have a path to your SVG or mock

export default {
  title: 'SEARCH / Dropdown /BaseCheckboxGroup',
  component: BaseCheckboxGroup,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of item objects for the checkboxes',
    },
    selected: {
      control: 'object',
      description: 'Array of selected item objects',
    },
    // Add other props here as needed
  }
}

function Template(args) {
  return {
    components: { BaseCheckboxGroup },
    setup() {
      return { args }
    },
    template: '<BaseCheckboxGroup v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  items: [
    { name: 'Checkbox 1' },
    { name: 'Checkbox 2' },
    { name: 'Checkbox 3' },
  ],
  selected: [],
}

export const WithSelection = Template.bind({})
WithSelection.args = {
  items: [
    { name: 'Checkbox 1' },
    { name: 'Checkbox 2' },
    { name: 'Checkbox 3' },
  ],
  selected: [{ name: 'Checkbox 1' }],
}
