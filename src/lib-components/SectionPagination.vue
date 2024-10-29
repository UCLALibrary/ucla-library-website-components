<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SvgIconArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// PROPS & DATA
const { nextTo, previousTo, pages, initialCurrentPage } = defineProps({
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
})
const emit = defineEmits(['changePage']) // let parent component know when page changes
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
      emit('changePage', item)
    }
  }
}
function generateLeftPages() {
  // TODO make this work without initialCurrentPage?
  if (initialCurrentPage && pages && maxPages) {
    let start = 1
    // stop at either maxPages or total pages, whichever is lesser
    let stop = Math.min(maxPages.value, pages)

    // if current page is greater than than maxPages,
    // put current page in middle of range of generated page number buttons
    if (currPage.value > maxPages.value) {
      let newMaxPages = maxPages.value - 4 // subtract 4 for '...' first/last number buttons
      start = Math.max(1, currPage.value - Math.floor(newMaxPages / 2))
      stop = start + newMaxPages

      // if current page is close enough to the end we need to remove the truncation buttons near
      // the end
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

  // get width of buttons
  const button = document.getElementsByClassName('pButton')[0]
  const buttonWidth = Math.ceil(button.getBoundingClientRect().width)
  const buttonMargin = getComputedStyle(button).marginRight
  const itemWidth = Math.ceil(buttonWidth + (Number.parseInt(buttonMargin) * 2) + 1) // we add 1 to give us a little leeway
  const prevButtonWidth = Math.ceil(document.getElementsByClassName('previous')[0].getBoundingClientRect().width + 10)
  const nextButtonWidth = Math.ceil(document.getElementsByClassName('next')[0].getBoundingClientRect().width + 10)
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
    <SmartLink v-else-if="currPage !== 1" class="previous" @click="handlePageChange(parsedPrevTo)">
      <SvgIconArrowRight class="previous-svg" />
      <div class="underline-hover">
        Previous
      </div>
    </SmartLink>
    <div v-if="initialCurrentPage && pages" class="pagination-numbers-container">
      <div class="pagination-numbers">
        <span v-if="currPage > maxPages" class="page-list-first"><button
          :class="`pButton${1 === currPage ? ' ' + 'pButton-selected' : ''}`"
          @click="handlePageChange(1)"
        >{{ 1 }}</button>
        </span>
        <span v-if="currPage > maxPages" class="page-list-truncate">...</span>
        <button
          v-for="item in leftPages"
          :key="item"
          :class="`pButton${item === currPage ? ' ' + 'pButton-selected' : ''}`"
          @click="handlePageChange(item)"
        >
          {{ item }}
        </button>
        <span v-if="leftPages.length < pages && leftPages.indexOf(pages) === -1" class="page-list-truncate">...</span>
        <span v-if="leftPages.length < pages && leftPages.indexOf(pages) === -1" class="page-list-right"><button
          :class="`pButton${pages === currPage ? ' ' + 'pButton-selected' : ''}`"
          @click="handlePageChange(pages)"
        >{{ pages }}</button></span>
      </div>
    </div>
    <!-- if legacy attribute nextTo is supplied, use that for Next button instead of handlePageChange -->
    <SmartLink v-if="nextTo" :to="nextTo" class="next">
      <div class="underline-hover">
        Next
      </div>
      <SvgIconArrowRight class="next-svg" />
    </SmartLink>
    <SmartLink v-else-if="currPage !== pages" class="next" @click="handlePageChange(parsedNextTo)">
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
