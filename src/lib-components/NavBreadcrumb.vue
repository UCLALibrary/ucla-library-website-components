<script setup>
import { computed, ref } from 'vue'
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import { useTheme } from '@/composables/useTheme'
import { useGlobalStore } from '@/stores/GlobalStore'

// SVGs

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

const { parentTitle, title, to, uri } = defineProps({
  parentTitle: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  uri: {
    type: String,
    default: '',
  },
})

const isExpanded = ref(null)

const globalStore = useGlobalStore()

const isMobile = computed(() => {
  return globalStore.winWidth <= 1024
})

const parsedBreadcrumbs = computed(() => {
  const pagePathArray = uri.split('/').slice(1)
  // Split apart URI path into distinct sections
  // Remove empty string at start of the array

  return pagePathArray
})
// console.log("original breadcrumbs: ", parsedBreadcrumbs.value)

const parsedBreadcrumbLinks = computed(() => {
  const breadcrumbsList = parsedBreadcrumbs.value

  const arrLength = breadcrumbsList.length

  if (arrLength > 4 && isExpanded.value !== false) {
    handleLinksExpansion()

    // Keep first and last two items in the list
    const truncatedBreadcrumbsList = breadcrumbsList.toSpliced(
      1,
      arrLength - 3,
      '...'
    )
    return createBreadcrumbLinks(truncatedBreadcrumbsList)
  }
  return createBreadcrumbLinks(breadcrumbsList)
})
// console.log("parsed breadcrumbs: ", parsedBreadcrumbLinks.value)

// METHODS
function createBreadcrumbLinks(arr) {
  const breadCrumbObjects = []

  arr.forEach((item, index) => {
    const linkLength = item.length
    const linkIndex = uri.indexOf(item)
    const linkTo = uri.substring(0, linkLength + linkIndex)
    const linkTitle = item.replaceAll('-', ' ')

    let isLastItem
    index === arr.length - 1 ? (isLastItem = true) : (isLastItem = false)

    let isTruncatedGroup
    isExpanded.value && index === 1
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

function handleLinksExpansion() {
  isExpanded.value = !isExpanded.value
}

// THEME
const theme = useTheme()

const parsedClasses = computed(() => {
  return [
    'nav-breadcrumb',
    'subtitle',
    // mobileClass,
    theme?.value || '',
  ]
})
</script>

<template>
  <!-- Multi-Level Nesting -->
  <div v-if="uri" :class="parsedClasses">
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
      <!-- Collapsed group does not link; only expands -->
      <span
        v-else-if="!linkObj.isLastItem && linkObj.isTruncatedGroup"
        class="parent-page-url collapsed-url"
        tabindex="0"
        @click="handleLinksExpansion"
        v-text="linkObj.title"
      />
      <SvgIconCaretRight v-if="!linkObj.isLastItem" aria-hidden="true" />
      <span
        v-if="linkObj.isLastItem"
        class="current-page-title"
        v-text="linkObj.title"
      />
    </span>
  </div>

  <!-- Single Level Nesting -->
  <div v-else :class="parsedClasses">
    <SmartLink :to="to" class="parent-page-url" v-text="parentTitle" />
    <SvgIconCaretLeft aria-hidden="true" />
    <span class="current-page-title" v-text="title" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
