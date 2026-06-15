import ButtonMore from '@/lib-components/ButtonMore'

export default {
  title: 'BUTTON / More',
  component: ButtonMore,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  return {
    components: { ButtonMore },
    template: '<button-more/>',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const WithAlternateTextTemplate = (args) => {
  return {
    components: { ButtonMore },
    template: '<button-more text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>',
  }
}

export const WithAlternateText = WithAlternateTextTemplate.bind({})
WithAlternateText.args = {}

const WithLinkTemplate = (args) => {
  return {
    components: { ButtonMore },
    template: '<button-more text="See More" to="visit/events-exhibits"/>',
  }
}

export const WithLink = WithLinkTemplate.bind({})
WithLink.args = {}
