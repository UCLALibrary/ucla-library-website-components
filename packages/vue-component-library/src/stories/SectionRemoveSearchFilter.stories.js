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
export function Default() {
  return {
    components: { SectionRemoveSearchFilter },
    data() {
      return {
        filters: JSON.parse(JSON.stringify(mock)),
      }
    },
    methods: {
      updateFilters(newFilters) {
        this.filters = JSON.parse(JSON.stringify(newFilters))
      },
    },
    template: `
      <section-remove-search-filter
        :filters="filters"
        @update:filters="updateFilters"
      />
    `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
export function WithMoreFilters() {
  return {
    data() {
      return { filters: JSON.parse(JSON.stringify(mockBigger))}
      
    },
     methods: {
      updateFilters(newFilters) {
        this.filters = newFilters
      },
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="filters"
             @update:filters="updateFilters"
        />
    `,
  }
}

// Variations of stories below
export function FTVA() {
  return {
    data() {
      return { filters: JSON.parse(JSON.stringify(mock)) }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
     methods: {
      updateFilters(newFilters) {
        this.filters = newFilters
      },
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="filters"
             @update:filters="updateFilters"
        />
    `,
  }
}

const mockDLC = {
  searchFilters: [
    ['Genre', 'Black and White Photographs'],
    ['Genre', 'Film Stills'],
    ['Genre', 'Fantasy'],
    ['Genre', 'Film Stills'],
    ['Collection', 'Los Angeles Times Photographic Collection'],
  ],
}
export function DLC() {
  return {
    data() {
      return { filters: JSON.parse(JSON.stringify(mockDLC)) }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    methods: {
      updateFilters(newFilters) {
        this.filters = newFilters
      },
    },
    setup() {
      return {
        mock,
      }
    },
    components: { SectionRemoveSearchFilter },
    template: '<section-remove-search-filter :filters="filters"  @update:filters="updateFilters" />',
  }
}
