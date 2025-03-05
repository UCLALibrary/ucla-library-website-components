<script lang="ts" setup>
// Helpers
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import getSectionName from '@/utils/getSectionName'
import { useTheme } from '@/composables/useTheme'

const { color } = defineProps({
  color: {
    type: String,
    default: '', // "visit", "about", "help", "ftva"
  },
})

const route = useRoute()

// THEME
const theme = useTheme()
const colorRoute = ref(route?.path || '')

const sectionName = computed(() => color || (colorRoute.value !== ''
  ? getSectionName(colorRoute.value)
  : 'default'))

const classes = computed(() => [
  'divider-way-finder',
  `color-${sectionName.value}`,
  theme?.value || ''
])

// Watch for route changes
watchEffect(() => {
  colorRoute.value = route?.path || ''
})

// Mounted
onMounted(() => {
  // console.log('does this route exist?', route?.path)
  colorRoute.value = route?.path || ''
})
// console.log('section name computed', sectionName.value)
// console.log('color prop', color)
</script>

<template>
  <div :class="classes">
    <div class="solid" />
    <div class="dotted" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_divider-way-finder.scss";
@import "@/styles/ftva/_divider-way-finder.scss";
</style>
