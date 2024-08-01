<script setup>
import { computed, defineAsyncComponent, ref } from "vue"
import { useRoute } from "vue-router"
import { useTheme } from "@/composables/useTheme"
import "add-to-calendar-button"

// Components
import SvgIconCalendar from "ucla-library-design-tokens/assets/svgs/icon-calendar.svg"
import SvgIconFTVADropTriangle from "ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg"

//
const { eventDetail, socialList, title, hasIcon } = defineProps({
    eventDetail: {
        type: Object,
        default: () => {},
    },
    socialList: {
        type: Array, // social objects?
        default: () => [],
    },
    title: {
        type: String,
        default: () => "",
    },
    hasIcon: {
        type: Boolean,
        default: () => false,
    },
})

const isDropdownExpanded = ref(false)

const route = useRoute()

// Computed
const parsedEvent = computed(() => {
    return ""
})

const toggledTriangle = computed(() => [
    "toggle-triangle-icon",
    { "is-expanded": isDropdownExpanded.value },
])

// Theme
const theme = useTheme()

const parsedClasses = computed(() => {
    return ["button-dropdown", theme?.value || ""]
})
</script>

<template>
    <div :class="parsedClasses">
        <div v-if="eventDetail">
            <!-- <pre>{{ eventDetail }}</pre> -->
            <add-to-calendar-button
                :name="eventDetail.title"
                :startDate="eventDetail.startDate"
                :startTime="eventDetail.startTime"
                :endTime="eventDetail.endTime"
                timeZone="America/Los_Angeles"
                :location="eventDetail.location"
                :description="eventDetail.location"
                options="'Apple','Google','iCal','Outlook.com'"
                hideBranding="true"
                hideCheckmark="true"
                hideIconButton="true"
                trigger="click"
            ></add-to-calendar-button>
        </div>
        <div v-else>
            <button class="button button-share">
                <!-- icon -->
                <span class="button-share__inner-wrapper">
                    <span v-if="hasIcon"
                        ><component :is="SvgIconCalendar" class="" />
                    </span>

                    {{ title }}
                </span>
                <!-- dropdown toggle -->
                <span :class="toggledTriangle">
                    <SvgIconFTVADropTriangle />
                </span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
