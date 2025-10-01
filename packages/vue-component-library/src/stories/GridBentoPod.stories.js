import { computed } from 'vue'
import GridBentoPod from '@/lib-components/GridBentoPod.vue'

export default {
  title: 'Funkhaus / GridBentoPod',
  component: GridBentoPod,
  argTypes: {
    items: { control: 'object' },
  },
}

function Template(args) {
  return {
    components: { GridBentoPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: '<GridBentoPod v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: '1',
      title: 'Bento Pod Title',
      description: 'Description for the first pod',
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
    },
  ],
}

export const SinglePod = Template.bind({})
SinglePod.args = {
  items: [
    {
      id: '1',
      title: 'Featured Collections',
      description: 'Highlighted collections and resources',
      items: [
        {
          title: 'Los Angeles Times Photographic Archive',
          to: '/collections/lat-photos',
          meta: {
            type: 'Photographs',
            date: 'January 01, 2039',
            program: 'News & Media',
          },
        },
        {
          title: 'Charles E. Young Research Library',
          to: '/collections/young-library',
          meta: {
            type: 'Library',
            date: 'February 15, 2039',
            program: 'Research',
          },
        },
        {
          title: 'Oral History Collection',
          to: '/collections/oral-history',
          meta: {
            type: 'Audio',
            date: 'March 10, 2039',
            program: 'History',
          },
        },
        {
          title: 'Medieval Manuscripts',
          to: '/collections/medieval',
          meta: {
            type: 'Manuscripts',
            date: 'April 22, 2039',
            program: 'Rare Books',
          },
        },
        {
          title: 'LGBTQIA+ Activism Papers',
          to: '/collections/lgbtq-activism',
          meta: {
            type: 'Archives',
            date: 'May 30, 2039',
            program: 'Social Movements',
          },
        },
        {
          title: 'Japanese American Incarceration Materials',
          to: '/collections/japanese-american',
          meta: {
            type: 'Documents',
            date: 'June 18, 2039',
            program: 'History',
          },
        },
      ],
    },
  ],
}

export const EmptyPods = Template.bind({})
EmptyPods.args = {
  items: [
    {
      id: '1',
      title: 'Empty Collection',
      description: 'This collection has no items',
      items: [],
    },
    {
      id: '2',
      title: 'Another Empty Collection',
      description: 'This collection also has no items',
      items: [],
    },
  ],
}

export const MixedContent = Template.bind({})
MixedContent.args = {
  items: [
    {
      id: '1',
      title: 'Full Collection',
      description: 'A collection with multiple items',
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
      ],
    },
    {
      id: '2',
      title: 'Empty Collection',
      description: 'This collection is empty',
      items: [],
    },
    {
      id: '3',
      title: 'Single Item Collection',
      description: 'A collection with just one item',
      items: [
        {
          title: 'Single Item',
          to: '/single-item',
          meta: {
            type: 'Type C',
            date: '2025-07-10',
            program: 'Program Z',
          },
        },
      ],
    },
  ],
}

export const NoItems = Template.bind({})
NoItems.args = {
  items: [],
}
