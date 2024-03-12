<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { PropType } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// PROPS & DATA
/* currently App is sending this data as props
const mockDateFilterData = {
  initialDates: { start: '3/8/2024', end: '3/10/2024' },
  eventDates: ['3/1/2024', '3/2/2024', '3/2/2024', '3/4/2024', '3/6/2024', '3/8/2024', '3/19/2024', '3/19/2024',],
}
*/
const { initialDates, eventDates } = defineProps({
    initialDates: {
        type: Object as PropType<any>,
        default: { start: null, end: null },
    },
    eventDates: {
        type: Array as PropType<string[]>,
        default: () => [],
        required: true,
    },
})

// TODO TODO
// if we have initial dates in array, set date to initialDates
// const date = ref(initialDates.length > 0 ? initialDates : [])
const date = ref()
watch(date, async (newDate, oldDate) => {
    if (newDate !== oldDate) {
        console.log('newDate', newDate);
    }
})

// prep event dates array
function calcDateFrequency(dateArray: string[]) {
    let obj = {};
    for (let i = 0; i < dateArray.length; i++) {
        if (obj[dateArray[i]] === undefined) {
            obj[dateArray[i]] = 1;
        } else {
            obj[dateArray[i]]++;
        }
    }
    return obj;
}
const dateFrequency = calcDateFrequency(eventDates);
</script>

<template>
    <VueDatePicker v-model="date" range class="date-filter">
        <template #day="{ day, date }">
            {{ day }}
            <template v-if="dateFrequency.hasOwnProperty(date.toLocaleDateString())" class="event-dots">
                <span v-for="index in dateFrequency[date.toLocaleDateString()]" :key="index">
                    X
                </span>
            </template>
        </template>
    </VueDatePicker>
</template>

<style lang="scss" scoped>
.date-filter {
    .event-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }
}
</style>
