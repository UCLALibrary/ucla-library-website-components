<script lang="ts" setup>
import { defineAsyncComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import type { DatePickerInstance } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import SvgIconClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import SvgIconFTVACalender from 'ucla-library-design-tokens/assets/svgs/icon-ftva-calendar.svg'
import SvgIconFTVADropTriangle from 'ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg'


const { eventDates, hideInput } = defineProps({
    eventDates: {
        type: Array as PropType<string[]>,
        default: () => [],
        required: true,
    },
    // if true, the datepicker will be shown in 'inline' mode
    // https://vue3datepicker.com/props/modes/#inline
    hideInput: {
        type: Boolean,
        default: false,
    },
})
// EMITS
const emit = defineEmits(['input-selected', 'update:selected'])
// PROPS & DATA
const threeLetterDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const date = ref([])
const datepicker = ref<DatePickerInstance | null>(null)
const isSelecting = ref(false)
const isOpen = ref(false)
const todayBtnActive = ref(false)
const windowSize = ref(window.innerWidth) // > 750px is the breakpoint for mobile

// Watch date and emit to parent component
watch(date, async (newDate, oldDate) => {
    if (newDate !== oldDate)
        emit('input-selected', newDate)
})
// Watch window size and update windowSize ref
window.addEventListener('resize', () => {
    windowSize.value = window.innerWidth
})

// METHODS
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
// Toggle the arrow on the datepicker between open and closed
function toggleArrow() {
    isOpen.value = !isOpen.value
}
// Determine if the window size is mobile for conditional rendering
function isMobile() {
    return windowSize.value <= 750
}

// Parent component can use these methods to open and close the datepicker if input is hidden
// Open datepicker
function openDatepicker() {
    datepicker.value?.openMenu()
}
// Close datepicker
function closeDatepicker() {
    datepicker.value?.closeMenu()
}
defineExpose({
    openDatepicker,
    closeDatepicker,
})

// ASYNC COMPONENTS
const ButtonLink = defineAsyncComponent(() =>
    import('@/lib-components/ButtonLink.vue'))
</script>

<template>
    <div class="date-filter-container">
        <VueDatePicker ref="datepicker" v-model="date" :range="!isMobile()" :week-start="0" month-name-format="long"
            :enable-time-picker="false" :auto-position="false" :inline="hideInput" class="date-filter"
            :class="[{ 'is-selecting': isSelecting }]" :placeholder="isMobile() ? 'Select a date' : 'All upcoming'"
            @internal-model-change="handleInternalSelection" @range-start="clearTodayBtn" @open="toggleArrow"
            @closed="toggleArrow">
            <template #input-icon>
                <SvgIconFTVACalender />
                <span :class="[{ 'is-open': isOpen }, 'toggle-triangle-icon']">
                    <SvgIconFTVADropTriangle />
                </span>
            </template>

            <template #clear-icon="{ clear }">
                <SvgIconClose @click="clear" />
            </template>

            <template #month-year="{
            month,
            year,
            months,
            handleMonthYearChange,
        }">
                <div class="custom-header">
                    <div class="custom-month-year-component">
                        {{ months[month].text }} {{ year }}
                    </div>
                    <div class="custom-nav-buttons">
                        <button class="nav-arrow-button" @click="handleMonthYearChange(false)">
                            <SvgIconCaretLeft />
                        </button>
                        <button class="today-button" :class="[{ 'is-active-selection': todayBtnActive }]"
                            @click="goToToday">
                            TODAY
                        </button>
                        <button class="nav-arrow-button" @click="handleMonthYearChange(true)">
                            <SvgIconCaretRight />
                        </button>
                    </div>
                </div>
            </template>

            <template #calendar-header="{ index }">
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
                    <ButtonLink class="action-row-button select-button" label="Done" icon-name="none"
                        @click="selectDate" />
                    <ButtonLink class="action-row-button clear-button" label="Clear" icon-name="icon-close"
                        @click="clearDate" />
                </div>
            </template>
        </VueDatePicker>
    </div>
</template>

<style lang="scss" scoped>
@import "ucla-library-design-tokens/scss/_tokens-ftva";

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
    --dp-input-icon-padding: 30px;
    width: 380px;

    // Input styling
    :deep(.dp__input) {
        height: 59px;
        font-family: var(--font-secondary);
        font-size: 18px;
        color: $medium-grey;

        @media #{$small} {
            padding-inline-start: 57px;
        }

        &::placeholder {
            color: $medium-grey;
            opacity: 1;
        }
    }

    :deep(.dp__input_icon) {
        width: 100%;

        svg {
            position: absolute;
            right: 40px;
            transform: translateY(-50%);

            @media #{$small} {
                left: 30px;
            }
        }

        .toggle-triangle-icon {
            svg {
                right: 23px;
                // bottom: -5px;
            }

            &.is-open>svg {
                transform: rotate(180deg);
                bottom: -5px;
            }

            @media #{$small} {
                display: none;
            }
        }

    }

    :deep(.dp__clear_icon) {
        svg {
            display: none;
            position: absolute;
            right: 23px;
            transform: translateY(-50%);

            @media #{$small} {
                display: inherit;
            }
        }
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

    .custom-month-year-component {
        color: $heading-grey;
    }

    :deep(.dp__calendar_header_separator) {
        display: none;
    }

    :deep(.dp__menu_inner) {
        padding-bottom: 0px;
    }

    :deep(.dp__cell_inner) {
        transition: background-color 0.3s ease;
        width: 41px;
        color: $heading-grey;

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

        // MOBILE styles
        @media #{$small} {
            .clear-button {
                display: none;
            }

            .select-button {
                width: 100%;
            }
        }
    }
}
</style>
