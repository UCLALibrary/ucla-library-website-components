import BaseRadioGroup from '@/lib-components/BaseRadioGroup' // Adjust the import path as needed

export default {
  title: 'SEARCH / Dropdown /BaseRadioGroup',
  component: BaseRadioGroup,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of objects for each radio button',
    },
    selected: {
      control: 'text',
      description: 'Selected radio button value',
    },
  },
}

function Template(args) {
  return {
    components: { BaseRadioGroup },
    setup() {
      return { args }
    },
    template: '<BaseRadioGroup v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  items: [
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
  ],
  selected: 'Option 1',
}

export const NoSelection = Template.bind({})
NoSelection.args = {
  items: [
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
  ],
  selected: '',
}
