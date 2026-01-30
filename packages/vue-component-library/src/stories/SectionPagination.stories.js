import { computed, ref } from 'vue'
import SectionPagination from '@/lib-components/SectionPagination'
import router from '@/router'

/**
 * A component to provide pagination for a list of items. In _non-legacy mode_, the component will show numbered buttons. It will hide the previous and next buttons if the current page is the first or last page, respectively.
 *
 * The component can be used in the following ways:
 *
 * 1. Legacy mode: Previous page and next page string values passed to the component, and no numbered buttons shown
 *  - Required props: `nextTo`, `previousTo`
 * 2. Dynamic Width mode: Page buttons displayed and dynamically calculated by the number of pages and the size of the pagination container
 *  - Required props: `pages`, `initialCurrentPage`
 * 3. Fixed Width mode: A specific number of page buttons displayed in the pagination container
 *  - Required props: `pages`, `initialCurrentPage`, `fixedPageWidthMode` (true), `fixedPageWidthNum`
 * 4. No Truncation: Display all page buttons without truncation
 *  - Same props as Fixed Width mode
 *  - No truncation will show when `fixedPageWidthNum` is the same value as `pages`
 *
 *
 * Props:
 * - nextTo: A string representing the URL to the next page
 * - previousTo: A string representing the URL to the previous page
 * - pages: A number representing the total number of pages we need to show all content (added 2024-10-29)
 * - initialCurrentPage: A number representing the page we are starting on (added 2024-10-29)
 * - generateLinkCallback: A function that generates the link for the page number. It receives the page number as a parameter (added 2024-11-26)
 * - fixedPageWidthMode: A boolean to generate a fixed number of buttons to display in the pagination container; default value is `false`
 * - fixedPageWidthNum: The number of page buttons to generate when `fixedPageWidthMode` is `true`; if a value is not provide, default number of page buttons to show is 10
 */

export default {
  title: 'SECTION / Pagination',
  component: SectionPagination,
}

export function Default() {
  return {
    components: { SectionPagination },
    template: '<section-pagination previousTo="/page/1" nextTo="/page/3" />',
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function FirstPage() {
  return {
    components: { SectionPagination },
    template: '<section-pagination nextTo="/page/1" />',
  }
}

export function LastPage() {
  return {
    components: { SectionPagination },
    template: '<section-pagination previousTo="/page/10" />',
  }
}

// this story uses the generateLinkCallback prop
// to generate the links in the library-website-nuxt format instead of the default format

const DynamicWidthTemplate = (args) => {
  // mock a library site page where someone has searched 'new' like this:
  // https://www.library.ucla.edu/search-site?q=new&from=10'
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback, args }
    },
    components: { SectionPagination },
    template: '<section-pagination v-bind="args" :generateLinkCallback="sampleCallback"/>',
  }
}

export const DynamicWidth_1Pg = DynamicWidthTemplate.bind({})
DynamicWidth_1Pg.args = {
  pages: 1,
  initialCurrentPage: 1
}

export const DynamicWidth_2Pgs = DynamicWidthTemplate.bind({})
DynamicWidth_2Pgs.args = {
  pages: 2,
  initialCurrentPage: 1
}

export const DynamicWidth_5Pgs = DynamicWidthTemplate.bind({})
DynamicWidth_5Pgs.args = {
  pages: 5,
  initialCurrentPage: 3
}

export const DynamicWidth_10Pgs = DynamicWidthTemplate.bind({})
DynamicWidth_10Pgs.args = {
  pages: 10,
  initialCurrentPage: 5
}

export const DynamicWidth_25Pgs = DynamicWidthTemplate.bind({})
DynamicWidth_25Pgs.args = {
  pages: 25,
  initialCurrentPage: 6
}

export const DynamicWidth_40Pgs = DynamicWidthTemplate.bind({})
DynamicWidth_40Pgs.args = {
  pages: 40,
  initialCurrentPage: 6
}

const FixedWidthTemplate = (args) => {
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback, args }
    },
    components: { SectionPagination },
    template: '<section-pagination :generateLinkCallback="sampleCallback" v-bind="args" :fixedPageWidthMode="true" />',
  }
}

export const FixedWidth_1Pg = FixedWidthTemplate.bind({})
FixedWidth_1Pg.args = {
  pages: 1,
  initialCurrentPage: 1,
  fixedPageWidthNum: 6
}

export const FixedWidth_2Pgs = FixedWidthTemplate.bind({})
FixedWidth_2Pgs.args = {
  pages: 2,
  initialCurrentPage: 1,
  fixedPageWidthNum: 6
}

export const FixedWidth_6Pgs = FixedWidthTemplate.bind({})
FixedWidth_6Pgs.args = {
  pages: 24,
  initialCurrentPage: 3,
  fixedPageWidthNum: 6
}

export const FixedWidth_12Pgs = FixedWidthTemplate.bind({})
FixedWidth_12Pgs.args = {
  pages: 24,
  initialCurrentPage: 10,
  fixedPageWidthNum: 12
}

export const NoTruncation = FixedWidthTemplate.bind({})
NoTruncation.args = {
  pages: 40,
  initialCurrentPage: 10,
  fixedPageWidthNum: 40
}

// this story uses an async fetch to get the total number of pages
// like the FTVA event listing page
export function FTVAFixed_10Pgs() {
  return {
    components: { SectionPagination },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      // similar to ftva event listing page logic
      const totalPages = ref(0)

      // Set totalPages.value asynchronously
      const fetchTotalPages = async () => {
        // Mocking an async fetch call
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(20)
          }, 1000)
        })
        totalPages.value = response
      }

      fetchTotalPages()

      return { totalPages }
    },
    template: '<section-pagination :pages="totalPages" :initialCurrentPage="6" :fixedPageWidthMode="true" :fixedPageWidthNum="10" />'
  }
}
