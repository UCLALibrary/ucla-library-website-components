import SingleCheckbox from '@/lib-components/SingleCheckbox'

export default {
  title: 'SEARCH / SingleCheckbox',
  component: SingleCheckbox,
}

export function Default() {
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

export function Checked() {
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
