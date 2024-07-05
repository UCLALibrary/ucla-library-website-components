<script setup>
import { computed, ref } from 'vue'
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import { useTheme } from '@/composables/useTheme'

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

const isCollapsed = ref(null)

// ToDo: Mobile
// const globalStore = useGlobalStore()

// const isMobile = computed(() => {
//   return globalStore.winWidth <= 1024
// })

const parsedBreadcrumbs = computed(() => {
  const pagePathArray = uri.split('/').slice(1)
  // Split apart URI path into distinct sections
  // Remove empty string at start of the array

  return pagePathArray
})
// console.log(parsedBreadcrumbs.value)

// ToDo: Handle Mobile behavior
// ToDo: Resolve side effects

const parsedBreadcrumbLinks = computed(() => {
  const fullBreadcrumbList = parsedBreadcrumbs.value

  const arrLength = fullBreadcrumbList.length

  if (isCollapsed.value !== false && arrLength > 4) {
    // isCollapsed.value = true
    handleCollapse()

    // Keep first and last two items in the list
    const truncatedBreadcrumbList = fullBreadcrumbList.toSpliced(
      1,
      arrLength - 3,
      '...'
    )
    return createBreadcrumbLinks(truncatedBreadcrumbList)
  }
  // if (!isCollapsed.value) {
  // isCollapsed.value = false
  return createBreadcrumbLinks(fullBreadcrumbList)
  // }
})
// console.log(parsedBreadcrumbLinks.value)

// METHODS

// ToDo: Handle where to link truncated group
function createBreadcrumbLinks(arr) {
  const breadCrumbObjects = []

  arr.forEach((item, index) => {
    const linkLength = item.length
    const linkIndex = uri.indexOf(item)
    const linkTo = uri.substring(0, linkLength + linkIndex)
    const linkTitle = item.replaceAll('-', ' ')

    let isLastItem
    index === arr.length - 1 ? (isLastItem = true) : (isLastItem = false)

    let isTruncated
    isCollapsed.value && index === 1
      ? (isTruncated = true)
      : (isTruncated = false)

    breadCrumbObjects.push({
      to: linkTo,
      title: linkTitle,
      isTruncated,
      isLastItem,
    })
  })
  return breadCrumbObjects
}

function handleCollapse() {
  // isCollapsed.value = false
  isCollapsed.value = !isCollapsed.value
  // console.log(isCollapsed.value)
}

// THEME
const theme = useTheme()

// ToDo: Handle Mobile behavior/styling
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
        v-if="!linkObj.isLastItem && !linkObj.isTruncated"
        :to="linkObj.to"
        class="parent-page-url"
        v-text="linkObj.title"
      />
      <span
        v-else-if="!linkObj.isLastItem && linkObj.isTruncated"
        class="parent-page-url collapsed-url"
        tabindex="0"
        @click="handleCollapse()"
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
