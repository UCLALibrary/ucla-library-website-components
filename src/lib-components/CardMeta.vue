<script
  setup
  lang="ts"
>
import { computed, defineAsyncComponent } from 'vue'

import format from 'date-fns/format'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import RichText from '@/lib-components/RichText.vue'

// UTILITY FUNCTIONS
import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'

import type { EventFiltersItemType, LocationItemType } from '@/types/types'

const props = defineProps({
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
  // long single date = 'Febuary 1, 2022', short = 'Feb 1, 2022
  // long date range =  'Febuary 1, 2022 - Febuary 2, 2022', short = 'Feb 1 - Feb 2'
  dateFormat: {
    type: String,
    default: 'long',
  },
  ongoing: {
    type: Boolean,
    default: false,
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
  sectionHandle: {
    type: String,
    default: '',
  },
  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  },
  introduction: {
    type: String,
    default: '',
  },
  guestSpeaker: {
    type: String,
    default: '',
  },
})

const BlockTag = defineAsyncComponent(() => import('@/lib-components/BlockTag.vue'))

const route = useRoute()

// THEME
const theme = useTheme()

const isImpactReport = computed(() => {
  return !!(route !== undefined && route.path.includes('impact'))
})

const parsedTarget = computed(() => {
  return isImpactReport.value ? '_blank' : ''
})

const parsedDate = computed(() => {
  if (props.startDate) {
    if (props.sectionHandle === 'ftvaEvent')
      return formatDates(props.startDate, props.startDate, props.dateFormat)

    else
      return props.endDate ? formatDates(props.startDate, props.endDate, props.dateFormat) : formatDates(props.startDate, props.startDate, props.dateFormat)
  }
  return ''
})

const parsedTime = computed(() => {
  // necessary check for library-website-nuxt & meap
  if (props.startDate && props.sectionHandle === 'event')
    return formatTimes(props.startDate, props.endDate)
  // legacy behavior returns nothing when sectionHandle is not 'event',
  // so check theme is set AND we are not showing ftvaEventSeries data to avoid returning nothing
  else if (props.startDate && (props.sectionHandle !== 'ftvaEventSeries' && theme?.value !== undefined))
    return props.endDate ? formatTimes(props.startDate, props.endDate) : formatTimes(props.startDate, props.startDate)
  // in all other cases incl. if it is ftvaEventSeries, return nothing
  else if (props.startDate && (props.sectionHandle === 'ftvaEventSeries'))
    return format(new Date(props.startDate), 'h:mm aaa')
  return ''
})

const parsedLocations = computed(() => {
  return props.locations.map((obj) => {
    let input = 'svg-icon-location'
    if (obj.title === 'Online')
      input = 'svg-icon-virtual'
    return {
      ...obj,
      svg: input,
      to: obj.to != null ? `/${obj.to}` : '',
    }
  })
})

const classes = computed(() => {
  return ['card-meta', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div
      v-if="category"
      class="category"
      v-html="category"
    />
    <SmartLink
      v-if="to"
      :link-target="parsedTarget"
      :to="to"
      class="title"
    >
      {{ title }}
      <span
        v-if="alternativeFullName"
        :lang="language"
        class="translation"
        v-html="alternativeFullName"
      />
    </SmartLink>

    <h3
      v-else
      class="title-no-link"
      v-html="title"
    />

    <RichText
      v-if="guestSpeaker"
      class="guestSpeaker"
      :rich-text-content="guestSpeaker"
    />

    <div
      v-if="bylineOne || bylineTwo"
      class="byline-group"
    >
      <div
        v-if="bylineOne"
        class="schedule-item"
        v-html="bylineOne"
      />
      <div
        v-if="bylineTwo"
        class="schedule-item"
        v-html="bylineTwo"
      />
    </div>

    <div
      v-if="startDate || ongoing"
      class="date-time"
    >
      <div
        v-if="ongoing"
        class="ongoing-item"
      >
        Ongoing
      </div>
      <time
        v-if="startDate"
        class="schedule-item start-date"
        v-html="parsedDate"
      />
      <time
        v-if="startDate && sectionHandle !== 'ftvaEventSeries'"
        class="schedule-item parsed-time"
        v-html="parsedTime"
      />
      <time
        v-if="startTime"
        class="schedule-item parsed-time"
        v-html="startTime"
      />
    </div>

    <div
      v-if="locations.length"
      class="location-group"
    >
      <IconWithLink
        v-for="(location, index) in parsedLocations"
        :key="`location-card-meta${index}`"
        :text="location.title"
        :icon-name="location.svg"
        :to="location.to"
      />
    </div>

    <div
      v-if="tagLabels && tagLabels.length > 0"
      class="block-tags"
    >
      <BlockTag
        v-for="tag in tagLabels"
        :key="`tag-${tag.title}`"
        :label="tag.title"
        class="tag-label"
      />
    </div>

    <RichText
      v-if="introduction"
      class="introduction"
      :rich-text-content="introduction"
    />

    <!-- SHARE BUTTON -->
    <div class="sharebutton-slot">
      <slot name="sharebutton" />
    </div>

    <!-- BLOCKTAG SLOT -->
    <div class="block-tags-slot">
      <slot name="blocktag" />
    </div>

    <RichText
      v-if="text"
      class="text"
      :rich-text-content="text"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_card-meta.scss";
@import "@/styles/ftva/_card-meta.scss";
</style>
