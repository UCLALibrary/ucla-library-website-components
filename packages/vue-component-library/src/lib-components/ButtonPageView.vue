<script setup lang="ts">
// Imports
import SvgList from 'ucla-library-design-tokens/assets/svgs/icon-list-view.svg'
import SvgGallery from 'ucla-library-design-tokens/assets/svgs/icon-gallery.svg'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useTheme } from '@/composables/useTheme'

// CHILD COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// Theme
const theme = useTheme()

const route = useRoute()

// Computed
const classes = computed(() => ['button-page-view', theme?.value || ''])

// Get current view from route query parameter, default to 'list'
const currentView = computed(() => {
  const viewParam = route.query.view as string
  return viewParam === 'gallery' ? 'gallery' : 'list'
})

const isListView = computed(() => currentView.value === 'list')
const isGalleryView = computed(() => currentView.value === 'gallery')

// Functions
function makeTo(view: 'list' | 'gallery') {
  // Sanitize query: flatten arrays, stringify values
  const sanitizedQuery: Record<string, string> = {}
  Object.entries(route.query).forEach(([key, value]) => {
    sanitizedQuery[key] = Array.isArray(value)
      ? value.join(',')
      : String(value)
  })
  sanitizedQuery.view = view
  // Build query string
  const queryString = Object.keys(sanitizedQuery)
    .map(
      key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                    sanitizedQuery[key]
                )}`
    )
    .join('&')
  return `${route.path}?${queryString}`
}
</script>

<template>
  <div :class="classes">
    <SmartLink
      class="button-wrapper"
      :class="{ active: isListView }"
      type="button"
      :aria-pressed="isListView"
      aria-label="List view"
      :to="makeTo('list')"
    >
      <SvgList class="icon list" />
    </SmartLink>

    <SmartLink
      class="button-wrapper"
      :class="{ active: isGalleryView }"
      type="button"
      :aria-pressed="isGalleryView"
      aria-label="Card view"
      :to="makeTo('gallery')"
    >
      <SvgGallery class="icon gallery" />
    </SmartLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-page-view.scss";
</style>
