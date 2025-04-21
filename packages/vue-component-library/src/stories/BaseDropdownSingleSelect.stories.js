import { computed, ref } from 'vue'
import BaseDropdownSingleSelect from '@/lib-components/BaseDropdownSingleSelect.vue'

export default {
  title: 'Base Dropdown Single Select',
  component: BaseDropdownSingleSelect,
}

// MOCK DATA
const singleFilterGroup = [
  {
    name: 'Topic',
    searchField: 'topic',
    options: ['Current Events', 'Politics', 'Economy', 'Social Impact'],
  },
]

const mockSelectedFilter = ref({ topic: '' })

export function Default() {
  return {
    components: { BaseDropdownSingleSelect },
    data() {
      return {
        selectedFilter: mockSelectedFilter,
        filterGroups: singleFilterGroup,
      }
    },
    template: `
      <div style="width:400px">
        <span>Selected topic: {{ selectedFilter.topic }}</span>
        <BaseDropdownSingleSelect
          v-model:selectedFilters="selectedFilter"
          :filterGroups="filterGroups"
        />
      </div>
    `,
  }
}

export function FTVA() {
  return {
    components: { BaseDropdownSingleSelect },
    data() {
      return {
        selectedFilter: mockSelectedFilter,
        filterGroups: singleFilterGroup,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div style="width:400px">
        <span>Selected topic: {{ selectedFilter.topic }}</span>
        <BaseDropdownSingleSelect
          v-model:selectedFilters="selectedFilter"
          :filterGroups="filterGroups"
        />
      </div>
    `,
  }
}
