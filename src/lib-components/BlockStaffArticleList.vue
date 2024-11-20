<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// LODASH FUNCTIONS
import format from 'date-fns/format'

// SVGs
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'

// TYPESCRIPT
import type { ArticleStaffItemType, MediaItemType } from '@/types/types'

// UTILITY FUNCTIONS
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'
import formatSeriesDates from '@/utils/formatEventSeriesDates'

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
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  ongoing: {
    type: Boolean,
    default: false,
  },
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

// Display date based on which data is provided
const parsedDateDisplay = computed(() => {
  if (props.ongoing === true)
    return 'Ongoing'
  else if (props.endDate)
    return formatSeriesDates(props.startDate, props.endDate, 'shortWithYear')
  else if (props.startDate)
    return formatSeriesDates(props.startDate, props.startDate)
  else
    return null
})
</script>

<!-- header-smart
 const isMobile = ref(false)
onMounted(() => {
const { width } = useWindowSize()
watch(width, (newWidth) => {
// console.log('newWidth', newWidth)
isMobile.value = newWidth <=
  1200
  currentHeader.value=markRaw(isMobile.value
  ?
  HeaderMainResponsive
  :
  HeaderMain)
  },
  {
  immediate:
  true
  }) -->

<template>
  <li :class="classes">
    <ResponsiveImage
      v-if="imageExists"
      :media="props.image"
      :aspect-ratio="props.imageAspectRatio"
      object-fit="cover"
      class="image"
    />
    <div
      v-else
      class="molecule-no-image"
    >
      <MoleculePlaceholder
        class="molecule"
        aria-hidden="true"
      />
    </div>

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
      <div v-if="props.authors.length < 1 || !props.date">
        <!-- If there is no author or date - increase max-length for truncation -->
        <div
          v-if="props.description"
          class="description-summary-only"
        >
          {{ parsedTextAll }}
        </div>

        <div
          v-if="parsedDateDisplay"
          class="date"
        >
          {{ parsedDateDisplay }}
        </div>
      </div>

      <!-- AUTHOR(S) - DATE - SUMMARY -->
      <div v-else>
        <div
          v-if="props.authors || props.date"
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
        </div>

        <div
          v-if="props.description"
          class="description"
        >
          {{ parsedTextTruncated }}
        </div>
      </div>
    </div>
  </li>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-staff-article-item.scss";
@import "@/styles/ftva/_block-staff-article-item.scss";
</style>
