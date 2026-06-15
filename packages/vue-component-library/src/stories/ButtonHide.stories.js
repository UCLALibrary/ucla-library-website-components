import ButtonHide from '@/lib-components/ButtonHide'

export default {
  title: 'BUTTON / Hide',
  component: ButtonHide,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    components: { ButtonHide },
    template: '<button-hide/>',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}
