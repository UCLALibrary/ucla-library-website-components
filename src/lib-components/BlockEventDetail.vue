<script
  setup
  lang="ts"
>
// Utility functions
import { computed } from 'vue'
import SvgIconCalendar from 'ucla-library-design-tokens/assets/svgs/icon-ftva-calendar.svg'
import SvgIconLocation from 'ucla-library-design-tokens/assets/svgs/icon-ftva-location.svg'
import SvgIconClock from 'ucla-library-design-tokens/assets/svgs/icon-ftva-clock.svg'
import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'
import { useTheme } from '@/composables/useTheme'

// Child components
import SmartLink from '@/lib-components/SmartLink.vue'

interface BlockEventDetailLocation {
  id?: string
  title: string
  url?: string
  uri?: string
  publicUrl?: string
}

const { startDate, endDate, time, ongoing, locations } = defineProps({
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  // Implied this is the start time
  time: {
    type: String,
    required: false,
  },
  ongoing: {
    type: Boolean,
    default: false,
  },
  locations: {
    type: Array<BlockEventDetailLocation>,
    default: () => [],
  }
})

const theme = useTheme()

const classes = computed(() => {
  return ['block-event-detail', theme?.value || '']
})
const themeSettings = computed(() => {
  switch (theme?.value) {
    case 'ftva':
      return {
        multiLocationMsgDisplay: true,
      }
    default:
      return {
        multiLocationMsgDisplay: false,
      }
  }
})

// Display date based on which data is provided
const parsedDateDisplay = computed(() => {
  if (ongoing)
    return 'Ongoing'
  else if (endDate)
    return formatDates(startDate, endDate, 'shortWithYear')
  else if (startDate)
    return formatDates(startDate, startDate)
  else
    return null
})
</script>

<template>
  <div :class="classes">
    <div class="event-list date">
      <span>
        <SvgIconCalendar
          v-if="startDate"
          class="row-icon"
        /> {{ parsedDateDisplay }}
      </span>
    </div>

    <div
      v-if="time"
      class="event-list time"
    >
      <span>
        <SvgIconClock class="row-icon" /> {{ formatTimes(time, time) }}
      </span>
    </div>

    <div
      v-if="locations && locations.length > 0"
      class="event-list location"
    >
      <span>
        <SvgIconLocation class="row-icon" />

        <span v-if="themeSettings?.multiLocationMsgDisplay && locations.length > 1">
          Multiple Locations
        </span>

        <span v-else-if="themeSettings?.multiLocationMsgDisplay && locations.length == 1">
          <SmartLink
            :to="locations[0].publicUrl"
            :linkTarget="locations"
          >
            {{ locations[0].title }}
          </SmartLink>
        </span>

        <span
          v-else
          class="locations-wrapper"
        >
          <span
            v-for="(location, index) in locations"
            :key="location.title"
            class="location-link"
          >
            <SmartLink
              :to="location.publicUrl"
              :linkTarget="location.publicUrl ? location.publicUrl : ''"
            >
              {{ location.title }}
            </SmartLink>
            {{ index
    <
    locations.length
    -
    1
    ? ', '
              : ''
              }}
              </span
            >
          </span>
        </span>
    </div>
    <slot />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-event-detail.scss";
@import "@/styles/ftva/_block-event-detail.scss";
</style>
