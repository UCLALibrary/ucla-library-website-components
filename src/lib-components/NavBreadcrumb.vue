<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import { useTheme } from '@/composables/useTheme'
import { useGlobalStore } from '@/stores/GlobalStore'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

const { to } = defineProps({
  to: {
    type: String,
    default: '',
  },
})

const route = useRoute()

const isExpanded = ref(null)

const globalStore = useGlobalStore()

const isMobile = computed(() => {
  return globalStore.winWidth <= 1200
})

// Split URI path; then remove empty string at start of the array
const parsedBreadcrumbs = computed(() => {
  const pagePathArray = route.path.split('/').slice(1)
  console.log(pagePathArray)

  return pagePathArray
})

const parsedBreadcrumbLinks = computed(() => {
  const breadcrumbsList = parsedBreadcrumbs.value

  const arrLength = breadcrumbsList.length

  if (isMobile.value) {
    const mobileBreadcrumb
            = createBreadcrumbLinks(breadcrumbsList).slice(-2)

    return mobileBreadcrumb.splice(0, 1)
  }
  else if (!isMobile.value) {
    if (arrLength > 4 && !isExpanded.value) {
      setLinkExpansion()

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

  arr.forEach((item, index) => {
    const linkLength = item.length
    const linkIndex = route.path.indexOf(item)
    const linkTo = route.path.substring(0, linkLength + linkIndex)
    const linkTitle = item.replaceAll('-', ' ')

    let isLastItem
    index === arr.length - 1 ? (isLastItem = true) : (isLastItem = false)

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
      <span
        v-if="linkObj.isLastItem"
        class="current-page-title"
        v-text="linkObj.title"
      />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
