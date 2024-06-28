import { computed } from 'vue'
import router from '@/router'
import DividerWayFinder from '@/lib-components/DividerWayFinder'

export default {
  title: 'DIVIDER / Way Finder',
  component: DividerWayFinder,
}

// STORIES
export function Default() {
  router.push('/default')
  return {
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export function Visit() {
  router.push('/visit/eee')
  return {
    components: { DividerWayFinder },
    template: `<divider-way-finder />`,
  }
}

export function About() {
  router.push('/about/fff')
  return {
    components: { DividerWayFinder },
    template: `<divider-way-finder />`,
  }
}

export function Help() {
  router.push('/help/ddd')
  return {
    components: { DividerWayFinder },
    template: `<divider-way-finder />`,
  }
}

export function FTVA() {
  router.push('/default')
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { DividerWayFinder },
    template: `<divider-way-finder />`,
  }
}
