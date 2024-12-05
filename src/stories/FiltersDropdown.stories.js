import FiltersDropdown from '@/lib-components/FiltersDropdown.vue'

export default {
  title: 'Filters Dropdown',
  component: FiltersDropdown,
}

// MOCK DATA

export function Default() {
  return {
    components: { FiltersDropdown },
    template: '<filters-dropdown />',
  }
}
