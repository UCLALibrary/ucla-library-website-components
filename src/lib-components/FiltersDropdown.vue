<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BlockTag from './BlockTag.vue'
import MobileDrawer from './MobileDrawer.vue'
import { useTheme } from '@/composables/useTheme'

const { filterGroups, initialSelectedFilters } = defineProps({
  filterGroups: {
    type: Array, //  as PropType<FilterGroupsTypes[]>,
    default: () => [],
  },
  initialSelectedFilters: { // This is like initialDates prop of DateFilter
    type: Object, //  as PropType<SelectedFiltersTypes>,
    default: () => { },
  }
})

const selectedFilters = ref({}) // object or array?
// TODO ON MOUNT
// initialSelectedFilters[searchField];

function isSelected(searchField, option) {
  return initialSelectedFilters[searchField].includes(option)
}
function toggleSelection(searchField, option) {
  const index = selectedFilters.value.indexOf(option)
  if (index > -1)
    selectedFilters.value.splice(index, 1)
  else
    selectedFilters.value.push(option)
}
// THEME
const theme = useTheme()
const parsedClasses = computed(() => {
  return ['filters-dropdown', theme?.value || '']
})

onMounted(() => {
  selectedFilters.value = initialSelectedFilters
})
</script>

<template>
  <div :class="parsedClasses">
    <!-- Generic Button -->
    <!-- <MobileDrawer>
        <template #buttonLabel>
            <span class="button-text"> Filters (0 selected)</span>
        </template>
        <template #dropdownItems>
            <div v-for="item in filterGroups" :key="item.dropdownItemTitle" class="dropdown-filter-item">
                {{ item }}
            </div>
        </template>
    </MobileDrawer> -->
    <MobileDrawer>
      <template #buttonLabel>
        <!-- Optional Button Icon -->
        <div class="filter-summary">
          Filters
        </div>

        <!--
            <span v-if="hasIcon" class="icon-svg">
                <component :is="SvgIconFtvaFiltersSample" class="button-svg" aria-hidden="true" />
            </span> -->
      </template>
      <template #dropdownItems>
        <div class="dropdown-filter">
          <div v-for="group in filterGroups" :key="group.name" class="filter-group">
            <h3>{{ group.name }}</h3>
            <div class="pills">
              <label v-for="option in group.options" :key="option" class="pill-label">
                <!-- Hidden checkbox for managing selection -->

                <input
                  :id="option" type="checkbox" class="pill-checkbox" :value="option"
                  :checked="isSelected(group.searchField, option)"
                  @change="toggleSelection(group.searchField, option)"
                >
                <!-- BlockTag component for display, positioned over the checkbox -->
                <BlockTag :label="option" :is-secondary="false">
                  <!-- 'x' SVG only shows when selected -->
                  <template v-if="isSelected(group.searchField, option)">
                    <SvgGlyphX class="x-icon" />
                  </template>
                </BlockTag>
              </label>
            </div>
          </div>
          <!-- <button @click="applyFilters">Done</button>
                <button @click="clearFilters">Clear</button> -->
        </div>
      </template>
    </MobileDrawer>
  </div>
</template>

<style lang="scss" scoped>
</style>
