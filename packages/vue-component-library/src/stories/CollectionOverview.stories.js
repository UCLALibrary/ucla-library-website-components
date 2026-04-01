import { computed } from 'vue'
import CollectionOverview from '@/lib-components/CollectionOverview'
import { ButtonLinkIcons } from '@/types/components/buttonLink.types'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'Funkhaus / Collection Overview',
  component: CollectionOverview,
}

const pageTemplate = `
<div class="page">
    
    <collection-overview v-bind="props" />
    <div class="content-below" style="height: 80vh;" />
    
</div>
`

// Variations of stories below
export function Default() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'Los Angeles Times Photographic Collection ',
          subtitle: 'About this Collection',
          itemsCount: 21963,

          blockButtons: {
            buttons: [
              {
                label: 'Click Here for UCLA Library Locations',
                to: '/help/more',
                iconName: ButtonLinkIcons.ARROW_RIGHT,
              },
              { label: 'Contact Us', to: 'https://google.com' },
            ],
          },
          description:
                        'Collection consists of photonegatives documenting events and people in So. CA and photographic prints documenting events and people in So. CA, the US, and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-1990). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.',
          image: API.image,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function WithoutButtons() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'Collection Overview',
          itemsCount: 150,
          description:
                        'This is a collection overview without any buttons. It is used to demonstrate the component\'s basic functionality.',
          image: API.image,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}

export function LongTextContent() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'The Comprehensive UCLA Library Special Collections: A Multifaceted Repository of Historical, Cultural, and Academic Resources Spanning Multiple Centuries',
          subtitle:
                        'An Extensive Overview of Our Vast and Diverse Collection Holdings',
          itemsCount: 1250000,
          description: `
                        <p>This extraordinary collection represents one of the most comprehensive academic library holdings in the western United States, encompassing over 1.25 million individual items across multiple formats, languages, and historical periods. The collection spans from ancient manuscripts and incunabula to contemporary digital archives, representing a continuous record of human knowledge and cultural expression.</p>
                        
                        <p>The collection includes rare books dating back to the 15th century, including first editions of significant works in literature, science, philosophy, and the arts. Our manuscript collection contains personal papers of notable figures in California history, including politicians, artists, writers, and scientists who have shaped the cultural landscape of the American West.</p>
                        
                        <p>In addition to traditional print materials, the collection features extensive holdings in photography, film, audio recordings, and digital media. The photographic archives alone contain over 500,000 images documenting the history of Los Angeles, California, and the broader American West from the mid-19th century to the present day.</p>
                        
                        <p>The collection also includes significant holdings in area studies, with particular strength in Latin American, Asian American, and Middle Eastern materials. These collections support advanced research in ethnic studies, immigration history, and cross-cultural analysis, making them invaluable resources for scholars worldwide.</p>
                        
                        <p>Special attention has been given to preserving materials related to social movements, including extensive documentation of the Civil Rights Movement, the Chicano Movement, the LGBTQ+ rights movement, and various labor movements that have shaped American society. These materials provide crucial primary sources for understanding the ongoing struggle for social justice and equality.</p>
                        
                        <p>The digital components of the collection include born-digital materials, digitized versions of fragile originals, and interactive multimedia resources that enhance traditional research methods. These digital assets are continuously updated and expanded to reflect the evolving nature of scholarly communication and research practices.</p>
                    `,
          image: API.image,
          blockButtons: {
            buttons: [
              {
                label: 'Advanced Search',
                to: '/search/advanced',
                iconName: ButtonLinkIcons.ARROW_RIGHT,
              },
              {
                label: 'Browse by Subject',
                to: '/collections/subjects',
              },
              {
                label: 'Request Materials',
                to: '/services/request',
              },
              {
                label: 'Digital Exhibits',
                to: '/exhibits/digital',
              },
              {
                label: 'Research Guides',
                to: '/guides/research',
              },
            ],
          },
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}

export function MinimalContent() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'Simple Collection',
          image: API.image,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}

export function NoSubtitle() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'Archival Materials Collection',
          itemsCount: 25000,
          description:
                        'A comprehensive collection of archival materials including correspondence, photographs, legal documents, and other primary source materials.',
          image: API.image,
          blockButtons: {
            buttons: [
              { label: 'Browse Archives', to: '/archives' },
              {
                label: 'Search Finding Aids',
                to: '/finding-aids',
              },
            ],
          },
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}

export function VeryLongTitle() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'The UCLA Library Special Collections Department\'s Comprehensive Digital Archive of Southern California Historical Materials, Cultural Artifacts, and Academic Research Resources',
          subtitle:
                        'Extensive Documentation of Regional History and Culture',
          itemsCount: 750000,
          description:
                        'This collection represents the most comprehensive digital archive of Southern California historical materials available to researchers, students, and the general public.',
          image: API.image,
          blockButtons: {
            buttons: [
              { label: 'Explore Collection', to: '/explore' },
              { label: 'Research Tools', to: '/tools' },
            ],
          },
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}

export function EdgeCaseEmptyStrings() {
  return {
    components: { CollectionOverview },
    data() {
      return {
        props: {
          title: 'Test Collection',
          subtitle: '',
          itemsCount: 0,
          description: '',
          image: API.image,
          blockButtons: {
            buttons: [],
          },
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: pageTemplate,
  }
}
