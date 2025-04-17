<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'

// TYPESCRIPT
import type { MediaItemType } from '@/types/types'

// UTILITY FUNCTION
import getSectionName from '@/utils/getSectionName'

// THEME
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  categoryName: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})

const sectionName = computed(() => {
  return getSectionName(props.to)
})

const classes = computed(() => {
  return ['block-post-small', `color-${sectionName.value}`, theme?.value || '']
})

// THEME
const theme = useTheme()

const parsedClasses = computed(() => {
  return ['filters-dropdown', theme?.value || '']
})

const classes = computed(() => {
  return [
    'banner-featured',
    { 'hatch-left': !props.alignRight },
    `color-${sectionName.value}`,
  ]
})

const parsedAuthor = computed(() => {
  return `By ${props.author}`
})
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
        <div
          class="category"
          v-html="categoryName"
        />
        <h3
          class="title"
          v-html="title"
        />
        <div
          class="author"
          v-html="parsedAuthor"
        />
      </div>
    </smart-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_card-meta.scss";
@import "@/styles/ftva/_card-meta.scss";
</style>
