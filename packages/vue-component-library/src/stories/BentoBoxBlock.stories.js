import { computed } from 'vue'
import BentoBoxBlock from '@/lib-components/BentoBoxBlock.vue'
import RichText from '@/lib-components/RichText.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

// STORIES

export default {
  title: 'Funkhaus / Bento Box Block',
  component: BentoBoxBlock,
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

const mockDefault = {
  id: 'bento-1',
  title: 'Default Bento Block',
  summary: '<p>This is a default bento block with all fields filled.</p>',
  image: baseImage,
  link: 'https://www.example.com',
  count: 345,
}

const mockNoImage = {
  id: 'bento-2',
  title: 'No Image Bento Block',
  summary: '<p>This bento block has no image.</p>',
  image: [],
  link: 'https://www.example.com',
}

const mockLongText = {
  id: 'bento-3',
  title: 'Bento Block With Very Long Title That Should Wrap Or Truncate Properly In The UI To Avoid Layout Breaking',
  summary: `<p>${'This is a very long summary. '.repeat(20)}</p>`,
  image: baseImage,
  link: 'https://www.example.com',
}

const mockNoTitle = {
  id: 'bento-4',
  title: '',
  summary: '<p>Bento block with no title.</p>',
  image: baseImage,
  link: 'https://www.example.com',
}

const mockNoSummary = {
  id: 'bento-5',
  title: 'No Summary Bento Block',
  summary: '',
  image: baseImage,
  link: 'https://www.example.com',
}

const mockNoLink = {
  id: 'bento-6',
  title: 'No Link Bento Block',
  summary: '<p>Bento block with no link.</p>',
  image: baseImage,
  link: '',
}

function Template(args) {
  return {
    components: { BentoBoxBlock, RichText, ButtonLink },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      const parsedCount = computed(() => args.count !== undefined ? `${args.count} Results` : '')
      return { args, parsedCount }
    },
    template: `
      <bento-box-block
        :image="args.image"
      >
        <template
          v-if="parsedCount"
          #eyebrow
        >
          <RichText
            :rich-text-content="parsedCount"
            class="count"
          />
        </template>
        <template
          v-if="args.title"
          #title
        >
          <RichText
            :rich-text-content="args.title"
            class="title"
          />
        </template>
        <template
          v-if="args.summary"
          #text
        >
          <RichText
            :rich-text-content="args.summary"
            class="text"
          />
        </template>
        <template
          v-if="args.link"
          #button
        >
          <ButtonLink
            :is-senary="true"
            :to="args.link"
            label="View Results"
            icon-name="svg-external-link"
          />
        </template>
      </bento-box-block>
    `,
  }
}

function TemplateNoTheme(args) {
  return {
    components: { BentoBoxBlock, RichText, ButtonLink },
    setup() {
      const parsedCount = computed(() => args.count !== undefined ? `${args.count} Results` : '')
      return { args, parsedCount }
    },
    template: `
      <bento-box-block
        :image="args.image"
        :to="args.link"
      >
        <template
          v-if="parsedCount"
          #eyebrow
        >
          <RichText
            :rich-text-content="parsedCount"
            class="count"
          />
        </template>
        <template
          v-if="args.title"
          #title
        >
          <RichText
            :rich-text-content="args.title"
            class="title"
          />
        </template>
        <template
          v-if="args.summary"
          #text
        >
          <RichText
            :rich-text-content="args.summary"
            class="text"
          />
        </template>
        <template
          v-if="args.link"
          #button
        >
          <ButtonLink
            :is-senary="true"
            :to="args.link"
            label="View Results"
            icon-name="svg-external-link"
          />
        </template>
      </bento-box-block>
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
Default.args = { ...mockDefault }
Default.decorators = [themeDecorator]

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const NoImage = Template.bind({})
NoImage.args = { ...mockNoImage }
NoImage.decorators = [themeDecorator]

export const LongText = Template.bind({})
LongText.args = { ...mockLongText }
LongText.decorators = [themeDecorator]

export const NoTitle = Template.bind({})
NoTitle.args = { ...mockNoTitle }
NoTitle.decorators = [themeDecorator]

export const NoSummary = Template.bind({})
NoSummary.args = { ...mockNoSummary }
NoSummary.decorators = [themeDecorator]

export const NoLink = Template.bind({})
NoLink.args = { ...mockNoLink }
NoLink.decorators = [themeDecorator]
