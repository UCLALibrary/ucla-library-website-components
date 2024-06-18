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

export const IsTertiary = {
  render: () => ({
    components: { DividerGeneral },
    template: '<divider-general :is-tertiary="true"/>',
  }),
}

export const IsHalfWidth = {
  render: () => ({
    components: { DividerGeneral },
    template: '<divider-general :is-half-width="true"/>',
  }),
}

export const IsHalfWidthAndTertiary = {
  render: () => ({
    components: { DividerGeneral },
    template: '<divider-general :is-half-width="true" :is-tertiary="true"/>',
  }),
}
