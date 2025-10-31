import { computed } from 'vue'
import ExcerptPod from '@/lib-components/ExcerptPod.vue'

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
    components: { ExcerptPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: `
    <ExcerptPod
        :title="args.title"
        :text="args.text"
        :subtitle="args.subtitle"
        :labelOpen="args.labelOpen"
        :labelClose="args.labelClose"
        :sentenceSplitCount="args.sentenceSplitCount"
    />
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  title: 'Notes',
  subtitle: 'Subtitle goes hereeee',
  text: 'This digital collection is comprised of selected digitized photographic negatives from the analog photographic archive. Digitization and description of this collection is ongoing. The analog collection consists of photonegatives documenting events and people in Southern California and photographic prints documenting events and people in Southern California, the U.S., and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-present). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.',
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  sentenceSplitCount: 1,
}
export const EmptyProps = Template.bind({})
EmptyProps.args = {
  ...Default.args,
}

export const MoreSections = Template.bind({})
MoreSections.args = {
  ...Default.args,
  sentenceSplitCount: 1,
  labelOpen: 'Collapse',
  labelClose: 'Expand',
}
