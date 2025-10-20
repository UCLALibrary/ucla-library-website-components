<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
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
})

const route = useRoute()

// typify valid route color strings
type routeColors = 'about' | 'help' | 'visit' | 'default' | ''

// Theme
const theme = useTheme()
const classes = computed(() => {
  return ['page-anchor', theme?.value || '']
})

const windowWidth = ref(window.innerWidth)

// If the screen is Desktop and FTVA have pageAnchor default to open 
const isDropdownOpen = ref(theme?.value === 'ftva' && windowWidth.value > 1024)

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
  if (windowWidth.value > 1024)
    return true

  return false
})
// Methods
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <div :class="classes">
    <div class="page-anchor-content">
      <button class="dropdown-button" @click="toggleDropdown">
        On this page
        <span class="caret" :class="{ 'is-active': isDropdownOpen }">
          <span class="chevron">
            <SvgIconCaretDown class="caret-down-svg" />
          </span>
        </span>
      </button>

      <!-- Desktop - Page Anchor remains open when link is clicked -->
      <ul v-if="isDropdownOpen && isDesktop" class="dropdown-menu page-anchor-list">
        <li v-for="(title, index) in sectionTitles" :key="`${title}-${index}`" :class="listClasses">
          <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
        </li>
        <li :class="listClasses">
          <a href="#">Back to Top</a>
        </li>
      </ul>

      <!-- Tablet or Mobile - Page Anchor closes when link is clicked -->
      <ul v-if="isDropdownOpen && !isDesktop" class="dropdown-menu page-anchor-list" @click="toggleDropdown">
        <li v-for="(title, index) in sectionTitles" :key="`${title}-${index}`" :class="listClasses">
          <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
        </li>
        <li :class="listClasses">
          <a href="#">Back to Top</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_page-anchor.scss";
@import "@/styles/ftva/_page-anchor.scss";
</style>
