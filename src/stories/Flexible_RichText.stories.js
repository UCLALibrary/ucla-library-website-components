import { mock } from './mock/Flexible_RichText'
import FlexibleRichText from '@/lib-components/Flexible/RichText'

export default {
  title: 'FLEXIBLE / Rich Text',
  component: FlexibleRichText,
}

export function Default() {
  return {
    data() {
      return {
        block: mock,
      }
    },
    components: { FlexibleRichText },
    template: `
        <flexible-rich-text
            :block="block"
        />
    `,
  }
}
