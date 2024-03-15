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
const threeLetterDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

const date = ref([])
const datepicker = ref<DatePickerInstance | null>(null)
watch(date, async (newDate, oldDate) => {
    if (newDate !== oldDate) {
        console.log('newDate', newDate);
    }
})

// prep event dates array
function calcDateFrequency(dateArray: string[]) {
    let obj: {
        [key: string]: number;
    } = {};
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

const isSelecting = ref(false);
const handleInternalSelection = (selectedDate: Date | Date[] | null) => {
    console.log('handleInternalSelection', selectedDate);
    // determine selection styles
    if (selectedDate?.length && selectedDate.length.valueOf() == 1) {
        // range
        isSelecting.value = true;
    } else {
        isSelecting.value = false;
    }

};

//Components
const ButtonLink = defineAsyncComponent(() =>
    import('@/lib-components/ButtonLink.vue'))

</script>

<template>
    <VueDatePicker v-model="date" ref="datepicker" range :week-start="0" :month-name-format="'long'"
        :enable-time-picker="false" @internal-model-change="handleInternalSelection"
        :class="['date-filter', { 'is-selecting': isSelecting }]" placeholder="All upcoming">
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
                <ButtonLink class="action-row-button select-button" @click="selectDate" label="Done" />
                <ButtonLink class="action-row-button clear-button" @click="clearDate()" label="Clear"
                    icon-name="icon-close" :is-quaternary="true" />
            </div>
        </template>
    </VueDatePicker>
</template>

<style lang="scss" scoped>
// @import "ucla-library-design-tokens/scss/_tokens-ftva";
// TODO replace with tokens
$medium-grey: #555555;
$grey-blue: #ABBFD6;
$page-blue: #e7edf2;
$accent-blue: #115DAF;
$padding: 26px; // rename this one

// TODO if using datepicker input, need to style the input
// var(--font-secondary);
.dp__calendar_header_separator {
    display: none;
}

// 10px bottom border radius

/* .dp__menu_inner {
    padding: var(--dp-menu-padding);
} */

.date-filter {
    // font-family: var(--font-primary) !important;
    --dp-font-family: var(--font-primary);
    --dp-menu-min-width: 380px;
    --dp-menu-padding: #{$padding};
    --dp-cell-size: 38px; //height: 38, TODO width 41

    :deep(.dp__calendar_header_separator) {
        display: none;
    }

    :deep(.dp__menu) {
        // min-width: 380px;
    }

    :deep(.dp__menu_inner) {
        padding-bottom: 0px;
    }

    :deep(.dp__cell_inner) {
        transition: background-color 0.3s ease;
        width: 41px;

        &.dp__range_between {
            z-index: 2;

            &::before {
                content: '';
                z-index: 0;
                background-color: $accent-blue;
                width: 51px;
                height: 38px;
                position: absolute;
                top: -1px;
                left: -6px;
            }

        }

        &:hover {
            background-color: $grey-blue;
        }
    }

    &.is-selecting {
        :deep(.dp__cell_inner) {
            &.dp__range_between::before {
                background-color: $page-blue;
            }
        }
    }

    :deep(.dp__calendar_item) {
        // transition: background-color 0.3s ease;
        // flex-grow: unset; // TODO discuss with axa

        &:hover {
            // background-color: $grey-blue;
        }
    }

    .custom-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 26px;

        .custom-nav-buttons {
            display: flex;
            gap: 2px;
            align-items: center;

            .today-button,
            .nav-arrow-button {
                background-color: $page-blue; //var(--color-primary-blue-01);
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
                    background-color: $grey-blue;
                }
            }

            .today-button {
                color: var(--color-primary-blue-03);
                width: 81px;
                font-size: 16px;
                font-weight: 500;
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

    .day-header {
        font-size: 16px;
        font-weight: normal;
        color: $medium-grey;
        text-align: center;
    }

    .day-content {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
        margin-top: -5px;
        font-size: 22px;

        .event-dots {
            position: absolute;
            width: 100%;
            bottom: 0px;
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

    .action-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .action-row-button {
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 0px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            line-height: 100%;
            color: var(--color-white);
            background-color: var(--color-primary-blue-01);
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: var(--color-primary-blue-02);
            }
        }

        .clear-button {
            background-color: var(--color-secondary-grey-01);
            color: var(--color-black);
        }
    }
}
</style>
