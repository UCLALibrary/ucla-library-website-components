import { computed, onBeforeUnmount, onMounted } from 'vue'
import NavBreadcrumb from '@/lib-components/NavBreadcrumb'
import { useGlobalStore } from '@/stores/GlobalStore'

// Storybook default settings
export default {
  title: 'NAV / Breadcrumb',
  component: NavBreadcrumb,
}

// Variations
export function Default() {
  return {
    components: { NavBreadcrumb },
    template:
            '<nav-breadcrumb title="jane doe" to="/about/news" parent-title="parent"/>',
  }
}

function Template(args) {
  return {
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        // Set initial winWidth
        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        // Clean up
        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

export const MultipleNesting = Template.bind({})
MultipleNesting.args = {
  uri: '/explore-collections/watch-and-listen-online/senator-john-f.-kennedy-gives-press-conference-in-los-angeles',
}

export const MultipleNestingCollapsed = Template.bind({})
MultipleNestingCollapsed.args = {
  uri: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
}

export function FTVA() {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { NavBreadcrumb },
    template:
            '<nav-breadcrumb title="jane doe" to="/about/news" parent-title="parent"/>',
  }
}
