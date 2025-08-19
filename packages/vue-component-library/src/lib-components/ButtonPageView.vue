<script setup lang="ts">
// Imports
import SvgList from 'ucla-library-design-tokens/assets/svgs/icon-list-view.svg'
import SvgGallery from 'ucla-library-design-tokens/assets/svgs/icon-gallery.svg'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
// CHILD COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// Theme
const theme = useTheme()

// Router
const route = useRoute()
const router = useRouter()

// Storybook mock prop
const props = defineProps({
  storybookMock: { type: Boolean, default: false },
  isListView: { type: Boolean, default: undefined },
  isGalleryView: { type: Boolean, default: undefined },
})
const emit = defineEmits(['view-change'])

// Computed
const classes = computed(() => ['button-page-view', theme?.value || ''])

// Get current view from route query parameter, default to 'list'
const currentView = computed(() => {
  const viewParam = route.query.view as string
  return viewParam === 'gallery' ? 'gallery' : 'list'
})

// Use props if storybookMock, else use router logic
const isListView = computed(() =>
  props.storybookMock && props.isListView !== undefined
    ? props.isListView
    : currentView.value === 'list'
)
const isGalleryView = computed(() =>
  props.storybookMock && props.isGalleryView !== undefined
    ? props.isGalleryView
    : currentView.value === 'gallery'
)

// Function to update the view in the URL or emit event for Storybook
function updateView(view: 'list' | 'gallery') {
  if (props.storybookMock) {
    emit('view-change', view)
  } else {
    router.push({
      query: { ...route.query, view }
    })
  }
}
</script>

<template>
  <div :class="classes">
    <SmartLink class="button-wrapper" :class="{ active: isListView }" type="button" :aria-pressed="isListView"
      aria-label="List view" @click="updateView('list')">
      <SvgList class="icon list" />
    </SmartLink>

    <SmartLink class="button-wrapper" :class="{ active: isGalleryView }" type="button" :aria-pressed="isGalleryView"
      aria-label="Card view" @click="updateView('gallery')">
      <SvgGallery class="icon gallery" />
    </SmartLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-page-view.scss";
</style>
