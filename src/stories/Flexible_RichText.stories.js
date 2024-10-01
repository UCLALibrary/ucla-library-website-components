import { computed } from 'vue'

// Mock Data
import { mockRichText } from './mock/RichText'

// Component
import FlexibleRichText from '@/lib-components/Flexible/RichText'


// Storybook settings
export default {
  title: 'FLEXIBLE / Rich Text',
  component: FlexibleRichText,
}

// Variations of stories below
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
        block: mockRichText,
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
