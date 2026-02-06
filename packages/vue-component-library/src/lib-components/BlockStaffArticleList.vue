<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

// LODASH FUNCTIONS
import format from 'date-fns/format'

// TYPESCRIPT
import type { ArticleStaffItemType, MediaItemType } from '@/types/types'

// UTILITY FUNCTIONS
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

// THEME
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

// PROPS & DATA
const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  to: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  authors: {
    type: Array as PropType<ArticleStaffItemType[]>,
    default: () => [],
  },
  date: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  }
})

const theme = useTheme()

const classes = computed(() => {
  return ['block-staff-article-item', theme?.value || '']
})

const parsedDate = computed(() => {
  return format(new Date(props.date), 'MMMM d, Y')
})

const imageExists = computed(() => {
  return !!(props.image && Object.keys(props.image).length !== 0)
})

const parsedTextTruncated = computed(() => {
  return props.description
    ? removeHtmlTruncate(props.description, 130)
    : ''
})

const parsedTextAll = computed(() => {
  return props.description
    ? removeHtmlTruncate(props.description, 250)
    : ''
})
// 1. FTVA DESCRIPTION and TITLE will be truncated to different lines on different screens in the ftva nuxt repo templates
// keep the default to 2 lines for the description and 3 lines for the title for FTVA theme in this component
// 2. Color of the text if differs for different templates for FTVA theme, this component will have certain color set which will be
// overridden by the template styles in the ftva nuxt repo.
// 3. The Image aspect ratio and height and width can be adjusted at template level in the ftva nuxt repo
// or other nuxt repos if different from what is set here for default and ftva theme templates
</script>

<template>
  <li :class="classes">
    <ResponsiveImage
      :media="props.image"
      :aspect-ratio="props.imageAspectRatio"
      object-fit="cover"
      class="image"
    />

    <div class="meta">
      <div
        v-if="props.category"
        class="category"
        v-html="props.category"
      />

      <SmartLink
        class="title"
        :to="props.to"
        v-html="props.title"
      />

      <!-- SUMMARY ONLY -->
      <div v-if="props.authors.length === 0 && props.date === '' && props.description">
        <!-- If there is no author or date - increase max-length for truncation -->
        <div
          v-if="props.description"
          class="description-summary-only"
        >
          {{ parsedTextAll }}
        </div>
      </div>

      <!-- AUTHOR(S) - DATE - SUMMARY -->
      <div
        v-if="(props.authors && props.authors.length > 0) || props.date !== ''"
        class="byline"
      >
        <div
          v-for="author in props.authors"
          :key="author.id"
          class="author"
          v-html="author.title"
        />
        <div
          v-if="props.date"
          class="date"
          v-html="parsedDate"
        />
        <div
          v-if="props.description"
          class="description"
        >
          {{ parsedTextTruncated }}
        </div>
      </div>

      <div
        v-if="$slots.customFTVADescription"
        class="ftva-description"
      >
        <slot name="customFTVADescription" />
      </div>
      <div
        v-if="$slots.customFTVADate"
        class="ftva-date"
      >
        <slot name="customFTVADate" />
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-staff-article-item.scss";
@import "@/styles/ftva/_block-staff-article-item.scss";
</style>
