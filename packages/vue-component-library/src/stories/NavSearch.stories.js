import { computed } from 'vue'
import NavSearch from '@/lib-components/NavSearch'

export default {
  title: 'NAV / Search',
  component: NavSearch,
}

const mockData = {
  placeholder: 'Search the Library',
}

// Variations of stories below
export function DefaultWithPlaceholderProp() {
  return {
    data() {
      return {
        ...mockData
      }
    },
    components: { NavSearch },
    template: '<nav-search :placeholder="placeholder"/>',
  }
}

export function FTVA() {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { NavSearch },
    template: '<nav-search />',
  }
}
