<script setup lang="ts">
// Imports
import { computed } from 'vue'
import BlockCollection from '@/lib-components/BlockCollection.vue'
import type { MediaItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

defineProps<GridCollectionsProps>()

const theme = useTheme()

// Props
interface GridCollectionsProps {
  items: Array<{
    id: string
    href: string
    image: MediaItemType
    title: string
    description: string
  }>
}
// Compputed
const classes = computed(() => {
  return ['grid-collections', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <BlockCollection
      v-for="collection in items"
      :key="collection.id"
      class="block"
      :href="collection.href"
      :image="collection.image"
      :title="collection.title"
      :description="collection.description"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-collections.scss";
</style>
