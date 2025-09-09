import { computed } from 'vue'
import HeaderCollection from '@/lib-components/HeaderCollection'
import {
  ButtonLinkIcons,
  ButtonLinkVariants,
} from '@/types/components/buttonLink.types'

// Storybook default settings
export default {
  title: 'Funkhaus / Header Collection',
  component: HeaderCollection,
}

// Variations of stories below
export function Default() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'Digital Library Collections',
          title: 'Explore Our Collections',
          text: 'Discover a vast array of digital resources, from rare manuscripts to contemporary research materials. Our collections span centuries and cover diverse subjects.',
          buttons: [
            {
              label: 'Browse Collections',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.ARROW_RIGHT,
            },
            {
              label: 'Search Archives',
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
    template: '<header-collection v-bind="props" />',
  }
}

export function WithRichText() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'Special Collections',
          title: 'Rare & Unique Materials',
          text: '<p>Our <strong>special collections</strong> contain <em>unique materials</em> that are not available elsewhere. These include:</p><ul><li>Rare manuscripts</li><li>Historical photographs</li><li>Original artwork</li></ul>',
          buttons: [
            {
              label: 'View Special Collections',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.EXTERNAL_LINK,
            },
            {
              label: 'Request Access',
              to: 'https://google.com',
              variant: ButtonLinkVariants.SECONDARY,
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
    template: '<header-collection v-bind="props" />',
  }
}

export function SingleButton() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'Research Support',
          title: 'Get Research Help',
          text: 'Our expert librarians are here to help you with your research needs. From finding sources to citation management, we provide comprehensive support.',
          buttons: [
            {
              label: 'Contact a Librarian',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.ARROW_RIGHT,
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
    template: '<header-collection v-bind="props" />',
  }
}

export function MultipleButtons() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'Library Services',
          title: 'Everything You Need',
          text: 'Access a wide range of library services designed to support your academic and research goals.',
          buttons: [
            {
              label: 'Study Spaces',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.ARROW_RIGHT,
            },
            {
              label: 'Research Tools',
              to: 'https://google.com',
              variant: ButtonLinkVariants.SECONDARY,
            },
            {
              label: 'Technology',
              to: 'https://google.com',
              variant: ButtonLinkVariants.TERTIARY,
            },
            {
              label: 'Events',
              to: 'https://google.com',
              variant: ButtonLinkVariants.QUATERNARY,
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
    template: '<header-collection v-bind="props" />',
  }
}

export function LongContent() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle:
                        'This is a very long subtitle that might test the layout and wrapping behavior of the component',
          title: 'This is an extremely long title that should test how the component handles very long text content and whether it wraps properly',
          text: 'This is a very long text content that should test the component\'s ability to handle extensive rich text content. It includes multiple paragraphs and should demonstrate how the component scales with longer content. The text should wrap properly and maintain good readability even when the content is quite extensive. This helps ensure the component is robust and handles real-world content scenarios effectively.',
          buttons: [
            {
              label: 'This is a very long button label that should test the button wrapping and layout',
              to: 'https://google.com',
              iconName: ButtonLinkIcons.ARROW_RIGHT,
            },
            {
              label: 'Another long button',
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
    template: '<header-collection v-bind="props" />',
  }
}

export function MinimalContent() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'Quick Access',
          title: 'Library',
          text: '',
          buttons: [
            {
              label: 'Enter',
              to: 'https://google.com',
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
    template: '<header-collection v-bind="props" />',
  }
}

export function NoButtons() {
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'Information Only',
          title: 'Library Hours',
          text: 'The library is open Monday through Friday from 8 AM to 10 PM. Weekend hours vary by location.',
          buttons: [],
        },
      }
    },

    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<header-collection v-bind="props" />',
  }
}

export function NoThemeProvided() {
  // Ensure component renders without injected theme
  return {
    components: { HeaderCollection },
    data() {
      return {
        props: {
          subtitle: 'No Theme',
          title: 'Still Works',
          text: 'This component should render properly even without a theme provided.',
          buttons: [
            { label: 'Test Button', to: 'https://google.com' },
          ],
        },
      }
    },
    template: '<header-collection v-bind="props" />',
  }
}
