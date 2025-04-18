<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'

// TYPES
import type { MediaItemType } from '@/types/types'

// UTILS

// THEME
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

const { to, image } = defineProps({
  to: {
    type: String,
    required: true,
  },
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => ({}),
  },
})

// THEME & SECTION COLOR
const theme = useTheme()

const classes = computed(() => [
  'block-post-small',
  `color-${sectionName.value}`,
  theme?.value || '',
])
</script>

<template>
  <div>
    <smart-link
      :to="to"
      :class="classes"
    >
      <ResponsiveImage
        v-if="image"
        :media="image"
        :aspect-ratio="100"
        class="image"
      />

      <div class="meta">
        <div class="category">
          <slot name="category" />
        </div>

        <h3 class="title">
          <slot name="title" />
        </h3>

        <div class="author">
          <slot name="author" />
        </div>
      </div>
    </smart-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-post-small.scss";
@import "@/styles/ftva/_block-post-small.scss";
</style>
