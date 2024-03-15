<script lang="ts" setup>
import { defineAsyncComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import type { DatePickerInstance } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'

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
// Emits
const emit = defineEmits(['input-selected', 'update:selected'])
// PROPS & DATA
/* currently App is sending this data as props
const mockDateFilterData = {
  initialDates: { start: '3/8/2024', end: '3/10/2024' },
  eventDates: ['2/29/2024','2/29/2024','3/1/2024', '3/2/2024', '3/2/2024', '3/4/2024', '3/6/2024', '3/8/2024', '3/19/2024', '3/19/2024',],
}
// QUESTION: does this component need to have the ability to select initial dates?
*/
const threeLetterDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const date = ref([])
const datepicker = ref<DatePickerInstance | null>(null)
const isSelecting = ref(false)
const todayBtnActive = ref(false)

// Watchers
watch(date, async (newDate, oldDate) => {
  if (newDate !== oldDate)
    emit('input-selected', newDate)
})

// Methods
// Transform eventDates into an object with date frequencies
function calcDateFrequency(dateArray: string[]) {
  const obj: {
    [key: string]: number
  } = {}
  for (let i = 0; i < dateArray.length; i++) {
    if (obj[dateArray[i]] === undefined)
      obj[dateArray[i]] = 1
    else
      obj[dateArray[i]]++
  }
  return obj
}
const dateFrequency = calcDateFrequency(eventDates)

// Select today's date
function goToToday() {
  date.value = [new Date(), new Date()]
  todayBtnActive.value = true
}
// Clear date selection
function clearDate() {
  datepicker.value?.updateInternalModelValue(null)
  todayBtnActive.value = false
}
// Determine is-selecting boolean for range selection styles
function handleInternalSelection(selectedDate: Date | Date[] | null) {
  if (selectedDate?.length && selectedDate.length.valueOf() == 1)
    isSelecting.value = true
  else
    isSelecting.value = false
}
// Deselect today button when range selection starts
function clearTodayBtn() {
  todayBtnActive.value = false
}

// Async Components
const ButtonLink = defineAsyncComponent(() =>
  import('@/lib-components/ButtonLink.vue'))
</script>

<template>
  <VueDatePicker
    ref="datepicker" v-model="date" range :week-start="0" month-name-format="long"
    :enable-time-picker="false" :auto-position="false" class="date-filter"
    :class="[{ 'is-selecting': isSelecting }]" placeholder="All upcoming" @internal-model-change="handleInternalSelection"
    @range-start="clearTodayBtn"
  >
    <template
      #month-year="{
        month,
        year,
        months,
        handleMonthYearChange,
      }"
    >
      <div class="custom-header">
        <div class="custom-month-year-component">
          {{ months[month].text }} {{ year }}
        </div>
        <div class="custom-nav-buttons">
          <button class="nav-arrow-button" @click="handleMonthYearChange(false)">
            <SvgIconCaretLeft />
          </button>
          <button class="today-button" :class="[{ 'is-active-selection': todayBtnActive }]" @click="goToToday">
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
          <template v-for=" index in dateFrequency[date.toLocaleDateString()]" :key="index">
            <span class="dot" />
          </template>
        </div>
      </div>
    </template>

    <template #action-row="{ selectDate }">
      <div class="action-row">
        <ButtonLink class="action-row-button select-button" label="Done" icon-name="none" @click="selectDate" />
        <ButtonLink
          class="action-row-button clear-button" label="Clear" icon-name="icon-close"
          @click="(e: Event) => clearDate(e)"
        />
      </div>
    </template>
  </VueDatePicker>
</template>

<style lang="scss" scoped>
@import "ucla-library-design-tokens/scss/_tokens-ftva";

// TODO if using datepicker input, need to style the input
// var(--font-secondary);
.dp__calendar_header_separator {
    display: none;
}

button:focus,
button:focus-visible {
    outline: 1px hidden $accent-blue;
}

.date-filter {
    --dp-font-family: var(--font-primary);
    --dp-menu-min-width: 380px;
    --dp-menu-padding: 26px;
    --dp-cell-size: 38px;
    width: 380px;

    // Input styling
    :deep(.dp__input) {
        height: 59px;
        font-size: 18px;
    }

    :deep(.dp__outer_menu_wrap.dp--menu-wrapper) {
        top: 50px !important;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 10px 10px;

        .dp__menu {
            border-radius: 0px 0px 10px 10px;

            .dp__arrow_top {
                display: none;
            }
        }
    }

    // Calendar styling

    :deep(.dp__calendar_header_separator) {
        display: none;
    }

    :deep(.dp__menu_inner) {
        padding-bottom: 0px;
    }

    :deep(.dp__cell_inner) {
        transition: background-color 0.3s ease;
        width: 41px;

        &.dp__range_between {
            z-index: 2;
            color: var(--color-white);

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

            .day-content>.event-dots>.dot {
                background-color: var(--color-white);
            }

        }

        &.dp__range_end,
        &.dp__range_start,
        &.dp__active_date {
            background: $navy-blue;
            color: var(--color-white);

            .day-content>.event-dots>.dot {
                background-color: var(--color-white);
            }
        }

        &:hover {
            background-color: $grey-blue;
        }
    }

    :deep(.dp__cell_offset) {
        color: $light-grey;

        .day-content>.event-dots>.dot {
            background-color: $light-grey;
        }

        &:hover {
            color: $heading-grey;

            .day-content>.event-dots>.dot {
                background-color: $accent-blue;
            }
        }
    }

    &.is-selecting {
        :deep(.dp__cell_inner) {
            &.dp__range_between {
                color: $heading-grey;

                &::before {
                    background-color: $page-blue;
                }

                .day-content>.event-dots>.dot {
                    background-color: $accent-blue;
                }
            }
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
                background-color: $page-blue;
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

                &.is-active-selection {
                    background-color: $accent-blue;
                    color: var(--color-white);
                }
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
        justify-content: flex-end;
        width: 100%;
        align-items: center;
        margin: 10px 18px; //dp__action_row adds 8 px for total of 18px top and bottom
        gap: 5px;

        .action-row-button {
            // font-size: 18px;
            padding: 10px 21px;
            border-radius: 2px;
            font-family: var(--font-primary);
            font-weight: 500;
            line-height: 27px;
            color: var(--color-white);
            background-color: $accent-blue;
            border: 1px solid $accent-blue;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &.select-button> :deep(.label) {
                padding-left: 0px;
            }

            :deep(.hover) {
                display: none;
            }

            &:hover {
                background-color: $navy-blue;
            }
        }

        .clear-button {
            background-color: var(--color-white);
            color: $accent-blue;

            :deep(.svg__stroke--primary-blue-03) {
                stroke: $accent-blue;
            }

            &:hover {
                background-color: $navy-blue;
                color: var(--color-white);

                :deep(.svg__stroke--primary-blue-03) {
                    stroke: var(--color-white);
                }
            }
        }
    }
}
</style>
