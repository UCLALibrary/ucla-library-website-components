<template>
  <div :class="classes">
    <h2 class="filter-title">{{ title }}</h2>
    <div class="filter-list">
      <EffectSlideToggle
        v-for="filter in props.filters"
        :key="filter.name"
        ref="toggleRefs"
        class="filter-item"
        :duration="300"
        :easing="'cubic-bezier(0.4, 0, 0.2, 1)'"
        :opened="false"
        :prevent-close="hasSelectedOptions(filter.slotName || filter.name)"
        @opened="() => onToggleOpened(filter.slotName || filter.name)"
        @closed="() => onToggleClosed(filter.slotName || filter.name)"
      >

        <!-- SUMMARY -->
        <template #summary>
          <div
            class="filter-summary"
            :class="{ 'is-filtered': filteredStates[filter.slotName || filter.name] }"
            @click="() => onSummaryClick(filter.slotName || filter.name)"
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
            :name="filter.slotName || filter.name"
            :filter="filter"
            :selected-options="selectedOptions[filter.slotName || filter.name] || []"
            :toggle-option="(option: { label: string, value: string, count: number }) => toggleOption(filter.slotName || filter.name, option)"
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
                  :class="{ 'is-selected': isOptionSelected(filter.slotName || filter.name, option.value) }"
                >
                  <input
                    type="checkbox"
                    :value="option.value"
                    :checked="isOptionSelected(filter.slotName || filter.name, option.value)"
                    @change="toggleOption(filter.slotName || filter.name, option)"
                    class="option-checkbox"
                  >
                  <span class="option-name">{{ option.label }}</span>
                  <div class="option-right">
                    <span class="option-count">{{ option.count }}</span>
                    <span
                      v-if="isOptionSelected(filter.slotName || filter.name, option.value)"
                      class="option-remove"
                      @click.stop="toggleOption(filter.slotName || filter.name, option)"
                    >
                      ×
                    </span>
                  </div>
                </label>

                <!-- See All button as part of the transition group -->
                <div
                  v-if="filter.showAll && (!hasSelectedOptions(filter.slotName || filter.name) || !filteredStates[filter.slotName || filter.name])"
                  key="see-all"
                  class="filter-option see-all"
                >
                  <span class="option-name">See All</span>
                </div>

              </TransitionGroup>

            </div>
          </slot>
        </div>
      </EffectSlideToggle>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, nextTick } from 'vue'
import EffectSlideToggle from './EffectSlideToggle.vue'
import SvgFilterIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-filter.svg'
import { useTheme } from '@/composables/useTheme'

type FilterProps = {
  title: string,
  filters: Array<{
    name: string,
    slotName: string,
    options?: Array<{
      label: string,
      value: string,
      count: number
    }>,
    showAll?: boolean
  }>
}

const props = defineProps<FilterProps>()

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['filter-dropdown', theme?.value || '']
})

// Emit events for selection changes
const emit = defineEmits<{
  'selection-change': [selectedOptions: Record<string, string[]>]
  'option-selected': [filterName: string, option: { label: string, value: string, count: number }]
  'option-deselected': [filterName: string, option: { label: string, value: string, count: number }]
}>()

// Track selected options for each filter
const selectedOptions = ref<Record<string, string[]>>({})
const toggleRefs = ref<InstanceType<typeof EffectSlideToggle>[]>([])
const toggleStates = ref<Record<string, boolean>>({})
const filteredStates = ref<Record<string, boolean>>({})

// Initialize selected options for each filter
const initializeSelectedOptions = () => {
  props.filters.forEach(filter => {
    const filterKey = filter.slotName || filter.name
    if (!selectedOptions.value[filterKey]) {
      selectedOptions.value[filterKey] = []
    }
    if (toggleStates.value[filterKey] === undefined) {
      toggleStates.value[filterKey] = false
    }
    if (filteredStates.value[filterKey] === undefined) {
      filteredStates.value[filterKey] = false
    }
  })
}

// Initialize on component mount
initializeSelectedOptions()

// Watch for changes in selected options and emit
watch(selectedOptions, (newOptions) => {
  emit('selection-change', { ...newOptions })
}, { deep: true })

// Check if an option is selected
const isOptionSelected = (filterName: string, optionValue: string): boolean => {
  const filterKey = filterName
  return selectedOptions.value[filterKey]?.includes(optionValue) || false
}

// Check if a filter has any selected options
const hasSelectedOptions = (filterName: string): boolean => {
  const filterKey = filterName
  return (selectedOptions.value[filterKey]?.length || 0) > 0
}

// Handle toggle opened event
const onToggleOpened = (filterName: string) => {
  const filterKey = filterName
  toggleStates.value[filterKey] = true
}


// Handle toggle closed event
const onToggleClosed = (filterName: string) => {
  const filterKey = filterName
  toggleStates.value[filterKey] = false
  // Reset filtered state when toggle closes
  filteredStates.value[filterKey] = false
}

// Handle summary click - toggle filtering when there are selections
const onSummaryClick = async (filterName: string) => {
  const filterKey = filterName
  const hasSelections = hasSelectedOptions(filterKey)

  if (hasSelections) {
    // Toggle filtered state
    filteredStates.value[filterKey] = !filteredStates.value[filterKey]

    // Animate to new height
    await nextTick()
    const filterIndex = props.filters.findIndex(f => (f.slotName || f.name) === filterKey)
    if (filterIndex >= 0 && toggleRefs.value[filterIndex]) {
      const contentElement = toggleRefs.value[filterIndex].$el?.querySelector('.filter-content')
      if (contentElement) {
        const targetHeight = contentElement.offsetHeight + toggleRefs.value[filterIndex].$el.querySelector('.summary').offsetHeight
        toggleRefs.value[filterIndex].animateToHeight(targetHeight)
      }
    }
  }
}

// Get options to display for a filter (only selected when in filtered mode)
const getFilterOptions = (filter: any) => {
  if (!filter.options) return []

  const filterKey = filter.slotName || filter.name
  const isFiltered = filteredStates.value[filterKey]

  // Show only selected options when in filtered mode
  if (isFiltered) {
    return filter.options.filter((option: any) =>
      selectedOptions.value[filterKey]?.includes(option.value)
    )
  }

  // Show all options when not filtered
  return filter.options
}

// Toggle option selection
const toggleOption = async (filterName: string, option: { label: string, value: string, count: number }) => {
  const filterKey = filterName

  if (!selectedOptions.value[filterKey]) {
    selectedOptions.value[filterKey] = []
  }

  const currentSelection = selectedOptions.value[filterKey]
  const optionIndex = currentSelection.indexOf(option.value)

  if (optionIndex > -1) {
    // Option is selected, remove it
    currentSelection.splice(optionIndex, 1)
    emit('option-deselected', filterName, option)

    // If no more options are selected, close the toggle and reset filtered state
    if (currentSelection.length === 0) {
      await nextTick()
      const filterIndex = props.filters.findIndex(f => (f.slotName || f.name) === filterKey)
      if (filterIndex >= 0 && toggleRefs.value[filterIndex]) {
        toggleRefs.value[filterIndex].close()
      }
      // Reset filtered state
      filteredStates.value[filterKey] = false
    }
  } else {
    // Option is not selected, add it
    currentSelection.push(option.value)
    emit('option-selected', filterName, option)
  }
}

// Expose methods for parent components
defineExpose({
  selectedOptions,
  toggleOption,
  isOptionSelected,
  clearAllSelections: () => {
    Object.keys(selectedOptions.value).forEach(key => {
      selectedOptions.value[key] = []
    })
  },
  clearFilterSelections: (filterName: string) => {
    const filterKey = filterName
    if (selectedOptions.value[filterKey]) {
      selectedOptions.value[filterKey] = []
    }
  }
})
</script>

<style scoped>
@import "@/styles/dlc/_filter-dropdown.scss";
</style>
