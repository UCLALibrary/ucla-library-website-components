<script setup lang="ts">
// Imports
import { computed } from 'vue'
import type { MediaItemType } from '@/types/types'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

defineProps<BlockAssetProps>()

const theme = useTheme()

// Props
interface BlockAssetProps {
  href: string
  image: MediaItemType
  title: string
  description: string
  date: string
}
// Computed
const classes = computed(() => {
  return ['block-asset', 'dlc', theme?.value || '']
})
</script>

<template>
  <SmartLink
    :class="classes"
    :to="href"
  >
    <ResponsiveImage
      class="image"
      :media="image"
      :aspect-ratio="100"
    />
    <div class="content">
      <h5
        class="title"
        v-html="title"
      />
      <time
        class="date"
        v-html="date"
      />
      <div
        class="description"
        v-html="description"
      />
    </div>
  </SmartLink>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_block-asset.scss";
</style>
