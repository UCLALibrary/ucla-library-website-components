<script setup>
import { computed } from 'vue'

// SVGs
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'
import { useTheme } from '@/composables/useTheme'

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

const parsedBreadcrumbs = computed(() => {
  const pagePathArray = uri.split('/').slice(1)
  // split apart URI path into distinct sections
  // remove empty string at start of the array

  return pagePathArray
})
// console.log(parsedBreadcrumbs.value)

const parsedBreadcrumbLastTitle = computed(() => {
  // Last item in parsedBreadcrumbs array is page title text and unlinked
  return [...parsedBreadcrumbs.value].pop()
})
// console.log(parsedBreadcrumbLastTitle.value)

const parsedBreadcrumbLinks = computed(() => {
  // All other items in parsedBreadcrumbs array except last to be rendered as a link
  const linkedBreadcrumbs = parsedBreadcrumbs.value.slice(0, -1)

  const breadCrumbObjects = []

  for (const link of linkedBreadcrumbs) {
    const linkTitle = link.replaceAll('-', ' ')
    breadCrumbObjects.push({ to: link, title: linkTitle })
  }

  return breadCrumbObjects
})
// console.log(parsedBreadcrumbLinks.value)

// THEME
const theme = useTheme()

const parsedClasses = computed(() => {
  return ['nav-breadcrumb', 'subtitle', theme?.value || '']
})
</script>

<template>
  <div v-if="uri" class="nav-breadcrumb subtitle">
    <span
      v-for="linkObj in parsedBreadcrumbLinks"
      :key="linkObj.title"
      class="test"
    >
      <SmartLink
        :to="linkObj.to"
        class="parent-page-url"
        v-text="linkObj.title"
      />
      <SvgIconCaretRight aria-hidden="true" />
    </span>
    <span class="current-page-title" v-text="parsedBreadcrumbLastTitle" />
  </div>

  <div v-else class="nav-breadcrumb subtitle">
    <SmartLink :to="to" class="parent-page-url" v-text="parentTitle" />
    <SvgIconCaretLeft aria-hidden="true" />
    <span class="current-page-title" v-text="title" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";

.test {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
</style>
