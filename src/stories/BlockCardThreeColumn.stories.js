import { computed } from 'vue'

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
  endDate: '2025-12-13T08:00:00+00:00',
  tagLabels: [
    {
      title: 'Guest speaker'
    }
  ],
  imageAspectRatio: 60,
}

export function Default() {
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
        :startTime="startDate"
      />

  `,
  }
}
