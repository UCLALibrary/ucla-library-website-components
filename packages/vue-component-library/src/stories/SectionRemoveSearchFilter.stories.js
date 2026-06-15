import { computed } from 'vue'
import SectionRemoveSearchFilter from '@/lib-components/SectionRemoveSearchFilter'

export default {
  title: 'SEARCH / Section Remove Search Filter',
  component: SectionRemoveSearchFilter,
}

const mock = {
  location: ['Neque porro quisquam'],
  departments: [
    'DIIT',
    'Digital Library Program',
    'Arts Library',
    'Special Collections',
    'CLICC',
  ],
}
const mockBigger = {
  'location': ['Neque porro quisquam'],
  'departments': [
    'DIIT',
    'Digital Library Program',
    'Arts Library',
    'Special Collections',
    'CLICC',
  ],
  'subjectLibrarian.keyword': ['yes'],
  'areas': ['English', 'History', 'Geography', 'Science', 'Math'],
}

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return { mock }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mock"
        />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}
const WithMoreFiltersTemplate = (args) => {
  void args
  return {
    data() {
      return { mockBigger }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mockBigger"
        />
    `,
  }
}

export const WithMoreFilters = WithMoreFiltersTemplate.bind({})
WithMoreFilters.args = {}


// Variations of stories below
const FTVATemplate = (args) => {
  void args
  return {
    data() {
      return { mock }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mock"
        />
    `,
  }
}

export const FTVA = FTVATemplate.bind({})
FTVA.args = {}


const mockDLC = {
  searchFilters: [
    ['Genre', 'Black and White Photographs'],
    ['Genre', 'Film Stills'],
    ['Genre', 'Fantasy'],
    ['Genre', 'Film Stills'],
    ['Collection', 'Los Angeles Times Photographic Collection'],
  ],
}
const DLCTemplate = (args) => {
  void args
  return {
    data() {
      return { mockDLC }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return {
        mock,
      }
    },
    components: { SectionRemoveSearchFilter },
    template: '<section-remove-search-filter :filters="mockDLC" />',
  }
}

export const DLC = DLCTemplate.bind({})
DLC.args = {}

