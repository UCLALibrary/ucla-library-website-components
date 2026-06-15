import FlexibleHorizontalDivider from '@/lib-components/Flexible/HorizontalDivider.vue'

export default {
  title: 'FLEXIBLE / Horizontal Divider',
  component: FlexibleHorizontalDivider,
}

const mockHorizontalDivider = {
  id: '1234556',
  typeHandle: 'horizontalDivider',
  horizontalDivider: true
}

// Default
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return {
        block: mockHorizontalDivider,
      }
    },
    components: { FlexibleHorizontalDivider },
    template: '<flexible-horizontal-divider :block="block" />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

// Hidden Divider
const HiddenTemplate = (args) => {
  void args
  return {
    data() {
      return {
        block: { ...mockHorizontalDivider, horizontalDivider: false },
      }
    },
    components: { FlexibleHorizontalDivider },
    template: '<flexible-horizontal-divider :block="block" />',
  }
}

export const Hidden = HiddenTemplate.bind({})
Hidden.args = {}

