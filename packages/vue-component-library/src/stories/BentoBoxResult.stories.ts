import { computed } from 'vue'
// @ts-ignore - Component import path resolution
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
    title: 'Another Long Text Block Another Long Text Block Another Long Text Block',
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
    text: 'This text Truncated to 4 lines '.repeat(
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

const customSlotItems = [
  {
    title: 'Library Workshop',
    detail: 'Hands-on session: Digital Archives 101',
    cta: 'Register',
    to: '/events/workshop',
    items: ['Archival basics', 'Metadata overview', 'Q&A'],
  },
  {
    title: 'Staff Picks',
    detail: 'Curated reading list for spring quarter',
    cta: 'View List',
    to: '/staff-picks',
    items: ['Fiction: Sci-Fi', 'Non-fiction: History', 'Poetry'],
  },
  {
    title: 'Student Spotlight',
    detail: 'Interview with a student researcher',
    cta: 'Read Story',
    to: '/spotlight',
    items: ['Project overview', 'Methods', 'Findings'],
  },
  {
    title: 'Library Workshop',
    detail: 'Hands-on session: Digital Archives 101',
    cta: 'Register',
    to: '/events/workshop',
    items: ['Archival basics', 'Metadata overview', 'Q&A'],
  },
  {
    title: 'Staff Picks',
    detail: 'Curated reading list for spring quarter',
    cta: 'View List',
    to: '/staff-picks',
    items: ['Fiction: Sci-Fi', 'Non-fiction: History', 'Poetry'],
  },
  {
    title: 'Student Spotlight',
    detail: 'Interview with a student researcher',
    cta: 'Read Story',
    to: '/spotlight',
    items: ['Project overview', 'Methods', 'Findings'],
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

export const Default = Template.bind({}) as any
Default.args = { title: 'Default Results', items: defaultItems }
Default.decorators = [themeDecorator]

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const AllEdgeCases = Template.bind({}) as any
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

function CustomSlotTemplate(args: any) {
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
      <bento-box-result :title="args.title">
        <template #default>
          <div
            v-for="(item, index) in args.items"
            :key="item.title + index"
            class="custom-slot-item"
            style="min-width: 240px; padding: 16px; border-radius: 6px; background: white; display: flex; flex-direction: column; gap: 8px;"
          >
            <h4 style="margin: 0; font-size: 18px;">{{ item.title }}</h4>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">{{ item.detail }}</p>
            <a :href="item.to" style="font-weight: 600; color: #0047bb;">{{ item.cta }}</a>
            <ul v-if="item.items?.length" style="margin: 4px 0 0; padding-left: 18px; line-height: 1.5; font-size: 13px;">
              <li v-for="(entry, i) in item.items" :key="entry + i">{{ entry }}</li>
            </ul>
          </div>
        </template>
      </bento-box-result>
    `,
  }
}

export const CustomSlotContent = CustomSlotTemplate.bind({}) as any
CustomSlotContent.args = { title: 'Custom Slot Content', items: customSlotItems }
CustomSlotContent.decorators = [themeDecorator]
