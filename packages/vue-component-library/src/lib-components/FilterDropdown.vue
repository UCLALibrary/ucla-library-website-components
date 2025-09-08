<template>
  <div class="filter-dropdown">
    <h2 class="filter-title">{{ title }}</h2>
    <div class="filter-list">
      <EffectSlideToggle
        v-for="filter in props.filters"
        :key="filter.name"
        class="filter-item"
        :duration="300"
        :easing="'cubic-bezier(0.4, 0, 0.2, 1)'"
        :opened="false"
      >
        <template #summary>
          <div class="filter-summary">
            <span class="filter-name">{{ filter.name || filter.slotName }}</span>
            <span class="filter-chevron">
              <SvgFilterIcon aria-hidden="true" />
            </span>
          </div>
        </template>
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
              <label
                v-for="option in filter.options || []"
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
              <div
                v-if="filter.showAll"
                class="filter-option see-all"
              >
                <span class="option-name">See All</span>
              </div>
            </div>
          </slot>
        </div>
      </EffectSlideToggle>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import EffectSlideToggle from './EffectSlideToggle.vue'
import SvgFilterIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-filter.svg'

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

// Emit events for selection changes
const emit = defineEmits<{
  'selection-change': [selectedOptions: Record<string, string[]>]
  'option-selected': [filterName: string, option: { label: string, value: string, count: number }]
  'option-deselected': [filterName: string, option: { label: string, value: string, count: number }]
}>()

// Track selected options for each filter
const selectedOptions = ref<Record<string, string[]>>({})

// Initialize selected options for each filter
const initializeSelectedOptions = () => {
  props.filters.forEach(filter => {
    const filterKey = filter.slotName || filter.name
    if (!selectedOptions.value[filterKey]) {
      selectedOptions.value[filterKey] = []
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

// Toggle option selection
const toggleOption = (filterName: string, option: { label: string, value: string, count: number }) => {
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
.filter-dropdown {
  background: #f5f5f5;
  border-radius: 8px;

  max-width: 300px;

  .filter-title {
    color: #1a365d;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 16px 0;
    letter-spacing: 0.5px;
  }

  .filter-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .filter-item {
    border-bottom: 1px solid #e0e0e0;
  }

  .filter-item:last-child {
    border-bottom: none;
  }

  .filter-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 15px;
    cursor: pointer;
    color: #4a5568;
    font-weight: 500;
  }

  .filter-name {
    flex: 1;
  }

  .filter-chevron {
    font-size: 12px;
    transition: transform 0.2s ease;
  }

  .effect-slide-toggle.is-opened .filter-chevron {
    transform: rotate(180deg);
  }

  .filter-content {
    padding: 0 0 16px 0;
  }

  .filter-options {
    display: flex;
    flex-direction: column;
  }

  .filter-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 15px;
    color: var(--color-grey-05);
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &.is-selected {
      background-color: var(--color-primary-blue-03);
      color: var(--color-white);

      .option-name {
        font-weight: 500;
      }

      .option-count {
        color: var(--color-primary-blue-02);
        font-weight: 500;
      }
    }
  }

  .option-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .option-name {
    flex: 1;
    cursor: pointer;
  }

  .option-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-count {
    color: var(--color-grey-03);
    font-size: 14px;
  }

  .option-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: var(--color-white);
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    pointer-events: none;
    transition: background-color 0.2s ease;

  }

  .see-all {
    font-weight: 500;
    color: #2d3748;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
