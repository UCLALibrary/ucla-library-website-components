import ButtonShow from '@/lib-components/ButtonShow'

export default {
  title: 'BUTTON / Show',
  component: ButtonShow,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    components: { ButtonShow },
    template: '<button-show/>',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}
