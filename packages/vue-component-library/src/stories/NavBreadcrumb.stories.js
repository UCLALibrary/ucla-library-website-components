import { computed } from 'vue'
import router from '@/router'
import NavBreadcrumb from '@/lib-components/NavBreadcrumb'

/**
 * Component description
 *
 * Modes/Usage
 *
 * Props:
 *
 */

// Storybook default settings
export default {
  title: 'NAV / Breadcrumb',
  component: NavBreadcrumb,
}

function LegacyModeTemplate(args) {
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb to="/about/news" title="Jane Doe" parentTitle="Parent"/>',
  }
}

// Legacy breadcrumbs (Values entered at page-level)
export const DefaultModePageProps = LegacyModeTemplate.bind({})

// Breadcrumbs generated from route with option to use title from route or set at page-level
// NOTE

function DynamicModeTemplate(args) {
  router.push(args.route)
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

export const MultiLevelFinalTitleByRoute = DynamicModeTemplate.bind({})
MultiLevelFinalTitleByRoute.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24'
}

export const MultiLevelFinalTitleByProp = DynamicModeTemplate.bind({})
MultiLevelFinalTitleByProp.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24/',
  title: 'Breadcrumb Title Passed by Prop'
}

const testTitlesOverride1 = [{
  titleLevel: 1,
  updatedTitle: 'Override Level 1'
},
{
  titleLevel: 2,
  updatedTitle: 'Override Level 2'
},
{
  titleLevel: 3,
  updatedTitle: 'Override Level 3'
}]

export const OverrideTitlesManually1 = DynamicModeTemplate.bind({})
OverrideTitlesManually1.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24',
  overrideTitleGroup: testTitlesOverride1
}

export const CollapsedFinalRouteByTitle = DynamicModeTemplate.bind({})
CollapsedFinalRouteByTitle.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
}

export const CollapsedFinalPropByTitle = DynamicModeTemplate.bind({})
CollapsedFinalPropByTitle.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
  title: 'Breadcrumb Title Passed by Prop',
}

const testTitlesOverride2 = [{
  titleLevel: 1,
  updatedTitle: '👽 Collections 👽'
},
{
  titleLevel: 3,
  updatedTitle: 'KTLA Collection...'
}]

export const OverrideTitlesManually2 = DynamicModeTemplate.bind({})
OverrideTitlesManually2.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
  overrideTitleGroup: testTitlesOverride2
}

// function Template6(args) {
//   router.push('/watch-and-listen-online/senator-john-f.-kennedy-gives-press-conference-in-los-angeles')
//   return {
//     provide() {
//       return {
//         theme: computed(() => 'ftva'),
//       }
//     },
//     setup() {
//       return { args }
//     },
//     components: { NavBreadcrumb },
//     template: '<nav-breadcrumb v-bind="args" />',
//   }
// }

// export const FTVATheme = Template6.bind({})

// export const FTVAThemeWithPropTitle = Template6.bind({})
// FTVAThemeWithPropTitle.args = {
//   title: 'Breadcrumb Title Passed by Prop',
// }
