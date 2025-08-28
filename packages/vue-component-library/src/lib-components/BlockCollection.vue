<script setup lang="ts">
// Imports
import { computed } from 'vue'
import type { MediaItemType } from '@/types/types'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

defineProps<BlockCollectionProps>()

const theme = useTheme()

// Props
interface BlockCollectionProps {
  href: string
  image: MediaItemType
  title: string
  description: string
}
// Computed
const classes = computed(() => {
  return ['block-collection', 'dlc', theme?.value || '']
})
</script>

<template>
  <SmartLink :class="classes" :to="href">
    <ResponsiveImage class="image" :media="image" :aspect-ratio="108" />
    <div class="content">
      <h5 class="title" v-html="title" />
      <div class="description" v-html="description" />
    </div>
  </SmartLink>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_block-collection.scss";
</style>
