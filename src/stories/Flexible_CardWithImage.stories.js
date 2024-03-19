import { mock } from './mock/Flexible_MediaWithText'
import FlexibleCardWithImage from '@/lib-components/Flexible/CardWithImage.vue'

export default {
  title: 'FLEXIBLE / Card With Image',
  component: FlexibleCardWithImage,
}

export function Default() {
  return {
    data() {
      return {
        block: mock,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// export const EventExhibitonArticle = () => ({
//     data() {
//         return {
//             block: eventExhibitonArticle,
//         }
//     },
//     components: { FlexibleCardWithImage },
//     template: `
//         <flexible-card-with-image
//             :block="block"
//        />
//     `,
// })
