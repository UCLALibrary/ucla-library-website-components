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
    accordions: {
      control: 'object',
      description: 'Array of accordion sections',
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
        :accordions="args.accordions"
        :labelOpen="args.labelOpen"
        :labelClose="args.labelClose"
    />
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  title: 'Notes',
  subtitle: 'Subtitle goes hereeee',
  text: 'PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.',
  accordions: [
    {
      title: 'Accordion Section',
      text: 'Accordion content goes here. It can be as long as you want, and it can include <b>HTML</b> tags.',
    },
  ],
  labelOpen: 'Show Less',
  labelClose: 'Show More',
}
export const EmptyProps = Template.bind({})
EmptyProps.args = {
  ...Default.args,
  accordions: [{}],
}

export const MoreSections = Template.bind({})
MoreSections.args = {
  ...Default.args,
  accordions: [
    {
      title: 'Section 1',
      text: 'First section content.',
    },
    {
      title: 'Section 2',
      text: 'Second section content.',
    },
    {
      title: 'Section 3',
      text: 'Third section content.',
    },
  ],
  labelOpen: 'Collapse All',
  labelClose: 'Expand All',
}
