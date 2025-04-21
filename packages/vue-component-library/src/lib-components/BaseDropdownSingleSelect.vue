<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import SvgFilterIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-filter.svg'
import SvgCheck from 'ucla-library-design-tokens/assets/svgs/icon-ftva-dropdown_check.svg'
import { useWindowSize } from '@vueuse/core'
import ButtonLink from './ButtonLink.vue'
import MobileDrawer from './MobileDrawer.vue'
import { useTheme } from '@/composables/useTheme'

// PROPS
interface SingleSelectGroup {
  name: string
  searchField: string
  options: string[]
}
const { filterGroups } = defineProps({
  filterGroups: {
    type: Array as PropType<SingleSelectGroup[]>,
    default: () => [],
  }
})
const emit = defineEmits(['update-display'])

// V-MODEL DATA
interface SelectedSingleFilter {
  [key: string]: string
}
const selectedFilters = defineModel('selectedFilters', {
  type: Object as PropType<SelectedSingleFilter>,
  required: true,
  default: () => ({}),
})

// Clear selected filters
function clearFilters() {
  for (const group of filterGroups)
    selectedFilters.value[group.searchField] = ''
}

// Emit selected filters to parent
function onDoneClick() {
  emit('update-display', selectedFilters.value)
}

// Helpers
function isSelected(searchField: string, option: string) {
  return selectedFilters.value[searchField] === option
}

// THEME
const theme = useTheme()
const isMobile = ref(false)
const parsedClasses = computed(() => {
  return ['filters-dropdown single-select', theme?.value || '']
})
onMounted(() => {
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    isMobile.value = newWidth <= 750
  }, { immediate: true })
})
</script>

<template>
  <div :class="parsedClasses">
    <MobileDrawer>
      <template #buttonLabel>
        <div class="filter-summary">
          <template v-if="!isMobile">
            Filters
          </template>
          <template v-else>
            Filters
          </template>
        </div>
        <span class="icon-svg">
          <SvgFilterIcon aria-hidden="true" />
        </span>
      </template>
      <template #dropdownItems="{ removeOverlay }">
        <div class="dropdown-filter">
          <div
            v-for="group in filterGroups"
            :key="group.name"
            class="filter-group"
          >
            <h3>{{ group.name }}</h3>
            <div class="pills">
              <label
                v-for="option in group.options"
                :key="option"
                class="pill-label"
              >
                <input
                  type="radio"
                  class="pill-radio"
                  :name="group.searchField"
                  :value="option"
                  v-model="selectedFilters[group.searchField]"
                />
                <span class="pill-content">
                  {{ option }}
                  <SvgCheck
                    v-if="isSelected(group.searchField, option)"
                    class="check-icon"
                  />
                </span>
              </label>
            </div>
          </div>
          <div class="action-row">
            <ButtonLink
              class="action-row-button select-button"
              label="Done"
              icon-name="none"
              @click="onDoneClick(); removeOverlay();"
            />
            <ButtonLink
              class="action-row-button clear-button"
              label="Clear"
              icon-name="icon-close"
              @click="clearFilters"
            />
          </div>
        </div>
      </template>
    </MobileDrawer>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_filters-dropdown.scss";
@import "@/styles/ftva/_filters-dropdown.scss";

.single-select {
  .pill-radio {
    display: none;
  }

  .pill-label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin: 0.25rem;
  }

  .pill-content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-right: 1.5rem;
  }

  .check-icon {
    position: absolute;
    right: 0.25rem;
    width: 1rem;
    height: 1rem;
  }
}
</style>
