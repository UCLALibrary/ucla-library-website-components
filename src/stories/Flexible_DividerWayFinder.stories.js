import { computed } from 'vue'
// import router from '@/router'
import FlexibleDividerWayFinder from '@/lib-components/Flexible/DividerWayFinder.vue'

export default {
  title: 'FLEXIBLE / Divider Way Finder',
  component: FlexibleDividerWayFinder,
}

// STORIES
export function Default() {
  router.push('/default')
  return {
    components: { FlexibleDividerWayFinder },
    template: '<flexible-divider-way-finder />',
  }
}