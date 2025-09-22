import { ButtonLinkIcons } from '../../../types/components/buttonLink.types'
import * as API from '../../mock-api.json'

// Mock collections single page
export const mockProgramLandingPage = {
  title: 'Program',
  description: 'Program',
  searchForm: {
    placeholder: 'Search',
    dropdownOptions: [
      'All Programs',
      'Books & E-books',
      'Articles & Journals',
      'Databases',
    ],
  },
  collectionOverview: {
    title: 'Modern Endangered Archives Program',
    subtitle: 'About the Program',
    blockButtons: {
      buttons: [
        {
          label: 'Visit Website',
          to: 'https://google.com',
          iconName: ButtonLinkIcons.ARROW_RIGHT,
        },
      ],
    },
    description: `The Modern Endangered Archives Program funds projects that document, digitize, and make accessible endangered archival materials from the 20th and 21st centuries.

MEAP is dedicated to:
Providing open access to cultural and historical materials from around the world as a challenge to politicized and nationalized historical narratives that minimize or silence multiple voices and perspectives.
Enabling digital preservation of at-risk cultural heritage from parts of the world with limited resources for archival preservation.
Expanding the capacity for digital preservation around the world and building a culture of open access that can continue after the period of the grant.`,
    image: API.image,
  },
}
