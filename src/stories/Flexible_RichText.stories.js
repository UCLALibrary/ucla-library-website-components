import { computed } from 'vue'

// Mock Data
import { mockRichText } from './mock/RichText'
import { mockFtvaRichText } from './mock/FTVA_RichText'
import FlexibleRichText from '@/lib-components/Flexible/RichText'

export default {
  title: 'FLEXIBLE / Rich Text',
  component: FlexibleRichText,
}

export function Default() {
  return {
    data() {
      return {
        block: mockRichText,
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
        block: mockFtvaRichText,
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
