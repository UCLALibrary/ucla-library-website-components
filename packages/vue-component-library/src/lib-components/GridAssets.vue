<script setup lang="ts">
// Imports
import { computed } from 'vue'
import BlockAsset from '@/lib-components/BlockAsset.vue'
import type { MediaItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

defineProps<GridAssetsProps>()

const theme = useTheme()

// Props
interface GridAssetsProps {
  items: Array<{
    id: string
    href: string
    image: MediaItemType
    title: string
    description: string
    date: string
  }>
}

// Computed
const classes = computed(() => {
  return ['grid-assets', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <BlockAsset
      v-for="asset in items"
      :key="asset.id"
      class="block"
      :href="asset.href"
      :image="asset.image"
      :date="asset.date"
      :title="asset.title"
      :description="asset.description"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-assets.scss";
</style>
