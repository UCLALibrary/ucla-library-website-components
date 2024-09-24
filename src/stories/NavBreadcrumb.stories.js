import { computed } from 'vue'
import router from '@/router'
import NavBreadcrumb from '@/lib-components/NavBreadcrumb'

// Storybook default settings
export default {
  title: 'NAV / Breadcrumb',
  component: NavBreadcrumb,
}

function Template(args) {
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb to="/about/news" title="Jane Doe" parentTitle="Parent"/>',
  }
}

// Legacy breadcrumbs (Values entered at page-level)
export const DefaultSingleLevelWithPageProps = Template.bind({})

// Breadcrumbs generated from route with option to use title from route or set at page-level
function Template2(args) {
  router.push('/parent-1/parent-2/final-breadcrumb/')
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb />',
  }
}

export const MultipleLevelsRouteWithSlashEnding = Template2.bind({})

function Template3(args) {
  router.push('/parent-1/parent-2/final-breadcrumb')
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb />',
  }
}

export const MultipleLevelsRouteNoSlashEnding = Template3.bind({})

function Template4(args) {
  router.push('/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24')
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

export const MultipleLevelsWithRouteTitle = Template4.bind({})

export const MultipleLevelsWithPropTitle = Template4.bind({})
MultipleLevelsWithPropTitle.args = {
  title: 'Breadcrumb Title Passed by Prop',
}

function Template5(args) {
  router.push('/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article')
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

export const CollapsedLevelsWithRouteTitle = Template5.bind({})

export const CollapsedLevelsWithPropTitle = Template5.bind({})
CollapsedLevelsWithPropTitle.args = {
  title: 'Breadcrumb Title Passed by Prop',
}

function Template6(args) {
  router.push('/watch-and-listen-online/senator-john-f.-kennedy-gives-press-conference-in-los-angeles')
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

export const FTVATheme = Template6.bind({})

export const FTVAThemeWithPropTitle = Template6.bind({})
FTVAThemeWithPropTitle.args = {
  title: 'Breadcrumb Title Passed by Prop',
}
