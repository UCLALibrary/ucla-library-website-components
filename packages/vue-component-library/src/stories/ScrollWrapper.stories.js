import ScrollWrapper from '../lib-components/ScrollWrapper.vue';

export default {
  title: 'ScrollWrapper',
  component: ScrollWrapper,
}

const mockDefault = {}

export function Default() {
  return {
    data() {
      return { ...mockDefault }
    },
    components: { ScrollWrapper },
    template: `
      <scroll-wrapper>
      <scroll-wrapper/>
  `,
  }
}
