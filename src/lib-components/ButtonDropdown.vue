<script setup>
import { computed, ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { useRoute } from 'vue-router'
import 'add-to-calendar-button'
import format from 'date-fns/format'

import SvgIconFtvaDropTriangle from 'ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg'
import SvgIconFtvaShare from 'ucla-library-design-tokens/assets/svgs/icon-ftva-share.svg'
import SvgIconFtvaSocialConfirm from 'ucla-library-design-tokens/assets/svgs/icon-ftva-social_confirm.svg'
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'

import IconWithLink from './IconWithLink.vue'
import removeTags from '@/utils/removeTags'

import { useGlobalStore } from '@/stores/GlobalStore'
import { useTheme } from '@/composables/useTheme'

// DATA
const { title, eventDescription, startDateWithTime, endTime, location, isEvent, dropdownList, buttonTitle, hasIcon } = defineProps({
  // Event props for Dropdown Calendar
  title: {
    type: String,
    default: '',
  },
  eventDescription: {
    type: String,
    default: '',
  },
  startDateWithTime: {
    type: String,
    default: ''
  },
  endTime: {
    type: String,
    default: '',
  },
  location: {
    type: Array,
    default: () => [],
  },
  isEvent: {
    type: Boolean,
    default: false
  },
  debugModeEnabled: {
    type: Boolean,
    default: false
  },

  // Dropdown props
  dropdownList: {
    type: Array,
    default: () => [],
  },
  buttonTitle: {
    type: String,
    default: '',
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
})

const globalStore = useGlobalStore()

const route = useRoute()

const isDropdownExpanded = ref(false)

const isLinkCopied = ref(false)

// COMPUTED
const isMobile = computed(() => {
  return globalStore.winWidth <= 750
})

const isLinkCopiedClass = computed(() => [
  { 'is-link-copied': isLinkCopied.value },
])

const isDropdownExpandedClass = computed(() => [
  { 'is-expanded': isDropdownExpanded.value },
])

// Event data computations
const parsedLocation = computed(() => {
  const evtUrl = location[0]?.publicUrl

  const evtLocation = location[0]?.title

  return evtUrl || (evtLocation || '')
})

const parsedDateAndTime = computed(() => {
  if (startDateWithTime) {
    const startDate = format(new Date(startDateWithTime), 'yyyy-MM-dd')
    const startTime = format(new Date(startDateWithTime), 'HH:mm')
    return { startDate, startTime }
  }
  return ''
})

const parsedEndTime = computed(() => {
  if (endTime)
    return formatEndTime(endTime)

  return parsedDateAndTime.value.startTime
})

const parsedEventDescription = computed(() => {
  if (eventDescription)
    return removeTags(eventDescription)

  return ''
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
  const style = document.createElement('style')
  style.innerHTML
        = '.atcb-button.atcb-click.atcb-active { border-bottom-left-radius: 0 !important; border-bottom-right-radius: 0 !important; } .atcb-active .atcb-text::after { transform: rotate(180deg); } #atcb-bgoverlay.atcb-click:hover {  cursor: unset; }'

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

/* Expected format arg: "PDT00:00:00" */
function formatEndTime(str) {
  const pattern = /[0-9][0-9]:[0-9][0-9]/
  const result = str.match(pattern)
  return result[0]
}

// THEME
const theme = useTheme()

const parsedClasses = computed(() => {
  return ['button-dropdown', theme?.value || '']
})
</script>

<template>
  <div :class="parsedClasses">
    <div v-if="isEvent">
      <!-- Add to Calendar Button plugin component

      - https://add-to-calendar-button.com/configuration

      - plugin's debug attribute is bound to the component's debugModeEnabled prop; set to 'true' at page-level for troubleshooting

      - Plugin's attributes must be camelCased

      - eslint flag to prevent attribute hyphenation -->

      <!-- eslint-disable -->
      <add-to-calendar-button
        :name="title"
        :startDate="parsedDateAndTime.startDate"
        :startTime="parsedDateAndTime.startTime"
        :endTime="parsedEndTime"
        timeZone="America/Los_Angeles"
        :location="parsedLocation"
        :description="parsedEventDescription"
        options="'Google','Apple','Microsoft365','Outlook.com','iCal'"
        trigger="click"
        hideBranding="true"
        hideCheckmark="true"
        hideBackground="true"
        hideIconButton="true"
        listStyle="dropdown-static"
        :debug="debugModeEnabled"
        @click="handleActbExpandedStyle"
></add-to-calendar-button>
      <!-- eslint-enable -->
    </div>

    <!-- Generic Button -->
    <div v-else v-on-click-outside="closeDropdownOnClickOutside">
      <div class="dropdown-overlay" :class="isDropdownExpandedClass" />
      <button
        class="button"
        :class="isDropdownExpandedClass"
        @click="handleDropdownExpansion"
      >
        <!-- Optional Button Icon -->
        <span class="button-inner-wrapper">
          <span v-if="hasIcon">
            <component :is="SvgIconFtvaShare" class="button-svg" aria-hidden="true" />
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
          <!-- Dropdown Items -->
          <div
            v-for="item in dropdownList"
            :key="item.dropdownItemTitle"
            class="dropdown-modal-item"
          >
            <!-- "Send to Email" -->
            <span v-if="item.dropdownItemTitle === 'Email'"><a
              :href="`mailto:?&body=${route.fullPath}`"
              class="email-icon"
            >
              <IconWithLink
                :text="item.dropdownItemTitle"
                :icon-name="item.iconName"
                class="not-smart-link"
              /></a></span>

            <!-- "Copy URL/Link" -->
            <span
              v-else-if="item.dropdownItemTitle === 'Copy Link'"
            >
              <!-- Swap on click -->
              <IconWithLink
                v-if="!isLinkCopied"
                :text="item.dropdownItemTitle"
                :icon-name="item.iconName"
                class="not-smart-link"
                @click="handleCopiedLink(route.fullPath)"
              />

              <IconWithLink
                v-else
                text="Link Copied!"
                :class="isLinkCopiedClass"
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
@import "@/styles/default/_button-dropdown.scss";
@import "@/styles/ftva/_button-dropdown.scss";
</style>
