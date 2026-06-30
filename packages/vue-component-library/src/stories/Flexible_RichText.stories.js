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
const DefaultTemplate = (args) => {
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

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FtvaTemplate = (args) => {
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

export const Ftva = FtvaTemplate.bind({})
Ftva.args = {}

const FtvaNewDataTemplate = (args) => {
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

export const FtvaNewData = FtvaNewDataTemplate.bind({})
FtvaNewData.args = {}
