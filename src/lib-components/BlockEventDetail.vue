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
}

const { startDate, time, locations } = defineProps({
  startDate: {
    type: String,
    default: '',
  },
  time: {
    type: String,
    default: '',
  },
  locations: {
    type: Array<BlockEventDetailLocation>,
    default: () => [],
  },
})

const theme = useTheme()

const classes = computed(() => {
  return ['block-event-detail', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="event-list date">
      <span>
        <SvgIconCalendar class="row-icon" /> {{ formatDates(startDate, startDate) }}
      </span>
    </div>

    <div class="event-list time">
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
        <span
          v-for="(location, index) in locations"
          :key="location.title"
          class="location-link"
        >
          <SmartLink
            :to="location.title"
            :link-target="location.uri ? location.uri : ''"
          >
            {{ location.title }}
          </SmartLink>
          {{ index
            < locations.length
            - 1
            ? ', '
            : ''
          }}
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
@import "@/styles/themes.scss";
</style>
