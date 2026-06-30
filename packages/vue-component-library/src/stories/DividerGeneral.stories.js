import DividerGeneral from '@/lib-components/DividerGeneral.vue'

export default {
  title: 'DIVIDER / General',
  component: DividerGeneral,
  argTypes: {
    isBold: { control: 'boolean' },
    isTertiary: { control: 'boolean' },
  },
}

export const Default = {
  render: args => ({
    components: { DividerGeneral },
    setup() {
      return { args }
    },
    template: '<divider-general :is-bold="args.isBold" :is-tertiary="args.isTertiary" />',
  }),
}
Default.args = {
  isBold: false,
  isTertiary: false,
}
Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const IsBold = {
  render: args => ({
    components: { DividerGeneral },
    setup() {
      return { args }
    },
    template: '<divider-general :is-bold="args.isBold" :is-tertiary="args.isTertiary" />',
  }),
}
IsBold.args = {
  isBold: true,
  isTertiary: false,
}

export const IsTertiary = {
  render: args => ({
    components: { DividerGeneral },
    setup() {
      return { args }
    },
    template: '<divider-general :is-bold="args.isBold" :is-tertiary="args.isTertiary" />',
  }),
}
IsTertiary.args = {
  isBold: false,
  isTertiary: true,
}
