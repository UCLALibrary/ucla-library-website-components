import { computed } from 'vue'
import FooterLinks from '@/lib-components/FooterLinks'

export default {
  title: 'FOOTER / Links',
  component: FooterLinks,
}

export function Default() {
  return {
    components: { FooterLinks },
    template: `
        <footer-links />`,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function FTVAStyleLinks() {
  return {
    components: { FooterLinks },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
        <footer-links />`,
  }
}
