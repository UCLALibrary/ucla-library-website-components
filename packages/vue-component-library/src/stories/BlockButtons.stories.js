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
export function Default() {
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
              label: 'Contact Us',
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

export function AlignCenter() {
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

export function AlignRight() {
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

export function DirectionHorizontal() {
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

export function DirectionHorizontalAlignCenter() {
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

export function DirectionHorizontalAlignRight() {
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

// Edge cases that could break the component
export function EmptyButtons() {
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

export function LongLabels() {
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

export function NoThemeProvided() {
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

export function InvalidEnums() {
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
