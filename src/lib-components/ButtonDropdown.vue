<script setup>
import { computed, ref } from "vue"
import { vOnClickOutside } from "@vueuse/components"
import { useRoute } from "vue-router"
import { useGlobalStore } from "@/stores/GlobalStore"
import "add-to-calendar-button"

// SVGs
import SvgIconFtvaDropTriangle from "ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg"
import SvgIconFtvaShare from "ucla-library-design-tokens/assets/svgs/icon-ftva-share.svg"
import SvgIconFtvaSocialConfirm from "ucla-library-design-tokens/assets/svgs/icon-ftva-social_confirm.svg"
import SvgGlyphClose from "ucla-library-design-tokens/assets/svgs/icon-close.svg"

import IconWithLink from "./IconWithLink.vue"

import { useTheme } from "@/composables/useTheme"

// DATA
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

const globalStore = useGlobalStore()

const route = useRoute()

const target = ref(null)
const isDropdownExpanded = ref(false)
const isLinkCopied = ref(false)

// COMPUTED
const isMobile = computed(() => {
    return globalStore.winWidth <= 750
})

const isLinkCopiedClass = computed(() => [
    { "is-link-copied": isLinkCopied.value },
])

const isDropdownExpandedClass = computed(() => [
    { "is-expanded": isDropdownExpanded.value },
])

const parsedEvent = computed(() => {
    return ""
})

// METHODS
function handleDropdownExpansion() {
    return (isDropdownExpanded.value = !isDropdownExpanded.value)
}

function closeDropdownOnClickOutside() {
    isDropdownExpanded.value = false
}

function removeOverlay() {
    isDropdownExpanded.value = false
}

/* Inject styles into ATCB ShadowDOM on button dropdown:
 - Remove border bottom radii on button
 - Rotate FTVA dropdown triangle
 - Disable custom cursor
*/
function handleActbExpandedStyle(e) {
    const style = document.createElement("style")
    style.innerHTML =
        ".atcb-button.atcb-click.atcb-active { border-bottom-left-radius: 0 !important; border-bottom-right-radius: 0 !important; } .atcb-active .atcb-text::after { transform: rotate(180deg); } #atcb-bgoverlay.atcb-click:hover {  cursor: unset; }"

    e.target.shadowRoot.appendChild(style)
}

/*
- Copy page path to clipboard;
- Show "Copied Link" icon for 4secs
*/
function handleCopiedLink() {
    navigator.clipboard.writeText(route.fullPath)
    isLinkCopied.value = true

    setTimeout(() => {
        isLinkCopied.value = false
    }, 4000)
}

// THEME
const theme = useTheme()

const parsedClasses = computed(() => {
    return ["button-dropdown", theme?.value || ""]
})
</script>

<template>
    <div :class="parsedClasses">
        <div v-if="eventDetail">
            <!-- Add to Calendar Button -->
            <add-to-calendar-button
                :name="eventDetail.title"
                :startDate="eventDetail.startDate"
                :startTime="eventDetail.startTime"
                :endTime="eventDetail.endTime"
                timeZone="America/Los_Angeles"
                :location="eventDetail.location"
                :description="eventDetail.location"
                options="'Google','Apple','Outlook.com','iCal'"
                trigger="click"
                hideBranding="true"
                hideCheckmark="true"
                hideBackground="true"
                hideIconButton="true"
                listStyle="dropdown-static"
                @click="handleActbExpandedStyle"
            ></add-to-calendar-button>
        </div>

        <!-- Generic Button -->
        <div v-else v-on-click-outside="closeDropdownOnClickOutside">
            <div
                class="dropdown-overlay"
                :class="isDropdownExpandedClass"
            ></div>
            <button
                class="button"
                :class="isDropdownExpandedClass"
                @click="handleDropdownExpansion"
            >
                <!-- Optional Button Icon -->
                <span class="button-inner-wrapper">
                    <span v-if="hasIcon">
                        <component :is="SvgIconFtvaShare" class="button-svg" />
                    </span>

                    <span class="button-text">{{ buttonTitle }}</span>
                </span>

                <span
                    :class="isDropdownExpandedClass"
                    class="toggle-triangle-icon"
                >
                    <SvgIconFtvaDropTriangle />
                </span>
            </button>

            <!-- Dropdown Modal -->
            <div v-if="isDropdownExpanded" class="button-dropdown-modal">
                <SvgGlyphClose
                    v-if="isMobile"
                    class="svg-glyph-close"
                    @click="removeOverlay"
                />
                <div
                    class="button-dropdown-modal-wrapper"
                    :class="isDropdownExpandedClass"
                >
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
                                    class="not-smart-link" /></a
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
                                class="not-smart-link"
                            />

                            <IconWithLink
                                v-else
                                text="Link Copied!"
                                :class="isLinkCopiedClass"
                                class="test"
                                :icon-name="SvgIconFtvaSocialConfirm"
                            />
                        </span>

                        <!-- Generic Dropdown Items -->
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
