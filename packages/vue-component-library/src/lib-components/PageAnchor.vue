<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import SvgIconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import { useTheme } from '@/composables/useTheme'

import ButtonLink from '@/lib-components/ButtonLink.vue'
import DividerGeneral from '@/lib-components/DividerGeneral.vue'

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
const isDlcTheme = computed(() => {
  return theme?.value === 'dlc'
})
// Methods
function toggleDropdown() {
  if (isDlcTheme.value)
    return

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
      <div v-if="isDlcTheme" class="title-container">
        <h3 class="title">
          Topics covered:
        </h3>
        <DividerGeneral class="divider" />
      </div>
      <button v-else class="dropdown-button" @click="toggleDropdown">
        On this page
        <span class="caret" :class="{ 'is-active': isDropdownOpen }">
          <span class="chevron">
            <SvgIconCaretDown class="caret-down-svg" />
          </span>
        </span>
      </button>

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
          <ButtonLink
            v-if="isDlcTheme"
            :label="title"
            :to="`#${kebabCaseTitles[index]}`"
            :is-secondary="true"
          />
          <a v-else :href="`#${kebabCaseTitles[index]}`">{{
            title
          }}</a>
        </li>
        <li v-if="hasBackToTop" :class="listClasses">
          <ButtonLink
            v-if="isDlcTheme"
            label="Back to Top"
            to="#"
            :is-secondary="true"
          />
          <a v-else href="#">Back to Top</a>
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
