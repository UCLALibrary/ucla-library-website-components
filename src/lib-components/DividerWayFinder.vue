<script setup>
// Helpers
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getSectionName from '@/utils/getSectionName'
import { useTheme } from '@/composables/useTheme'

const { color, isHalfWidth } = defineProps({
  color: {
    type: String,
    default: '', // "VISIT", "ABOUT", "HELP", "FTVA"
  },
  isHalfWidth: {
    type: Boolean,
    default: false,
  }
})

const route = useRoute()
// console.log('does this route exist?', route)
const theme = useTheme()

const sectionName = computed(() => color || (route !== undefined && route.path
  ? getSectionName(route.path)
  : 'default'))

const classes = computed(() => [
  'divider-way-finder',
  `color-${sectionName.value}`,
  { 'half-width': isHalfWidth },
  theme?.value || ''
])
</script>

<template>
  <div :class="classes">
    <div class="solid" />
    <div class="dotted" />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/themes.scss";
</style>
