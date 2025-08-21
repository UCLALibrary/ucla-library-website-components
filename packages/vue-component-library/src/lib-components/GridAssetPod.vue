<script setup lang="ts">
// Imports
import { computed } from 'vue'
import DividerGeneral from './DividerGeneral.vue'
import BlockAssetPod from '@/lib-components/BlockAssetPod.vue'
import type { BlockAssetPodProps } from '@/types/components/blockAssetPods.types'
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
  readonly items: readonly BlockAssetPodProps[]
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

// Methods
function isLastItem(item: BlockAssetPodProps,
  items: readonly BlockAssetPodProps[]) {
  return items.indexOf(item) === items.length - 1
}
</script>

<template>
  <div
    v-if="hasItems"
    :class="classes"
    :aria-label="`Asset grid with ${items.length} items`"
  >
    <div v-for="item in items" :key="item.title" class="block-container">
      <BlockAssetPod
        :title="item.title"
        :to="item.to"
        :media="item.media"
        :metadata="item.metadata"
      />

      <DividerGeneral
        v-if="!isLastItem(item, items)"
        class="divider-general"
        is-bold
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-asset-pod.scss";
</style>
