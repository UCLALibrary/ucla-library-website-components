<script setup lang="ts">
// Utility functions
import { computed, defineAsyncComponent } from 'vue'
import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'

// import IconWithLink from '@/lib-components/IconWithLink.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

// TODO import FTVA icons when available
import SvgIconCalendar from 'ucla-library-design-tokens/assets/svgs/icon-calendar.svg'
import SvgIconLocation from 'ucla-library-design-tokens/assets/svgs/icon-location.svg'
import SvgIconClock from 'ucla-library-design-tokens/assets/svgs/icon-clock.svg'

const { startDate, time, locations} = defineProps({
    startDate: {
        type: String,
        default: '',
    },
    time: {
        type: String,
        default: '',
    },
    locations: {
        type: Array,
        default: () => [],
    },
})

const theme = '' //useTheme()

const parsedClasses = computed(() => {
    return ['block-event-detail', theme || '']
})
</script>
<template>
  <div :class="parsedClasses">
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
    <div class="event-list location">
      <span>
        <SvgIconLocation class="row-icon" />
        <span v-for="(location, index) in locations" :key="location.title" class="location-link">
          <SmartLink :to="location.title" :linkTarget="location.uri">{{ location.title }}</SmartLink>{{
          index < locations.length - 1 ? ', ' : '' }} </span>
        </span>
    </div>
    <!-- TO DO ADD TO CALENDAR BUTTON IMPLEMENT HERE-->
  </div>
</template>
<style lang="scss" scoped>
// base
.block-event-detail {
  text-transform: uppercase;
  font-size: 20px;
  color: #555;
  .event-list {
    margin-bottom: 15px;
    > span {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      .row-icon {
        margin-right: 24px;
      }
      .location-link {
        margin-right: 5px;
      }
    }
  }
  a {
    text-decoration: underline;
  }
}



// ftva

</style>