<script setup lang="ts">
// Imports
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ModalGeneric from './ModalGeneric.vue'
import SectionPagination from './SectionPagination.vue'
import AlphabeticalBrowseBy from './AlphabeticalBrowseBy.vue'
import SmartLink from './SmartLink.vue'
import TabList from '@/lib-components/TabList.vue'
import TabItem from '@/lib-components/TabItem.vue'
import { useTheme } from '@/composables/useTheme'
import NavSearch from '@/lib-components/NavSearch.vue'

// Props
const props = withDefaults(defineProps<ModalFilterProps>(), {
  title: '',
  isOpen: false,
  items: () => [],
  itemsPerPage: 20,
})

const emit = defineEmits(['close'])

interface FilterItem {
  title: string
  to: string
  number: number
}

interface ModalFilterProps {
  title: string
  isOpen: boolean
  items: FilterItem[]
  itemsPerPage?: number
}

//  Data
const theme = useTheme()
const route = useRoute()
const alphabeticalCurrentPage = ref(1)
const numericalCurrentPage = ref(1)
const selectedLetter = ref('All')
const alphabeticalSearchQuery = ref('')
const numericalSearchQuery = ref('')
const isAlphabeticalSearch = ref(true) // Track which search is active

// Methods
function handleAlphabeticalPageChange(page: number) {
  alphabeticalCurrentPage.value = page
}

function handleNumericalPageChange(page: number) {
  numericalCurrentPage.value = page
}

function generatePaginationLink(_page: number) {
  // Internal pagination - no URL changes needed
  return '#'
}

function handleSelectedLetter(letter: string) {
  selectedLetter.value = letter
  // Reset to first page when letter filter changes
  alphabeticalCurrentPage.value = 1
}

function handleAlphabeticalSearchComplete() {
  isAlphabeticalSearch.value = true
  // Get query from route after NavSearch navigates
  const query = Array.isArray(route.query.q)
    ? route.query.q[0] || ''
    : route.query.q || ''
  alphabeticalSearchQuery.value = query
  // Reset to first page when search changes
  alphabeticalCurrentPage.value = 1
}

function handleNumericalSearchComplete() {
  isAlphabeticalSearch.value = false
  // Get query from route after NavSearch navigates
  const query = Array.isArray(route.query.q)
    ? route.query.q[0] || ''
    : route.query.q || ''
  numericalSearchQuery.value = query
  // Reset to first page when search changes
  numericalCurrentPage.value = 1
}

// Watch route changes to update search queries
watch(
  () => route.query.q,
  (newQuery) => {
    if (newQuery) {
      const query = Array.isArray(newQuery)
        ? newQuery[0] || ''
        : newQuery || ''
      if (isAlphabeticalSearch.value)
        alphabeticalSearchQuery.value = query
      else numericalSearchQuery.value = query
    }
  }
)

// Computed
const classes = computed(() => {
  return ['modal-filter', theme?.value || '', { 'is-open': props.isOpen }]
})

// Alphabetical items (sorted by title, filtered by selected letter and search query)
const alphabeticalItems = computed(() => {
  let filteredItems = [...props.items]

  // Filter by alphabetical search query if one is provided
  if (alphabeticalSearchQuery.value.trim()) {
    filteredItems = filteredItems.filter(item =>
      item.title
        .toLowerCase()
        .includes(alphabeticalSearchQuery.value.toLowerCase())
    )
  }

  // Filter by selected letter if one is selected (but not "All")
  if (selectedLetter.value && selectedLetter.value !== 'All') {
    filteredItems = filteredItems.filter(item =>
      item.title
        .toLowerCase()
        .startsWith(selectedLetter.value.toLowerCase())
    )
  }

  return filteredItems.sort((a, b) => a.title.localeCompare(b.title))
})

// Numerical items (sorted by number, highest first, filtered by search query)
const numericalItems = computed(() => {
  let filteredItems = [...props.items]

  // Filter by numerical search query if one is provided
  if (numericalSearchQuery.value.trim()) {
    filteredItems = filteredItems.filter(item =>
      item.title
        .toLowerCase()
        .includes(numericalSearchQuery.value.toLowerCase())
    )
  }

  return filteredItems.sort((a, b) => b.number - a.number)
})

// Alphabetical pagination
const alphabeticalTotalPages = computed(() => {
  return Math.ceil(alphabeticalItems.value.length / props.itemsPerPage)
})

const paginatedAlphabeticalItems = computed(() => {
  const start = (alphabeticalCurrentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return alphabeticalItems.value.slice(start, end)
})

// Numerical pagination
const numericalTotalPages = computed(() => {
  return Math.ceil(numericalItems.value.length / props.itemsPerPage)
})

const paginatedNumericalItems = computed(() => {
  const start = (numericalCurrentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return numericalItems.value.slice(start, end)
})

// Split items into two columns for even distribution
function splitIntoColumns(items: FilterItem[]) {
  const midPoint = Math.ceil(items.length / 2)
  return {
    leftColumn: items.slice(0, midPoint),
    rightColumn: items.slice(midPoint),
  }
}

const alphabeticalColumns = computed(() => {
  return splitIntoColumns(paginatedAlphabeticalItems.value)
})

const numericalColumns = computed(() => {
  return splitIntoColumns(paginatedNumericalItems.value)
})

// Parsed title
const parsedTitle = computed(() => {
  if (props.title)
    return props.title

  const plural = props.items.length > 1 ? 'Results' : 'Result'

  return `Search Category Name (${props.items.length} ${plural})`
})

const hasItems = computed(() => {
  return props.items.length > 0
})
</script>

<template>
  <ModalGeneric
    :class="classes"
    :prevent-content-close="true"
    @close="emit('close')"
  >
    <h2 class="title">
      {{ parsedTitle }}
    </h2>
    <TabList alignment="center" class="tab-list" :sync-with-url="false">
      <TabItem class="tab-item" title="Alphabetical Sort">
        <NavSearch
          class="search-field-composite"
          :show-divider="false"
          bottom-text=""
          :bottom-link="null"
          @search-complete="handleAlphabeticalSearchComplete"
        />

        <AlphabeticalBrowseBy
          :selected-letter-prop="selectedLetter"
          :display-all="true"
          @selected-letter="handleSelectedLetter"
        />

        <div v-if="hasItems" class="result-list-items">
          <div class="column">
            <ul>
              <li
                v-for="item in alphabeticalColumns.leftColumn"
                :key="item.title"
              >
                <SmartLink
                  :to="item.to"
                  class="result-title"
                  @click="emit('close')"
                >
                  {{ item.title }}
                </SmartLink>
                <span class="result-count">{{
                  `(${item.number})`
                }}</span>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li
                v-for="item in alphabeticalColumns.rightColumn"
                :key="item.title"
              >
                <SmartLink
                  :to="item.to"
                  class="result-title"
                  @click="emit('close')"
                >
                  {{ item.title }}
                </SmartLink>
                <span class="result-count">{{
                  `(${item.number})`
                }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div v-else>
          <p class="no-results">
            No results found.
          </p>
        </div>

        <SectionPagination
          :pages="alphabeticalTotalPages"
          :initial-current-page="alphabeticalCurrentPage"
          :generate-link-callback="generatePaginationLink"
          :fixed-page-width-mode="true"
          :fixed-page-width-num="6"
          class="search-results-pagination"
          @change-page="handleAlphabeticalPageChange"
        />
      </TabItem>

      <TabItem class="tab-item" title="Numerical Sort">
        <NavSearch
          class="search-field-composite"
          :show-divider="false"
          bottom-text=""
          :bottom-link="null"
          @search-complete="handleNumericalSearchComplete"
        />

        <div v-if="hasItems" class="result-list-items">
          <div class="column">
            <ul>
              <li
                v-for="item in numericalColumns.leftColumn"
                :key="item.title"
              >
                <SmartLink
                  :to="item.to"
                  class="result-title"
                  @click="emit('close')"
                >
                  {{ item.title }}
                </SmartLink>
                <span class="result-count">{{
                  `(${item.number})`
                }}</span>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li
                v-for="item in numericalColumns.rightColumn"
                :key="item.title"
              >
                <SmartLink
                  :to="item.to"
                  class="result-title"
                  @click="emit('close')"
                >
                  {{ item.title }}
                </SmartLink>
                <span class="result-count">{{
                  `(${item.number})`
                }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div v-else>
          <p class="no-results">
            No results found.
          </p>
        </div>

        <SectionPagination
          :pages="numericalTotalPages"
          :initial-current-page="numericalCurrentPage"
          :generate-link-callback="generatePaginationLink"
          :fixed-page-width-mode="true"
          :fixed-page-width-num="6"
          class="search-results-pagination"
          @change-page="handleNumericalPageChange"
        />
      </TabItem>
    </TabList>
  </ModalGeneric>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_modal-filter.scss";
</style>
