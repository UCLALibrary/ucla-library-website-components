// TEST ARTICLE - ALL FPB - So Many Squirrels

import { mock } from './mock/Flexible_ImpactNumbersCarousel'

import FlexibleImpactNumbersCarousel from '@/lib-components/Flexible/ImpactNumbersCarousel'

export default {
  title: "Flexible / Impact Numbers Carousel",
  component: FlexibleImpactNumbersCarousel,
}

// const Template = (args, { argTypes }) => ({
//     props: Object.keys(argTypes),
//     components: { FlexibleImpactNumbersCarousel },
//     template: `<flexible-impact-numbers-carousel v-bind="$props" />`,
// })

export function Default() {
  return {
    data() {
      return { block: mock }
    },
    components: { FlexibleImpactNumbersCarousel },
    template: `
        <flexible-impact-numbers-carousel
            :block="block"
       />
    `,
  }
}
