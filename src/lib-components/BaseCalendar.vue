<script setup>
import { computed, onMounted, ref } from 'vue'
import { useDate } from 'vuetify'

const { events, type, value } = defineProps({
  events: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: 'month'
  },
  value: Array,
  // new Date('January 01, 2024 00:00:00')
  default: () => [new Date()],
})

const eventRef = ref(events)

const parsedEvents = computed(() => {
  if (eventRef.value.length === 0)
    return []

  const test = events.map((obj) => {
    return {
      title: obj.title,
      start: new Date(obj.start),
      end: new Date(obj.end)
    }
  })

  return test
})
// console.log(parsedEvents.value)

// Loads the calendar with current month view
onMounted(() => {
  // const adapter = useDate()

  // getEvents({
  // First second of first day of the month
  // start: adapter.startOfDay(adapter.startOfMonth(new Date())),
  // Last second of last day of the month
  // end: adapter.endOfDay(adapter.endOfMonth(new Date())),
  // })
})

// Query?
// function getEvents({ start, end }) {
// console.log('start: ', start)
// console.log('end: ', end)

// return eventRef.value
// }
</script>
<!-- v-model:model-value="searchWords" -->

<template>
  <v-sheet>
    <!-- v-model="value" -->
    <v-calendar
      :model-value="value"
      :events="parsedEvents"
      :view-mode="type"
      @update:model-value="value"
    >
      <!-- <template #header /> -->
      <template #event="event">
        <div>
          <!-- {{ event.day }} -->
            {{ event.event }}
        </div>
      </template>
    </v-calendar>
  </v-sheet>
</template>

<style lang="scss">
.v-calendar-header__today,
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
</style>
