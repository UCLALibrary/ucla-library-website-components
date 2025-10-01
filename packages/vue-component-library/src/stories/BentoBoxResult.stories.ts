import { computed } from 'vue'
import BentoBoxResult from '@/lib-components/BentoBoxResult.vue'

export default {
  title: 'Funkhaus / Bento Box Result',
  component: BentoBoxResult,
}

// MOCK DATA
const baseImage = {
  id: '26089',
  src: 'https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg',
  height: 2074,
  width: 2560,
  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w',
  alt: 'Albino Fox',
  focalPoint: [0.5, 0.5],
}

const defaultItems = [
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Rare Books Collection',
    text: 'Explore a curated selection of rare and antique books from our archives.',
    count: 312,
  },
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Historical Photographs',
    text: 'Discover photographs documenting Los Angeles history from the 19th and 20th centuries. This collection features a wide range of images, from cityscapes to portraits.',
    count: 842,
  },
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Manuscript Archives',
    text: 'Handwritten letters, diaries, and documents from notable figures and events.',
    count: 127,
  },
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Map Collection',
    text: 'A diverse collection of maps, atlases, and cartographic materials. Some maps date back to the 18th century and include rare, hand-drawn pieces.',
    count: 205,
  },
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Oral Histories',
    text: 'Audio interviews and personal stories from community members and scholars. Listen to unique perspectives and experiences.',
    count: 59,
  },
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Film & Media Archives',
    text: 'Preserved films, newsreels, and multimedia documenting cultural history. Includes both short and feature-length works.',
    count: 390,
  },
  // Really long text examples
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Extremely Long Description Example',
    text:
            `${'This is an example of a bento box result with an extremely long text field. '.repeat(
              20
            )
             }It should wrap or truncate gracefully, and the custom scrollbar should remain functional regardless of content length.`,
    count: 777,
  },
  {
    to: 'https://static.library.ucla.edu',
    image: baseImage,
    title: 'Another Long Text Block',
    text:
            `${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(
              30
            )
             }Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    count: 888,
  },
]

const oneItem = [
  {
    to: '/item-1',
    image: baseImage,
    title: 'Only One',
    text: 'Just a single item.',
    count: 1,
  },
]

const longTextItems = [
  {
    to: '/item-1',
    image: baseImage,
    title: 'This is a very long title that should wrap or truncate properly in the UI to avoid layout breaking',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(
      8
    ),
    count: 9999,
  },
]

const missingImageItems = [
  {
    to: '/item-1',
    image: null,
    title: 'No Image',
    text: 'This item has no image.',
    count: 5,
  },
]

const missingCountItems = [
  {
    to: '/item-1',
    image: baseImage,
    title: 'No Count',
    text: 'This item has no count.',
  },
]

function Template(args: any) {
  return {
    components: { BentoBoxResult },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: `
      <bento-box-result :title="args.title" :items="args.items" />
    `,
  }
}

function TemplateNoTheme(args: any) {
  return {
    components: { BentoBoxResult },
    setup() {
      return { args }
    },
    template: `
      <bento-box-result :title="args.title" :items="args.items" />
    `,
  }
}

function themeDecorator() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<story />',
  }
}

export const Default = Template.bind({})
Default.args = { title: 'Default Results', items: defaultItems }
Default.decorators = [themeDecorator]

export const NoItems = Template.bind({})
NoItems.args = { title: 'No Results', items: [] }
NoItems.decorators = [themeDecorator]

export const OneItem = Template.bind({})
OneItem.args = { title: 'One Result', items: oneItem }
OneItem.decorators = [themeDecorator]

export const LongText = Template.bind({})
LongText.args = { title: 'Long Text Result', items: longTextItems }
LongText.decorators = [themeDecorator]

export const MissingImage = Template.bind({})
MissingImage.args = { title: 'Missing Image', items: missingImageItems }
MissingImage.decorators = [themeDecorator]

export const MissingCount = Template.bind({})
MissingCount.args = { title: 'Missing Count', items: missingCountItems }
MissingCount.decorators = [themeDecorator]

export const AllEdgeCases = Template.bind({})
AllEdgeCases.args = {
  title: 'All Edge Cases',
  items: [
    ...defaultItems,
    ...oneItem,
    ...longTextItems,
    ...missingImageItems,
    ...missingCountItems,
  ],
}
AllEdgeCases.decorators = [themeDecorator]

export const NoTheme = TemplateNoTheme.bind({})
NoTheme.args = { title: 'Default Results', items: defaultItems }
