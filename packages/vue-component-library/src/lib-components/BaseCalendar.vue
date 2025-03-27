<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import type { PropType, Ref } from 'vue'
import format from 'date-fns/format'
import BlockCardWithImage from './BlockCardWithImage.vue'
import BlockEventDetail from './BlockEventDetail.vue'
import BlockTag from './BlockTag.vue'
import { useTheme } from '@/composables/useTheme'
import type { MediaItemType } from '@/types/types'

interface Event {
  id: string
  startDateWithTime: string
  title: string
  to: string
  location?: { title: string; publicUrl?: string }[]
}

interface TagLabels {
  title?: string
  isHighlighted?: boolean
}

interface CalendarEvent extends Event {
  ftvaEventScreeningDetails: { tagLabels: TagLabels[] }[]
  imageCarousel: { image: MediaItemType[] }[]
}

interface SelectedCalendarEvent extends Event {
  start: Date
  end: Date
  time: string
  tagLabels?: TagLabels[]
  image: MediaItemType
}

const { defaultEventCalendar, events, firstEventMonth } = defineProps({
  defaultEventCalendar: {
    type: Boolean,
    default: true
    // True: Default calendar with fixed components
    // False: Minimal calendar or with custom components
  },

  events: {
    type: Array as PropType<CalendarEvent[]>,
    default: () => [],
  },

  firstEventMonth: {
    type: Array,
    default: () => [new Date()]
    // Sets calendar to month of earliest event
    // Default: Calendar opens to month of current date
  }
})

const calendarRef = useTemplateRef<HTMLDivElement>('calendar')
const firstEventMonthRef = ref(firstEventMonth)

// Vuetify Popup/Dialog
const eventItemRef: Ref<CalendarEvent | any> = ref({})
const selectedEventObj: Ref<SelectedCalendarEvent | any> = ref({})
const selectedEventElement = ref<HTMLElement | null>(null)

onMounted(() => {
  updateCalendarHeaderElements()

  window.addEventListener('click', handleSelectedEventItemDeselect)
})

// Vuetify calendar day format is single-lettered: S, M, etc.
// Update day to full name: Sunday, Monday, etc.
// Default header button text is 'Today'; update to 'This Month'
function updateCalendarHeaderElements() {
  const weekDayLabels = calendarRef.value?.querySelectorAll('.v-calendar-weekly__head-weekday-with-weeknumber')

  const todayBtnElem = calendarRef.value?.querySelector('.v-calendar-header__today .v-btn__content') as HTMLElement

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  weekDayLabels?.forEach((elem, idx) => (elem as HTMLElement).innerText = weekDays[idx])

  todayBtnElem.innerText = 'This Month'
}

// Remove selected style of previous selected event
function handleSelectedEventItemDeselect() {
  if (selectedEventElement.value)
    selectedEventElement.value.classList.remove('selected-event')
}

const parsedEvents = computed(() => {
  if (events.length === 0)
    return []

  const calendarEvents = events.map((obj: CalendarEvent) => {
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
function formatEventTime(date: string) {
  const formattedTime = format(new Date(date), 'h:mm aaa')
  return formattedTime.toUpperCase()
}

function showEventItemPopup(calendarEventObj: SelectedCalendarEvent | Record <string, unknown>) {
  // Remove selected style of previous selected event
  handleSelectedEventItemDeselect()

  selectedEventObj.value = calendarEventObj

  const selectedElem = eventItemRef.value[`item-${calendarEventObj.id}`]

  // Set event as new selected event
  selectedEventElement.value = selectedElem

  selectedEventElement.value?.classList.add('selected-event')
}

onUnmounted(() => {
  window.removeEventListener('click', handleSelectedEventItemDeselect)
})

const theme = useTheme()

const classes = computed(() => {
  return ['base-calendar', theme?.value || '']
})
</script>

<template>
  <div
    ref="calendar"
    :class="classes"
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
            <button :ref="(el) => { eventItemRef[`item-${event.event.id}`] = el }" class="calendar-event-item" @click="showEventItemPopup(event.event)">
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
                opacity="0"
              >
                <v-card
                  v-ripple="false"
                  width="320"
                  style="overflow: hidden; z-index: initial"
                  :hover="false"
                  :link="true"
                  :to="selectedEventObj.to"
                  variant="text"
                >
                  <!-- Default Event Calendar -->
                  <div v-if="defaultEventCalendar" class="calendar-event-popup-wrapper">
                    <BlockCardWithImage
                      :image="selectedEventObj.image"
                      :title="selectedEventObj.title"
                    />
                    <div class="block-tag-wrapper">
                      <BlockTag
                        v-for="tag in selectedEventObj.tagLabels"
                        :key="`tag-${tag.title}`"
                        :label="tag.title"
                        :is-secondary="true"
                        :is-highlighted="tag.isHighlighted ? tag.isHighlighted : false"
                        :class="{ highlighted: tag.isHighlighted }"
                      />
                    </div>
                    <BlockEventDetail
                      :start-date="selectedEventObj.startDateWithTime"
                      :time="selectedEventObj.startDateWithTime"
                      :locations="selectedEventObj.location"
                    />
                  </div>

                  <!-- Slot for new components -->
                  <div v-else-if="$slots.calendarSlotComponent" class="calendar-slot-wrapper">
                    <slot name="calendarSlotComponent" :event="selectedEventObj" />
                  </div>

                  <!-- Default Vuetify component -->
                  <v-list v-else>
                    <v-list-item
                      :title="selectedEventObj.title"
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
