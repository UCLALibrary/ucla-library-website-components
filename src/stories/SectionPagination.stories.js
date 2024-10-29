import { computed } from 'vue'
import SectionPagination from '@/lib-components/SectionPagination'

/**
 * A component to provide pagination for a list of items. It can be used in 2 ways:
 *
 * 1. With a previous and next page string, and no # buttons. In this mode the props determine if the buttons are shown or not
 * 2. With a number of pages and a number representing the initial current page. In this mode the component will show the # buttons, and it will only hide the previous and next buttons if the current page is the first or last page
 *
 * Props:
 * - nextTo: A string representing the URL to the next page
 * - previousTo: A string representing the URL to the previous page
 *
 * Props added 2024-10-29:
 *
 * - pages: A number representing the total number of pages we need to show all content
 * - initialCurrentPage: A number representing the page we are starting on
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

export function WithPagesAndCurrentPage() {
  return {
    components: { SectionPagination },
    template: '<section-pagination :pages="23" :initialCurrentPage="4" />',
  }
}

export function FTVA() {
  return {
    components: { SectionPagination },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: '<section-pagination :pages="23" :initialCurrentPage="14" />',
  }
}
