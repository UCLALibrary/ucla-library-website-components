<script setup lang="ts">
// Helpers

import { computed, ref, watch } from 'vue'
import type { PropType } from 'vue'
import BlockRemoveSearchFilter from '@/lib-components/BlockRemoveSearchFilter.vue'

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

const filteredFilters = ref<Item>({})

watch(() => filters, (newFilters) => {
  Object.entries(newFilters).forEach(([key, value]) => {
    filteredFilters.value[key] = value
  })
}, { deep: true, immediate: true })

const parsedFilters = computed(() => {
  const result = Object.entries(filteredFilters.value).flatMap(([name, value]) => {
    return value.map(item => ({ name, value: item }))
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
