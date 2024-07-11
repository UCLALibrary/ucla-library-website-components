<script lang="ts" setup>
import type { PropType } from 'vue'

// components and SVG's
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'
import { ref } from 'vue'
import SearchGenericFilters from './SearchGenericFilters.vue'
import SearchInput from './SearchInput.vue'

interface Item {
  inputType: string
  label: string
  esFieldName: string
}
interface QueryFilters {
  [key: string]: string[]
}
interface RouterQuery {
  queryText: string
  queryFilters: QueryFilters
}

const { filters, searchGenericQuery, placeholder } = defineProps({
  filters: {
    type: Array as PropType<Item[]>, // array of objects that contain the filter objects
    default: () => [],
  },
  /* searchType: {
    type: String,
    default: '',
  }, */
  /* views: {
      type: Array,
      default: () => [],
  }, */
  searchGenericQuery: {
    type: Object as PropType<RouterQuery>,
    default: () => { },
  },
  placeholder: {
    type: String,
    default: '',
  },
  /* queryView: {
      type: String,
      default: "list",
  }, */
})

const emit = defineEmits(['search-ready'])

const searchWords = ref(searchGenericQuery ? searchGenericQuery.queryText : '') // this.$route.query.q
const selectedFilters = ref(searchGenericQuery ? searchGenericQuery.queryFilters : {})

/* watch: {

  "searchGenericQuery.queryText"(newVal, oldVal) {
    /*console.log(
        "in search-genric component searchGenericQuery.queryText watch: " +
            newVal
    ) */
//  this.searchWords = newVal
// },
// "searchGenericQuery.queryFilters"(newVal, oldVal) {
/* console.log(
    "in search-genric component searchGenericQuery.queryFilters watch: " +
        JSON.stringify(newVal)
) */
//   this.selectedFilters = newVal
// },
// },

function updateQueryFilters(newVal: QueryFilters) {
  console.log('In updateQueryFilters', newVal)
  selectedFilters.value = newVal
}

function doSearch() {
  console.log('dosearch called')
  console.log(
    `selected filters in component are: ${JSON.stringify(selectedFilters.value)}`
  )
  console.log(
    `search text in component are: ${JSON.stringify(searchWords.value)}`
  )
  emit('search-ready', {
    filters: selectedFilters.value,
    text: searchWords.value,
  })
}
</script>

<template>
  <!-- TODO Need tick's next to radio dropdown  -->
  <!-- TODO Need count of items selected for checkbox -->
  <!-- TODO Need selected tags (sync'd to selected checkboxes) -->
  <!-- TODO Need to get a BaseCheckboxGroup working -->
  <!-- TODO Need to create a BaseCalendarGroup Component -->
  <!-- TODO Need to style this for Mobile -->
  <div class="search-generic">
    <!-- <h4>router query</h4>
      {{ searchGenericQuery }}
      <h4>filters for the page</h4>
      {{ filters }} -->

    <form
      name="searchHome"
      @submit.prevent=""
    >
      <div class="input-container">
        <SearchInput
          v-model="searchWords"
          class="search-input"
          :placeholder="placeholder"
          @clear="doSearch"
          @keyup.enter="doSearch"
        />
        <button
          class="button-submit"
          type="submit"
          @click="doSearch"
        >
          <IconSearch class="icon" />
        </button>
      </div>
    </form>
    <div class="search-generic-filters-container" />
    <SearchGenericFilters
      :filters="filters"
      :query-filters="selectedFilters"
      @update:query-filters="updateQueryFilters"
      @filters-selection-action="doSearch"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-generic {
  z-index: 10;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -32px;
  max-width: $container-l-cta + px;
  padding: 32px 0 0 0;

  form {
    max-width: $container-l-main + px;
    margin: 0 auto;

    +.search-generic-filters-container {
      border-top: 2px solid var(--color-default-cyan-03);
      margin: 16px auto 0 auto;
      padding: 0px 200px;
      max-width: 928px;
    }
  }

  .input-container {
    display: flex;
    background-color: var(--color-primary-blue-01);
    border-color: transparent;

    .icon {
      &:hover {
        :deep(.svg__fill--primary-blue-03) {
          fill: var(--color-default-cyan-03);
        }
      }
    }

    input {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0.01em;
      background-color: var(--color-primary-blue-01);
      border-color: transparent;
      padding: 24px 24px 24px 16px;
      width: 100%;

      &::placeholder {
        text-transform: uppercase;
        font-family: var(--font-primary);
        text-overflow: ellipsis;
      }
    }

    .search-input {
      flex-grow: 1;
    }

    .button-submit {
      display: flex;
      align-items: center;
      padding: 0 24px;
    }
  }
}

//Breakpoints
@media #{$medium} {
  .search-generic {

    /*padding-left: var(--unit-gutter);
    padding-right: var(--unit-gutter);
    padding-top: var(--space-xl);
    border-radius: 0;
    margin-top: 0;

    .filter-group {
      left: 64px;
      right: 64px;
    }
*/
    .input-container {
      .button-submit {
        padding: 0 12px;
      }

      input {
        padding: 24px 0 24px 16px;
      }
    }

    /*.section-remove-container {
      margin: 12px 0;
    }*/
  }
}

@media #{$small} {
  .search-generic {}
}
</style>
