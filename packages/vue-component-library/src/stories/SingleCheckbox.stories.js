import SingleCheckbox from '@/lib-components/SingleCheckbox'

export default {
  title: 'SEARCH / SingleCheckbox',
  component: SingleCheckbox,
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean' },
  },
}

const DefaultTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { SingleCheckbox },
    template: `
        <single-checkbox :label="args.label" :selected="args.selected" />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  label: 'Subject Librarian',
  selected: false,
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const CheckedTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { SingleCheckbox },
    template: `
        <single-checkbox :label="args.label" :selected="args.selected" />
    `,
  }
}

export const Checked = CheckedTemplate.bind({})
Checked.args = {
  label: 'Past Events',
  selected: true,
}
