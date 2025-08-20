<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SvgIconArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// PROPS & DATA
const { nextTo, previousTo, pages, initialCurrentPage, generateLinkCallback } = defineProps({
  nextTo: {
    type: String,
    required: false,
  },
  previousTo: {
    type: String,
    required: false,
  },
  pages: {
    type: Number,
    required: false,
  },
  initialCurrentPage: {
    type: Number,
    required: false,
  },
  // callback function to generate link for each page
  // if not provided, will generate a link based on FTVA Elastic Search pattern
  generateLinkCallback: {
    type: Function,
    required: false
  }
})

const emit = defineEmits(['changePage'])

const route = useRoute()
const parsedQuery = computed(() => ({ ...route.query }))

const maxPages = ref(10) // default/max # of buttons to fit in container
const fixedWidthPages = ref<number[]>([]) // an array of numbers representing the page buttons (always 10 pages)

const currPage = ref(1) // current page, defaults to 1
const pageButtons: Ref<HTMLElement | null> = ref(null)

const theme = useTheme()

// METHODS
function handlePageChange(item: number) {
  if (initialCurrentPage && pages) {
    if (currPage.value !== item) {
      currPage.value = item
      generatePageNumbers()
      emit('changePage', item) // let parent component know when page changes
    }
  }
}

function generateLink(pageNumber: number) {
  let queryParams = new URLSearchParams({ ...parsedQuery.value } as any)
  if (generateLinkCallback) {
    // if there are queryParams in route & generateLinkCallback prop provided
    if (queryParams)
      return generateLinkCallback(pageNumber, queryParams)

    // else if generateLinkCallback prop provided
    return generateLinkCallback(pageNumber)
  }
  // else use default logic
  else {
    queryParams = new URLSearchParams({ ...parsedQuery.value, page: pageNumber.toString() })
    return `${route.path}?${queryParams.toString()}`
  }
}

function generatePageNumbers() {
  if (pages) {
    fixedWidthPages.value = []

    // Show exactly 10 page numbers (or all pages if less than 10)
    const maxDisplayPages = maxPages.value
    const totalPages = pages

    if (totalPages <= maxDisplayPages) {
      // If total pages is 10 or less, show all pages
      for (let i = 1; i <= totalPages; i++)
        fixedWidthPages.value.push(i)
    }
    else {
      // Calculate how many middle pages to show
      // We need 8 middle pages (10 total - 2 for first and last)
      const middlePagesCount = 8

      // Calculate the range of middle pages to show
      let middleStart = Math.max(2, currPage.value - Math.floor(middlePagesCount / 2))
      let middleEnd = middleStart + middlePagesCount - 1

      // Adjust if we're going beyond the last page
      if (middleEnd >= totalPages) {
        middleEnd = totalPages - 1
        middleStart = Math.max(2, middleEnd - middlePagesCount + 1)
      }

      // Add middle pages
      for (let i = middleStart; i <= middleEnd; i++)
        fixedWidthPages.value.push(i)
    }
  }
}

// COMPUTED
const classes = computed(() => {
  return ['section-pagination', theme?.value || '', previousTo === '' ? 'first-page' : '', nextTo === '' ? 'last-page' : '']
})
const parsedPrevTo = computed(() => {
  return currPage.value - 1
})
const parsedNextTo = computed(() => {
  return currPage.value + 1
})
const isNotFirstPage = computed(() => {
  return (initialCurrentPage && pages) && currPage?.value !== 1
})
const isNotLastPage = computed(() => {
  return (initialCurrentPage && pages) && currPage?.value !== pages
})

// WATCHERS - we use watch instead of computed because we are using variables derived from props during render
// note: this ensures the component will update when props change
watch(() => pages, () => {
  // regenerate pages when pages change
  generatePageNumbers()
}, { immediate: true })

watch(() => initialCurrentPage, (newVal) => {
  // set current page when initialCurrentPage changes
  currPage.value = newVal as number
}, { immediate: true })

onMounted(() => {
  // legacy implementation does not require any onMounted logic
  if (!initialCurrentPage || !pages)
    return

  currPage.value = initialCurrentPage
})
</script>

<template>
  <div ref="pageButtons" :class="classes" role="navigation" aria-label="page list navigation">
    <!-- if legacy attribute previousTo is supplied, use that for Prev button instead of handlePageChange -->
    <div class="previous-wrapper">
      <SmartLink v-if="previousTo" :to="previousTo" class="previous">
        <SvgIconArrowRight class="previous-svg" />
        <div class="underline-hover">
          Previous
        </div>
      </SmartLink>
      <SmartLink v-else-if="isNotFirstPage" class="previous" :to="generateLink(parsedPrevTo)" @click="handlePageChange(parsedPrevTo)">
        <SvgIconArrowRight class="previous-svg" />
        <div class="underline-hover">
          Previous
        </div>
      </SmartLink>
    </div>
    <div class="pagination-wrapper">
      <div v-if="initialCurrentPage && pages" class="pagination-numbers-container">
        <div class="pagination-numbers">
          <span v-if="pages > maxPages" class="page-list-first">
            <SmartLink
              :class="`pButton${1 === currPage ? ' ' + 'pButton-selected' : ''}`" :active="currPage === 1"
              :to="generateLink(1)"
              @click="handlePageChange(1)"
            >{{ 1 }}</SmartLink>
          </span>
          <span v-if="fixedWidthPages.length > 0 && fixedWidthPages[0] === 1 && fixedWidthPages[1] > 2" class="page-list-truncate">...</span>
          <SmartLink
            v-for="item in fixedWidthPages" :key="`fixed-${item}`"
            :class="`pButton${item === currPage ? ' ' + 'pButton-selected' : ''}`" :active="currPage === item"
            :to="generateLink(item)"
            @click="handlePageChange(item)"
          >
            {{ item }}
          </SmartLink>
          <span v-if="pages > maxPages" class="page-list-right">
            <SmartLink
              :class="`pButton${pages === currPage ? ' ' + 'pButton-selected' : ''}`"
              :active="currPage === pages" :to="generateLink(pages)" @click="handlePageChange(pages)"
            >{{ pages }}</SmartLink>
          </span>
          <span v-if="fixedWidthPages.length > 0 && fixedWidthPages[fixedWidthPages.length - 1] === pages && fixedWidthPages[fixedWidthPages.length - 2] < pages - 1" class="page-list-truncate">...</span>
        </div>
      </div>
    </div>
    <!-- if legacy attribute nextTo is supplied, use that for Next button instead of handlePageChange -->
    <div class="next-wrapper">
      <SmartLink v-if="nextTo" :to="nextTo" class="next">
        <div class="underline-hover">
          Next
        </div>
        <SvgIconArrowRight class="next-svg" />
      </SmartLink>
      <SmartLink v-else-if="isNotLastPage" class="next" :to="generateLink(parsedNextTo)" @click="handlePageChange(parsedNextTo)">
        <div class="underline-hover">
          Next
        </div>
        <SvgIconArrowRight class="next-svg" />
      </SmartLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_section-pagination.scss";
@import "@/styles/ftva/_section-pagination.scss";
</style>
