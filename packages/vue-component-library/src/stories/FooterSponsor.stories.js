import FooterSponsor from '@/lib-components/FooterSponsor'

// Storybook default settings
export default {
  title: 'FOOTER / Sponsor',
  component: FooterSponsor,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  return {
    components: { FooterSponsor },
    template: `
        <footer-sponsor />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
