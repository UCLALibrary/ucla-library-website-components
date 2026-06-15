export const STORY_THEME_OPTIONS = ['default', 'dlc', 'ftva']

export function normalizeStoryTheme(theme) {
  return theme === 'default' ? '' : theme
}
