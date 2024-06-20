import { inject } from 'vue'

// Inject the theme
export function useTheme() {
  const theme = inject('theme')
  return theme
}
