// Helper utilities for Storybook page stories
// Reduces duplication across page story files

import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'

/**
 * Sets up the global store with mock header navigation data
 * This is used by all page stories to initialize the header
 */
export function setupGlobalStore() {
  const globalStore = useGlobalStore()
  globalStore.header.primary = mockGlobalHeaderNavigation.primary
  globalStore.header.secondary = mockGlobalHeaderNavigation.secondary
  return globalStore
}

/**
 * Returns the standard NavSearch props used across all page stories
 * Can be spread directly into NavSearch component: <NavSearch v-bind="navSearchProps" />
 */
export function getNavSearchProps() {
  return {
    'show-divider': true,
    'dropdown-options': mockGlobalNavSearch.dropdownOptions,
    'dropdown-default-value': mockGlobalNavSearch.dropdownDefaultValue,
    'placeholder': mockGlobalNavSearch.placeholder,
    'bottom-text': '',
    'bottom-link': null,
  }
}

/**
 * Returns the mockGlobalNavSearch object for use in templates
 * Use this when you need to access individual properties in templates
 */
export function getMockGlobalNavSearch() {
  return mockGlobalNavSearch
}

/**
 * Creates a standard story export default configuration
 * @param {string} title - Story title (e.g., 'Funkhaus / Pages / Page About')
 * @param {string} description - Component description
 * @returns {object} Storybook export default configuration
 */
export function createPageStoryConfig(title, description) {
  return {
    title,
    component: {},
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: {
          component: description,
        },
      },
    },
    argTypes: {
      theme: {
        control: { type: 'select' },
        options: ['default', 'dlc'],
        description: 'Theme variant for the page',
      },
    },
  }
}
