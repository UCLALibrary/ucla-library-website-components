import { computed, defineComponent } from 'vue'

// Mock Data
import { mockRichText } from './mock/RichText'

// Component
import RichText from '@/lib-components/RichText.vue'

// Utils
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

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
Default.parameters = {
  chromatic: { disableSnapshot: false },
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

// LADI-5483: Simulates RichText before the reactivity fix
const LegacyRichText = defineComponent({
  props: {
    richTextContent: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    // BEFORE: Content is processed only once during setup
    const content = stripCraftURLFromText(props.richTextContent)

    const parsedContent = computed(() => {
      return accessibleExternalLinks(content)
    })

    return { parsedContent }
  },

  template: `
    <div class="rich-text">
      <div class="parsed-content" v-html="parsedContent" />
    </div>
  `,
})

/**
 * Demonstrates RichText reactivity in Craft CMS draft previews.
 * Reference: LADI-5483
 */

const originalDraft = '<p>Guest Speaker: Original draft content.</p>'

export const DraftPreviewReactivity = {
  render: () => ({
    components: { RichText, LegacyRichText },

    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },

    data() {
      return {
        richTextContent: originalDraft,
      }
    },

    methods: {
      resetPreview() {
        this.richTextContent = originalDraft
      },
    },

    template: `
      <div style="padding: 24px; max-width: 1000px;">

        <h2>RichText - Live Reactivity Demo</h2>

        <p>
          Edit the rich-text HTML below to simulate
          a Craft CMS draft preview update.
        </p>

        <div style="margin: 24px 0;">
          <label for="rich-text-editor">
            <strong>Craft CMS Rich Text Field</strong>
          </label>

          <textarea
            id="rich-text-editor"
            v-model="richTextContent"
            rows="5"
            style="
              display: block;
              width: 100%;
              box-sizing: border-box;
              margin-top: 8px;
              padding: 12px;
              font-family: monospace;
              border: 1px solid #aaa;
              border-radius: 4px;
            "
          />

          <button
            type="button"
            @click="resetPreview"
            style="margin-top: 12px; padding: 8px 16px;"
          >
            Reset Input
          </button>
        </div>

        <div style="display: flex; gap: 20px; flex-wrap: wrap;">

          <section style="
            flex: 1;
            min-width: 260px;
            padding: 20px;
            border: 2px solid #dc2626;
            border-radius: 8px;
          ">
            <h3>Before: Non-reactive</h3>

            <p>
              Content does not update when the prop changes.
            </p>

            <LegacyRichText
              :rich-text-content="richTextContent"
            />
          </section>

          <section style="
            flex: 1;
            min-width: 260px;
            padding: 20px;
            border: 2px solid #16a34a;
            border-radius: 8px;
          ">
            <h3>After: Reactive</h3>

            <p>
              Content updates automatically as you type.
            </p>

            <RichText
              :rich-text-content="richTextContent"
            />
          </section>

        </div>
      </div>
    `,
  }),
}

DraftPreviewReactivity.parameters = {
  chromatic: { disableSnapshot: true },
}
