import { computed } from 'vue'
import { mock } from './mock/Flexible_FTVARichText'
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

export function Ftva() {
  return {
    data() {
      return {
        block: mock,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
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
