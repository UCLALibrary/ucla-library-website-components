import { computed } from 'vue'

// Import component
import BlockCardThreeColumn from '@/lib-components/BlockCardThreeColumn'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Card Three Column',
  component: BlockCardThreeColumn
}

const mockDefault = {
  to: 'series/todd-solondz-series',
  startDate: '2025-12-13T06:30:00+00:00',
  image: API.image,
  title: 'TEST - Todd Solondz Series',
  endDate: '2025-12-13T05:45:00+00:00',
  tagLabels: [
    {
      title: 'Guest speaker'
    },
    {
      title: '35mm'
    }
  ],
}

// Variations of stories below
export function Default(args) {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image="image"
        :image-aspect-ratio="100"
        :title="title"
        :tagLabels="tagLabels"
        :startTime="parsedTime"
      />`,
  }
}

export function LongTitle(args) {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image="image"
        :image-aspect-ratio="100"
        title="What I Really Do Is Magic: Edith Head and Hollywood Costume Design"
        :tagLabels="tagLabels"
      />`,
  }
}

export function NoImage(args) {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardThreeColumn },
    template: `
      <block-card-three-column
        :to="to"
        :start-date="startDate"
        :image=null
        :image-aspect-ratio="100"
        title="What I Really Do Is Magic: Edith Head and Hollywood Costume Design"
        :tagLabels="tagLabels"
      />`,
  }
}
