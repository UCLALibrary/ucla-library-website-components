import ButtonLink from '@/lib-components/ButtonLink'

// Storybook default settings
export default {
  title: 'BUTTON / Link',
  component: ButtonLink,

  argTypes: {
    label: { type: 'string' },
    iconName: {
      type: 'select',
      options: [
        'svg-arrow-right',
        'svg-arrow-download',
        'svg-external-link',
        'icon-close',
      ],
    },
    isSecondary: { type: 'boolean' },
    isTertiary: { type: 'boolean' },
    isQuaternary: { type: 'boolean' },
    to: { type: 'string' },
  },
}

function Template(args) {
  return {
    components: { ButtonLink },
    setup() {
      return { args }
    },
    template: '<button-link v-bind="args" />',
  }
}

export const WithControls = {
  args: {
    label: 'Ibus orci Luctus no template',
  },
}

export const WithControlsIconClose = Template.bind({})
WithControlsIconClose.args = {
  label: 'Ibus orci Luctus',
  iconName: 'icon-close',
}

// Variations of stories below
export function Default() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Egest perl Conub" to="/help/more" />',
  }
}

export function SecondaryInternal() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Etiam et Ultrices" :isSecondary="true" to=\'/help/more\' />',
  }
}

export function SecondaryLibraryInternal() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Etiam et Ultrices" :isSecondary="true" to=\'https://calendar.library.ucla.edu/\' />',
  }
}

export function SecondaryExternal() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Etiam et Ultrices" :isSecondary="true" to=\'https://www.google.com/\' />',
  }
}

export function LongLabel() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Proin sodales dolor sit amet." iconName="svg-arrow-right" to=\'/help/more\'/>',
  }
}

export function HasGlyph() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Aug id Dignissim" :isSecondary="true"  :is-download="true" to=\'/help/more\'/>',
  }
}

export function HasExternalGlyph() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Aug id Dignissim" :isSecondary="true" iconName="svg-external-link" to=\'www.google.com\'/>',
  }
}

export function HasNoGlyph() {
  return {
    components: { ButtonLink },
    template: '<button-link label="Aug id Dignissim" :isSecondary="true" icon-name="none" to=\'www.google.com\'/>',
  }
}
