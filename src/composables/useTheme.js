import { inject } from "vue";
// Inject the theme
export function useTheme(){
  const theme = inject('theme')
  console.log('theme', theme)
  // if (!theme) {
  //   theme = ''
  //   // throw new Error('useTheme() error')
  // }
  return theme;
}