<script lang="ts" setup>
import { ref, watch, defineAsyncComponent } from 'vue';
import type { PropType } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import type { DatePickerInstance } from "@vuepic/vue-datepicker"
import '@vuepic/vue-datepicker/dist/main.css'
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'

// PROPS & DATA
/* currently App is sending this data as props
const mockDateFilterData = {
  initialDates: { start: '3/8/2024', end: '3/10/2024' },
  eventDates: ['3/1/2024', '3/2/2024', '3/2/2024', '3/4/2024', '3/6/2024', '3/8/2024', '3/19/2024', '3/19/2024',],
}
// QUESTION: does this component need to have the ability to select initial dates?
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

// TODO TODO do we need to pass initial selection?
// if we have initial dates in array, set date to initialDates
// const date = ref(initialDates.length > 0 ? initialDates : [])
const date = ref()
const datepicker = ref<DatePickerInstance | null>(null)
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

// METHODS
const goToToday = () => {
    // select today's date
    date.value = [new Date(), null];
};
const clearDate = () => {
    datepicker.value?.updateInternalModelValue(null);
};
const threeLetterDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//Components
const ButtonLink = defineAsyncComponent(() =>
    import('@/lib-components/ButtonLink.vue'))
</script>

<template>
    <VueDatePicker v-model="date" ref="datepicker" range :week-start="0" :month-name-format="'long'"
        :enable-time-picker="false" class="date-filter" placeholder="All upcoming">
        <template #month-year="{
        month,
        year,
        months,
        handleMonthYearChange
    }">
            <div class="custom-header">
                <div class="custom-month-year-component">
                    {{ months[month].text }} {{ year }}
                </div>
                <div class="custom-nav-buttons">
                    <button class="nav-arrow-button" @click="handleMonthYearChange(false)">
                        <SvgIconCaretLeft />
                    </button>
                    <button class="today-button" @click="goToToday">
                        TODAY
                    </button>
                    <button class="nav-arrow-button" @click="handleMonthYearChange(true)">
                        <SvgIconCaretRight />
                    </button>
                </div>
            </div>
        </template>

        <template #calendar-header="{ index, day }">
            <div class="day-header">
                {{ threeLetterDays[index] }}
            </div>
        </template>

        <template #day="{ day, date }">
            <div class="day-content">
                {{ day }}
                <div v-if="dateFrequency.hasOwnProperty(date.toLocaleDateString())" class="event-dots">
                    <template v-for="index in dateFrequency[date.toLocaleDateString()]" :key="index">
                        <span class="dot"></span>
                    </template>
                </div>
            </div>
        </template>

        <template #action-row="{ selectDate }">
            <div class="action-row">
                <!-- <button class="select-button" @click="selectDate">Done</button>
                <button class="close-button" @click="clearDate()">Clear X</button> -->
                <ButtonLink class="select-button" @click="selectDate" label="Done" />
                <ButtonLink class="clear-button" @click="clearDate()" label="Clear" icon-name="icon-close"
                    :is-quaternary="true" />
            </div>
        </template>
    </VueDatePicker>
</template>

<style lang="scss" scoped>
.date-filter {
    .custom-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .custom-nav-buttons {
            display: flex;
            gap: 2px;
            align-items: center;

            .today-button,
            .nav-arrow-button {
                background-color: var(--color-primary-blue-01);
                border: none;
                border-radius: 0px;
                padding: 0;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 31px;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: var(--color-primary-blue-02);
                }
            }

            .today-button {
                color: var(--color-primary-blue-03);
                width: 81px;
            }

            .nav-arrow-button {
                color: black;
                width: 25px;
            }

            :deep(.svg__stroke--primary-blue-03) {
                stroke: var(--color-black);
            }
        }
    }

    .day-content {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
        margin-top: -5px;

        .event-dots {
            position: absolute;
            width: 100%;
            bottom: -3px;
            display: flex;
            flex-direction: row;
            gap: 3px;
            justify-content: center;

            .dot {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: var(--color-primary-blue-03);
            }
        }
    }
}
</style>
