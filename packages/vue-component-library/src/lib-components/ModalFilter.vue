<script setup lang="ts">
// Imports
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import { computed, ref } from 'vue'
import SectionPagination from './SectionPagination.vue'
import AlphabeticalBrowseBy from './AlphabeticalBrowseBy.vue'
import SmartLink from './SmartLink.vue'
import TabList from '@/lib-components/TabList.vue'
import TabItem from '@/lib-components/TabItem.vue'
import { useTheme } from '@/composables/useTheme'
import SearchFieldComposite from '@/lib-components/SearchFieldComposite.vue'

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

// Data
const theme = useTheme()
const alphabeticalCurrentPage = ref(1)
const numericalCurrentPage = ref(1)
const selectedLetter = ref('All')
const alphabeticalSearchQuery = ref('')
const numericalSearchQuery = ref('')

// Methods
function handleClose() {
  emit('close')
}

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

function handleAlphabeticalSearch(query: string) {
  alphabeticalSearchQuery.value = query
  // Reset to first page when search changes
  alphabeticalCurrentPage.value = 1
}

function handleNumericalSearch(query: string) {
  numericalSearchQuery.value = query
  // Reset to first page when search changes
  numericalCurrentPage.value = 1
}

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

// Parsed title
const parsedTitle = computed(() => {
  if (props.title)
    return props.title

  const plural = props.items.length > 1 ? 'Results' : 'Result'

  return `Search Category Name (${props.items.length} ${plural})`
})

// Watchers

// Lifecycle Hooks
</script>

<template>
  <div :class="classes">
    <button class="svg-glyph-close" @click="handleClose">
      <SvgGlyphClose />
    </button>

    <h2 class="title">
      {{ parsedTitle }}
    </h2>
    <TabList alignment="center" class="tab-list">
      <TabItem class="tab-item" title="Alphabetical Sort">
        <SearchFieldComposite
          class="search-field-composite"
          @submit="handleAlphabeticalSearch"
        />

        <AlphabeticalBrowseBy
          :selected-letter-prop="selectedLetter"
          :display-all="true"
          @selected-letter="handleSelectedLetter"
        />

        <ul class="result-list-items">
          <li
            v-for="item in paginatedAlphabeticalItems"
            :key="item.title"
          >
            <SmartLink :to="item.to" class="result-title">
              {{ item.title }}
            </SmartLink>
            <span class="result-count">{{
              `(${item.number})`
            }}</span>
          </li>
        </ul>

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
        <SearchFieldComposite
          class="search-field-composite"
          @submit="handleNumericalSearch"
        />

        <ul class="result-list-items">
          <li
            v-for="item in paginatedNumericalItems"
            :key="item.title"
          >
            <SmartLink :to="item.to" class="result-title">
              {{ item.title }}
            </SmartLink>
            <span class="result-count">{{
              `(${item.number})`
            }}</span>
          </li>
        </ul>

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
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_modal-filter.scss";
</style>
