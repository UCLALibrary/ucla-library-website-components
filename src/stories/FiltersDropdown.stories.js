import { computed, ref } from 'vue'
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
// note that because this component uses v-model,
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

export function InitialSelectedFilters() {
  return {
    components: { FiltersDropdown },
    data() {
      return { mockFilterGroups, mockSelectedFilters }
    },
    template: '<span>Selected filters display:{{ mockSelectedFilters }}</span><filters-dropdown v-model:selectedFilters="mockSelectedFilters" :filterGroups="mockFilterGroups" />',
  }
}

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
