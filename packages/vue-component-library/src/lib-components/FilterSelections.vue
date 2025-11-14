<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SvgIconCarat from 'ucla-library-design-tokens/assets/svgs/icon-down-carat.svg'

// Used for the sliding animation of the filter options
import EffectSlideToggle from './EffectSlideToggle.vue'
import { useTheme } from '@/composables/useTheme'

// Interfaces
interface FilterOption {
  label: string
  value: string
  count: number
}
interface FilterProps {
  title: string
  filters: Array<{
    name: string
    slotName: string
    facetField?: string
    options?: Array<FilterOption>
    showAll?: boolean
  }>
}

// Props
const props = defineProps<FilterProps>()

// Emit events for selection changes
const emit = defineEmits<{
  'selection-change': [selectedOptions: Record<string, string[]>]
  'option-selected': [filterName: string, option: FilterOption]
  'option-deselected': [filterName: string, option: FilterOption]
}>()
// THEME
const theme = useTheme()
// Classes computed
const classes = computed(() => ['filter-selections', theme?.value || ''])

// Router
const route = useRoute()
const router = useRouter()

// Track selected options for each filter
const selectedOptions = ref<Record<string, string[]>>({})
const effectSlideToggleRef = ref<InstanceType<typeof EffectSlideToggle>[]>([])
const filteredStates = ref<Record<string, boolean>>({})

// The header of each filter, when it's in filtered mode.
function filterClasses(filterKey: string) {
  return {
    'is-filtered': filteredStates.value[filterKey],
  }
}

// The options of each filter, when an option is selected. - used for styling
function optionClasses(filterKey: string, optionValue: string) {
  return {
    'is-selected': optionSelected(filterKey, optionValue),
  }
}

// Show the "See All" button if the filter has the showAll property and there are no selected options or the filter is not in filtered mode.
function showButton(filter: any) {
  const key = getFilterKey(filter)
  return (
    filter.showAll
    && (!hasSelectedOptions(key) || !filteredStates.value[key])
  )
}
// This function is used to get the key of a filter.
function getFilterKey(filter: any) {
  return filter.slotName || filter.name
}
// This function is used to get the index of a filter.
function getFilterIndex(filterKey: string) {
  return props.filters.findIndex(f => getFilterKey(f) === filterKey)
}

// Animate height change as the filter options change
async function animateHeightChange(filterIndex: number) {
  if (filterIndex < 0 || !effectSlideToggleRef.value[filterIndex])
    return
  // Get the current height of the filter.
  const currentHeight = effectSlideToggleRef.value[filterIndex].$el.offsetHeight
  // Wait for the next tick to ensure the DOM is updated.
  await nextTick()
  // Get the content element of the filter.
  const contentElement = effectSlideToggleRef.value[filterIndex].$el?.querySelector('.filter-content')
  // If the content element exists, animate the height change to the target height.
  if (contentElement) {
    // Get the target height of the filter.
    const targetHeight = contentElement.offsetHeight + effectSlideToggleRef.value[filterIndex].$el.querySelector('.summary').offsetHeight
    // Animate the height change to the target height. - uses the animateToHeight method from the EffectSlideToggle component.
    effectSlideToggleRef.value[filterIndex].animateToHeight(targetHeight, currentHeight)
  }
}

// Initialize selected options for each filter
function initializeSelectedOptions() {
  props.filters.forEach((filter) => {
    const filterKey = getFilterKey(filter)
    // If the filter key is not in the selected options, initialize it as an empty array.
    if (!selectedOptions.value[filterKey])
      selectedOptions.value[filterKey] = []

    // Initialize the filtered state of the filter as false.
    filteredStates.value[filterKey] = false
  })
}

// Watch for changes in props.filters and re-initialize
watch(() => props.filters, () => {
  initializeSelectedOptions()
}, { immediate: true, deep: true })

// Watch for changes in selected filter options and emit
watch(selectedOptions, (newOptions) => {
  emit('selection-change', { ...newOptions })
}, { deep: true })

// Option selection helpers
// This function is used to check if an option is selected.
function optionSelected(filterName: string, optionValue: string) {
  return selectedOptions.value[filterName]?.includes(optionValue) ?? false
}

// This function is used to check if the filter has any selected options.
function hasSelectedOptions(filterName: string) {
  return (selectedOptions.value[filterName]?.length ?? 0) > 0
}

// Handle summary click - toggle filtering when there are filter selections
async function onSummaryClick(filterName: string) {
  // If there are no selected options, do nothing.
  if (!hasSelectedOptions(filterName))
    return
  // Get the index of the filter.
  const filterIndex = getFilterIndex(filterName)
  // If the filter index is less than 0, do nothing.
  if (filterIndex < 0)
    return

  // Toggle the filtered state of the filter.
  filteredStates.value[filterName] = !filteredStates.value[filterName]
  // Animate the height change of the filter.
  await animateHeightChange(filterIndex)
}

// returns the selected options if the filter is in filtered mode, otherwise returns all options.
function getFilterOptions(filter: any) {
  if (!filter.options)
    return []

  const filterKey = getFilterKey(filter)
  const isFiltered = filteredStates.value[filterKey]

  const options = isFiltered
    ? filter.options.filter((option: any) => selectedOptions.value[filterKey]?.includes(option.value))
    : filter.options
  return options
}

// Helper function for template binding
function createToggleOptionHandler(filterName: string) {
  return (option: FilterOption) => toggleOption(filterName, option)
}

// This function is used to toggle the selection of an option in a filter.
async function toggleOption(filterName: string, option: FilterOption) {
  const currentSelection = selectedOptions.value[filterName] || []
  const optionIndex = currentSelection.indexOf(option.value)
  // If the option is already selected, remove it.
  if (optionIndex > -1) {
    // Remove option
    currentSelection.splice(optionIndex, 1)
    emit('option-deselected', filterName, option)
    // If filtered options were all toggled off, close the filter.
    if (currentSelection.length === 0) {
      const filterIndex = getFilterIndex(filterName)
      if (filterIndex >= 0 && effectSlideToggleRef.value[filterIndex]) {
        // If the filter is in filtered mode and selected options were all toggled off, close it and reset the filtered state.
        if (filteredStates.value[filterName]) {
          await nextTick()
          effectSlideToggleRef.value[filterIndex].close()
          filteredStates.value[filterName] = false
        }
        // If option was toggled off, but the filter wasn't in filtered mode, just reset the filtered state but don't close the slide toggle.
        else {
          filteredStates.value[filterName] = false
        }
      }
    }
    else {
      // Animate height as the filter options change.
      const filterIndex = getFilterIndex(filterName)
      if (filterIndex >= 0 && effectSlideToggleRef.value[filterIndex]?.isOpened && filteredStates.value[filterName])
        await animateHeightChange(filterIndex)
    }
  }
  else {
    // Add option to the current selection.
    currentSelection.push(option.value)
    emit('option-selected', filterName, option)
  }

  // Update router query parameters based on current selections
  const nextQuery: Record<string, any> = { ...route.query }

  // For each filter, map selections to its facetField in query
  props.filters.forEach((filter) => {
    const key = getFilterKey(filter)
    const facet = filter.facetField
    if (!facet)
      return

    const selections = selectedOptions.value[key] || []
    if (selections.length > 0)
      nextQuery[facet] = selections
    else
      delete nextQuery[facet]
  })

  // Reset pagination param if present
  if ('page' in nextQuery)
    delete nextQuery.page
  // Push the new query to the router.
  router.push({ query: nextQuery })
}
</script>

<template>
  <div :class="classes">
    <div class="filter-list">
      <EffectSlideToggle
        v-for="filter in props.filters"
        :key="filter.name"
        ref="effectSlideToggleRef"
        class="filter-item"
        :prevent-close="hasSelectedOptions(getFilterKey(filter))"
      >
        <!-- SUMMARY - the header of each filter -->
        <template #summary>
          <div
            class="filter-summary"
            :class="filterClasses(getFilterKey(filter))"
            @click="() => onSummaryClick(getFilterKey(filter))"
          >
            <span class="filter-name">{{ filter.name || filter.slotName }}</span>
            <span class="filter-chevron">
              <SvgIconCarat aria-hidden="true" />
            </span>
          </div>
        </template>

        <!-- CONTENT - the options of each filter -->
        <div class="filter-content">
          <slot
            :name="getFilterKey(filter)"
            :filter="filter"
            :selected-options="selectedOptions[getFilterKey(filter)] || []"
            :toggle-option="createToggleOptionHandler(getFilterKey(filter))"
          >
            <!-- Default content if no slot is provided -->
            <fieldset
              v-if="filter.options && filter.options.length > 0"
              :id="getFilterKey(filter)"
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
                  :class="optionClasses(getFilterKey(filter), option.value)"
                >
                  <input
                    type="checkbox"
                    :value="option.value"
                    :checked="optionSelected(getFilterKey(filter), option.value)"
                    class="option-checkbox"
                    @change="toggleOption(getFilterKey(filter), option)"
                  >
                  <span class="option-name">{{ option.label }}</span>
                  <div class="option-right">
                    <span class="option-count">{{ option.count }}</span>
                    <span
                      v-if="optionSelected(getFilterKey(filter), option.value)"
                      class="option-remove"
                    >
                      ×
                    </span>
                  </div>
                </label>

                <!-- See All button as part of the transition group -->
                <div
                  v-if="showButton(filter)"
                  key="see-all"
                  class="filter-option see-all"
                >
                  <span class="option-name">See All</span>
                  <span class="see-all-arrow">→</span>
                </div>
              </TransitionGroup>
            </fieldset>
          </slot>
        </div>
      </EffectSlideToggle>
    </div>
  </div>
</template>

<style scoped>
@import "@/styles/dlc/_filter-selections.scss";
</style>
