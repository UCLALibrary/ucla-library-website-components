import FooterMain from '@/lib-components/FooterMain'
import { computed } from 'vue'

export default {
  title: 'FOOTER / Main',
  component: FooterMain,
}

export function Default() {
  return {
    components: { FooterMain },
    template: `
        <footer-main />`,
  }
}

export function FTVAFooter() {
  return {
    components: { FooterMain },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
        <footer-main />`,
  }
}
