import { computed } from 'vue'
import router from '@/router'
import NavBreadcrumb from '@/lib-components/NavBreadcrumb'

/**
 * A component for navigational breadcrumbs
 *
 * The component can be used in the following ways:
 *
 * 1. Legacy mode: Creates a single level breadcrumb of a parent title and child title; set with the `parentTitle`, `title`, `to` props at the page-level
 * - Setting all three props initiates the legacy pattern
 * - `to` prop is the URL for the parent title
 *
 * 2. Dynamic/Route-based mode: Parses breadcrumb titles from a url route; with options to:
 * - Override the final breadcrumb with the `title` prop
 * - Override any nested breadcrumb title by using the `overrideTitleGroup` prop
 *
 * Props:
 * - to: A string url for the parentTitle in the legacy breadcrumb pattern
 * - parentTitle: A string value for legacy breadcrumb pattern
 * - title: A string value for setting the final breadcrumb title for either the legacy or route-based pattern
 * - overrideTitleGroup: An array of objects to manually override breadcrumb titles; each object represents a breadcrumb to be overriden, and contains the breadcrumb's nested level (`titleLevel`: number; starts at 1) and the new title (`updatedTitle`: string)
 */

// Storybook default settings
export default {
  title: 'NAV / Breadcrumb',
  component: NavBreadcrumb,
}

// Legacy breadcrumbs pattern
const LegacyModeTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb to="/about/news" title="Child" parentTitle="Parent"/>',
  }
}

export const DefaultLegacyModeWithProps = LegacyModeTemplate.bind({})

// Breadcrumbs generated from route
const DynamicModeTemplate = (args) => {
  router.push(args.route)
  return {
    setup() {
      return { args }
    },
    components: { NavBreadcrumb },
    template: '<nav-breadcrumb v-bind="args" />',
  }
}

export const CrumbsByRouteRootLevel = DynamicModeTemplate.bind({})
CrumbsByRouteRootLevel.args = {
  route: '/about-page'
}

export const CrumbsByRoute1Level = DynamicModeTemplate.bind({})
CrumbsByRoute1Level.args = {
  route: '/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24'
}

export const CrumbsByRoute2Levels = DynamicModeTemplate.bind({})
CrumbsByRoute2Levels.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24'
}

export const CrumbsByRoute3Levels = DynamicModeTemplate.bind({})
CrumbsByRoute3Levels.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/',
}

export const Collapsed4Levels = DynamicModeTemplate.bind({})
Collapsed4Levels.args = {
  route: '/explore-collections/watch-and-listen-online/ktla-collection/national-and-local-politics/ktla-news-demo-article',
}

export const Collapsed7Levels = DynamicModeTemplate.bind({})
Collapsed7Levels.args = {
  route: '/shop/products/electronics/mobile-phones/samsung/galaxy/z-series/sale',
}

export const OverrideFinalTitleByTitleProp = DynamicModeTemplate.bind({})
OverrideFinalTitleByTitleProp.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24/',
  title: 'Final Title Passed by Prop'
}

const titlesOverride1 = [{
  titleLevel: 1,
  updatedTitle: 'Override Level 1'
},
{
  titleLevel: 2,
  updatedTitle: 'Override Level 2'
},
{
  titleLevel: 3,
  updatedTitle: 'Override Level 3 (Final Title)'
}]

export const OverrideTitlesByOverrideProp1 = DynamicModeTemplate.bind({})
OverrideTitlesByOverrideProp1.args = {
  route: '/events/upcoming-events/la-région-centrale-10-20-23-screening-03-08-24',
  overrideTitleGroup: titlesOverride1
}

const titlesOverride2 = [{
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
  overrideTitleGroup: titlesOverride2
}

const titlesOverride3 = [
  {
    titleLevel: 2,
    updatedTitle: 'KTLA Collection'
  }
]

export const TruncatedTitleLongChild = DynamicModeTemplate.bind({})
TruncatedTitleLongChild.args = {
  route: '/collections/ktla-news-project-tom-bradley-mayor-of-los-angeles/kenneth-hahn-and-tom-bradley-discuss-the-legacy-of-supreme-court-chief-justice-earl-warren/',
}

export const TruncatedTitleLongParent = DynamicModeTemplate.bind({})
TruncatedTitleLongParent.args = {
  route: '/collections/kenneth-hahn-and-tom-bradley-discuss-the-legacy-of-supreme-court-chief-justice-earl-warren/ktla-news-project-tom-bradley-mayor-of-los-angeles/',
}

const FTVATemplate = (args) => {
  router.push(args.route)
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
FTVATheme.args = {
  route: '/watch-and-listen-online/ktla-collection/senator-john-f.-kennedy-gives-press-conference-in-los-angeles',
  overrideTitleGroup: titlesOverride3
}

export const FTVAThemeRootLevel = FTVATemplate.bind({})
FTVAThemeRootLevel.args = {
  route: '/about-page'
}
