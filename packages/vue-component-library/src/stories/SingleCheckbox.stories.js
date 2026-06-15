import SingleCheckbox from '@/lib-components/SingleCheckbox'

export default {
  title: 'SEARCH / SingleCheckbox',
  component: SingleCheckbox,
}

const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return {}
    },
    components: { SingleCheckbox },
    template: `
        <single-checkbox label="Subject Librarian"/>
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const CheckedTemplate = (args) => {
  void args
  return {
    data() {
      return {}
    },
    components: { SingleCheckbox },
    template: `
        <single-checkbox label="Past Events" :selected="true"/>
    `,
  }
}

export const Checked = CheckedTemplate.bind({})
Checked.args = {}

