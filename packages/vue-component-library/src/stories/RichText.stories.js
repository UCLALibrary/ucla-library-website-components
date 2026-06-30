import { computed } from 'vue'

// Mock Data
import { mockRichText } from './mock/RichText'
import { STORY_THEME_OPTIONS, normalizeStoryTheme } from './helpers/themeControls'

// Component
import RichText from '@/lib-components/RichText.vue'

// Storybook settings
export default {
  title: 'GLOBAL / Rich Text',
  component: RichText,
  argTypes: {
    richTextContent: { control: 'object' },
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
  },
}

function Template(args) {
  return {
    data() {
      return { args }
    },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    components: { RichText },
    template: `
      <rich-text :rich-text-content="args.richTextContent" />
    `,
  }
}

// Variations of stories below
// GLOBAL RICH TEXT - ALL OPTIONS
export const Default = Template.bind({})
Default.args = {
  richTextContent: mockRichText.richText,
  theme: 'default',
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

// GLOBAL FTVA RICH TEXT - ALL OPTIONS
export const FtvaRichText = Template.bind({})
FtvaRichText.args = {
  richTextContent: mockRichText.richText,
  theme: 'ftva',
}
