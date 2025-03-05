import { computed } from 'vue'

// Mock Data
import { mockRichText } from './mock/RichText'

// Component
import RichText from '@/lib-components/RichText.vue'

// Storybook settings
export default {
  title: 'GLOBAL / Rich Text',
  component: RichText,
}

// Variations of stories below
// GLOBAL RICH TEXT - ALL OPTIONS
export const Default = {
  render: () => ({
    data() {
      return {
        block: mockRichText,
      }
    },
    components: { RichText },
    template: `
        <rich-text
            :rich-text-content="block.richText"
        />
    `,
  })
}

// GLOBAL FTVA RICH TEXT - ALL OPTIONS
export const FtvaRichText = {
  render: () => ({
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
    components: { RichText },
    template: `
        <rich-text
            :rich-text-content="block.richText"
        />
    `,
  })
}
