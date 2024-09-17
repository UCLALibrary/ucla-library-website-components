import { computed } from 'vue'
import router from '@/router'
import NavBreadcrumb from '@/lib-components/NavBreadcrumb'

// Storybook default settings
export default {
  title: 'NAV / Breadcrumb',
  component: NavBreadcrumb,
  decorators: [
    () => ({
      router,
      template: '<story />',
    }),
  ],
}

function Template(args) {
  router.push(args.to)
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

// Legacy breadcrumb (Values entered at page-level)
export const Default = Template.bind({})
Default.args = {
  to: '/about/news',
  title: 'Jane Doe',
  parentTitle: 'Parent',
}

// All breadcrumbs generated from route
export const MultipleNesting = Template.bind({})
MultipleNesting.args = {
  to: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24',
}

// All breadcrumbs generated from route
export const MultipleNestingCollapsed = Template.bind({})
MultipleNestingCollapsed.args = {
  to: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
}

function TemplateFTVA(args) {
  router.push(args.to)
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

// FTVA Event: Using title from Craft data
// to generate final breadcrumb
export const FTVA = TemplateFTVA.bind({})
FTVA.args = {
  to: '/watch-and-listen-online/senator-john-f.-kennedy-gives-press-conference-in-los-angeles',
  title: 'Senator John F. Kennedy: "Press Conference" in Los Angeles?'
}

function TemplateFTVA2(args) {
  router.push('/events/step-up-2-07-07-25')
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

export const FTVA2 = TemplateFTVA2.bind({})
FTVA2.args = {
  parentTitle: '',
  to: '',
  title: 'TEST - Step Up 2: The Streets (2008)'
}
