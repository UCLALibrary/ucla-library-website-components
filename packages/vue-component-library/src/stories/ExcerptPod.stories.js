import { computed } from 'vue'
import ExcerptPod from '@/lib-components/ExcerptPod.vue'
import RichText from '@/lib-components/RichText.vue'

export default {
  title: 'Funkhaus / ExcerptPod',
  component: ExcerptPod,
  argTypes: {
    title: {
      control: 'text',
      description: 'Accordion title (HTML allowed)',
    },
    text: {
      control: 'text',
      description: 'Accordion content (HTML allowed)',
    },
    labelOpen: { control: 'text', description: 'Label when open' },
    labelClose: { control: 'text', description: 'Label when closed' },
  },
}

function Template(args) {
  return {
    components: { ExcerptPod, RichText },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      // Split text for slots
      const splitText = (text, sentenceCount) => {
        if (!text)
          return { truncated: '', remaining: '' }
        const sentenceRegex = /\.\s+(?=[A-Z])/g
        const sentences = text.split(sentenceRegex)

        if (sentences.length <= sentenceCount)
          return { truncated: text, remaining: '' }

        let truncated = sentences.slice(0, sentenceCount).join('. ')
        if (!truncated.endsWith('.'))
          truncated += '.'
        const remaining = ` ${sentences.slice(sentenceCount).join('.')}`

        return { truncated, remaining }
      }

      return { args, splitText }
    },
    template: `
    <ExcerptPod
        :title="args.title"
        :text="args.text"
        :subtitle="args.subtitle"
        :labelOpen="args.labelOpen"
        :labelClose="args.labelClose"
        :sentenceSplitCount="args.sentenceSplitCount"
    >
      <template #default>
        <RichText :rich-text-content="splitText(args.text, args.sentenceSplitCount).truncated" />
      </template>
      <template #content>
        <RichText :rich-text-content="splitText(args.text, args.sentenceSplitCount).remaining" />
      </template>
    </ExcerptPod>
  `,
  }
}

function TemplateNoContent(args) {
  return {
    components: { ExcerptPod, RichText },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      // Split text for slots
      const splitText = (text, sentenceCount) => {
        if (!text)
          return { truncated: '', remaining: '' }
        const sentenceRegex = /\.\s+(?=[A-Z])/g
        const sentences = text.split(sentenceRegex)

        if (sentences.length <= sentenceCount)
          return { truncated: text, remaining: '' }

        let truncated = sentences.slice(0, sentenceCount).join('. ')
        if (!truncated.endsWith('.'))
          truncated += '.'
        const remaining = ` ${sentences.slice(sentenceCount).join('.')}`

        return { truncated, remaining }
      }

      return { args, splitText }
    },
    template: `
    <ExcerptPod
        :title="args.title"
        :text="args.text"
        :subtitle="args.subtitle"
        :labelOpen="args.labelOpen"
        :labelClose="args.labelClose"
        :sentenceSplitCount="args.sentenceSplitCount"
    >
      <template #default>
        <RichText :rich-text-content="splitText(args.text, args.sentenceSplitCount).truncated" />
      </template>
    </ExcerptPod>
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  title: 'Notes',
  subtitle: 'Subtitle goes here',
  text: 'This digital collection is comprised of selected digitized photographic negatives from the analog photographic archive. Digitization and description of this collection is ongoing. The analog collection consists of photonegatives documenting events and people in Southern California and photographic prints documenting events and people in Southern California, the U.S., and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-present). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.',
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  sentenceSplitCount: 1,
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const NoContentSlot = TemplateNoContent.bind({})
NoContentSlot.args = {
  title: 'Brief Summary',
  subtitle: 'Short description',
  text: 'This is the first sentence of the text. This is the second sentence. This is the third sentence that would normally be hidden.',
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  sentenceSplitCount: 1,
}
