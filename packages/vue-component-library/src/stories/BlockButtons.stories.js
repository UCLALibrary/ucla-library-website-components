import { computed } from 'vue'
import BlockButtons from '@/lib-components/BlockButtons'
import {
  BlockButtonDirection,
  BlockButtonsAlign,
} from '@/types/components/blockButtons.types'
import {
  ButtonLinkIcons,
  ButtonLinkVariants,
} from '@/types/components/buttonLink.types'

// Storybook default settings
export default {
  title: 'Funkhaus / Block Buttons',
  component: BlockButtons,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Click Here for UCLA Library Locations',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.ARROW_RIGHT,
            },
            {
              label: 'Contact Us ',
              to: 'https://google.com',
              variant: ButtonLinkVariants.TERTIARY,
            },
          ],
        },
      }
    },

    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons  v-bind="props" />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const AlignCenterTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Click Here for UCLA Library Locations',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
            {
              label: 'Contact Us',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
          ],
          align: BlockButtonsAlign.Center,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons  v-bind="props" />',
  }
}

export const AlignCenter = AlignCenterTemplate.bind({})
AlignCenter.args = {}

const AlignRightTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Click Here for UCLA Library Locations',
              to: 'https://google.com',
            },
            { label: 'Contact Us', to: 'https://google.com' },
          ],
          align: BlockButtonsAlign.Right,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons  v-bind="props" />',
  }
}

export const AlignRight = AlignRightTemplate.bind({})
AlignRight.args = {}

const DirectionHorizontalTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Click Here for UCLA Library Locations',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
            {
              label: 'Contact Us',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
          ],
          direction: BlockButtonDirection.Horizontal,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons  v-bind="props" />',
  }
}

export const DirectionHorizontal = DirectionHorizontalTemplate.bind({})
DirectionHorizontal.args = {}

const DirectionHorizontalAlignCenterTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Click Here for UCLA Library Locations',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
            {
              label: 'Contact Us',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
          ],
          align: BlockButtonsAlign.Center,
          direction: BlockButtonDirection.Horizontal,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons  v-bind="props" />',
  }
}

export const DirectionHorizontalAlignCenter = DirectionHorizontalAlignCenterTemplate.bind({})
DirectionHorizontalAlignCenter.args = {}

const DirectionHorizontalAlignRightTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Click Here for UCLA Library Locations',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
            { label: 'Contact Us', to: 'https://google.com' },
          ],
          align: BlockButtonsAlign.Right,
          direction: BlockButtonDirection.Horizontal,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons  v-bind="props" />',
  }
}

export const DirectionHorizontalAlignRight = DirectionHorizontalAlignRightTemplate.bind({})
DirectionHorizontalAlignRight.args = {}

// Edge cases that could break the component
const EmptyButtonsTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [],
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons v-bind="props" />',
  }
}

export const EmptyButtons = EmptyButtonsTemplate.bind({})
EmptyButtons.args = {}

const LongLabelsTemplate = (args) => {
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'This is an excessively long label intended to test overflow, wrapping, and layout resilience in various viewports and alignments',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.EXTERNAL_LINK,
            },
            {
              label: 'Short label',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
          ],
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons v-bind="props" />',
  }
}

export const LongLabels = LongLabelsTemplate.bind({})
LongLabels.args = {}

const NoThemeProvidedTemplate = (args) => {
  // Ensure component renders without injected theme
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            { label: 'No Theme', to: 'https://google.com' },
            { label: 'Still Works', to: 'https://google.com' },
          ],
        },
      }
    },
    template: '<block-buttons v-bind="props" />',
  }
}

export const NoThemeProvided = NoThemeProvidedTemplate.bind({})
NoThemeProvided.args = {}

const InvalidEnumsTemplate = (args) => {
  // Pass invalid enum values to check class generation robustness
  return {
    components: { BlockButtons },
    data() {
      return {
        props: {
          buttons: [
            {
              label: 'Invalid Align/Dir',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.NONE,
            },
            {
              label: 'Check Classes',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.DOWNLOAD,
            },
          ],
          // @ts-expect-error
          align: 'diagonal',
          // @ts-expect-error
          direction: 'zigzag',
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<block-buttons v-bind="props" />',
  }
}

export const InvalidEnums = InvalidEnumsTemplate.bind({})
InvalidEnums.args = {}
