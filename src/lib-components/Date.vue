// Single date, Date Range & Ongoing
<script
  lang="ts"
  setup
>
import { computed } from 'vue'
import formatDates from '@/utils/formatEventDates'

// PROPS & DATA
const { startDate, endDate, ongoing } = defineProps({
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  ongoing: {
    type: Boolean,
    default: false,
  },
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
  <div class="date">
    {{ parsedDateDisplay }}
  </div>
</template>

<style
  lang="scss"
  scoped
>
.date {
  color: green;
}
</style>
