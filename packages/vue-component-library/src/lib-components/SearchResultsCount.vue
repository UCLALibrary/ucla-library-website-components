<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { type SearchResultsCountProps, SearchResultsCountVariants } from '@/types/components/SearchResultsCountTypes'

const props = withDefaults(defineProps<SearchResultsCountProps>(), {
  animate: false,
  count: 0,
  label: '',
  prefix: '',
  variant: SearchResultsCountVariants.VERTICAL,
  suffixLabel: '',
})

const theme = useTheme()

const parsedResults = computed(() => {
  if (props.prefix && props.label)
    return `${props.prefix} ${props.label}`
  else if (props.prefix)
    return props.prefix
  else if (props.label)
    return props.label

  return ''
})

const classes = computed(() => {
  return ['search-results-count', theme?.value || '', props.variant || '']
})

const animatedCount = ref(0)

// Easing function (easeOutQuad)
function easeOutQuad(t: number) {
  return t * (2 - t)
}

function animateCount(to: number) {
  // Dynamic duration: longer for bigger numbers
  const duration = to > 1000 ? 1000 : 600
  const start = animatedCount.value
  const startTime = performance.now()

  function update(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuad(progress)
    animatedCount.value = Math.round(start + (to - start) * eased)
    if (progress < 1)
      requestAnimationFrame(update)
    else
      animatedCount.value = to
  }
  requestAnimationFrame(update)
}

function updateCount(newCount: number) {
  if (props.animate)
    animateCount(newCount)
  else
    animatedCount.value = newCount
}

let timeoutId: ReturnType<typeof setTimeout> | null = null
let isMounted = false

onMounted(() => {
  isMounted = true
  if (props.animate) {
    // Delay animation on initial mount
    timeoutId = setTimeout(() => {
      animateCount(props.count)
    }, 500)
  }
  else {
    animatedCount.value = props.count
  }
})

// Watch for changes to count prop and update accordingly
watch(() => props.count, (newCount) => {
  if (isMounted) {
    // On prop changes after mount, animate immediately if animate is enabled
    if (props.animate)
      animateCount(newCount)
    else
      animatedCount.value = newCount
  }
})

onUnmounted(() => {
  if (timeoutId)
    clearTimeout(timeoutId)
})
</script>

<template>
  <div :class="classes">
    <span
      v-if="props.variant === SearchResultsCountVariants.VERTICAL"
      class="parsed-results"
    >
      {{ parsedResults }}
    </span>
    <div
      class="count"
      aria-live="polite"
    >
      <span>{{ animatedCount }}</span>
    </div>
    <span
      v-if="props.variant === SearchResultsCountVariants.HORIZONTAL"
      class="parsed-results"
    >{{ suffixLabel }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/dlc/_search-results-count.scss";
</style>
