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
    template: '<nav-breadcrumb to="/about/news" title="Child" parentTitle="Parent"/>',
  }
}

// Legacy breadcrumbs (Values entered at page-level)
export const DefaultLegacyModeWithProps = LegacyModeTemplate.bind({})

// Breadcrumbs generated from route with option to use title from route or set at page-level
// UPDATE NOTE

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

export const CrumbsByRoute1Level = DynamicModeTemplate.bind({})
CrumbsByRoute1Level.args = {
  route: '/la-région-centrale-10-20-23-screening-03-08-24'
}

export const CrumbsByRoute2Levels = DynamicModeTemplate.bind({})
CrumbsByRoute2Levels.args = {
  route: '/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24'
}

export const CrumbsByRoute3Levels = DynamicModeTemplate.bind({})
CrumbsByRoute3Levels.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24'
}

export const Collapsed5Levels = DynamicModeTemplate.bind({})
Collapsed5Levels.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
}

export const Collapsed8Levels = DynamicModeTemplate.bind({})
Collapsed8Levels.args = {
  route: '/shop/products/electronics/mobile-phones/samsung/galaxy/z-series/sale',
}

export const OverrideFinalTitleByTitleProp = DynamicModeTemplate.bind({})
OverrideFinalTitleByTitleProp.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24/',
  title: 'Final Title Passed by Prop'
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

export const OverrideTitlesByOverrideProp1 = DynamicModeTemplate.bind({})
OverrideTitlesByOverrideProp1.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24',
  overrideTitleGroup: testTitlesOverride1
}

const testTitlesOverride2 = [{
  titleLevel: 1,
  updatedTitle: '👽 Collections 👽'
},
{
  titleLevel: 3,
  updatedTitle: 'KTLA Collection... 🎉'
},
{
  titleLevel: 5,
  updatedTitle: 'Demo Article 🎉'
}
]

export const OverrideTitlesByOverrideProp2 = DynamicModeTemplate.bind({})
OverrideTitlesByOverrideProp2.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
  overrideTitleGroup: testTitlesOverride2
}

function FTVATemplate(args) {
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

export const FTVATheme = FTVATemplate.bind({})
