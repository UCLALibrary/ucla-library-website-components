// Integrating Vuetify with Storybook
// https://storybook.js.org/recipes/vuetify

import { h } from 'vue'
import StoryWrapper from './StoryWrapper.vue'

// Define a decorator function
export const withVuetifyTheme = (storyFn, context) => {
  // Call the original story function to get the story component
  const story = storyFn()

  // Return a new function that will be used as the story component
  return () => {
    // Use the "h" function to create a StoryWrapper element
    return h(
      StoryWrapper, // Component to create
      {}, // Props for StoryWrapper (empty in this case)
      {
        // Pass the story component into the "story" slot of StoryWrapper
        story: () => h(story, { ...context.args }) // The storyFn with context args
      }
    )
  }
}