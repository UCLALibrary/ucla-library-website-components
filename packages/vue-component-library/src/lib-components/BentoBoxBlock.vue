<script setup lang="ts">
// Imports
import { computed } from 'vue'
import type { MediaItemType } from '@/types/types'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import { useTheme } from '@/composables/useTheme'

defineProps<BentoBoxBlockProps>()

const theme = useTheme()

// Props
interface BentoBoxBlockProps {
  image?: MediaItemType | null
}
// Computed
// const parsedCount = computed(() => {
//   if (props.count === undefined || props.count === null)
//     return ''
//   return `${props.count} Results`
// })
// const showEyebrow = computed(() => {
//   return props.count !== undefined && props.count !== null
// })
const classes = computed(() => {
  return ['bento-box-block', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="wrapper">
      <ResponsiveImage
        v-if="image"
        class="image"
        :media="image"
        :aspect-ratio="72"
      />
      <div class="content">
        <div
          v-if="$slots.eyebrow"
          class="eyebrow"
        >
          <slot name="eyebrow">
            <!-- <RichText
            v-if="showEyebrow"
            :rich-text-content="parsedCount"
            class="eyebrow count"
            /> -->
          </slot>
        </div>
        <div
          v-if="$slots.title"
          class="title"
        >
          <slot name="title">
            <!-- <RichText
              v-if="title"
              :rich-text-content="title"
              class="title"
            /> -->
          </slot>
        </div>
        <div
          v-if="$slots.text"
          class="text"
        >
          <slot name="text">
            <!-- <RichText
            v-if="text"
            :rich-text-content="text"
            class="text"
            /> -->
          </slot>
        </div>
        <div
          v-if="$slots.button"
          class="button"
        >
          <slot name="button">
            <!-- <ButtonLink
            v-if="to"
            :is-senary="true"
            :to="to"
            label="View Results"
            icon-name="svg-external-link"
            /> -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-box-block.scss";
</style>
