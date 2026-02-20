import { computed } from 'vue'

// Mock Data
import { ftvaMockRichText, mockRichText } from './mock/RichText'

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

Default.parameters = {
  chromatic: { disableSnapshot: false },
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

export function FtvaNewData() {
  return {
    data() {
      return {
        block: ftvaMockRichText,
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
            :block="block[0]"
        />
        <flexible-rich-text
            :block="block[1]"
        />
    `,
  }
}
