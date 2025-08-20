import { computed, ref } from 'vue'
import SectionPagination from '@/lib-components/SectionPagination'
import router from '@/router'

/**
 * A component to provide pagination for a list of items. It can be used in 2 ways:
 *
 * 1. With a previous and next page string, and no # buttons. In this mode the props determine if the buttons are shown or not
 * 2. With a number of pages and a number representing the initial current page. In this mode the component will show the # buttons, and it will only hide the previous and next buttons if the current page is the first or last page
 *
 * Props:
 * - nextTo: A string representing the URL to the next page
 * - previousTo: A string representing the URL to the previous page
 * - pages: A number representing the total number of pages we need to show all content (added 2024-10-29)
 * - initialCurrentPage: A number representing the page we are starting on (added 2024-10-29)
 * - generateLinkCallback: A function that generates the link for the page number. It receives the page number as a parameter (added 2024-11-26)
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
export function _5PagesAndCurrentPage() {
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
    template: '<section-pagination :pages="5" :initialCurrentPage="4" :generateLinkCallback="sampleCallback"/>',
  }
}

export function _10PagesAndCurrentPage() {
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

export function _23PagesAndCurrentPage() {
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
    template: '<section-pagination :pages="23" :initialCurrentPage="6" :generateLinkCallback="sampleCallback"/>',
  }
}

// this story uses an async fetch to get the total number of pages
// like the FTVA event listing page
export function FTVA() {
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
    template: '<section-pagination :pages="totalPages" :initialCurrentPage="6" />'
  }
}
