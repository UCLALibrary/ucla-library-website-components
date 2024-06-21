<script setup>
// Helpers
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getSectionName from '@/utils/getSectionName'
import { useTheme } from '@/composables/useTheme'

const { color } = defineProps({
  color: {
    type: String,
    default: '', // "VISIT", "ABOUT", "HELP", "FTVA"
  },
})

const route = useRoute()
// console.log('does this route exist?', route)

// THEME
const theme = useTheme()

const sectionName = computed(() => color || (route !== undefined && route.path
  ? getSectionName(route.path)
  : 'default'))

const classes = computed(() => [
  'divider-way-finder',
  `color-${sectionName.value}`,
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
@import "ucla-library-design-tokens/scss/_tokens-ftva";
</style>
