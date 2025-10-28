<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

// Props
interface YearRangeFilterProps {
  minValue: number
  maxValue: number
  step: number
  disabled: boolean
  minParam?: string
  maxParam?: string
  clearPagination?: boolean
}
const props = withDefaults(defineProps<YearRangeFilterProps>(), {
  minParam: 'year_gte',
  maxParam: 'year_lte',
  clearPagination: true
})

// Emits
const emit = defineEmits(['update:minValue', 'update:maxValue', 'change'])

// Router
const route = useRoute()
const router = useRouter()

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['year-range-filter', theme?.value || '']
})

// Local state for the input values
const localMinValue = ref(props.minValue)
const localMaxValue = ref(props.maxValue)

// Watch for prop changes
watch(() => props.minValue, (newVal) => {
  localMinValue.value = newVal
})

watch(() => props.maxValue, (newVal) => {
  localMaxValue.value = newVal
})

// Handle input changes
function handleMinInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target)
    return

  const value = Number.parseInt(target.value) || props.minValue
  const clampedValue = Math.max(props.minValue, Math.min(value, localMaxValue.value - props.step))
  localMinValue.value = clampedValue
  emit('update:minValue', clampedValue)
  emit('change', { min: clampedValue, max: localMaxValue.value })
}

function handleMaxInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target)
    return

  const value = Number.parseInt(target.value) || props.maxValue
  const clampedValue = Math.min(props.maxValue, Math.max(value, localMinValue.value + props.step))
  localMaxValue.value = clampedValue
  emit('update:maxValue', clampedValue)
  emit('change', { min: localMinValue.value, max: clampedValue })
}

// Handle slider changes
function handleSliderChange(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target)
    return

  const value = Number.parseInt(target.value)

  if (target.dataset.handle === 'min') {
    // Prevent min slider from going beyond max slider
    const clampedValue = Math.max(props.minValue, Math.min(value, localMaxValue.value - props.step))
    localMinValue.value = clampedValue
    // Update the slider value to match the clamped value
    target.value = clampedValue.toString()
    emit('update:minValue', clampedValue)
  }

  else {
    // Prevent max slider from going below min slider
    const clampedValue = Math.min(props.maxValue, Math.max(value, localMinValue.value + props.step))
    localMaxValue.value = clampedValue
    // Update the slider value to match the clamped value
    target.value = clampedValue.toString()
    emit('update:maxValue', clampedValue)
  }
  emit('change', { min: localMinValue.value, max: localMaxValue.value })
}

// Handle mouse events to determine which slider to interact with
function handleSliderMouseDown(event: Event) {
  const target = event.currentTarget as HTMLElement | null
  if (!target)
    return

  const rect = target.getBoundingClientRect()
  // Ensure event is a MouseEvent to access clientX
  if (!(event instanceof MouseEvent))
    return

  const x = event.clientX - rect.left
  const width = rect.width
  const percentage = x / width

  // Determine which slider is closer to the click position
  const minPosition = (localMinValue.value - props.minValue) / (props.maxValue - props.minValue)
  const maxPosition = (localMaxValue.value - props.minValue) / (props.maxValue - props.minValue)

  const minDistance = Math.abs(percentage - minPosition)
  const maxDistance = Math.abs(percentage - maxPosition)

  if (minDistance < maxDistance) {
    // Focus on min slider
    const minSlider = (event.currentTarget as HTMLElement | null)?.querySelector('.range-slider--min') as HTMLElement | null
    if (minSlider)
      minSlider.focus()
  }
  else {
    // Focus on max slider
    const maxSlider = (event.currentTarget as HTMLElement | null)?.querySelector('.range-slider--max') as HTMLElement | null
    if (maxSlider)
      maxSlider.focus()
  }
}

// Handle limit button click
function handleLimitClick() {
  // Preserve existing query parameters
  const query = { ...route.query }

  // Set year range parameters
  query[props.minParam] = localMinValue.value.toString()
  query[props.maxParam] = localMaxValue.value.toString()

  // Optionally clear pagination
  if (props.clearPagination && 'page' in query)
    delete query.page

  // Navigate with updated query
  router.push({ query })

  // Emit change event for parent components
  emit('change', { min: localMinValue.value, max: localMaxValue.value })
}

// Computed styles for the range track
const trackStyle = computed(() => {
  const minPercent = ((localMinValue.value - props.minValue) / (props.maxValue - props.minValue)) * 100
  const maxPercent = ((localMaxValue.value - props.minValue) / (props.maxValue - props.minValue)) * 100
  return {
    background: `linear-gradient(to right, 
      var(--color-secondary-grey-02) 0%, 
      var(--color-secondary-grey-02) ${minPercent}%, 
      var(--color-primary-blue-03) ${minPercent}%, 
      var(--color-primary-blue-03) ${maxPercent}%, 
      var(--color-secondary-grey-02) ${maxPercent}%, 
      var(--color-secondary-grey-02) 100%)`
  }
})
</script>

<template>
  <div :class="classes">
    <!-- Input fields and button row -->
    <div class="range-inputs">
      <input
        v-model.number="localMinValue"
        type="number"
        :min="minValue"
        :max="maxValue"
        :step="step"
        :disabled="disabled"
        class="range-number-input range-input--min"
        @input="handleMinInput"
      >
      <span class="range-separator" />
      <input
        v-model.number="localMaxValue"
        type="number"
        :min="minValue"
        :max="maxValue"
        :step="step"
        :disabled="disabled"
        class="range-number-input range-input--max"
        @input="handleMaxInput"
      >
      <button
        type="button"
        class="limit-button"
        :disabled="disabled"
        @click="handleLimitClick"
      >
        Limit
      </button>
    </div>

    <!-- Range slider -->
    <div class="range-slider-container">
      <div
        class="range-track"
        :style="trackStyle"
        @mousedown="handleSliderMouseDown"
      >
        <input
          type="range"
          :min="minValue"
          :max="maxValue"
          :step="step"
          :value="localMinValue"
          :disabled="disabled"
          class="range-slider range-slider--min"
          data-handle="min"
          @input="handleSliderChange"
        >
        <input
          type="range"
          :min="minValue"
          :max="maxValue"
          :step="step"
          :value="localMaxValue"
          :disabled="disabled"
          class="range-slider range-slider--max"
          data-handle="max"
          @input="handleSliderChange"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/dlc/_year-range-filter.scss';
</style>
