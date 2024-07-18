<script setup>
import { computed, defineAsyncComponent, ref } from "vue"
import { useRoute } from "vue-router"
import { useTheme } from "@/composables/useTheme"
import "add-to-calendar-button"

// Components
import SvgIconShare from "ucla-library-design-tokens/assets/svgs/icon-ftva-share.svg"
import SvgIconFTVADropTriangle from "ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg"
import IconWithLink from "./IconWithLink.vue"

//
const { eventDetail, socialList, title, hasIcon } = defineProps({
    eventDetail: {
        type: Object,
        default: () => {},
    },
    socialList: {
        type: Array,
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

const isExpandedClass = computed(() => [
    { "is-expanded": isDropdownExpanded.value },
])

// Methods
function handleDropdown() {
    return (isDropdownExpanded.value = !isDropdownExpanded.value)
}

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
            <button
                class="button button-icon"
                :class="isExpandedClass"
                @click="handleDropdown"
            >
                <!-- icon -->
                <span class="button-icon__inner-wrapper">
                    <span v-if="hasIcon"
                        ><component
                            :is="SvgIconShare"
                            class="button-icon__svg"
                        />
                    </span>

                    {{ title }}
                </span>
                <!-- dropdown toggle -->
                <span :class="isExpandedClass" class="toggle-triangle-icon">
                    <SvgIconFTVADropTriangle />
                </span>
            </button>
            <div v-if="isDropdownExpanded" class="button-dropdown-modal">
                <div class="button-dropdown-modal-wrapper">
                    <pre>{{ socialList }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
