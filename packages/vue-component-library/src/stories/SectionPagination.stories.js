import { computed, ref } from 'vue'
import SectionPagination from '@/lib-components/SectionPagination'
import router from '@/router'

/**
 * A component to provide pagination for a list of items. In _non-legacy mode_, the component will show numbered buttons. It will hide the previous and next buttons if the current page is the first or last page, respectively.
 *
 * The component can be used in the following ways:
 *
 * 1. Legacy mode: With previous page and next page string values passed to the component, and no numbered buttons shown
 *  - Required props: `nextTo`, `previousTo`
 * 2. Dynamic Width mode: With the page buttons displayed and dynamically calculated by the number of pages and the size of the pagination containe; a number representing the initial current page is required
 *  - Required props: `pages`, `initialCurrentPage`
 * 3. Fixed Width mode: With a specific number of page buttons displayed in the pagination container
 *  - Required props: `pages`, `initialCurrentPage`, `fixedPageWidthMode` (true), `fixedPageWidthNum`
 * 4. No Truncation: Display all page buttons without truncation
 *  - Same props as Fixed Width mode
 *  - Set `fixedPageWidthMode` to `true` and `fixedPageWidthNum` to the same numerical value as `pages`
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
export function DynamicWidth_5Pgs() {
  // mock a library site page where someone has searched 'new' like this:
  // https://www.library.ucla.edu/search-site?q=new&from=10'
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="5" :initialCurrentPage="3" :generateLinkCallback="sampleCallback"/>',
  }
}

export function DynamicWidth_10Pgs() {
  // mock a library site page where someone has searched 'new' like this:
  // https://www.library.ucla.edu/search-site?q=new&from=10'
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="10" :initialCurrentPage="5" :generateLinkCallback="sampleCallback"/>',
  }
}

export function DynamicWidth_25pgs() {
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="25" :initialCurrentPage="6" :generateLinkCallback="sampleCallback" />',
  }
}

export function DynamicWidth_40pgs() {
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="40" :initialCurrentPage="6" :generateLinkCallback="sampleCallback" />',
  }
}

export function FixedWidth_6Pgs() {
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="24" :initialCurrentPage="1" :generateLinkCallback="sampleCallback" :fixedPageWidthMode="true" :fixedPageWidthNum="6" />',
  }
}

export function FixedWidth_12Pgs() {
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="24" :initialCurrentPage="10" :generateLinkCallback="sampleCallback" :fixedPageWidthMode="true" :fixedPageWidthNum="12" />',
  }
}

export function No_Truncation() {
  router.push({ path: 'search-site', query: { q: 'new', from: 10 } })
  return {
    setup() {
      // sample callback to generate the link
      const sampleCallback = (pageNumber, queryParams) => {
        return `/search-site?${queryParams}`
      }

      return { sampleCallback }
    },
    components: { SectionPagination },
    template: '<section-pagination :pages="40" :initialCurrentPage="10" :generateLinkCallback="sampleCallback" :fixedPageWidthMode="true" :fixedPageWidthNum="40" />',
  }
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
