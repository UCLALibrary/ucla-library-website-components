<script setup lang="ts">
// Imports
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// Props
const props = withDefaults(defineProps<GridAssetPodProps>(), {
  items: () => [],
  isGridLayout: false,
  hasTransition: false,
})

const theme = useTheme()

// Types
interface GridAssetPodProps {
  readonly items: any[]
  readonly isGridLayout?: boolean
  readonly hasTransition?: boolean
}

// Computeds
const classes = computed(() =>
  [
    'grid-asset-pod',
    theme?.value || '',
    props.isGridLayout && 'is-grid-layout',
    props.hasTransition && 'has-transition',
  ].filter(Boolean)
)
const hasItems = computed(() => props.items.length > 0)
</script>

<template>
  <div
    v-if="hasItems"
    :class="classes"
    :aria-label="`Asset grid with ${items.length} items`"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="block-container"
    >
      <slot :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-asset-pod.scss";
</style>
