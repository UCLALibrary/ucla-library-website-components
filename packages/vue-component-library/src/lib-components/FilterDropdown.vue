<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import SvgFilterIcon from 'ucla-library-design-tokens/assets/svgs/icon-down-carat.svg'
import EffectSlideToggle from './EffectSlideToggle.vue'
import { useTheme } from '@/composables/useTheme'

interface FilterProps {
  title: string
  filters: Array<{
    name: string
    slotName: string
    options?: Array<{
      label: string
      value: string
      count: number
    }>
    showAll?: boolean
  }>
}

const props = defineProps<FilterProps>()

// Emit events for selection changes
const emit = defineEmits<{
  'selection-change': [selectedOptions: Record<string, string[]>]
  'option-selected': [filterName: string, option: { label: string; value: string; count: number }]
  'option-deselected': [filterName: string, option: { label: string; value: string; count: number }]
}>()
// THEME
const theme = useTheme()
const classes = computed(() => ['filter-dropdown', theme?.value || ''])

// Track selected options for each filter
const selectedOptions = ref<Record<string, string[]>>({})
const toggleRefs = ref<InstanceType<typeof EffectSlideToggle>[]>([])
const filteredStates = ref<Record<string, boolean>>({})

// Helper functions
const getFilterKey = (filter: any) => filter.slotName || filter.name
const getFilterIndex = (filterKey: string) => props.filters.findIndex(f => getFilterKey(f) === filterKey)

// Animate height change as the filter options change
async function animateHeightChange(filterIndex: number) {
  if (filterIndex < 0 || !toggleRefs.value[filterIndex])
    return

  const currentHeight = toggleRefs.value[filterIndex].$el.offsetHeight
  await nextTick()

  const contentElement = toggleRefs.value[filterIndex].$el?.querySelector('.filter-content')
  if (contentElement) {
    const targetHeight = contentElement.offsetHeight + toggleRefs.value[filterIndex].$el.querySelector('.summary').offsetHeight
    toggleRefs.value[filterIndex].animateToHeight(targetHeight, currentHeight)
  }
}

// Initialize selected options for each filter
function initializeSelectedOptions() {
  props.filters.forEach((filter) => {
    const filterKey = getFilterKey(filter)
    selectedOptions.value[filterKey] = selectedOptions.value[filterKey] || []
    filteredStates.value[filterKey] = false
  })
}

initializeSelectedOptions()

// Watch for changes in selected filter options and emit
watch(selectedOptions, (newOptions) => {
  emit('selection-change', { ...newOptions })
}, { deep: true })

// Option selection helpers
function isOptionSelected(filterName: string, optionValue: string) {
  return selectedOptions.value[filterName]?.includes(optionValue) ?? false
}

function hasSelectedOptions(filterName: string) {
  return (selectedOptions.value[filterName]?.length ?? 0) > 0
}

// Handle summary click - toggle filtering when there are filter selections
async function onSummaryClick(filterName: string) {
  if (!hasSelectedOptions(filterName))
    return

  const filterIndex = getFilterIndex(filterName)
  if (filterIndex < 0)
    return

  filteredStates.value[filterName] = !filteredStates.value[filterName]
  await animateHeightChange(filterIndex)
}

// Get options to display for a filter (only selected when in filtered mode)
function getFilterOptions(filter: any) {
  if (!filter.options)
    return []

  const filterKey = getFilterKey(filter)
  const isFiltered = filteredStates.value[filterKey]

  return isFiltered
    ? filter.options.filter((option: any) => selectedOptions.value[filterKey]?.includes(option.value))
    : filter.options
}

// Toggle option selection
async function toggleOption(filterName: string, option: { label: string; value: string; count: number }) {
  const currentSelection = selectedOptions.value[filterName] || []
  const optionIndex = currentSelection.indexOf(option.value)

  if (optionIndex > -1) {
    // Remove option
    currentSelection.splice(optionIndex, 1)
    emit('option-deselected', filterName, option)

    if (currentSelection.length === 0) {
      const filterIndex = getFilterIndex(filterName)

      if (filterIndex >= 0 && toggleRefs.value[filterIndex]) {
        if (filteredStates.value[filterName]) {
          // Toggle is in filtered mode, close it and reset state
          await nextTick()
          toggleRefs.value[filterIndex].close()
          filteredStates.value[filterName] = false
        }
        else {
          // Toggle is not in filtered mode, just reset the filtered state but don't close
          filteredStates.value[filterName] = false
        }
      }
    }
    else {
      // Animate height if needed
      const filterIndex = getFilterIndex(filterName)
      if (filterIndex >= 0 && toggleRefs.value[filterIndex]?.isOpened && filteredStates.value[filterName])
        await animateHeightChange(filterIndex)
    }
  }
  else {
    // Add option
    currentSelection.push(option.value)
    emit('option-selected', filterName, option)
  }
}
</script>

<template>
  <div :class="classes">
    <div class="filter-list">
      <EffectSlideToggle
        v-for="filter in props.filters"
        :key="filter.name"
        ref="toggleRefs"
        class="filter-item"
        :prevent-close="hasSelectedOptions(getFilterKey(filter))"
      >
        <!-- SUMMARY -->
        <template #summary>
          <div
            class="filter-summary"
            :class="{ 'is-filtered': filteredStates[getFilterKey(filter)] }"
            @click="() => onSummaryClick(getFilterKey(filter))"
          >
            <span class="filter-name">{{ filter.name || filter.slotName }}</span>
            <span class="filter-chevron">
              <SvgFilterIcon aria-hidden="true" />
            </span>
          </div>
        </template>

        <!-- CONTENT -->
        <div class="filter-content">
          <slot
            :name="getFilterKey(filter)"
            :filter="filter"
            :selected-options="selectedOptions[getFilterKey(filter)] || []"
            :toggle-option="(option: { label: string, value: string, count: number }) => toggleOption(getFilterKey(filter), option)"
          >
            <!-- Default content if no slot is provided -->
            <div
              v-if="filter.options && filter.options.length > 0"
              class="filter-options"
            >
              <TransitionGroup
                name="filter-option"
                tag="div"
                class="filter-options-list"
              >
                <label
                  v-for="option in getFilterOptions(filter)"
                  :key="option.value"
                  class="filter-option"
                  :class="{ 'is-selected': isOptionSelected(getFilterKey(filter), option.value) }"
                >
                  <input
                    type="checkbox"
                    :value="option.value"
                    :checked="isOptionSelected(getFilterKey(filter), option.value)"
                    class="option-checkbox"
                    @change="toggleOption(getFilterKey(filter), option)"
                  >
                  <span class="option-name">{{ option.label }}</span>
                  <div class="option-right">
                    <span class="option-count">{{ option.count }}</span>
                    <span
                      v-if="isOptionSelected(getFilterKey(filter), option.value)"
                      class="option-remove"
                    >
                      ×
                    </span>
                  </div>
                </label>

                <!-- See All button as part of the transition group -->
                <div
                  v-if="filter.showAll && (!hasSelectedOptions(getFilterKey(filter)) || !filteredStates[getFilterKey(filter)])"
                  key="see-all"
                  class="filter-option see-all"
                >
                  <span class="option-name">See All</span>
                  <span class="see-all-arrow">→</span>
                </div>
              </TransitionGroup>
            </div>
          </slot>
        </div>
      </EffectSlideToggle>
    </div>
  </div>
</template>

<style scoped>
@import "@/styles/dlc/_filter-dropdown.scss";
</style>
