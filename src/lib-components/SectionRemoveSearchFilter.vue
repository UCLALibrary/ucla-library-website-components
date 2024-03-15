<script
  setup
  lang="ts"
>
import { ref, watch } from 'vue'
import type { PropType } from 'vue'
import BlockRemoveSearchFilter from '@/lib-components/BlockRemoveSearchFilter.vue'

interface Item {
  name: string
  value: string
}

const { filters } = defineProps({
  filters: {
    type: Array as PropType<Item[]>,
    default: () => [],
  },
})

const emit = defineEmits(['update:selected', 'remove-selected'])

const filteredFilters = ref<Item[]>([...filters])

watch(filters, (newVal: Item[] | undefined, oldVal: Item[] | undefined) => {
  console.log('filters changed from', JSON.stringify(oldVal), JSON.stringify(newVal))
  filteredFilters.value = [...(newVal || [])]
},
{
  deep: true,
  immediate: true
}
)

function closeBlockFilter(esfieldName: string, label: string, indexVal: number) {
  console.log('closeblockfilter event handlr fired:', esfieldName, label, indexVal)
  filteredFilters.value = filteredFilters.value.filter(item => item.value !== label)
  emit('update:selected', filteredFilters.value)
  emit('remove-selected')
}
</script>

<template>
  <div
    v-show="filteredFilters"
    class="section-remove-search-filter"
  >
    <div
      v-for="(filter, index) in filteredFilters"
      :key="`filter-${filter.value}`"
    >
      <BlockRemoveSearchFilter
        :title="filter.value"
        @removeBlockFilter="
          closeBlockFilter(
            filter.name,
            filter.value,
            index,
          )
        "
      />
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
>
.section-remove-search-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
