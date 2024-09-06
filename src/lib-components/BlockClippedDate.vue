<!-- Equivalent to cards in Section teaser List -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'

// COMPONENTS
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import { useTheme } from '@/composables/useTheme'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

import getSectionName from '@/utils/getSectionName'
import formatFullDay from '@/utils/formatFullDay'
import formatDay from '@/utils/formatEventDay'
import formatMonth from '@/utils/formatEventMonth'

// UTILITY FUNCTIONS
import format from 'date-fns/format'
import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'
import { useGlobalStore } from '@/stores/GlobalStore'

// TYPESCRIPT
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
  startTime: {
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

// ---- FTVA

// For horizontal FTVA
const parsedFormatFullDay = computed(() => {
  if (props.startDate)
    return formatFullDay(props.startDate)
  return ''
})

const parsedStartDatePlusTime = computed(() => {
  if (props.startDate)
    return props.endDate ? formatDates(props.startDate, props.endDate, props.dateFormat) : formatDates(props.startDate, props.startDate, props.dateFormat)
  return ''
})

const parsedTime = computed(() => {
  return format(new Date(props.startDate), 'h:mm aaa')
})

const globalStore = useGlobalStore()

const isMobile = computed(() => {
  return globalStore.winWidth <= 1120
})

const parsedMetaThemeSettings = computed(() => {
  // ftva
  if (theme?.value === 'ftva') {
    return {
      title: 'title',
      tagLabels: 'tagLabels[0].title',
      icon: formIcons.caretRight,
      tagLabels: "tagLabels",
      startDate: "parsedTime"
    }
  }
})
</script>

<template>
  <li :class="classes">
    <div class="image-date-container">
      <div
        v-if="theme && isMobile"
        class="day-month-date"
      >
        <time
          v-if="startDate"
          class="day"
          v-html="parsedFormatFullDay"
        />
        <div class="month-date">
          <time
            v-if="startDate"
            class="month"
            v-html="parsedDateMonth"
          />
          <time
            v-if="startDate"
            v-html="parsedDateDay"
          />
        </div>
      </div>

      <div
        v-if=!theme
        class="date-block"
      >
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
      </div>

      <div class="image-block">
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
    </div>

    <div class="meta">
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
      />
    </div>
  </li>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-clipped-date.scss";
@import "@/styles/ftva/_block-clipped-date.scss";
</style>
