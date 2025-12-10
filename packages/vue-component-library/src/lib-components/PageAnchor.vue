<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import SvgIconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import { useTheme } from '@/composables/useTheme'

// Helpers
import getSectionName from '@/utils/getSectionName'

const { sectionTitles, color } = defineProps({
  sectionTitles: {
    type: Array as PropType<string[]>,
    required: true,
  },
  color: {
    type: String as PropType<routeColors>,
    default: '',
  },
  hasBackToTop: {
    type: Boolean,
    default: true,
  },
})

const route = useRoute()

// typify valid route color strings
type routeColors = 'about' | 'help' | 'visit' | 'default' | ''

// Theme
const theme = useTheme()
const classes = computed(() => {
  return ['page-anchor', theme?.value || '']
})

// Use VueUse for reactive window width
const { width } = useWindowSize()

//  If DLC, default to open
// If the screen is Desktop and FTVA have pageAnchor default to open
const defaultDropdownOpen = computed(() => {
  if (theme?.value === 'dlc')
    return true
  if (theme?.value === 'ftva' && width.value > 1024)
    return true
  return false
})

const isDropdownOpen = ref(defaultDropdownOpen.value)

// Computed
const sectionName = computed(() => {
  return color || getSectionName(route?.path)
})
const listClasses = computed(() => {
  return ['link', `color-${sectionName.value}`]
})
const kebabCaseTitles = computed(() => {
  return sectionTitles.map((title) => {
    const titleWithNoSpecialChars = title
      .replace('&', '')
      .replace(/\s+/g, ' ')
      .trim()
    return titleWithNoSpecialChars.toLowerCase().replace(/ /g, '-')
  })
})
const isDesktop = computed(() => {
  return width.value > 1024
})

// Methods
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function handleListClick() {
  if (isDesktop.value)
    return

  toggleDropdown()
}
</script>

<template>
  <div :class="classes">
    <div class="page-anchor-content">
      <slot
        name="header"
        :is-dropdown-open="isDropdownOpen"
        :toggle-dropdown="toggleDropdown"
      >
        <button class="dropdown-button" @click="toggleDropdown">
          On this page
          <span
            class="caret"
            :class="{ 'is-active': isDropdownOpen }"
          >
            <span class="chevron">
              <SvgIconCaretDown class="caret-down-svg" />
            </span>
          </span>
        </button>
      </slot>

      <!-- Desktop - Page Anchor remains open when link is clicked -->
      <ul
        v-if="isDropdownOpen"
        class="dropdown-menu page-anchor-list"
        @click="handleListClick"
      >
        <li
          v-for="(title, index) in sectionTitles"
          :key="`${title}-${index}`"
          :class="listClasses"
        >
          <slot
            name="link"
            :title="title"
            :href="`#${kebabCaseTitles[index]}`"
            :index="index"
            :kebab-title="kebabCaseTitles[index]"
          >
            <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
          </slot>
        </li>
        <li v-if="hasBackToTop" :class="listClasses">
          <slot name="back-to-top">
            <a href="#">Back to Top</a>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_page-anchor.scss";
@import "@/styles/ftva/_page-anchor.scss";
@import "@/styles/dlc/_page-anchor.scss";
</style>
