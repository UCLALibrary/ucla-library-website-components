import { computed } from 'vue'
import FooterLinks from '@/lib-components/FooterLinks'

export default {
  title: 'FOOTER / Links',
  component: FooterLinks,
}

const DefaultTemplate = (args) => {
  return {
    components: { FooterLinks },
    template: `
        <footer-links />`,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FTVAStyleLinksTemplate = (args) => {
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

export const FTVAStyleLinks = FTVAStyleLinksTemplate.bind({})
FTVAStyleLinks.args = {}
