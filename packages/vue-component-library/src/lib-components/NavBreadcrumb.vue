<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

/* Note:
  Setting the `to`, `parentTitle` and `title` props at page-level defaults to the legacy pattern of a single-level breadcrumb.

  The library website currently uses the legacy pattern.

  For non-legacy behavior/use cases (FTVA, et al), breadcrumbs are parsed from the route; with options to:
  - set the final breadcrumb from route data
  - set the final breadcrumb with the `title` prop
  - override route-based breadcrumb titles with the `overrideTitleGroup` prop
  */

interface OverrideObj {
  titleLevel: number
  updatedTitle: string
}

const { to, parentTitle, title, overrideTitleGroup } = defineProps({
  to: {
    type: String,
    default: '',
  },
  parentTitle: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  overrideTitleGroup: {
    type: Array as PropType<OverrideObj[]>,
    default: () => [],
    // Array of objects:
    // { titleLevel: number, updatedTitle: string }
  }
})

const route = useRoute()

const isExpanded = ref(false)

const isMediumDevice = ref(false)
const isSmallDevice = ref(false)

const collapseBreadcrumbs = ref(false)

const collapsedBreadcrumbsBtn = ref()

const setRouteTitle = ref(false)

onMounted(() => {
  // Watch for changes in window width after component is mounted
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    isMediumDevice.value = newWidth < 1200
    isSmallDevice.value = newWidth < 768
  }, { immediate: true })
})

// Get breadcrumb items from route, and clean up strings
const parsedBreadcrumbs = computed(() => {
  let path = route.path

  // Remove first '/' of route
  if (path.indexOf('/') === 0)
    path = path.slice(1)

  // Remove last '/' of route
  if (path.lastIndexOf('/') === (path.length - 1))
    path = path.slice(0, path.length - 1)

  const decodedRoutePath = decodeURI(path)

  const pathWithNoTrailingDates = stripUrlDate(decodedRoutePath)

  const pagePathArray = pathWithNoTrailingDates.split('/')

  return pagePathArray
})

const parsedBreadcrumbLinks = computed(() => {
  const breadcrumbsList = parsedBreadcrumbs.value

  const breadcrumbListLength = breadcrumbsList.length

  if (breadcrumbListLength > 4 && !isExpanded.value)
    setCollapseBreadcrumbs()

  if (isMediumDevice.value) {
    // For medium devices and smaller, get last 2 items
    const mobileBreadcrumb
      = createBreadcrumbLinks(breadcrumbsList).slice(-2)

    // Display parent item only
    return mobileBreadcrumb.splice(0, 1)
  }

  return createBreadcrumbLinks(breadcrumbsList)
})

interface BreadcrumbObj {
  to?: string
  title: string
  isTruncated: boolean
  isLastItem: boolean
}

// METHODS
function createBreadcrumbLinks(arr: string[]) {
  const breadcrumbObjects: BreadcrumbObj[] = []

  // If `parentTitle`, `title` and `to` props are present, set the legacy, single-level breadcrumb pattern
  if (to && parentTitle && title) {
    // Set the parent
    breadcrumbObjects.push({
      to,
      title: parentTitle,
      isLastItem: false,
      isTruncated: false
    })
    // Set the child, no url
    breadcrumbObjects.push({
      to: '',
      title,
      isLastItem: true,
      isTruncated: false
    })
    return breadcrumbObjects
  }
  // Otherwise format breadcrumbs based on route
  else {
    arr.forEach((item, index) => {
      // Recreate a link for the breadcrumb item
      const linkLength = item.length
      const linkIndex = route.path.indexOf(item)
      const linkTo = route.path.substring(0, linkLength + linkIndex)

      // Replace hyphens and truncate long text if necessary
      const regex = /-/gi
      let linkTitle = item.replace(regex, ' ')
      linkTitle = truncateTitle(linkTitle)

      // Determine if breadcrumb title should be overridden by data in `overrideTitleGroup` prop
      if (overrideTitleGroup.length > 0) {
        // Breadcrumb levels start from 1; add 1 to index to account for this
        const updatedIndex = index + 1

        // If an object in the overrideTitleGroup array prop has a `titleLevel` that matches `updatedIndex`, then replace the breadcrumb item title with the new title from the object
        const overrideObject = overrideTitleGroup.find((obj: OverrideObj) => obj.titleLevel === updatedIndex)
        if (overrideObject)
          linkTitle = truncateTitle(overrideObject.updatedTitle) || linkTitle
      }

      // Identify if breadcrumb item is the last item
      let isLastItem
      index === arr.length - 1 ? (isLastItem = true) : (isLastItem = false)

      // If breadcrumb pattern has more than four levels, identify if breadcrumb item will be truncated
      let isTruncated = false
      if (arr.length > 4) {
        if (collapseBreadcrumbs.value) {
          isExpanded.value === false && index === 1
            ? (isTruncated = true)
            : (isTruncated = false)
        }
      }

      // Complete the breadcrumb item
      breadcrumbObjects.push({
        to: linkTo,
        title: linkTitle,
        isTruncated,
        isLastItem,
      })
    })

    // Handle truncation
    if (collapseBreadcrumbs.value) {
      // Replace all but the 1st and last 2 breadcrumb items with `...`
      const truncatedBreadcrumbs = [
        breadcrumbObjects[0],
        {
          title: '...',
          isTruncated: true,
          isLastItem: false
        },
        ...breadcrumbObjects.slice(-2)
      ]
      return truncatedBreadcrumbs
    }
    else {
      return breadcrumbObjects
    }
  }
}

// Handle title truncation over 40 (mobile), 60 (desktop) characters
function truncateTitle(str: string): string {
  const strCount = str.length
  if (strCount > 40 && isSmallDevice.value)
    return str.substring(0, 30).padEnd(33, '.')
  else if (strCount > 60)
    return str.substring(0, 47).padEnd(50, '.')
  else
    return str
}

// Event handler for parent breadcrumbs; if title prop is passed at page level as the final breadcrumb title, prevent it from overriding a preceding parent title.
function handleSetRouteTitle() {
  setRouteTitle.value = true
}

function setCollapseBreadcrumbs() {
  collapseBreadcrumbs.value = true
}

function toggleLinksExpansion() {
  isExpanded.value = true
  collapseBreadcrumbs.value = false
  collapsedBreadcrumbsBtn.value[0].classList.remove('collapsed-url')
}

function stripUrlDate(str: string) {
  // Find the last occurrence of date pattern 00-00-00 in a string
  const pattern = /([0-9][0-9])-([0-9][0-9])-([0-9][0-9])(?!.\w)/

  if (pattern.test(str)) {
    const updateStr = str.replace(pattern, '')
    return updateStr.trim()
  }

  return str
}

// THEME
const theme = useTheme()

const parsedClasses = computed(() => {
  return ['nav-breadcrumb', 'subtitle', theme?.value || '']
})
</script>

<template>
  <div :class="parsedClasses" aria-label="breadcrumbs">
    <ol>
      <li
        v-for="linkObj in parsedBreadcrumbLinks"
        :key="linkObj.title"
        class="breadcrumb-wrapper"
      >
        <SmartLink
          v-if="!linkObj.isLastItem && !linkObj.isTruncated"
          :to="linkObj.to"
          class="parent-page-url"
          @click="handleSetRouteTitle()"
          v-text="linkObj.title"
        />

        <!-- Collapsed group should not link; set with button rather than SmartLink -->
        <button
          v-else-if="!linkObj.isLastItem && linkObj.isTruncated"
          ref="collapsedBreadcrumbsBtn"
          class="parent-page-url collapsed-url"
          tabindex="0"
          @click="toggleLinksExpansion()"
          v-text="linkObj.title"
        />

        <!-- Final Breadcrumb Logic -->
        <!-- Prevent final breadcrumb set with `title` prop from overriding a parent title -->
        <span
          v-if="linkObj.isLastItem && setRouteTitle"
          class="parent-page-url"
          v-text="linkObj.title"
        />
        <!-- Set final breadcrumb with `title` prop if available -->
        <!-- Truncate the `title` prop value to prevent overcrowding/overflow -->
        <span
          v-else-if="linkObj.isLastItem && title"
          class="current-page-title"
          aria-current="page"
          v-text="truncateTitle(title)"
        />
        <!-- Set final breadcrumb with route if `title` prop is unavailable -->
        <span
          v-else-if="linkObj.isLastItem"
          class="current-page-title"
          aria-current="page"
          v-text="linkObj.title"
        />
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-breadcrumb.scss";
@import "@/styles/ftva/_nav-breadcrumb.scss";
</style>
