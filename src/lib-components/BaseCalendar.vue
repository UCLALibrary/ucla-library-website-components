<script setup>
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import format from 'date-fns/format'
import BlockCardWithImage from './BlockCardWithImage.vue'
import BlockEventDetail from './BlockEventDetail.vue'
import BlockTag from './BlockTag.vue'
import { useTheme } from '@/composables/useTheme'

const { defaultEventCalendar, events, firstEventMonth } = defineProps({
  defaultEventCalendar: {
    type: Boolean,
    default: true
    // Calendar with fixed components
  },

  events: {
    type: Array,
    default: () => [],
  },

  firstEventMonth: {
    type: Array,
    default: () => [new Date()]
    // Sets calendar to month of earliest event
    // Default is current date
  }
})

const calendarRef = useTemplateRef('calendar')
const firstEventMonthRef = ref(firstEventMonth)

onMounted(() => {
  updateCalendarHeaderElements()
})

// Vuetify calendar day format is single-lettered: S, M, etc.
// Update day to full name: Sunday, Monday, etc.
// Default header button text is 'Today'; update to 'This Month'
function updateCalendarHeaderElements() {
  const weekDayLabels = calendarRef.value.querySelectorAll('.v-calendar-weekly__head-weekday-with-weeknumber')

  const todayBtnElem = calendarRef.value.querySelector('.v-calendar-header__today .v-btn__content')

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  weekDayLabels.forEach((elem, idx) => elem.innerText = weekDays[idx])

  todayBtnElem.innerText = 'This Month'
}

const parsedEvents = computed(() => {
  if (events.length === 0)
    return []

  const calendarEvents = events.map((obj) => {
    const rawDate = obj.startDateWithTime

    return {
      // Required object keys for Vuetify calendar
      title: obj.title,
      start: new Date(rawDate),
      end: new Date(rawDate),
      time: formatEventTime(rawDate),
      // All other event data
      id: obj.id,
      startDateWithTime: obj.startDateWithTime,
      tagLabels: obj.ftvaEventScreeningDetails[0]?.tagLabels,
      image: obj.imageCarousel[0]?.image[0],
      location: obj.location,
      to: obj.to
    }
  })

  return calendarEvents
})

// Format time as '00:00 PM'
function formatEventTime(date) {
  const formattedTime = format(new Date(date), 'h:mm aaa')
  return formattedTime.toUpperCase()
}

const theme = useTheme()

const classes = computed(() => {
  return ['base-calendar', theme?.value || '']
})

// Vuetify Popup/Dialog
const selectedEvent = ref({})
const eventItemElements = []

// Doc:
function showEventItemPopup(calendarEventObj) {
  selectedEvent.value = calendarEventObj

  const selectedEventId = calendarEventObj.id

  const selectedEventIndex = eventItemElements.findIndex(obj => obj.id === selectedEventId)

  eventItemElements.forEach((obj, idx) => {
    if (idx === selectedEventIndex)
      obj.elem.classList.add('selected-event')
    else
      obj.elem.classList.remove('selected-event')
  })
}

// Doc:
function eventItemFuncRef(elem) {
  if (!elem)
    return

  const eventid = elem.getAttribute('data-id')

  // Check for event item in array
  const eventItemExists = eventItemElements.find(obj => obj.id === eventid)

  if (!eventItemExists) {
    eventItemElements.push({
      id: eventid,
      title: elem.innerText,
      elem,
    })
  }
}

// Doc:
function handleEventItemDeselect() {
  eventItemElements.forEach((obj) => {
    obj.elem.classList.remove('selected-event')
  })
}
</script>

<template>
  <div
    ref="calendar"
    :class="classes"
    @click="handleEventItemDeselect"
  >
    <div class="calendar-wrapper">
      <v-sheet class="calendar-body">
        <v-calendar
          v-model="firstEventMonthRef"
          :events="parsedEvents"
          view-mode="month"
        >
          <!-- Vuetify calendar event slot -->
          <!-- Slot prop holds each parsedEvent object -->
          <template #event="event">
            <button :ref="eventItemFuncRef" class="calendar-event-item" :data-id="event.event.id" @click="showEventItemPopup(event.event)">
              <span class="calendar-event-title">
                {{ event.event.title }}
              </span>
              <span class="calendar-event-time">
                {{ event.event.time }}
              </span>

              <!-- Event item popup -->
              <v-menu
                activator="parent"
                :open-on-click="true"
                :close-on-content-click="false"
                location="start bottom"
                origin="auto"
                offset="10"
              >
                <v-card width="320" :link="true" :to="selectedEvent.to">
                  <!-- Default Event Calendar -->
                  <div v-if="defaultEventCalendar" class="calendar-event-popup-wrapper">
                    <BlockCardWithImage
                      :image="selectedEvent.image"
                      :title="selectedEvent.title"
                      :category="selectedEvent.category"
                    />
                    <div class="block-tag-wrapper">
                      <BlockTag
                        v-for="tag in selectedEvent.tagLabels"
                        :key="`tag-${tag.title}`"
                        :label="tag.title"
                        :is-secondary="true"
                        :is-highlighted="tag.isHighlighted ? tag.isHighlighted : false"
                        :class="{ highlighted: tag.isHighlighted }"
                      />
                    </div>
                    <BlockEventDetail
                      :start-date="selectedEvent.startDateWithTime"
                      :time="selectedEvent.startDateWithTime"
                      :locations="selectedEvent.location"
                    />
                  </div>

                  <!-- Slot for new components -->
                  <div v-else-if="$slots.calendarSlotComponent" class="calendar-slot-wrapper">
                    <slot name="calendarSlotComponent" :event="selectedEvent" />
                  </div>

                  <!-- Default Vuetify component -->
                  <v-list v-else>
                    <v-list-item
                      :title="selectedEvent.title"
                    />
                  </v-list>
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
