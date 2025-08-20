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
const { nextTo, previousTo, pages, initialCurrentPage, generateLinkCallback, fixedPageWidthMode, fixedPageWidthNum } = defineProps({
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
  },
  //
  //
  fixedPageWidthMode: {
    type: Boolean,
    default: false,
    required: false
  },
  fixedPageWidthNum: {
    type: Number,
    default: 10,
    required: false
  }
})

const emit = defineEmits(['changePage'])

const route = useRoute()
const parsedQuery = computed(() => ({ ...route.query }))

const maxPages = ref(10) // default # of buttons to fit in container for dynamic width/display of buttons
const generatedMiddlePages = ref<number[]>([]) // an array of numbers representing the middle page buttons (excludes first and last)

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
  if (!pages)
    return null

  generatedMiddlePages.value = []

  let maxDisplayPages
  const totalPages = pages

  if (fixedPageWidthMode) {
    maxDisplayPages = fixedPageWidthNum

    if (totalPages <= maxDisplayPages) {
    // If total pages is 10 or less, show all pages
      for (let i = 1; i <= totalPages; i++)
        generatedMiddlePages.value.push(i)
    }
    else {
    // Calculate how many middle pages to show
    // We need 8 middle pages (10 total - 2 for First and Last)
    // First and Last displayed via template code logic
      const middlePagesCount = maxDisplayPages - 2

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
        generatedMiddlePages.value.push(i)
      console.log('Fixed Generated Middle Pages: ', generatedMiddlePages.value)
    }
  }

  if (!fixedPageWidthMode) {
    ////

    if (totalPages <= maxPages.value) {
      // If total pages is 10 or less, show all pages
      for (let i = 1; i <= totalPages; i++)
        generatedMiddlePages.value.push(i)
    }
    else {
      const middlePagesCount = maxPages.value - 2
      // let start = 2
      // stop at either maxPages or total pages, whichever is lesser
      // let stop = Math.min(maxPages.value, pages)

      // if (currPage.value > maxPages.value) {
      //   // let newMaxPages = maxPages.value - 4 // subtract 4 for '...' first/last number buttons
      //   let newMaxPages = middlePagesCount
      //   start = Math.max(1, currPage.value - Math.floor(newMaxPages / 2))
      //   stop = start + newMaxPages

      //   // if current page is very near the last page,
      //   // we need to remove the truncation button near the end
      //   if (stop > pages) {
      //     newMaxPages = newMaxPages + 1 // add 1 back for missing '...' button
      //     if (currPage.value === pages)
      //       newMaxPages = newMaxPages + 1 // add another 1 back because 'next' button is hidden

      //     stop = pages
      //     start = Math.max(1, stop - newMaxPages)
      //   }
      // }

      // if we're on first page
      // if (currPage.value === 1) {
      //   // add 1 more button to the end because 'prev' button is hidden, unless thay would exceed total pages
      //   stop = Math.min(stop + 2, pages)
      // }

      let middleStart = Math.max(2, currPage.value - Math.floor(middlePagesCount / 2))
      let middleEnd = middleStart + middlePagesCount - 1

      if (middleEnd >= totalPages) {
        middleEnd = totalPages - 1
        middleStart = Math.max(2, middleEnd - middlePagesCount + 1)
      }

      generatedMiddlePages.value = []
      // for (let i = start; i <= stop; i++)
      //   generatedMiddlePages.value.push(i)

      for (let i = middleStart; i <= middleEnd; i++)
        generatedMiddlePages.value.push(i)
      console.log('Dynamic Generated Middle Pages: ', generatedMiddlePages.value)
      ////
    }
  }
}
//
function setPaginationMaxPages(width: number) {
  // fail gracefully with 10 as a the default
  if (!initialCurrentPage || !pages)
    return 10

  // Conditional checks needed when using getBoundingClientRect() and getComputedStyle() to ensure that referenced/calculated elements exist in the DOM on mount/load, otherwise set initial value(s) to zero or null to avoid console errors

  // get width of buttons
  const button = document.getElementsByClassName('pButton')[0]
  let buttonWidth
  let buttonMargin

  if (button) {
    buttonWidth = Math.ceil(button.getBoundingClientRect().width)
    buttonMargin = getComputedStyle(button).marginRight
  }
  else {
    buttonWidth = 0
    buttonMargin = '0'
  }

  const itemWidth = Math.ceil(buttonWidth + (Number.parseInt(buttonMargin) * 2) + 1) // we add 1 to give us a little leeway

  const prevBtn = document.getElementsByClassName('previous')[0]
  const nextBtn = document.getElementsByClassName('next')[0]
  let prevButtonWidth
  let nextButtonWidth

  if (prevBtn)
    prevButtonWidth = Math.ceil(document.getElementsByClassName('previous')[0].getBoundingClientRect().width + 10)
  else
    prevButtonWidth = 0

  if (nextBtn)
    nextButtonWidth = Math.ceil(document.getElementsByClassName('next')[0].getBoundingClientRect().width + 10)
  else
    nextButtonWidth = 0

  // calc # of buttons that can fit
  // take width minus the width of: 2 page buttons (last button and '...'), 2 prev/next buttons
  const MaxButtons = Math.max(0, Math.floor(+((width - (prevButtonWidth + nextButtonWidth + (itemWidth * 2))) / itemWidth).toFixed(2)))
  return MaxButtons
}
//

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
  // generatePageNumbers()

  const { width } = useWindowSize()
  // wait for next tick to ensure children are rendered and width is correct
  nextTick(() => {
    // watch for width changes and update # of buttons that will fit
    watch([width], () => {
      const paginationWidth = pageButtons.value!.clientWidth
      maxPages.value = setPaginationMaxPages(paginationWidth) as number
      generatePageNumbers() // then generate buttons representing pages
    }, { immediate: true })
  })
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
          <span v-if="pages > fixedPageWidthNum" class="page-list-first">
            <SmartLink
              :class="`pButton${1 === currPage ? ' ' + 'pButton-selected' : ''}`" :active="currPage === 1"
              :to="generateLink(1)"
              @click="handlePageChange(1)"
            >{{ 1 }}</SmartLink>
          </span>
          <span v-if="generatedMiddlePages.indexOf(2) === -1" class="page-list-truncate">...</span>
          <SmartLink
            v-for="item in generatedMiddlePages" :key="item"
            :class="`pButton${item === currPage ? ' ' + 'pButton-selected' : ''}`" :active="currPage === item"
            :to="generateLink(item)"
            @click="handlePageChange(item)"
          >
            {{ item }}
          </SmartLink>
          <span v-if="generatedMiddlePages.indexOf(pages - 1) === -1" class="page-list-truncate">...</span>
          <span v-if="pages > fixedPageWidthNum" class="page-list-right">
            <SmartLink
              :class="`pButton${pages === currPage ? ' ' + 'pButton-selected' : ''}`"
              :active="currPage === pages" :to="generateLink(pages)" @click="handlePageChange(pages)"
            >{{ pages }}</SmartLink>
          </span>
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
