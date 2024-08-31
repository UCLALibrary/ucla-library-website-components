<!-- Equivalent to cards in Section teaser List -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import type { PropType } from 'vue'

// COMPONENTS
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

import getSectionName from '@/utils/getSectionName'
import formatDay from '@/utils/formatEventDay'
import formatMonth from '@/utils/formatEventMonth'

import type { LocationItemType, MediaItemType } from '@/types/types'

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
  alternativeFullName: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  startDate: {
    type: String,
    default: '',
  },
  endDate: {
    type: String,
    default: '',
  },
  ongoing: {
    type: Boolean,
    default: false,
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  bylineOne: {
    type: String,
    default: '',
  },
  bylineTwo: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '', // This will be "visit", "about", "help".
  },
  sectionHandle: {
    type: String,
    default: '',
  }
})

const route = useRoute()
// console.log('does this route exist?', JSON.stringify(route))
const sectionName = computed(() => {
  return (
    props.color
    || (route !== undefined && route.path
      ? getSectionName(route.path)
      : 'default')
  )
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-clipped-date', `color-${sectionName.value}`, theme?.value || '']
})
// const classes = computed(() => {
//   return ['card-meta', theme?.value || '']
// })

const parsedDateDay = computed(() => {
  if (props.startDate)
    return formatDay(props.startDate)

  return ''
})

const parsedDateMonth = computed(() => {
  if (props.startDate)
    return formatMonth(props.startDate)

  return ''
})


</script>

<template>
  <li :class="classes">
    <div class="image-container">
      <div
        v-if="startDate"
        class="floating-highlight"
      />
      <div
        v-if="startDate"
        class="clipped-date"
      >
        <time
          v-if="startDate"
          class="month"
          v-html="parsedDateMonth"
        />
        <time
          v-if="startDate"
          class="day"
          v-html="parsedDateDay"
        />
      </div>
      <ResponsiveImage
        v-if="image"
        :media="image"
        :aspect-ratio="imageAspectRatio"
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
    </div>
    <CardMeta
      :to="to"
      :category="category"
      :title="title"
      :start-date="startDate"
      :end-date="endDate"
      :ongoing="ongoing"
      :text="text"
      :byline-one="bylineOne"
      :byline-two="bylineTwo"
      :locations="locations"
      :alternative-full-name="alternativeFullName"
      :language="language"
      :section-handle="sectionHandle"
      :tagLabels="tagLabels"
    />
  </li>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-clipped-date.scss";
@import "@/styles/ftva/_block-clipped-date.scss";
</style>
