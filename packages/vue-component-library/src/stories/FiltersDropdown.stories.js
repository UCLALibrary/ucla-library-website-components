import { computed, onMounted, ref } from 'vue'
import FiltersDropdown from '@/lib-components/FiltersDropdown.vue'

export default {
  title: 'Filters Dropdown',
  component: FiltersDropdown,
}

// MOCK DATA
const mockFilterGroups = [
  {
    name: 'Event Type',
    searchField: 'ftvaEventTypeFilters.title.keyword',
    options: ['Film', 'Theater', 'Lecture'],
  },
  {
    name: 'Screen Format',
    searchField: 'ftvaScreeningFormatFilters.title.keyword',
    options: ['Online', 'In-Person'],
  },
]
// note that because this component uses v-model by default,
// parent component needs to use a ref for selectedFilters
const mockEmptySelectedFilters = ref({ 'ftvaEventTypeFilters.title.keyword': [], 'ftvaScreeningFormatFilters.title.keyword': [] })
const mockSelectedFilters = ref({
  'ftvaEventTypeFilters.title.keyword': ['Film', 'Theater'],
  'ftvaScreeningFormatFilters.title.keyword': ['Online'],
})

export function Default() {
  return {
    components: { FiltersDropdown },
    data() {
      return { mockFilterGroups, mockSelectedFilters: mockEmptySelectedFilters }
    },
    template: '<div style="width:400px"><span>Selected filters display:{{ mockSelectedFilters }}</span><filters-dropdown v-model:selectedFilters="mockSelectedFilters" :filterGroups="mockFilterGroups" /></div>',
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

// uses async data
export function InitialSelectedFilters() {
  return {
    components: { FiltersDropdown },
    setup() {
      const selectedFilters = ref({})
      // mock getting selected filters from a route or other async source
      const fetchFilters = async () => {
        // Mocking an async fetch call
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockSelectedFilters.value)
          }, 1000)
        })
        selectedFilters.value = response
      }

      fetchFilters()

      return { selectedFilters }
    },
    data() {
      return { mockFilterGroups }
    },
    template: '<span>Selected filters display:{{ selectedFilters }}</span><filters-dropdown v-model:selectedFilters="selectedFilters" :filterGroups="mockFilterGroups" />',
  }
}

// FTVA Theme
export function FTVA() {
  return {
    components: { FiltersDropdown },
    data() {
      return { mockFilterGroups, mockSelectedFilters }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: '<span>Selected filters display:{{ mockSelectedFilters }}</span><filters-dropdown v-model:selectedFilters="mockSelectedFilters" :filterGroups="mockFilterGroups" />',
  }
}

// FTVA Theme W Selected Filters updating on 'done' click only
// This is the current planned implmentation on the FTVA site
const mockSelectedFiltersEmitted = ref({
  'ftvaEventTypeFilters.title.keyword': ['Film'],
  'ftvaScreeningFormatFilters.title.keyword': ['Online'],
})
export function FTVAFiltersUpdateDoneClick() {
  return {
    components: { FiltersDropdown },
    setup() {
      const selectedFiltersDisplay = ref({})

      const updateFiltersDisplay = () => {
        // assignment is done with spread operator so that a copy is made
        selectedFiltersDisplay.value = { ...mockSelectedFiltersEmitted.value }
      }
      onMounted(() => {
        // trigger function once onMount to update display with initial selected filters
        updateFiltersDisplay()
      })
      return { selectedFiltersDisplay, updateFiltersDisplay }
    },
    data() {
      return { mockFilterGroups, mockSelectedFiltersEmitted }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: '<span>Selected filters display:{{ selectedFiltersDisplay }}</span><filters-dropdown v-model:selectedFilters="mockSelectedFiltersEmitted" @update-display="updateFiltersDisplay" :filterGroups="mockFilterGroups" />',
  }
}
