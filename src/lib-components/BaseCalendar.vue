<script setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import format from 'date-fns/format'

import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-circle-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-circle-right.svg'

const { events, value } = defineProps({
  events: {
    type: Array,
    default: () => [],
  },

  // Note
  value: Array,
  default: () => [new Date()],
})

const newDateRef = ref(value)

const parsedEvents = computed(() => {
  if (events.length === 0)
    return []

  const calendarEvents = events.map((obj) => {
    const rawDate = obj.startDateWithTime

    return {
      title: obj.title,
      start: new Date(rawDate),
      end: new Date(rawDate),
      time: getEventTime(rawDate),
      description: obj.eventDescription

    }
  })

  return calendarEvents
})

function getEventTime(date) {
  const testTime = format(new Date(date), 'h:mm aaa')
  return testTime.toUpperCase()
}

// console.log(parsedEvents.value)
</script>

<template>
  <div class="test-wrapper">
    <v-sheet class="test-cal">
      <v-calendar
        :model-value="newDateRef"
        :events="parsedEvents"
        view-mode="month"
        next-icon="$next"
        prev-icon="$prev"
      >
        <!-- <template #header="header">
        <div>{{ header }}</div>
      </template> -->

        <!-- v-chip v-theme--light v-chip--density-comfortable v-chip--size-default v-chip--variant-tonal -->
        <!-- {{ event.day }} -->
        <template #event="event">
          <div class="test-bground">
            <div class="test-title">
              {{ event.event.title }}
            </div>
            <p class="test-time">
              {{ event.event.time }}
            </p>
          </div>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>

<style lang="scss">
i.mdi {
  font-size: 60px;
  // background-color: red;
  // color: white;
  // font-weight: 200;
}

i.mdi:hover {
  background-color: transparent;
}

.mdi-chevron-left.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default {

}

.test-wrapper {
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  position: relative;
}

.test-cal {
  grid-column: 2/3;
}
.v-calendar-header > button:nth-of-type(2) {
  // background-color: rgb(180, 124, 124) !important;
  // color: white;
  top: 50%;
  left: 0%;
  width: 48px;
  height: auto;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
}

.v-btn.v-btn--icon.v-theme--light.v-btn--density-comfortable.v-btn--size-default.v-btn--variant-text:focus-visible{
  outline: 4px solid red;
}

.v-calendar-header > button:nth-of-type(2):focus-visible {
  // width: 48px;
  // height: auto;
  outline: 4px solid green;
}

// .v-calendar-header > button:nth-of-type(2).v-btn--size-default,
// .v-calendar-header > button:nth-of-type(2).v-btn--icon.v-btn--size-default {
//     font-size: 2rem !important;
//   }

.v-calendar-header > button:nth-of-type(3) {
  // background-color: rgb(160, 160, 214) !important;
  // color: white;
  top: 50%;
  left: 100%;
  width: 48px;
  height: auto;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
}

.v-calendar-header > button:hover:nth-of-type(2),
.v-calendar-header > button:hover:nth-of-type(3):hover {
  background-color: red !important;
  transition: none;
}

.mdi-chevron-left::before {
  content: url("ucla-library-design-tokens/assets/svgs/icon-caret-circle-left.svg");
}

.mdi-chevron-right::before {
  content: url("ucla-library-design-tokens/assets/svgs/icon-caret-circle-right.svg");
}

// .v-calendar-header__today,
.v-calendar-weekly__head-weeknumber,
.v-calendar-month__weeknumber
{
  display: none;
}

.v-calendar-weekly__head.days__7.v-calendar-weekly__head-weeknumbers,
.v-calendar-month__days.days-with-weeknumbers__7
{
  grid-template-columns: repeat(7, 1fr);
}

.v-calendar-weekly__day-label {
  text-align: right;
}

.v-calendar-month__day {
  justify-content: space-between;
}

.v-calendar-weekly__head-weekday-with-weeknumber:nth-of-type(odd) {
  border: 2px solid red;
}

.test-bground{
  background-color: $accent-blue;
  color: white;
  margin-bottom: 4px;
  padding: 4px;
}
</style>
