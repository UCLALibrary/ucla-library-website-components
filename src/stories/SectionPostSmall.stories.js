// Import mock api data
import * as API from '@/stories/mock-api.json'
import SectionPostSmall from '@/lib-components/SectionPostSmall'

// Storybook default settings
export default {
  title: 'Section / Post Small',
  component: SectionPostSmall,
}

const items = [
  {
    image: API.image,
    to: '/foo/bar',
    categoryName: 'squirrels',
    author: 'Fluffy Ranger',
    title: 'What to Feed Squirrels',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    categoryName: 'wild pets',
    author: 'Dexter Diamond',
    title: 'Introducing Mammals to Young Naturalists',
  },
  {
    image: API.image,
    to: '/about/foo/bar',
    categoryName: 'red squirrels',
    author: 'Penelope Nutstop',
    title: 'Twenty-two Things About Flying Squirrels',
  },
  {
    image: API.image,
    to: '/help/foo/bar/',
    categoryName: 'gray squirrels',
    author: 'Smokey Smith',
    title: 'Squirrels: Diet, Habits & Other Facts',
  }
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        items,
      }
    },
    components: { SectionPostSmall },
    computed: {
      parsedItems() {
        // Restructuring item to support text key
        return items
      },
    },
    template: '<section-post-small :items="parsedItems" to="/news/"/>',
  }
}
