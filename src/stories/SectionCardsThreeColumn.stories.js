import { onBeforeUnmount, onMounted } from 'vue'
import { useGlobalStore } from '@/stores/GlobalStore'

// Import component
import SectionCardsThreeColumn from '@/lib-components/SectionCardsThreeColumn'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Cards Three Column',
  component: SectionCardsThreeColumn,
}

const mockDefault = [
  {
    id: '2847944',
    to: 'events/la-région-centrale-03-08-24',
    title: 'TEST - La Région Centrale Screening',
    startDate: '2027-03-31T07:00:00+00:00',
    image: API.image,
    tagLabels: [
      { title: 'Guest speaker' },
      { title: 'Digital' }
    ]
  },
  {
    id: '3145808',
    to: 'events/step-up-3-07-19-25',
    title: 'TEST - Step Up 3D (2010) Sequel to 2008\'s Step Up 2: The Streets and the third installment in the Step Up film series',
    startDate: '2028-03-31T07:00:00+00:00',
    image: null,
    tagLabels: [
      { title: 'Guest speaker' }
    ]
  },
  {
    id: '3145784',
    to: 'events/step-up-2-07-07-25',
    title: 'TEST - Step Up 2: The Streets (2008)',
    startDate: '2026-03-31T07:00:00+00:00',
    image: API.image,
  },
]

// Variations of stories below
export function Default(args) {
  return {
    data() {
      return { items: mockDefault }
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
    components: { SectionCardsThreeColumn },
    template: `
      <section-cards-three-column
        :items="items"
      />
  `,
  }
}
