// Import mock api data\
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useGlobalStore } from '@/stores/GlobalStore'
import * as API from '@/stories/mock-api.json'
import HeaderSticky from '@/lib-components/HeaderSticky'

// Storybook default settings
export default {
  title: 'GLOBAL / Header Sticky',
  component: HeaderSticky,
}

const primaryItems = [
  { ...API.primaryNavlinks[0] },
  {
    ...API.primaryNavlinks[0],
    name: 'Visit',
    url: '/visit/',
  },
  {
    ...API.primaryNavlinks[0],
    name: 'About',
    url: '/about/',
  },
  { ...API.primaryNavlinks[3] },
]
const secondaryItems = [
  { ...API.links[0] },
  { ...API.links[1] },
  { ...API.links[2] },
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        primaryItems,
        secondaryItems,
      }
    },
    components: { HeaderSticky },
    computed: {
      parsedSecondaryItems() {
        // Restructuring item to support text key
        return this.secondaryItems.map((obj) => {
          return {
            ...obj,
            text: obj.name,
          }
        })
      },
    },
    template: `
        <header-sticky
            :primary-items="primaryItems"
            :secondary-items="parsedSecondaryItems"
        />
    `,
  }
}

const FTVAprimaryItems = [
  { ...API.primaryNavlinks[0] },
  {
    ...API.primaryNavlinks[0],
    name: 'Visit',
    url: '/visit/',
  },
  {
    ...API.primaryNavlinks[0],
    name: 'About',
    url: '/about/',
  },
  {
    ...API.primaryNavlinks[0],
    name: 'Really really long name',
  },
]

export function FTVAVersion() {
  return {
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        // Set initial winWidth
        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        // Clean up
        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })
    },
    data() {
      return {
        FTVAprimaryItems,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { HeaderSticky },
    template: `
        <header-sticky
            :primary-items="FTVAprimaryItems"
        />
    `,
  }
}
