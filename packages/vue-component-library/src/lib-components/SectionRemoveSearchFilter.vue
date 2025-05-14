<script setup lang="ts">
// Helpers

import { computed, ref, watch } from 'vue'
import type { PropType } from 'vue'
import BlockRemoveSearchFilter from '@/lib-components/BlockRemoveSearchFilter.vue'
import { useTheme } from '@/composables/useTheme'

interface Item {
  [key: string]: string[]
}

const { filters } = defineProps({
  filters: {
    type: Object as PropType<Item>,
    default: () => { },
  },
})
const emit = defineEmits(['update:filters', 'remove-selected'])

const theme = useTheme()

const filteredFilters = ref<Item>({})

watch(() => filters, (newFilters) => {
  // console.log('SectionRemoveSearchFilters filters', newFilters)
  if (newFilters === null || newFilters === undefined || Object.keys(newFilters).length === 0)
    filteredFilters.value = {}
  Object.entries(newFilters).forEach(([key, value]) => {
    filteredFilters.value[key] = value
  })
  // console.log('SectionRemoveSearchFilters filters', filteredFilters.value)
}, { deep: true, immediate: true })

const parsedFilters = computed(() => {
  const result = Object.entries(filteredFilters.value).flatMap(([name, value]) => {
    const items = Array.isArray(value) ? value : []
    return items.map(item => ({ name, value: item }))
  })
  return result
})
function getCheckBoxLabel(esFieldName: string) {
  return esFieldName === 'subjectLibrarian.keyword' ? 'Subject Librarian' : 'Past Events'
}

function closeBlockFilter(esfieldName: string, label: string | boolean) {
  filteredFilters.value[esfieldName] = filteredFilters.value[esfieldName].filter(item => item !== label)
  emit('update:filters', filteredFilters.value)
  emit('remove-selected')
}
</script>

<template>
  <div
    v-show="filteredFilters"
    class="section-remove-search-filter"
  >
    <div
      v-for="(filter) in parsedFilters"
      :key="`filter-${filter.value}`"
    >
      <BlockRemoveSearchFilter
        :is-selected="theme === 'ftva'"
        :title="filter.value === 'yes' ? getCheckBoxLabel(filter.name) : filter.value"
        @remove-block-filter="
          closeBlockFilter(
            filter.name,
            filter.value,
          )
        "
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-remove-search-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
