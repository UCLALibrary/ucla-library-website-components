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
</script>

<template>
  <div ref="calendar" :class="classes">
    <v-sheet class="calendar-body">
      <v-calendar
        :model-value="newDateRef"
        :events="parsedEvents"
        view-mode="month"
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
    </v-sheet>
  </div>
</template>

<style lang="scss">
@import "@/styles/default/_base-calendar.scss";
@import "@/styles/ftva/_base-calendar.scss";
</style>
