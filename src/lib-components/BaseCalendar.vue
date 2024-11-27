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
      desc: obj.eventDescription
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

// Vuetify Popover
const selectedEvent = ref({}) //
// const selectedEventIsOpen = ref(false) // vmodel
// const selectedEventElementAsActivator = ref(null) // activator

function showEvent(calEventObj, event) {
// console.log('calendar event: ', calEventObj)
// console.log('event target/element: ', event.target.textContent)

  // selectedEventElementAsActivator.value = event.target
  // selectedEventIsOpen.value = true
  // console.log('activator on click is: ', selectedEventElementAsActivator.value)
  // selectedEventIsOpen.value = true

  // function open() {
  // console.log('run open')
  selectedEvent.value = calEventObj
  // selectedEventElementAsActivator.value = event.target
  // selectedEventIsOpen.value = true
  // }

  // if (selectedEventIsOpen.value) {
  //   console.log('selected open is true')
  //   // open()
  //   selectedEventElementAsActivator.value = null
  //   selectedEventIsOpen.value = false
  //   console.log('selected open is now false')
  // }
  // else if (!selectedEventIsOpen.value) {
  //   // selectedEventIsOpen.value = true
  //   selectedEventElementAsActivator.value = event.target
  //   console.log('activator on click is: ', selectedEventElementAsActivator.value)
  //   console.log('mehn')
  //   // open()
  //   selectedEventIsOpen.value = true
  // }

  // open()

// event.stopPropagation()
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
        >
          <!-- Vuetify calendar header slot -->
          <!--
        <template #header="header">
          {{ header.title }}
        </template>
-->

          <!-- Vuetify calendar event slot -->
          <template #event="event">
            <button class="calendar-event-item" @click="showEvent(event.event, $event)">
              <p class="calendar-event-title">
                {{ event.event.title }}
              </p>
              <p class="calendar-event-time">
                {{ event.event.time }}
              </p>
              <!-- Popover menu -->
              <v-menu
                activator="parent"
                :open-on-click="true"
                :close-on-content-click="false"
                location="start bottom"
                origin="auto"
              >
                <v-card max-width="300">
                  <slot />
                  <!-- <v-list>
                    <v-list-item
                      prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                      :subtitle="selectedEvent.desc"
                      :title="selectedEvent.title"
                    />
                  </v-list> -->
                </v-card>
              </v-menu>
            </button>
          </template>
        </v-calendar>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/default/_base-calendar.scss";
@import "@/styles/ftva/_base-calendar.scss";
</style>
