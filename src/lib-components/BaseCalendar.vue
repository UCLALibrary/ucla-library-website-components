<script setup>
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import format from 'date-fns/format'
import { useTheme } from '@/composables/useTheme'

const { events, value } = defineProps({
  events: {
    type: Array,
    default: () => [],
  },

  value: {
    type: Array,
    default: () => [new Date()]
  }
})

// const newDateRef = ref(value)

const calendarRef = useTemplateRef('calendar')

onMounted(() => {
  updateCalendarWeekdays()
})

const parsedEvents = computed(() => {
  if (events.length === 0)
    return []

  const calendarEvents = events.map((obj) => {
    const rawDate = obj.startDateWithTime

    return {
      title: obj.title,
      start: new Date(rawDate),
      end: new Date(rawDate),
      time: formatEventTime(rawDate),
    }
  })

  return calendarEvents
})

function getEventTime(date) {
  const testTime = format(new Date(date), 'h:mm aaa')
  return testTime.toUpperCase()
}

// console.log(parsedEvents.value)

// Format time as '00:00 PM'
function formatEventTime(date) {
  const formattedTime = format(new Date(date), 'h:mm aaa')
  return formattedTime.toUpperCase()
}

// Vuetify calendar day format is single-lettered: S, M, etc.
// Update day to full name: Sunday, Monday, etc.
function updateCalendarWeekdays() {
  const weekDayLabels = calendarRef.value.querySelectorAll('.v-calendar-weekly__head-weekday-with-weeknumber')

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  weekDayLabels.forEach((elem, idx) => elem.innerHTML = weekDays[idx])
}

const theme = useTheme()

const classes = computed(() => {
  return ['base-calendar', theme?.value || '']
})

// Popover test
const selectedOpen = ref(false)
const selectedElement = ref()

function showEvent(event) {
  console.log('event target: ', event.target)
  console.log('event value: ', event.target.value)
  console.log(selectedElement.value)

  // console.log('event: ', event)
  // console.log('native event: ', event.nativeEvent)
  // selectedElement.value = event.target

  const open = () => {
    selectedElement.value = event.target
  }

  if (selectedOpen.value) {
    selectedOpen.value = false
    open()
  }
  else {
    open()
  }

  event.stopPropagation()
}
</script>

<template>
  <div
    ref="calendar"
    :class="classes"
  >
    <div class="calendar-wrapper">
      <v-sheet class="calendar-body">
        <v-calendar
          :events="parsedEvents"
          view-mode="month"
          @click="showEvent($event)"
        >
          <!-- Vuetify calendar header slot -->
          <!--
        <template #header="header">
          {{ header.title }}
        </template>
-->

          <!-- Vuetify calendar event slot -->
          <template #event="event">
            <div class="calendar-event-item">
              <p class="calendar-event-title">
                {{ event.event.title }}
              </p>
              <p class="calendar-event-time">
                {{ event.event.time }}
              </p>
            </div>
          </template>
        </v-calendar>

        <!-- Popover menu -->
        <v-menu
          :model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          location="start bottom"
          origin="auto"
        >
          <v-card min-width="300">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                subtitle="Founder of Vuetify"
                title="John Leider"
              />
            </v-list>
          </v-card>
        </v-menu>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/default/_base-calendar.scss";
@import "@/styles/ftva/_base-calendar.scss";
</style>
