<template>
  <div class="search-generic-filters">
    <div
      v-if="filters.length > 0"
      class="container"
    >
      <search-generic-filter-buttons
        :items="parsedFilters"
        v-model:single-checkbox-state="checkedState"
        class="search-generic-filter-buttons"
        @toggle="toggleTransition"
        @single-checkbox-checked="doSearch"
      />
    </div>
    <!-- This loops through avaible filter groups -->
    <transition
      name="slide-toggle"
      mode="out-in"
      :key="group.esFieldName"
      v-for="(group, index) in parsedFilters"
    >
      <component
        :is="group.componentName"
        v-if="group.isVisible"
        :items="group.items"
        v-model:selected="queryFilterButtonDropDownStates[group.esFieldName]"
        @update:selected="newValue => updateSelected(group.esFieldName, newValue)"
        class="filter-group"
        @input-selected="doSearch"
      />
    </transition>

    <section-remove-search-filter
      v-model:filters="selectedFilters"
      class="section-remove-container"
      @remove-selected="doSearch"
    />

  </div>
</template>

<script
  lang="ts"
  setup
>
import { computed, ref, watch, watchEffect } from 'vue'
import type { PropType } from 'vue'

import SearchGenericFilterButtons from "./SearchGenericFilterButtons.vue"
import SearchGenericViewModes from "./SearchGenericViewModes.vue"
import BaseRadioGroup from "./BaseRadioGroup.vue"
import BaseCheckboxGroup from "./BaseCheckboxGroup.vue"
import SectionRemoveSearchFilter from "./SectionRemoveSearchFilter.vue"

interface ContentItem {
  name: string
}

interface Item {
  inputType: string
  label: string
  esFieldName: string
  items?: ContentItem[]
  isVisible?: false
}

type QueryFilters = {
  [key: string]: string | string[]
}


const props = defineProps({
  filters: {
    type: Array as PropType<Item[]>, // array of objects that contain the filter objects
    default: () => [],
  },
  queryFilters: {
    type: Object as PropType<QueryFilters>, // objects that contain the selected query filter from url [{name, value}]
    default: () => { },
  }
})
const selectedView = ref("list") // TODO If we add VIEW MODES COMPONENT TO THIS
const selectedFilters = computed(() => {
  // This structure is good for SectionRemoveSearchFilters component which needs an array of
  // objects with name and value properties

  const result = Object.entries(props.queryFilters).flatMap(([name, value]) => {
    if (Array.isArray(value)) {
      return value.map(item => ({ name, value: item }))
    } else {
      return [{ name, value }]
    }
  })
  return result

})
const queryFilterButtonDropDownStates = ref({})

watch(() => props.queryFilters, (newQueryFilters) => {
  // Assuming newQueryFilters is always an object as per your default prop definition.
  // console.log("newQueryFilters", Object.entries(newQueryFilters))
  Object.entries(newQueryFilters).forEach(([key, value]) => {
    queryFilterButtonDropDownStates.value[key] = value
  })
  // console.log("queryFilterButtonDropDownStates", queryFilterButtonDropDownStates.value)
}, { deep: true, immediate: true })

const updateSelected = (key, newValue) => {
  // This function updates the selected state and could emit an event for parent component
  queryFilterButtonDropDownStates.value[key] = newValue
  // Emit an event if needed
}


// single-checkbox
const checkedState = ref(props.filters.map((obj) => obj.inputType === "single-checkbox" && props.queryFilters[obj.esFieldName] ? true : false))

// Now, instead of tracking visibility toggles, track the index of the currently open item
const openItemIndex = ref(-1); // -1 indicates that no item is open

const toggleTransition = (index) => {
  console.log("toggleTransition called", index, parsedFilters.value[index].isVisible)
  // Toggles visibility state for the given index
  openItemIndex.value = openItemIndex.value === index ? -1 : index
  console.log("toggleTransition end", index, parsedFilters.value[index].isVisible)
}


// filter buttons
const parsedFilters = computed(() => {

  return props.filters.map((obj, index) => {
    let selected = selectedFilters.value?.filter((item) => item.name === obj.esFieldName) || []
    // console.log("In parseselected: " + selected)
    let componentName = BaseCheckboxGroup

    // If none selected, then make sure radio's default is empty string
    if (!selected.length && obj.inputType == "radio") {
      selected = ""
      selectedFilters.value = selectedFilters.value?.filter((item) => item.name !== obj.esFieldName)
    }

    // Figure out Vue component name
    switch (obj.inputType) {
      case "radio":
        componentName = BaseRadioGroup
        break
      case "checkbox":
        componentName = BaseCheckboxGroup
        break

      /* Future usecases
      case "date":
        componentName = DateFilter
        break
      case "calendar":
        componentName = CalendarFilter
        break
      */
    }

    return {
      ...obj,
      selected,
      componentName,
      isVisible: index === openItemIndex.value,

    }
  })
})


</script>

<style
  lang="scss"
  scoped
>
.search-generic-filters {
  z-index: 10;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -32px;
  max-width: $container-l-cta + px;
  padding: 32px 32px 0;

  .search-generic-filter-buttons {
    margin-top: 16px;
  }

  .container {
    list-style: none;
    cursor: pointer;
    max-width: $container-l-main + px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .section-remove-container {
    margin: 12px 24px;
  }

  .filter-group {
    transition-duration: 400ms;

    position: absolute;
    /* top: 100%;*/
    left: 54px;
    right: 54px;

    margin-top: 8px;
    z-index: 100;
  }
}

// Transitions
.slide-toggle-enter,
.slide-toggle-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-toggle-enter-to,
.slide-toggle-leave {
  max-height: 500px;
  opacity: 1;
}

.slide-toggle-enter-active,
.slide-toggle-leave-active {
  overflow: hidden;
  transition-property: opacity, max-height;
  transition-timing-function: ease-in-out;
}

//Breakpoints
@media #{$medium} {
  .search-generic-filters {
    padding-left: var(--unit-gutter);
    padding-right: var(--unit-gutter);
    padding-top: var(--space-xl);
    border-radius: 0;
    margin-top: 0;

    .filter-group {
      left: 64px;
      right: 64px;
    }

    .section-remove-container {
      margin: 12px 0;
    }
  }
}

@media #{$small} {
  .search-generic-filters {
    .search-generic-filter-buttons {
      flex-direction: column;
      gap: 8px;
    }

    .filter-group {
      margin-top: 8px;
      z-index: 100;
      left: 24px;
      right: 24px;
    }
  }
}
</style>