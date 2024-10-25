<script lang="ts" setup>
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useTheme } from '@/composables/useTheme'

// SVGs
import SvgIconArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// PROPS & DATA
const { nextTo, previousTo, pages, currentPage } = defineProps({
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
  currentPage: {
    type: Number,
    required: false,
  },
  vspbutton: {
    type: String,
    default: 'vspButton'
  },
  vspbuttonselected: {
    type: String,
    default: 'vspButton-selected'
  },
  vspbuttonfast: {
    type: String,
    default: ''
  }
})
const theme = useTheme()
const emit = defineEmits(['changePage'])

const maxPages = ref(10)
const leftPages = ref([1]) //start with 1 page so we can check button width
const currPage = ref(0)
const pageButtons: Ref<HTMLElement | null> = ref(null)

// METHODS
const handlePageChange = (item) => {
  if (currentPage && pages) {
    console.log('handlePageChange', item)
    if (currPage !== item) {
      currPage.value = item
      generateLeftPages()
      emit('changePage', item)
    }
  }
}
const generateLeftPages = () => {
  if (currentPage && pages && maxPages) {
    var start = 1
    var stop =  Math.min(maxPages.value, pages)


    leftPages.value = []
    for (var i = start; i <= stop; i++) {
      leftPages.value.push(i);
    }
    console.log(leftPages.value)
  }
}
const setPaginationMaxPages = (width:number) => {
  if (!currentPage || !pages) return
  // get width of container
  console.log('pagination container width', width)
  // get width of buttons
  // TO get spacing between buttons programmatically
  const itemWidth = document.getElementsByClassName("vspButton")[0].getBoundingClientRect().width + 15; //46 // TODO derive from prexNextButtonWidth? TODO get from UI? BUT NOT RENDERED YET IN FIRST CASE!! NEED FALLBACK? example gets first button width (prev button)
  const prevButtonWidth = document.getElementsByClassName("previous")[0].getBoundingClientRect().width + 10;
  const nextButtonWidth = document.getElementsByClassName("next")[0].getBoundingClientRect().width + 10;
  console.log('itemWidth', itemWidth)
  // calc # of buttons that can fit
  // take width minus the width of: 2 page buttons (last button and '...'), 2 prev/next buttons
  const MaxButtons = Math.max(0, Math.floor(+((width - (prevButtonWidth + nextButtonWidth + (itemWidth * 2))) / itemWidth).toFixed(2)))
  console.log('MaxButtons', MaxButtons)
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
  if (!currentPage || !pages) return

  currPage.value = currentPage

  const { width } = useWindowSize()
  // wait for next tick to ensure children are rendered and width is correct
  nextTick(() => {
    // watch for width changes and update # of buttons that will fit
    watch([width], ([newWidth]) => {
      const paginationWidth = pageButtons.value!.clientWidth
      maxPages.value = setPaginationMaxPages(paginationWidth) as number
      generateLeftPages() // then generate buttons representing pages
    }, { immediate: true })

    // watch for changes to currentPage and let component know
    watch(() => currentPage, (newVal) => {
      handlePageChange(newVal)
    })
  })
})
</script>

<template>
  <div ref="pageButtons" :class="classes" role="navigation" aria-label="page list navigation">
    <SmartLink v-if="previousTo" :to="previousTo" class="previous">
      <SvgIconArrowRight class="previous-svg" />
      <div class="underline-hover">
        Previous
      </div>
    </SmartLink>
    <SmartLink v-else @click="handlePageChange(parsedPrevTo)" class="previous">
      <SvgIconArrowRight class="previous-svg" />
      <div class="underline-hover">
        Previous
      </div>
    </SmartLink>
    <div class="pagination-numbers-container" v-if="currentPage && pages">
      <div class="pagination-numbers">
        <button v-for="item in leftPages"
          @click="handlePageChange(item)"
          :key="item"
          :class="vspbutton + (item == currPage ? ' ' + vspbuttonselected : '')">{{ item }}</button>
        <span v-if="leftPages.length < pages" class="page-list-truncate">...</span>
        <span v-if="leftPages.length < pages" class="page-list-right"><button
            :class="vspbutton + (pages == currPage ? ' ' + vspbuttonselected : '')"
            @click="handlePageChange(pages)">{{ pages }}</button></span>
      </div>
    </div>
    <SmartLink v-if="nextTo" :to="nextTo" class="next">
      <div class="underline-hover">
        Next
      </div>
      <SvgIconArrowRight class="next-svg" />
    </SmartLink>
    <SmartLink v-else @click="handlePageChange(parsedNextTo)" class="next">
      <div class="underline-hover">
        Next
      </div>
      <SvgIconArrowRight class="next-svg" />
    </SmartLink>
    <!-- legacy buttons -->
    <!-- <template v-else>
      <SmartLink v-if="previousTo" :to="previousTo" class="previous">
        <SvgIconArrowRight class="previous-svg" />
        <div class="underline-hover">
          Previous
        </div>
      </SmartLink>
      <SmartLink v-if="nextTo" :to="nextTo" class="next">
        <div class="underline-hover">
          Next
        </div>
        <SvgIconArrowRight class="next-svg" />
      </SmartLink>
    </template> -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_section-pagination.scss";
@import "@/styles/ftva/_section-pagination.scss";

.pagination-numbers-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination-numbers {
    button {
      color: var(--color-secondary-grey-04);
      font-size: 18px;
      padding: 0 12px;
      border: none;
      margin: 0 6px;
    }
  }
}

// NEW STYLES
.vspButton {
  // height: 22px;
  // padding: 2px 7px;
  // font-size: 12px;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid;
  border-radius: 4px;
  background-color: transparent;
}

.vspButton-selected {
  background-color: var(--color-primary-blue-01);
}
</style>