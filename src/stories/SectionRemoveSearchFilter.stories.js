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
export function WithMoreFilters() {
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
