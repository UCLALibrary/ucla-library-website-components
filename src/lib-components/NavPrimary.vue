<script lang="ts" setup>
import SvgLogoUclaLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-ftva-search.svg'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
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

const route = useRoute()
const isOpened = ref(false) // tracks if menu is open
const slotIsOpened = ref(false) // tracks if (newer) slot menu is open
const activeMenuIndex = ref(-1)

const theme = useTheme()
const classes = computed(() => [
  'nav-primary',
  { 'is-opened': isOpened.value || slotIsOpened.value },
  { 'not-hovered': activeMenuIndex.value === -1 },
  { 'has-title': title },
  { 'has-acronym': acronym },
  theme?.value || ''
])
const themeSettings = computed(() => { 
  switch (theme?.value) {
    case 'ftva':
      return {
        renderItemTop: false,
        showSearch: true
      }
    default:
      return {
        renderItemTop: true,
        showSearch: false
      }
  }
})
const shouldRenderSmartLink = computed(() => title || acronym)
const noChildren = computed(() => {
  if (!title)
    return []
  return items.filter(item => !item.children || !item.children.length)
})

const supportLinks = computed(() => {
  return items.filter(item => !item.children || !item.children.length)
})

const currentPathActiveIndex = computed(() => {
  const currentPathNew = currentPath || route?.path
  return items.findIndex(item => item.url && currentPathNew.includes(item.url))
})

const parsedItems = computed(() =>
  items
    .filter(item => item.children && item.children.length)
    .map((item, index) => ({
      ...item,
      isActive: index === activeMenuIndex.value,
    }))
)

onMounted(() => {
  activeMenuIndex.value = currentPathActiveIndex.value
})

function toggleSlot() {
  // if menu is open, close it first
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
function toggleMenu() {
  // if slot menu is open, close it first
  if (slotIsOpened.value) {
    slotIsOpened.value = false
  }
  isOpened.value = !isOpened.value
  if (!isOpened.value) {
    document.body.setAttribute('tabindex', '-1')
    document.body.focus()
    document.body.removeAttribute('tabindex')
  }
}

function setActive(index: number) {
  activeMenuIndex.value = index
}

function clearActive() {
  activeMenuIndex.value = currentPathActiveIndex.value
}
</script>

<template>
  <nav
    aria-label="Primary Navigation"
    :class="classes">
    <div v-if="themeSettings.renderItemTop" class="item-top">
      <SmartLink
        v-if="shouldRenderSmartLink"
        to="/"
        :aria-label="title ? '' : `UCLA Library home page`">
        <div
          v-if="title"
          class="title">
          <span class="full-title"> {{ title }} </span>
          <span
            v-if="acronym"
            class="acronym"> {{ acronym }} </span>
        </div>
        <SvgLogoUclaLibrary
          v-else
          class="svg logo-ucla"
          alt="UCLA Library logo blue" />
      </SmartLink>
      <a
        v-else
        href="/"
        :aria-label="title ? '' : `UCLA Library home page`">
        <div
          v-if="title"
          class="title">
          <span class="full-title"> {{ title }} </span>
          <span
            v-if="acronym"
            class="acronym"> {{ acronym }} </span>
        </div>
        <SvgLogoUclaLibrary
          v-else
          class="svg logo-ucla"
          alt="UCLA Library logo blue" />
      </a>
    </div>

    <!-- search button is placed before menu so that it can be easily kept at to when menu expands -->
    <!-- more menu was added in later version of this component and is not rendered at all in default -->
    <div v-if="themeSettings.showSearch" class="more-menu">
      <ButtonLink
        class="search-button"
        icon-name="none"
        @click="toggleSlot"
        aria-label="Search">
        <IconSearch class="icon-search" />
      </ButtonLink>
      <!-- navSearch is loaded into this a slot by HeaderSticky so we don't have to prop drill  v-if="slotIsOpened" -->
      <div :class="['slot-container', { 'is-opened': slotIsOpened }]">
        <slot />
      </div>
    </div>

    <ul class="menu">
      <NavMenuItem
        v-for="(item, index) in parsedItems"
        :key="`NavMenuItem-${item.name}`"
        :item="item"
        :is-active="item.isActive"
        :is-opened="isOpened"
        @click="toggleMenu"
        @mouseover="setActive(index)"
        @mouseleave="clearActive" />
      <li
        v-for="item in noChildren"
        :key="`nav-primary-${item.name}`"
        class="nochildren-links">
        <SmartLink
          class="nochildren-link underline-hover"
          :to="item.to"
          :link-target="item.target">
          {{ item.name }}
        </SmartLink>
      </li>
    </ul>

    <div
      v-if="!title"
      class="support-links">
      <div
        v-for="item in supportLinks"
        :key="`nav-primary-support-${item.name}`"
        class="item-top">
        <SmartLink
          class="support-link underline-hover"
          :to="item.to">
          {{ item.name }}
        </SmartLink>
      </div>
    </div>
    <div class="background-white" />
    <!--  || slotIsOpened -->
    <div
      v-if="isOpened || slotIsOpened"
      class="background-blue"
      @click="toggleMenu" />
    <div
      v-if="isOpened"
      class="click-blocker"
      @click="toggleMenu" />
  </nav>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-primary.scss";
@import "@/styles/ftva/_nav-primary.scss";
</style>
