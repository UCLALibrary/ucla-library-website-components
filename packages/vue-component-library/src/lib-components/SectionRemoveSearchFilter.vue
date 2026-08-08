<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import BlockRemoveSearchFilter from '@/lib-components/BlockRemoveSearchFilter.vue'
import { useTheme } from '@/composables/useTheme'

interface Filters {
  [key: string]: string[]
}

interface ParsedFilter {
  name: string
  value: string
}

const props = defineProps({
  filters: {
    type: Object as PropType<Filters>,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:filters', 'remove-selected'])
const theme = useTheme()

const parsedFilters = computed<ParsedFilter[]>(() => {
  return Object.entries(props.filters ?? {}).flatMap(([name, values]) =>
    (values ?? []).map(value => ({ name, value }))
  )
})

function getCheckBoxLabel(esFieldName: string) {
  return esFieldName === 'subjectLibrarian.keyword'
    ? 'Subject Librarian'
    : 'Past Events'
}

function closeBlockFilter(esFieldName: string, label: string) {
  const nextFilters: Filters = Object.fromEntries(
    Object.entries(props.filters ?? {})
      .map(([key, values]) => {
        if (key !== esFieldName)
          return [key, values]

        return [key, (values ?? []).filter(item => item !== label)]
      })
      .filter(([, values]) => (values as string[]).length > 0)
  )

  emit('update:filters', nextFilters)
  emit('remove-selected')
}
</script>

<template>
  <div
    v-show="parsedFilters.length > 0"
    class="section-remove-search-filter"
  >
    <div
      v-for="filter in parsedFilters"
      :key="`filter-${filter.name}-${filter.value}`"
    >
      <BlockRemoveSearchFilter
        :is-selected="theme === 'ftva'"
        :title="filter.value === 'yes' ? getCheckBoxLabel(filter.name) : filter.value"
        @remove-block-filter="closeBlockFilter(filter.name, filter.value)"
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
