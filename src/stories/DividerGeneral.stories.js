import DividerGeneral from '@/lib-components/DividerGeneral.vue'

export default {
  title: 'DIVIDER / General',
  component: DividerGeneral,
}

export const Default = {
  render: () => ({
    components: { DividerGeneral },
    template: '<divider-general/>',
  }),
}

export const IsBold = {
  render: () => ({
    components: { DividerGeneral },
    template: '<divider-general :is-bold="true"/>',
  }),
}
