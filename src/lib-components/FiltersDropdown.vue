<script setup lang="ts">
import { computed } from 'vue'
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import BlockTag from './BlockTag.vue'
import ButtonLink from './ButtonLink.vue'
import MobileDrawer from './MobileDrawer.vue'
import { useTheme } from '@/composables/useTheme'

// TODO TYPES
const { filterGroups } = defineProps({
  filterGroups: {
    type: Array, //  as PropType<FilterGroupsTypes[]>,
    default: () => [],
  }
})

const selectedFilters = defineModel('selectedFilters')
const numOfSelectedFilters = computed(() => {
  let count = 0
  // for each key in selectedFilters
  for (const key in selectedFilters.value) {
    // add the length of the array of selectedFilters[key]
    count += selectedFilters.value[key].length
  }
  return count
})
// TODO remove? dont need emits with vmodel?
// const emit = defineEmits(['update:selectedFilters'])

// was implemented on buttons like so
// :checked="isSelected(group.searchField, option)" @change="toggleSelection(group.searchField, option)"
function isSelected(searchField: string, option: string) {
  // check if selectedFilter object has any keys, fail gracefully if it doesn't
  if (!Object.keys(selectedFilters.value).length)
    return null

  return selectedFilters.value[searchField].includes(option)
}

// TODO remove? vmodel makes all this unneeded
function toggleSelection(searchField: string, option: string) {
  // ORIGINAL
  // const index = selectedFilters.value.indexOf(option)
  // if (index > -1)
  //   selectedFilters.value.splice(index, 1)
  // else
  //   selectedFilters.value.push(option)

  // REVISED TO
  // const index = selectedFilters[searchField].indexOf(option)
  // if (index > -1)
  //   selectedFilters[searchField].splice(index, 1)
  // else
  //   selectedFilters[searchField].push(option)
}

// TODO not needed
function onDoneClick() {
  // console.log('applyFilters', selectedFilters)
  // close the drawer handled by MobileDrawer.removeOverlay
  // emit('applyFilters', selectedFilters.value)
}
function clearFilters() {
  console.log('clearFilters')

  // recreate empty selectedFilters object from filterGroups
  // selectedFilters.value = {}
  for (const group of filterGroups)
    selectedFilters.value[group.searchField] = []

  // emit('update:selectedFilters', {})
}

// THEME
const theme = useTheme()
const parsedClasses = computed(() => {
  return ['filters-dropdown', theme?.value || '']
})
</script>

<template>
  <div :class="parsedClasses">
    <MobileDrawer>
      <template #buttonLabel>
        <div class="filter-summary">
          Filters ({{ numOfSelectedFilters }} selected )
        </div>
        <!--
            <span v-if="hasIcon" class="icon-svg">
                <component :is="SvgIconFtvaFiltersSample" class="button-svg" aria-hidden="true" />
            </span> -->
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
                  :id="option" v-model="selectedFilters[group.searchField]" type="checkbox" class="pill-checkbox" :name="option"
                  :value="option"
                >
                <!-- BlockTag component for display -->
                <BlockTag :label="option" :is-secondary="true">
                  <!-- 'x' SVG only shows when selected -->
                  <template v-if="isSelected(group.searchField, option)">
                    <SvgGlyphClose />
                  </template>
                </BlockTag>
              </label>
            </div>
          </div>
          <div class="action-row">
            <ButtonLink class="action-row-button select-button" label="Done" icon-name="none" @click="removeOverlay" />
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
