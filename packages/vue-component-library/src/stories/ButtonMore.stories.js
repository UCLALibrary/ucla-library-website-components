import ButtonMore from '@/lib-components/ButtonMore'

export default {
  title: 'BUTTON / More',
  component: ButtonMore,
  argTypes: {
    text: { control: 'text' },
    to: { control: 'text' },
  },
}

// Variations of stories below
const DefaultTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { ButtonMore },
    template: '<button-more :text="args.text" :to="args.to" />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  text: undefined,
  to: undefined,
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const WithAlternateTextTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { ButtonMore },
    template: '<button-more :text="args.text" :to="args.to" />',
  }
}

export const WithAlternateText = WithAlternateTextTemplate.bind({})
WithAlternateText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  to: undefined,
}

const WithLinkTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    components: { ButtonMore },
    template: '<button-more :text="args.text" :to="args.to" />',
  }
}

export const WithLink = WithLinkTemplate.bind({})
WithLink.args = {
  text: 'See More',
  to: 'visit/events-exhibits',
}
