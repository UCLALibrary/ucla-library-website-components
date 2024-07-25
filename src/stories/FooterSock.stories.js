import FooterSock from '@/lib-components/FooterSock'
import { computed } from 'vue'

export default {
  title: 'FOOTER / Sock',
  component: FooterSock,

}

export function Default() {
  return {
    components: { FooterSock },
    template: '<footer-sock />',
  }
}

export function FTVAFooter() {
  return {
    components: { FooterSock },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: '<footer-sock />',
  }
}
