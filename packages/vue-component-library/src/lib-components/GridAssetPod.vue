<script setup lang="ts">
// Imports
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import sortColumns from '@/utils/sortColumns'

// Props
const props = withDefaults(defineProps<GridAssetPodProps>(), {
  items: () => [],
  isGridLayout: false,
  hasTransition: false,
  layout: 'grid',
})

const theme = useTheme()

// Types
interface GridAssetPodProps {
  readonly items: any[]
  readonly isGridLayout?: boolean
  readonly hasTransition?: boolean
  readonly layout?: 'grid' | 'two-column'
}

// Computeds
const classes = computed(() =>
  [
    'grid-asset-pod',
    theme?.value || '',
    props.isGridLayout && 'is-grid-layout',
    props.hasTransition && 'has-transition',
    props.layout === 'two-column' && 'layout-two-column',
  ].filter(Boolean)
)
const hasItems = computed(() => props.items.length > 0)

// For two-column layout, split items into columns
const sortedColumns = computed(() => {
  if (props.layout !== 'two-column')
    return null

  if (props.items.length <= 1)
    return [props.items]

  return sortColumns(props.items, 2)
})
</script>

<template>
  <div
    v-if="hasItems"
    :class="classes"
    :aria-label="`Asset grid with ${items.length} items`"
  >
    <!-- Two-column layout -->
    <template v-if="layout === 'two-column' && sortedColumns">
      <div
        v-for="(column, columnIndex) in sortedColumns"
        :key="`column-${columnIndex}`"
        class="column-container"
      >
        <div
          v-for="(item, index) in column"
          :key="`grid-asset-pod-${columnIndex}-${index}`"
          class="block-container"
        >
          <slot :item="item" />
        </div>
      </div>
    </template>
    <!-- Default grid layout -->
    <template v-else>
      <div
        v-for="(item, index) in items"
        :key="`grid-asset-pod-${index}`"
        class="block-container"
      >
        <slot :item="item" />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-asset-pod.scss";
</style>
