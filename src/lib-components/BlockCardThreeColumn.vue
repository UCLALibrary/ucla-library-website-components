<!-- Related to SectionCardsThreeColumn -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// COMPONENTS
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import { useTheme } from '@/composables/useTheme'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import CardMeta from '@/lib-components/CardMeta.vue'


import formatFullDay from '@/utils/formatFullDay'
import formatDay from '@/utils/formatEventDay'
import formatMonth from '@/utils/formatEventMonth'

// UTILITY FUNCTIONS
import format from 'date-fns/format'
// import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'
import { useGlobalStore } from '@/stores/GlobalStore'

// TYPESCRIPT
import type { MediaItemType, EventFiltersItemType } from '@/types/types'

const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
  to: {
    type: String,
    default: '',
  },
  title: {
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
  // long = 'Febuary 1, 2022', short = 'Feb 1, 2022
  dateFormat: {
    type: String,
    default: 'long',
  },
  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  },
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-card-three-column', theme?.value || '']
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
</script>

<template>
  <li :class="classes">
    <div class="image-date-container">
      <div class="day-month-date">
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
        :title="title"
        :start-date="startDate"
        :end-date="endDate"
        :dateFormat="dateFormat"
        :tagLabels="tagLabels"
      />
    </div>
  </li>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-card-three-column.scss";
@import "@/styles/ftva/_block-card-three-column.scss";
</style>
