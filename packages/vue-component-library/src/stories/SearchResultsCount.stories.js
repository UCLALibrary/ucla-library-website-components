// Storybook default settings
import SearchResultsCount from '@/lib-components/SearchResultsCount.vue'

export default {
  title: 'Funkhaus / Search Results Count',
  component: SearchResultsCount
}

export function Default() {
  return {
    components: { SearchResultsCount },
    template: `
      <search-results-count
        :count="110"
        :prefix="'Catalogue'"
        :label="'Results'"
        :animate="true"
      />
    `
  }
}
export function LotsOfResults() {
  return {
    components: { SearchResultsCount },
    template: `
      <search-results-count
        :count="11342340"
        :prefix="'Catalogue'"
        :label="'Results'"
        :animate="true"
      />
    `
  }
}
export function BigPrefixLabel() {
  return {
    components: { SearchResultsCount },
    template: `
      <search-results-count
        :count="140"
        prefix="Featured News and Articles from the Funkhaus Team"
        label="Cherry-picked Results for you"
        :animate="true"
      />
    `
  }
}
export function PrefixOnly() {
  return {
    components: { SearchResultsCount },
    template: `
      <search-results-count
        :count="10"
        prefix="Featured News"
        label=""
        :animate="true"
      />
    `
  }
}
export function LabelOnly() {
  return {
    components: { SearchResultsCount },
    template: `
      <search-results-count
        :count="2340"
        prefix=""
        label="Cherry-picked Results for you"
        :animate="true"
      />
    `
  }
}
export function NotAnimated() {
  return {
    components: { SearchResultsCount },
    template: `
      <search-results-count
        :count="11"
        :prefix="'Catalogue'"
        :label="'Results'"
        :animate="false"
      />
    `
  }
}
