// Helper utilities for Storybook page stories
// Reduces duplication across page story files

import { useGlobalStore } from '@/stores/GlobalStore'
import {
  mockGlobalHeaderNavigation,
  mockGlobalNavSearch,
} from '@/stories/mock/Funkhaus/MockGlobalComponents'

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
 * Returns the mockGlobalNavSearch object for use in templates
 * Use this when you need to access individual properties in templates
 */
export function getMockGlobalNavSearch() {
  return mockGlobalNavSearch
}
