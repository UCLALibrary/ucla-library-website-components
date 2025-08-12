<script setup lang="ts">
// Imports
import SvgList from 'ucla-library-design-tokens/assets/svgs/icon-list.svg'
import SvgGrid from 'ucla-library-design-tokens/assets/svgs/icon-card.svg'
import { computed, defineEmits, defineProps } from 'vue'
import { useTheme } from '@/composables/useTheme'

// Props
interface PageViewToggleProps {
  pageView?: 'list' | 'grid'
}
const props = withDefaults(defineProps<PageViewToggleProps>(), {
  pageView: 'list',
})

// Emits
const emit = defineEmits(['update:pageView'])
// Theme
const theme = useTheme()

// Computed
const classes = computed(() => ['button-page-view', theme?.value || ''])
const isListView = computed(() => props.pageView === 'list')
const isGridView = computed(() => props.pageView === 'grid')

// Methods
function setView(view: 'list' | 'grid') {
  if (view !== props.pageView)
    emit('update:pageView', view)
}
</script>

<template>
  <div :class="classes">
    <button
      class="button-wrapper"
      :class="{ active: isListView }"
      type="button"
      :aria-pressed="isListView"
      aria-label="List view"
      @click="setView('list')"
    >
      <SvgList class="icon" />
    </button>

    <button
      class="button-wrapper"
      :class="{ active: isGridView }"
      type="button"
      :aria-pressed="isGridView"
      aria-label="Grid view"
      @click="setView('grid')"
    >
      <SvgGrid class="icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-page-view.scss";
</style>
