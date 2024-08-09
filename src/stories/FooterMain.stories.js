import { computed } from 'vue'
import FooterMain from '@/lib-components/FooterMain'

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
