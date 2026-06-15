import { computed } from 'vue'
import FooterSock from '@/lib-components/FooterSock'

export default {
  title: 'FOOTER / Sock',
  component: FooterSock,

}

const DefaultTemplate = (args) => {
  void args
  return {
    components: { FooterSock },
    template: '<footer-sock />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FTVAFooterTemplate = (args) => {
  void args
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

export const FTVAFooter = FTVAFooterTemplate.bind({})
FTVAFooter.args = {}

