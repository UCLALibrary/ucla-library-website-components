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
// Router and Route
const route = useRoute()
const parsedQuery = computed(() => ({ ...route.query }))

const theme = useTheme()
const maxPages = ref(10) // default # of buttons that will fit in container, gets recalculated onMount & resize
const leftPages = ref([33]) // an array of numbers representing the page buttons that will appear ( we start with a single '33' so we can measure the width of a button to calc maxPages)
const currPage = ref(1) // current page, defaults to 1
const pageButtons: Ref<HTMLElement | null> = ref(null)

// METHODS
function handlePageChange(item: number) {
  if (initialCurrentPage && pages) {
    if (currPage.value !== item) {
      currPage.value = item
      generateLeftPages()
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

function generateLeftPages() {
  if (pages && maxPages) {
    let start = 1
    // stop at either maxPages or total pages, whichever is lesser
    let stop = Math.min(maxPages.value, pages)

    // if current page is greater than than maxPages,
    // put current page in middle of range of generated page number buttons
    if (currPage.value > maxPages.value) {
      let newMaxPages = maxPages.value - 4 // subtract 4 for '...' first/last number buttons
      start = Math.max(1, currPage.value - Math.floor(newMaxPages / 2))
      stop = start + newMaxPages

      // if current page is very near the last page,
      // we need to remove the truncation button near the end
      if (stop > pages) {
        newMaxPages = newMaxPages + 1 // add 1 back for missing '...' button
        if (currPage.value === pages)
          newMaxPages = newMaxPages + 1 // add another 1 back because 'next' button is hidden

        stop = pages
        start = Math.max(1, stop - newMaxPages)
      }
    }

    // if we're on first page
    if (currPage.value === 1) {
      // add 1 more button to the end because 'prev' button is hidden, unless thay would exceed total pages
      stop = Math.min(stop + 2, pages)
    }

    leftPages.value = []
    for (let i = start; i <= stop; i++)
      leftPages.value.push(i)
  }
}

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
  generateLeftPages()
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

  const { width } = useWindowSize()
  // wait for next tick to ensure children are rendered and width is correct
  nextTick(() => {
    // watch for width changes and update # of buttons that will fit
    watch([width], () => {
      const paginationWidth = pageButtons.value!.clientWidth
      maxPages.value = setPaginationMaxPages(paginationWidth) as number
      generateLeftPages() // then generate buttons representing pages
    }, { immediate: true })
  })
})
</script>

<template>
  <div ref="pageButtons" :class="classes" role="navigation" aria-label="page list navigation">
    <!-- if legacy attribute previousTo is supplied, use that for Prev button instead of handlePageChange -->
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
    <div v-if="initialCurrentPage && pages" class="pagination-numbers-container">
      <div class="pagination-numbers">
        <span v-if="currPage > maxPages" class="page-list-first">
          <SmartLink
            :class="`pButton${1 === currPage ? ' ' + 'pButton-selected' : ''}`" :active="currPage === 1"
            :to="generateLink(1)"
            @click="handlePageChange(1)"
          >{{ 1 }}</SmartLink>
        </span>
        <span v-if="currPage > maxPages" class="page-list-truncate">...</span>
        <SmartLink
          v-for="item in leftPages" :key="item"
          :class="`pButton${item === currPage ? ' ' + 'pButton-selected' : ''}`" :active="currPage === item"
          :to="generateLink(item)"
          @click="handlePageChange(item)"
        >
          {{ item }}
        </SmartLink>
        <span v-if="leftPages.length < pages && leftPages.indexOf(pages) === -1" class="page-list-truncate">...</span>
        <span v-if="leftPages.length < pages && leftPages.indexOf(pages) === -1" class="page-list-right">
          <SmartLink
            :class="`pButton${pages === currPage ? ' ' + 'pButton-selected' : ''}`"
            :active="currPage === pages" :to="generateLink(pages)" @click="handlePageChange(pages)"
          >{{ pages }}</SmartLink>
        </span>
      </div>
    </div>
    <!-- if legacy attribute nextTo is supplied, use that for Next button instead of handlePageChange -->
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
</template>

<style lang="scss" scoped>
@import "@/styles/default/_section-pagination.scss";
@import "@/styles/ftva/_section-pagination.scss";
</style>
