<!-- Related to SectionCardsThreeColumn -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// COMPONENTS
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import format from 'date-fns/format'
import { useTheme } from '@/composables/useTheme'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

// import formatDayDateTime from '@/utils/formatDayDateTime'
import formatShortDay from '@/utils/formatShortDay'
import formatFullDay from '@/utils/formatFullDay'
import formatDay from '@/utils/formatEventDay'
import formatMonth from '@/utils/formatEventMonth'

// UTILITY FUNCTIONS
import formatDates from '@/utils/formatEventDates'
import { useGlobalStore } from '@/stores/GlobalStore'

// TYPESCRIPT
import type { EventFiltersItemType, MediaItemType } from '@/types/types'

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
  isVisible: {
    type: Boolean,
    default: true,
  }
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-card-three-column', theme?.value || '']
})

// HORIZONTAL TIME
const parsedFormatFullDay = computed(() => {
  if (props.startDate)
    return formatFullDay(props.startDate)
  return ''
})

const parsedDateMonth = computed(() => {
  if (props.startDate)
    return formatMonth(props.startDate)

  return ''
})

const parsedDateDay = computed(() => {
  if (props.startDate)
    return formatDay(props.startDate)

  return ''
})

// VERTICAL TIME
// dates are formatted in the short format for ftva only
const parsedDateFormat = computed(() => {
  return theme?.value === 'ftva' ? 'short' : 'long'
})

const parsedStartDatePlusTime = computed(() => {
  if (props.startDate)
    return props.endDate ? formatDates(props.startDate, props.endDate, props.dateFormat) : formatDates(props.startDate, props.startDate, props.dateFormat)
  return ''
})

const parsedFormatShortDay = computed(() => {
  if (props.startDate)
    return formatShortDay(props.startDate)
  return ''
})

const parsedDayMonthDate = computed(() => {
  if (props.startDate)
    return format(new Date(props.startDate), 'EEE, MMM dd')
})

const parsedTime = computed(() => {
  if (props.startDate)
    return format(new Date(props.startDate), 'h:mm aaa')
})

const globalStore = useGlobalStore()

const isMobile = computed(() => {
  return globalStore.winWidth <= 600
})
</script>

<template>
  <li :class="classes">
    <!-- <div class="image-date-container"> -->
    <div
      v-show="isVisible"
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

    <div class="image-block">
      <ResponsiveImage
        v-if="image"
        :media="image"
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

    <div class="meta">
      <!-- <SmartLink
        v-if="to"
        :to="to"
      >
        <h2
          v-if="title"
          class="title"
          v-html="title"
        />
      </SmartLink> -->

      <CardMeta
        class="card-meta-items"
        :to="to"
        :title="title"
        :start-date="startDate"
        :end-date="endDate"
        :date-format="parsedDateFormat"
        :text="text"
      >
        <template #blocktag>
          <div v-for="(label, index) in tagLabels">
            <BlockTag
              :label="label.title"
              :icon-name="iconName"
              is-secondary="true"
            />
          </div>
        </template>
      </CardMeta>
      <!--
          <div
          class="time-tags"
        >
          <div class="time-date">
            <time
              v-if="isMobile"
              class="date"
            >{{ parsedDayMonthDate }}</time>

            <time class="time">{{ parsedTime }}</time>
          </div>

          <div
            v-if="tagLabels && tagLabels.length > 0"
            class="block-tags"
          >
            <BlockTag
              v-for="tag in tagLabels"
              :key="`tag-${tag.title}`"
              :label="tag.title"
              :is-secondary="true"
              class="tag-label"
            />
          </div>
    </div> -->
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
