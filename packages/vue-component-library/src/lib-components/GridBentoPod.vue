<script setup lang="ts">
// Imports
import { computed } from 'vue'
import BentoPod from './BentoPod.vue'
import { useTheme } from '@/composables/useTheme'
import sortColumns from '@/utils/sortColumns'

// Props
interface GridBentoPodProps {
  items: Array<{
    id: string
    title: string
    description: string
    items: Array<Record<string, any>>
  }>
}
const props = defineProps<GridBentoPodProps>()

// Data
const { theme } = useTheme()
// Computed
const classes = computed(() => {
  return ['grid-bento-pod', theme?.value || '']
})

const sortedColumns = computed(() => {
  if (props.items.length <= 1)
    return [props.items]

  return sortColumns(props.items, 2)
})
</script>

<template>
  <div :class="classes">
    <div
      v-for="(column, columnIndex) in sortedColumns"
      :key="columnIndex"
      class="bento-pod-column"
    >
      <BentoPod
        v-for="item in column"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :items="item.items"
        class="bento-pod"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-bento-pod.scss";
</style>
