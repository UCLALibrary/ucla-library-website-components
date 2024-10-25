import SectionPagination from '@/lib-components/SectionPagination'
import { computed } from 'vue'

// Storybook default settings
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
    template: '<section-pagination :pages="23" :currentPage="4" />',
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
    template: '<section-pagination :pages="23" :currentPage="4" />',
  }
}