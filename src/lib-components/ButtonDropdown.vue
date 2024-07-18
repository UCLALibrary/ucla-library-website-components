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
    buttonTitle: {
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
// console.log(route)

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

function handleCopyLink() {
    // console.log("copy")

    navigator.clipboard.writeText(route.fullPath)
    alert("Copied the text: " + route.fullPath)
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
            <!-- Add to Calendar Button -->
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

        <!-- Generic Button -->
        <div v-else>
            <button
                class="button button-icon"
                :class="isExpandedClass"
                @click="handleDropdown"
            >
                <!-- Optional Icon -->
                <span class="button-icon__inner-wrapper">
                    <!-- Make this a slot? -->
                    <span v-if="hasIcon"
                        ><component
                            :is="SvgIconShare"
                            class="button-icon__svg"
                        />
                    </span>

                    {{ buttonTitle }}
                </span>
                <!-- Dropdown Toggle -->
                <span :class="isExpandedClass" class="toggle-triangle-icon">
                    <SvgIconFTVADropTriangle />
                </span>
            </button>
            <!-- Dropdown Modal -->
            <div v-if="isDropdownExpanded" class="button-dropdown-modal">
                <div class="button-dropdown-modal-wrapper">
                    <div
                        v-for="social in socialList"
                        :key="social.socialTitle"
                        class="dropdown-modal-item"
                    >
                        <span v-if="social.socialTitle === 'Email'"
                            ><a
                                :href="`mailto:?&body=${route.fullPath}`"
                                class="social-email-icon"
                            >
                                <IconWithLink
                                    :text="social.socialTitle"
                                    :icon-name="social.iconName" /></a
                        ></span>

                        <!-- Copy page link -->
                        <IconWithLink
                            v-else-if="social.socialTitle === 'Copy Link'"
                            :text="social.socialTitle"
                            :icon-name="social.iconName"
                            @click="handleCopyLink(route.fullPath)"
                        />

                        <IconWithLink
                            v-else
                            :text="social.socialTitle"
                            :icon-name="social.iconName"
                            :to="`${social.socialUrl}${route.fullPath}`"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
