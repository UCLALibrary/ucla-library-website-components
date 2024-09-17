<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import { useWindowSize } from '@vueuse/core'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

const { to, parentTitle, title } = defineProps({
  to: {
    type: String,
    default: '',
  },
  parentTitle: {
    type: String,
    default: '',
  },
  /* Note:
  For legacy (Library website) breadcrumbs, `title` is the hardcoded value entered at page-level;
  Otherwise, for FTVA (and other future themes/use case?), `title` is coming from or parsed from Craft data
  */
  title: {
    type: String,
    default: '',
  }
})

const route = useRoute()

const isExpanded = ref(false)

const isMobile = ref(false)

const collapseBreadcrumbs = ref(false)

const useRouteTitle = ref(false)

onMounted(() => {
  // Watch for changes in window width only after the component is mounted
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    // console.log("window width changes on client side")
    isMobile.value = newWidth <= 1200
  }, { immediate: true })
})

// console.log('route: ', route.path)
// Split URI path; then remove empty string at start of the array
const parsedBreadcrumbs = computed(() => {
  let path = route.path

  // Remove first '/' of route
  if (path.indexOf('/') === 0)
    path = path.slice(1)

  // Remove last '/' of route
  if (path.lastIndexOf('/') === (path.length - 1))
    path = path.slice(0, path.length - 1)

  // console.log(path)
  // const decodedRoutePath = decodeURI(route.path)
  const decodedRoutePath = decodeURI(path)
  // console.log('decoded: ', decodedRoutePath)

  // const pathWithNoTrailingDates = stripUrlDate(decodedRoutePath)
  const pathWithNoTrailingDates = stripUrlDate(decodedRoutePath)
  // console.log('no trailing dates: ', pathWithNoTrailingDates)

  // remove last forward slash
  // console.log(pathWithNoTrailingDates.length)

  // const pagePathArray = pathWithNoTrailingDates.split('/').slice(1)
  const pagePathArray = pathWithNoTrailingDates.split('/')
  // console.log('path array: ', pagePathArray)
  return pagePathArray
})

const parsedBreadcrumbLinks = computed(() => {
  const breadcrumbsList = parsedBreadcrumbs.value

  const breadcrumbListLength = breadcrumbsList.length

  if (breadcrumbListLength > 4)
    setCollapseBreadcrumbs()

  if (isMobile.value) {
    // For mobile display, get last 2 items
    const mobileBreadcrumb
      = createBreadcrumbLinks(breadcrumbsList).slice(-2)

    // Display parent item only
    return mobileBreadcrumb.splice(0, 1)
  }
  else if (!isMobile.value) {
    if (breadcrumbListLength > 4 && !isExpanded.value) {
      setLinkExpansion()

      // Keep 1st and last 2 items in breadcrumbs array
      // Replace deleted items with `...`
      const truncatedBreadcrumbsList = breadcrumbsList.toSpliced(
        1,
        breadcrumbListLength - 3,
        '...'
      )

      return createBreadcrumbLinks(truncatedBreadcrumbsList)
    }
  }

  return createBreadcrumbLinks(breadcrumbsList)
})

// METHODS
function createBreadcrumbLinks(arr) {
  const breadCrumbObjects = []

  // if props are present, we are using the legacy single breadcrumb
  if (to && parentTitle && title) {
    // Set the parent
    breadCrumbObjects.push({
      to,
      title: parentTitle,
      isLastItem: false,
      isTruncatedGroup: false
    })
    // Set the child, no url
    breadCrumbObjects.push({
      to: '',
      title,
      isLastItem: true,
      isTruncatedGroup: false
    })
    return breadCrumbObjects
  }
  else {
    // otherwise format based on route
    arr.forEach((item, index) => {
      const linkLength = item.length
      const linkIndex = route.path.indexOf(item)
      console.log('linkindex: ', linkIndex)

      // Create a link for the item
      const linkTo = route.path.substring(0, linkLength + linkIndex)
      console.log('linkto: ', linkTo)

      const linkTitle = item.replaceAll('-', ' ')
      console.log('linktitle: ', linkTitle)

      let isLastItem
      index === arr.length - 1 ? (isLastItem = true) : (isLastItem = false)
      // console.log('is last item: ', isLastItem)

      // If title prop is used and there is a route, use the title
      // if (isLastItem && title)
      //   linkTitle = title

      // Identifies the `...` in the breadcrumbs array
      let isTruncatedGroup
      if (collapseBreadcrumbs.value) {
        isExpanded.value === false && index === 1
          ? (isTruncatedGroup = true)
          : (isTruncatedGroup = false)
      // console.log('is truncated group: ', isTruncatedGroup)
      }

      breadCrumbObjects.push({
        to: linkTo,
        title: linkTitle,
        isTruncatedGroup,
        isLastItem,
      })
    })
    return breadCrumbObjects
  }
}

function test() {
  useRouteTitle.value = true
}

function setLinkExpansion() {
  isExpanded.value = false
}

function setCollapseBreadcrumbs() {
  collapseBreadcrumbs.value = true
}

function toggleLinksExpansion() {
  isExpanded.value = !isExpanded.value
}

function stripUrlDate(str) {
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
  <div :class="parsedClasses">
    <span
      v-for="linkObj in parsedBreadcrumbLinks"
      :key="linkObj.title"
      class="breadcrumb-wrapper"
    >
      <SmartLink
        v-if="!linkObj.isLastItem && !linkObj.isTruncatedGroup"
        :to="linkObj.to"
        class="parent-page-url"
        @click="test()"
        v-text="linkObj.title"
      />
      <!-- Collapsed group should not link -->
      <button
        v-else-if="!linkObj.isLastItem && linkObj.isTruncatedGroup"
        class="parent-page-url collapsed-url"
        tabindex="0"
        @click="toggleLinksExpansion()"
        v-text="linkObj.title"
      />
      <SvgIconCaretRight
        v-if="!linkObj.isLastItem"
        aria-hidden="true"
      />
      <!-- Final Breadcrumb -->
      <!-- FTVA uses title field from Craft for the final breadcrumb -->
      <span
        v-if="linkObj.isLastItem && useRouteTitle && title"
        class="current-page-title"
        v-text="linkObj.title"
      />
      <span
        v-else-if="linkObj.isLastItem && title"
        class="current-page-title"
        v-text="title"
      />
      <!-- <span
        v-else-if="linkObj.isLastItem && theme === 'ftva' && title && !collapseBreadcrumbs"
        class="current-page-title"
        v-text="linkObj.title"
      /> -->
      <!-- Otherwise, use parsed route url to set last breadcrumb; if future or default use will be to get the `title` from data and not the slug, this condition can be removed, and the condition above checking for the ftva theme can be refactored -->
      <span
        v-else-if="linkObj.isLastItem"
        class="current-page-title"
        v-text="linkObj.title"
      />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-breadcrumb.scss";
@import "@/styles/ftva/_nav-breadcrumb.scss";
</style>
