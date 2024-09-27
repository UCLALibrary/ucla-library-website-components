<script lang="ts" setup>
import SvgLogoUclaLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-ftva-search.svg'
import IconMenu from 'ucla-library-design-tokens/assets/svgs/icon-menu.svg'
import IconMenuClose from 'ucla-library-design-tokens/assets/svgs/icon-ftva-circle-x.svg'
import SvgIconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'

import { useWindowSize } from '@vueuse/core' // Import useWindowSize from vueuse
import SmartLink from '@/lib-components/SmartLink.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import NavMenuItem from '@/lib-components/NavMenuItem.vue'
import { useTheme } from '@/composables/useTheme'

import type { NavPrimaryItemType } from '@/types/types'

const { items, currentPath, title, acronym } = defineProps({
  items: {
    type: Array as PropType<NavPrimaryItemType[]>,
    default: () => [],
  },
  currentPath: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  acronym: {
    type: String,
    default: '',
  },
})

const primaryItems = ref(items || [])

watch(
  items,
  (newVal, oldVal) => {
    console.log('NavPrimary data updated from nuxt layout or app.vue when working with craft draft previews', newVal, oldVal)
    primaryItems.value = newVal
  },
  { deep: true, immediate: true }
)

const route = useRoute()
// Refs to track menu states
const isOpened = ref(false) // tracks if main menu is open
const slotIsOpened = ref(false) // tracks if (newer) slot menu is open (used for search)
const mobileMenuIsOpened = ref(false) // tracks if mobile hamburger menu is open
const activeMenuIndex = ref(-1) // tracks which submenu is active

const theme = useTheme()
const classes = computed(() => [
  'nav-primary',
  { 'is-opened': isOpened.value || slotIsOpened.value },
  { 'slot-is-opened': slotIsOpened.value }, // sometimes we need to style different depending on which menu is open
  { 'not-hovered': activeMenuIndex.value === -1 },
  { 'has-title': title },
  { 'has-acronym': acronym },
  { 'is-opened-mobile': mobileMenuIsOpened.value },
  theme?.value || ''
])
const themeSettings = computed(() => {
  switch (theme?.value) {
    case 'ftva':
      return {
        renderItemTop: false,
        showSearch: true,
        horizontalMobileMenu: true,
        headerText: 'UCLA Film & Television Archive',
      }
    default:
      return {
        renderItemTop: true,
        showSearch: false,
        horizontalMobileMenu: false
      }
  }
})
const shouldRenderSmartLink = computed(() => title || acronym)
const noChildren = computed(() => {
  if (!title)
    return []
  return primaryItems.value.filter(item => !item.children || !item.children.length)
})

const supportLinks = computed(() => {
  return primaryItems.value.filter(item => !item.children || !item.children.length)
})

const currentPathActiveIndex = computed(() => {
  const currentPathNew = currentPath || route?.path
  return primaryItems.value.findIndex(item => item.url && currentPathNew.includes(item.url))
})

const parsedItems = computed(() =>
  primaryItems.value
    .filter(item => item.children && item.children.length)
    .map((item, index) => ({
      ...item,
      isActive: index === activeMenuIndex.value,
    }))
)

// METHODS
function toggleMenu() {
  // if slot menu is open, close it first
  if (slotIsOpened.value)
    slotIsOpened.value = false

  isOpened.value = !isOpened.value
  if (!isOpened.value) {
    document.body.setAttribute('tabindex', '-1')
    document.body.focus()
    document.body.removeAttribute('tabindex')
  }
}
// Toggle slot menu (used to render search bar)
function toggleSlot() {
  // if menu is open, close it first & clear active
  clearActive()
  if (isOpened.value) {
    isOpened.value = false
    // then open slot menu on delay to prevent animation overlap
    setTimeout(() => {
      slotIsOpened.value = !slotIsOpened.value
    }, 400)
  }
  // otherwise, just open slot menu
  else { slotIsOpened.value = !slotIsOpened.value }
}
function setActive(index: number) {
  activeMenuIndex.value = index
}
function clearActive() {
  activeMenuIndex.value = currentPathActiveIndex.value
}

// Replace globalStore logic for window width with useWindowSize
const { width } = useWindowSize()

// Use computed to check if it's mobile based on window width
const isMobile = computed(() => width.value <= 750) // Use 750px for mobile breakpoint

// toggle Mobile-only menu
function toggleMobileMenu() {
  // close others
  slotIsOpened.value = false
  isOpened.value = false

  // toggle mobile menu
  mobileMenuIsOpened.value = !mobileMenuIsOpened.value
}
// toggle submenus on mobile
function toggleMenuOrSubmenus(index: number) {
  if (themeSettings.value?.horizontalMobileMenu && (isMobile.value === true)) {
    // toggle clicked submenu only
    if (index === activeMenuIndex.value) {
      clearActive()
    }
    else {
      clearActive()
      setActive(index)
    }
  }
  else {
    toggleMenu()
  }
}
watch(isMobile, (oldVal, newVal) => {
  // close menus on resize
  if (newVal !== oldVal) {
    isOpened.value = false
    slotIsOpened.value = false
    mobileMenuIsOpened.value = false
  }
})
function searchClick() {
  isMobile.value === true ? toggleMobileMenu() : toggleSlot()
}

// Mounted
onMounted(() => {
  activeMenuIndex.value = currentPathActiveIndex.value
})
</script>

<template>
  <nav
    aria-label="Primary Navigation"
    :class="classes"
  >
    <!-- item top contains logos, etc -->
    <div
      v-if="themeSettings.renderItemTop"
      class="item-top"
    >
      <SmartLink
        v-if="shouldRenderSmartLink"
        to="/"
        :aria-label="title ? '' : `UCLA Library home page`"
      >
        <div
          v-if="title"
          class="title"
        >
          <span class="full-title"> {{ title }} </span>
          <span
            v-if="acronym"
            class="acronym"
          > {{ acronym }} </span>
        </div>
        <SvgLogoUclaLibrary
          v-else
          class="svg logo-ucla"
          alt="UCLA Library logo blue"
        />
      </SmartLink>
      <a
        v-else
        href="/"
        :aria-label="title ? '' : `UCLA Library home page`"
      >
        <div
          v-if="title"
          class="title"
        >
          <span class="full-title"> {{ title }} </span>
          <span
            v-if="acronym"
            class="acronym"
          > {{ acronym }} </span>
        </div>
        <SvgLogoUclaLibrary
          v-else
          class="svg logo-ucla"
          alt="UCLA Library logo blue"
        />
      </a>
    </div>
    <div
      v-else-if="isMobile && themeSettings.headerText"
      class="item-top-mobile"
    >
      {{ themeSettings.headerText }}
    </div>

    <div class="nav-background-fill" />

    <!-- search button is placed before menu so that it can be easily kept at top when menu expands -->
    <!-- more menu was added in later version of this component and is not rendered at all in default -->
    <div
      v-if="themeSettings.showSearch"
      class="more-menu"
    >
      <ButtonLink
        v-if="!mobileMenuIsOpened"
        class="search-button"
        icon-name="none"
        aria-label="Search"
        @click="searchClick"
      >
        <IconSearch class="icon-search" />
      </ButtonLink>
      <ButtonLink
        v-if="!mobileMenuIsOpened || !isMobile"
        class="more-menu-button mobile-only"
        icon-name="none"
        aria-label="open menu"
        @click="toggleMobileMenu"
      >
        <IconMenu class="icon-menu" />
      </ButtonLink>
      <ButtonLink
        v-if="mobileMenuIsOpened"
        class="close-button mobile-only"
        icon-name="none"
        aria-label="close menu"
        @click="toggleMobileMenu"
      >
        <IconMenuClose class="icon-menu-close" />
      </ButtonLink>
      <!-- navSearch is loaded into this a slot by HeaderSticky so we don't have to prop drill  -->
      <div
        class="slot-container"
        :class="[{ 'is-opened': slotIsOpened, 'is-opened-mobile': mobileMenuIsOpened }]"
      >
        <slot name="additional-menu" />
      </div>
    </div>

    <!-- this is the primary menu and first in the tab index -->
    <ul
      class="menu"
      :class="[{ 'is-opened-mobile': mobileMenuIsOpened }]"
    >
      <NavMenuItem
        v-for="(item, index) in parsedItems"
        :key="`NavMenuItem-${item.name}`"
        :item="item"
        :is-active="item.isActive"
        :is-opened="isOpened"
        @click="() => toggleMenuOrSubmenus(index)"
        @mouseover="isMobile ? '' : setActive(index)"
        @mouseleave="isMobile ? '' : clearActive"
      >
        <!-- insert caret icon into NavMenuItem slot if theme calls for it -->
        <span
          v-if="themeSettings.horizontalMobileMenu && isMobile"
          class="caret"
          :class="{ 'is-active': item.isActive }"
        >
          <span class="chevron">
            <SvgIconCaretDown class="caret-down-svg" />
          </span>
        </span>
      </NavMenuItem>
      <li
        v-for="item in noChildren"
        :key="`nav-primary-${item.name}`"
        class="nochildren-links"
      >
        <SmartLink
          class="nochildren-link underline-hover"
          :to="item.to"
          :link-target="item.target"
        >
          {{ item.name }}
        </SmartLink>
      </li>
    </ul>

    <div
      v-if="!title"
      class="support-links"
    >
      <div
        v-for="item in supportLinks"
        :key="`nav-primary-support-${item.name}`"
        class="item-top"
      >
        <SmartLink
          class="support-link underline-hover"
          :to="item.to"
        >
          {{ item.name }}
        </SmartLink>
      </div>
    </div>
    <!-- slot for additional buttons that stick to the bottom of the mobile menu (like donate on ftva mobile) -->
    <div
      v-if="isMobile && mobileMenuIsOpened"
      class="mobile-menu-slot"
    >
      <slot name="additional-mobile-menu-items" />
    </div>
    <div class="background-white" />
    <div
      v-if="isOpened || slotIsOpened"
      class="background-blue"
      @click="toggleMenu"
    />
    <div
      v-if="isOpened"
      class="click-blocker"
      @click="toggleMenu"
    />
  </nav>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-primary.scss";
@import "@/styles/ftva/_nav-primary.scss";
</style>
