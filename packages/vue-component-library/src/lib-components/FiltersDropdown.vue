<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import SvgGlyphX from 'ucla-library-design-tokens/assets/svgs/icon-ftva-xtag.svg'
import SvgFilterIcon from 'ucla-library-design-tokens/assets/svgs/icon-ftva-filter.svg'
import { useWindowSize } from '@vueuse/core'
import BlockTag from './BlockTag.vue'
import ButtonLink from './ButtonLink.vue'
import MobileDrawer from './MobileDrawer.vue'
import { useTheme } from '@/composables/useTheme'

// PROPS
interface FilterGroupsTypes {
  name: string
  searchField: string
  options: string[]
}
const { filterGroups } = defineProps({
  filterGroups: {
    type: Array as PropType<FilterGroupsTypes[]>,
    default: () => [],
  }
})
const emit = defineEmits(['update-display'])
// V-MODEL DATA
interface SelectedFiltersTypes {
  [key: string]: string[]
}
const selectedFilters = defineModel('selectedFilters', { type: Object as PropType<SelectedFiltersTypes>, required: true, default: {} })
// FUNCTIONS
// calc # for UI '# selected' display
const numOfSelectedFilters = computed(() => {
  let count = 0
  // for each key in selectedFilters
  for (const key in selectedFilters.value as any) {
    // add the length of the array of selectedFilters[key]
    count += selectedFilters.value[key].length
  }
  return count
})
// check if option is selected so we can display 'x' SVG
function isSelected(searchField: string, option: string) {
  // check if selectedFilter object has any keys, fail gracefully if it doesn't
  if (!Object.keys(selectedFilters.value).length)
    return null

  return selectedFilters.value[searchField].includes(option)
}
// Clear Button Click / clear all selected filters
function clearFilters() {
  for (const group of filterGroups)
    selectedFilters.value[group.searchField] = []
  emit('update-display', selectedFilters.value)
}
// Done Button Click / emit selected filters to parent
function onDoneClick() {
  emit('update-display', selectedFilters.value)
}

// THEME
const theme = useTheme()
const isMobile = ref(false)
const parsedClasses = computed(() => {
  return ['filters-dropdown', theme?.value || '']
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
            Filters ({{ numOfSelectedFilters }} selected )
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
          <div v-for="group in filterGroups" :key="group.name" class="filter-group">
            <h3>{{ group.name }}</h3>
            <div class="pills">
              <!-- <label> must wrap <input> for accessbility fuctionality -->
              <label v-for="option in group.options" :key="option" class="pill-label">
                <!-- Hidden checkbox for managing selection & screen-reader user interaction -->
                <input
                  :id="option" v-model="selectedFilters[group.searchField]" type="checkbox" class="pill-checkbox"
                  :name="option" :value="option"
                >
                <!-- BlockTag component for display -->
                <BlockTag :label="option" :is-secondary="true">
                  <!-- 'x' SVG only shows when selected -->
                  <template v-if="isSelected(group.searchField, option)">
                    <SvgGlyphX class="close-icon" />
                  </template>
                </BlockTag>
              </label>
            </div>
          </div>
          <div class="action-row">
            <ButtonLink
              class="action-row-button select-button" label="Done" icon-name="none"
              @click="onDoneClick(); removeOverlay();"
            />
            <ButtonLink
              class="action-row-button clear-button" label="Clear" icon-name="icon-close"
              @click="clearFilters"
            />
          </div>
        </div>
      </template>
    </MobileDrawer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_filters-dropdown.scss";
@import "@/styles/ftva/_filters-dropdown.scss";
</style>
