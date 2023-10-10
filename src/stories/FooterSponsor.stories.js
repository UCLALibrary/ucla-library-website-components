import FooterSponsor from '@/lib-components/FooterSponsor'

// Storybook default settings
export default {
  title: 'FOOTER / Sponsor',
  component: FooterSponsor,
}

// Variations of stories below
export function Default() {
  return {
    components: { FooterSponsor },
    template: `
        <footer-sponsor />
    `,
  }
}
