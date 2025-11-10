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

// Local state for the numeric values (authoritative)
const localMinValue = ref(props.minValue)
const localMaxValue = ref(props.maxValue)

// Local state for text inputs (allows free typing without clamping)
const localMinInput = ref(String(props.minValue))
const localMaxInput = ref(String(props.maxValue))

// Helpers
const activeHandle = ref<'min' | 'max' | null>(null)

// When thumbs are very close (<= step), consider them overlapping for UX adjustments
const thumbsClose = computed(() => (localMaxValue.value - localMinValue.value) <= props.step)
function clampMin(candidate: number): number {
  return Math.max(props.minValue, Math.min(candidate, localMaxValue.value - props.step))
}

function clampMax(candidate: number): number {
  return Math.min(props.maxValue, Math.max(candidate, localMinValue.value + props.step))
}

function parseOr<T>(raw: string, fallback: T): number | T {
  const parsed = Number.parseInt(raw, 10)
  return Number.isFinite(parsed) ? parsed : fallback
}

// Watch for prop changes
watch(() => props.minValue, (newVal) => {
  localMinValue.value = newVal
  localMinInput.value = String(newVal)
})

watch(() => props.maxValue, (newVal) => {
  localMaxValue.value = newVal
  localMaxInput.value = String(newVal)
})

// Handle free typing in inputs (no clamping here)
function handleMinTyping(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target)
    return
  localMinInput.value = target.value
}

function handleMaxTyping(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target)
    return
  localMaxInput.value = target.value
}

// Commit input on blur/enter: parse, clamp, sync, and emit
function commitMinInput() {
  // If input is empty or invalid, revert to current numeric value
  const candidate = parseOr(localMinInput.value, localMinValue.value) as number
  const clampedValue = clampMin(candidate)
  localMinValue.value = clampedValue
  localMinInput.value = String(clampedValue)
  emit('update:minValue', clampedValue)
  emit('change', { min: clampedValue, max: localMaxValue.value })
}

function commitMaxInput() {
  const candidate = parseOr(localMaxInput.value, localMaxValue.value) as number
  const clampedValue = clampMax(candidate)
  localMaxValue.value = clampedValue
  localMaxInput.value = String(clampedValue)
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
    activeHandle.value = 'min'
    // Prevent min slider from going beyond max slider
    const clampedValue = clampMin(value)
    localMinValue.value = clampedValue
    localMinInput.value = String(clampedValue)
    // Update the slider value to match the clamped value
    target.value = clampedValue.toString()
    emit('update:minValue', clampedValue)
  }

  else {
    activeHandle.value = 'max'
    // Prevent max slider from going below min slider
    const clampedValue = clampMax(value)
    localMaxValue.value = clampedValue
    localMaxInput.value = String(clampedValue)
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
    activeHandle.value = 'min'
  }
  else {
    // Focus on max slider
    const maxSlider = (event.currentTarget as HTMLElement | null)?.querySelector('.range-slider--max') as HTMLElement | null
    if (maxSlider)
      maxSlider.focus()
    activeHandle.value = 'max'
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
        v-model="localMinInput"
        type="number"
        :min="minValue"
        :max="maxValue"
        :step="step"
        :disabled="disabled"
        class="range-number-input range-input--min"
        @input="handleMinTyping"
        @blur="commitMinInput"
        @keydown.enter.prevent="commitMinInput"
      >
      <span class="range-separator" />
      <input
        v-model="localMaxInput"
        type="number"
        :min="minValue"
        :max="maxValue"
        :step="step"
        :disabled="disabled"
        class="range-number-input range-input--max"
        @input="handleMaxTyping"
        @blur="commitMaxInput"
        @keydown.enter.prevent="commitMaxInput"
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
        :class="[
          activeHandle ? (`active-${activeHandle}`) : '',
          thumbsClose && activeHandle ? (`overlap-${activeHandle}`) : '',
        ]"
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
          @mousedown.stop="activeHandle = 'min'"
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
          @mousedown.stop="activeHandle = 'max'"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/dlc/_year-range-filter.scss';
</style>
