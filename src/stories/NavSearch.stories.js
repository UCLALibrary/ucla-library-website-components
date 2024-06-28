import { computed } from 'vue'
import NavSearch from '@/lib-components/NavSearch'

export default {
  title: 'NAV / Search',
  component: NavSearch,
}

const mockData = {}

// Variations of stories below
export function Default() {
  return {
    data() {
        return {
          ...mockData
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { NavSearch },
    template: '<nav-search />',
  }
}