import { eventExhibitonArticle, mock } from './mock/Flexible_Highlight'
import FlexibleHighlight from '@/lib-components/Flexible/Highlight'

export default {
  title: 'FLEXIBLE / Highlight',
  component: FlexibleHighlight,
}

export function Default() {
  return {
    data() {
      return {
        block: mock,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export function EventExhibitonArticle() {
  return {
    data() {
      return {
        block: eventExhibitonArticle,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}
