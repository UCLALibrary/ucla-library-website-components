import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useGlobalStore } from '@/stores/GlobalStore'

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
  endDate: '2025-12-13T08:00:00+00:00',
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
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })
      return { args }
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
        :startTIme="parsedStartTime"
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
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })
      return { args }
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
        :startTIme="parsedStartTime"
      />`,
  }
}