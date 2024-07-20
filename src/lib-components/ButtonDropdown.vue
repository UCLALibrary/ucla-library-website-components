<script setup>
import { computed, defineAsyncComponent, ref } from "vue"
import { useRoute } from "vue-router"
import { useTheme } from "@/composables/useTheme"
import "add-to-calendar-button"

// Components
import SvgIconFtvaShare from "ucla-library-design-tokens/assets/svgs/icon-ftva-share.svg"
import SvgIconFtvaSocialConfirm from "ucla-library-design-tokens/assets/svgs/icon-ftva-social_confirm.svg"
import SvgIconFtvaDropTriangle from "ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg"
import IconWithLink from "./IconWithLink.vue"

//
const { eventDetail, dropdownList, title, hasIcon } = defineProps({
    eventDetail: {
        type: Object,
        default: () => {},
    },
    dropdownList: {
        type: Array,
        default: () => [],
    },
    buttonTitle: {
        type: String,
        default: "",
    },
    hasIcon: {
        type: Boolean,
        default: false,
    },
})

const route = useRoute()
const isDropdownExpanded = ref(false)
const isLinkCopied = ref(false)

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

function handleActbExpandedStyle(e) {
    let style = document.createElement("style")
    style.innerHTML =
        ".atcb-button.atcb-click.atcb-active { border-bottom-left-radius: 0 !important; border-bottom-right-radius: 0 !important; }"
    e.target.shadowRoot.appendChild(style)
}

function handleCopiedLink() {
    navigator.clipboard.writeText(route.fullPath)
    isLinkCopied.value = true
    setTimeout(() => {
        isLinkCopied.value = false
    }, 6000)
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
                trigger="click"
                hideBranding="true"
                hideCheckmark="true"
                hideBackground="true"
                hideIconButton="true"
                listStyle="dropdown-static"
                @click="handleActbExpandedStyle"
            ></add-to-calendar-button>
            <!-- buttonStyle="none" -->
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
                    <span v-if="hasIcon">
                        <component
                            :is="SvgIconFtvaShare"
                            class="button-icon__svg"
                        />
                    </span>

                    <span class="button-text">{{ buttonTitle }}</span>
                </span>

                <span :class="isExpandedClass" class="toggle-triangle-icon">
                    <SvgIconFtvaDropTriangle />
                </span>
            </button>

            <!-- Dropdown Modal -->
            <div v-if="isDropdownExpanded" class="button-dropdown-modal">
                <div class="button-dropdown-modal-wrapper">
                    <div
                        v-for="item in dropdownList"
                        :key="item.dropdownItemTitle"
                        class="dropdown-modal-item"
                    >
                        <!-- "Send to Email" -->
                        <span v-if="item.dropdownItemTitle === 'Email'"
                            ><a
                                :href="`mailto:?&body=${route.fullPath}`"
                                class="email-icon"
                            >
                                <IconWithLink
                                    :text="item.dropdownItemTitle"
                                    :icon-name="item.iconName"
                                    class="no-active-link" /></a
                        ></span>

                        <!-- "Copy URL/Link" -->
                        <span
                            v-else-if="item.dropdownItemTitle === 'Copy Link'"
                        >
                            <!-- Swap on click -->
                            <IconWithLink
                                v-if="!isLinkCopied"
                                :text="item.dropdownItemTitle"
                                :icon-name="item.iconName"
                                @click="handleCopiedLink(route.fullPath)"
                                class="no-active-link"
                            />

                            <IconWithLink
                                v-else
                                text="Link Copied!"
                                :icon-name="SvgIconFtvaSocialConfirm"
                            />
                        </span>

                        <!-- Generic Items -->
                        <IconWithLink
                            v-else
                            :text="item.dropdownItemTitle"
                            :icon-name="item.iconName"
                            :to="`${item.dropdownItemUrl}${route.fullPath}`"
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
