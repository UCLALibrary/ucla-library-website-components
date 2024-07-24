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
