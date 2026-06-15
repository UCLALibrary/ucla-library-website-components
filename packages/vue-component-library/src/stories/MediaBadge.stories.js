import { computed } from 'vue'

import * as API from '@/stories/mock-api.json'
import MediaBadge from '@/lib-components/MediaBadge'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

// Storybook default settings
export default {
  title: 'Media Badge',
  component: MediaBadge,
  argTypes: {
    imageAspectRatio: { control: 'number' },
    badgeText: { control: 'text' },
  },
}

const mock = {
  image: API.image,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: {
      ResponsiveImage,
      MediaBadge,
    },
    data() {
      return { ...mock }
    },
    template: `
      <responsive-image :media="image">
        <media-badge
            :image="image"
            :image-aspect-ratio="args.imageAspectRatio"
        >
            {{ args.badgeText }} <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg__icon-expand">
  <path d="m16.0333 23.0381-.0652-14.07692" stroke="#0B6AB7" stroke-width="1.5" stroke-linejoin="round" class="svg__stroke--primary-blue-03" />
  <path d="m8.95828 16.0291 14.08422-.0579" stroke="#0B6AB7" stroke-width="1.5" stroke-linejoin="round" class="svg__stroke--primary-blue-03 "/>
</svg>
        </media-badge>
      </responsive-image>
  `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  imageAspectRatio: 60,
  badgeText: '5 Images',
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FTVATemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    data() {
      return {
        ...mock,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: {
      ResponsiveImage,
      MediaBadge,
    },
    template: `
    <responsive-image :media="image">
      <media-badge
          :image="image"
          :image-aspect-ratio="args.imageAspectRatio">
        {{ args.badgeText }}
      </media-badge>
    </responsive-image>
  `,
  }
}

export const FTVA = FTVATemplate.bind({})
FTVA.args = {
  ...Default.args,
}
