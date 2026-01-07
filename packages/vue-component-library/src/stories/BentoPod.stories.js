import { computed } from 'vue'
import BentoPod from '@/lib-components/BentoPod.vue'

export default {
  title: 'Funkhaus / BentoPod',
  component: BentoPod,
  argTypes: {
    title: { control: 'text' },
    buttonLabel: { control: 'text' },
    buttonLink: { control: 'text' },
    labelOpen: { control: 'text' },
    labelClose: { control: 'text' },
    items: { control: 'object' },
  },
}

function Template(args) {
  return {
    components: { BentoPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: '<BentoPod v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  title: 'Bento Pod Title',
  buttonLabel: 'Go to Link',
  buttonLink: '/somewhere',
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  items: [
    {
      title: 'Item 1',
      to: '/item-1',
      meta: {
        type: 'Type A',
        date: '2025-07-08',
        program: 'Program X',
      },
    },
    {
      title: 'Item 2',
      to: '/item-2',
      meta: {
        type: 'Type B',
        date: '2025-07-09',
        program: 'Program Y',
      },
    },
    {
      title: 'Item 3',
      to: '/item-3',
      meta: {
        type: 'Type C',
        date: '2025-07-10',
        program: 'Program Z',
      },
    },
    {
      title: 'Item 4',
      to: '/item-4',
      meta: {
        type: 'Type D',
        date: '2025-07-11',
        program: 'Program W',
      },
    },
    {
      title: 'Item 5',
      to: '/item-5',
      meta: {
        type: 'Type E',
        date: '2025-07-12',
        program: 'Program V',
      },
    },
  ],
}

// Story: Some items missing data
export const ItemsWithMissingData = Template.bind({})
ItemsWithMissingData.args = {
  ...Default.args,
  items: [
    {
      title: 'Item with only title',
      meta: {},
    },
    {
      meta: {
        type: 'Type and date Only',
        date: '2025-08-01',
      },
    },
    {
      title: 'Item with link',
      to: '/item-link',
      meta: {},
    },
    {
      title: 'Full Item',
      to: '/item-full',
      meta: {
        type: 'Type F',
        date: '2025-08-02',
        program: 'Program Q',
      },
    },
  ],
}

export const LessThanThreeItems = Template.bind({})
LessThanThreeItems.args = {
  ...Default.args,
  items: [
    {
      title: 'Item 1',
      meta: {
        type: 'Type A',
        date: '2025-07-08',
        program: 'Program X',
      },
    },
    {
      title: 'Item 2',
      meta: {
        type: 'Type B',
        date: '2025-07-09',
        program: 'Program Y',
      },
    },
  ],
}

export const ExactlyThreeItems = Template.bind({})
ExactlyThreeItems.args = {
  ...Default.args,
  items: [
    {
      title: 'Item 1',
      meta: {
        type: 'Type A',
        date: '2025-07-08',
        program: 'Program X',
      },
    },
    {
      title: 'Item 2',
      meta: {
        type: 'Type B',
        date: '2025-07-09',
        program: 'Program Y',
      },
    },
    {
      title: 'Item 3',
      meta: {
        type: 'Type C',
        date: '2025-07-10',
        program: 'Program Z',
      },
    },
  ],
}

export const NoItems = Template.bind({})
NoItems.args = {
  ...Default.args,
  items: [],
}

export const CustomLabels = Template.bind({})
CustomLabels.args = {
  ...Default.args,
  labelOpen: 'Collapse',
  labelClose: 'Expand',
}

export const RealContent = Template.bind({})
RealContent.args = {
  title: 'UCLA Library Special Collections',
  buttonLabel: 'Browse All Collections',
  buttonLink: '/collections',
  labelOpen: 'Show Fewer Items',
  labelClose: 'Show More Items',
  items: [
    {
      title: 'Los Angeles Times Photographic Archive',
      meta: {
        type: 'Photographs',
        date: 'January 01, 2039',
        program: 'News & Media',
      },
    },
    {
      title: 'Charles E. Young Research Library',
      meta: {
        type: 'Library',
        date: 'February 15, 2039',
        program: 'Research',
      },
    },
    {
      title: 'Oral History Collection',
      meta: {
        type: 'Audio',
        date: 'March 10, 2039',
        program: 'History',
      },
    },
    {
      title: 'Medieval Manuscripts',
      meta: {
        type: 'Manuscripts',
        date: 'April 22, 2039',
        program: 'Rare Books',
      },
    },
    {
      title: 'LGBTQIA+ Activism Papers',
      meta: {
        type: 'Archives',
        date: 'May 30, 2039',
        program: 'Social Movements',
      },
    },
    {
      title: 'Japanese American Incarceration Materials',
      meta: {
        type: 'Documents',
        date: 'June 18, 2039',
        program: 'History',
      },
    },
  ],
}
