<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import RichText from '@/lib-components/RichText.vue'
import BlockTag from '@/lib-components/BlockTag'

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
})

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
  if (props.startDate)
    return formatDates(props.startDate, props.endDate)

  return ''
})

const parsedTime = computed(() => {
  if (props.startDate && props.sectionHandle === 'event')
    return formatTimes(props.startDate, props.endDate)

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
      <div v-if="ongoing">
        Ongoing
      </div>
      <time
        v-if="startDate"
        class="schedule-item"
        v-html="parsedDate"
      />
      <time
        v-if="startDate"
        class="schedule-item"
        v-html="parsedTime"
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

    <div
      v-if="introduction"
      class="introduction"
      v-html="introduction"
    />

    <!-- SHARE BUTTON -->
    <div class="slot">
      <slot />
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
@import "@/styles/themes.scss";
</style>
