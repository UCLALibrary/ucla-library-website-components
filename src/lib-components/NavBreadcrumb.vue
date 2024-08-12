<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import { useTheme } from '@/composables/useTheme'
import { useGlobalStore } from '@/stores/GlobalStore'

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

const isExpanded = ref(null)

const globalStore = useGlobalStore()

const isMobile = computed(() => {
  return globalStore.winWidth <= 1200
})

// Split URI path; then remove empty string at start of the array
const parsedBreadcrumbs = computed(() => {
  const decodedRoutePath = decodeURI(route.path)
  const pathWithNoTrailingDates = stripUrlDate(decodedRoutePath)
  const pagePathArray = pathWithNoTrailingDates.split('/').slice(1)

  return pagePathArray
})

const parsedBreadcrumbLinks = computed(() => {
  const breadcrumbsList = parsedBreadcrumbs.value

  const arrLength = breadcrumbsList.length

  if (isMobile.value) {
    // return last 2 items
    const mobileBreadcrumb
            = createBreadcrumbLinks(breadcrumbsList).slice(-2)

    return mobileBreadcrumb.splice(0, 1)
  }
  else if (!isMobile.value) {
    if (arrLength > 4 && !isExpanded.value) {
      setLinkExpansion()

      // Keep 1st and last 2 items in breadcrumbs array
      // Replace deleted items with `...`
      const truncatedBreadcrumbsList = breadcrumbsList.toSpliced(
        1,
        arrLength - 3,
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
  // otherwise format based on route
  arr.forEach((item, index) => {
    const linkLength = item.length
    const linkIndex = route.path.indexOf(item)
    // Create a link for the item
    const linkTo = route.path.substring(0, linkLength + linkIndex)
    const linkTitle = item.replaceAll('-', ' ')

    let isLastItem
    index === arr.length - 1 ? (isLastItem = true) : (isLastItem = false)

    // Identifies the `...` in the breadcrumbs array
    let isTruncatedGroup
    isExpanded.value === false && index === 1
      ? (isTruncatedGroup = true)
      : (isTruncatedGroup = false)

    breadCrumbObjects.push({
      to: linkTo,
      title: linkTitle,
      isTruncatedGroup,
      isLastItem,
    })
  })
  return breadCrumbObjects
}

function setLinkExpansion() {
  isExpanded.value = false
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
      <SvgIconCaretRight v-if="!linkObj.isLastItem" aria-hidden="true" />
      <!-- FTVA uses title field from Craft for the final breadcrumb -->
      <span
        v-if="linkObj.isLastItem && theme === 'ftva'"
        class="current-page-title"
        v-text="title"
      />
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
@import "@/styles/themes.scss";
</style>
