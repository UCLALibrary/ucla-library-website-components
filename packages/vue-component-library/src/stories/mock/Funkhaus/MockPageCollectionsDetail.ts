import * as API from '../../mock-api.json'
import { ButtonLinkIcons } from '../../../types/components/buttonLink.types'

// Shared section teaser cards - same for all variants
const sharedSectionTeaserCards = {
  subtitle: 'Featured items from:',
  title: 'Los Angeles Times Photographic Collection',
  items: [
    {
      id: 'dlc-1',
      to: '/collections/digital-archives',
      title: 'Digital Archives Collection',
      text: 'Explore our extensive collection of digitized materials including manuscripts, photographs, and historical documents spanning over 200 years of UCLA history.',
      image: API.image,
      sectionHandle: 'collection',
      customDateTime: 'November 1, 1963',
    },
    {
      id: 'dlc-2',
      to: '/collections/special-collections',
      title: 'Special Collections & Rare Books',
      text: 'Discover rare books, manuscripts, and unique materials that form the cornerstone of our research collections. These items provide invaluable insights into various academic disciplines.',
      image: {
        id: '3156835',
        src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
        alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
        focalPoint: [0.5, 0.5],
      },
      sectionHandle: 'collection',
      customDateTime: 'November 1, 1963',
    },
    {
      id: 'dlc-3',
      to: '/collections/ethnographic-materials',
      title: 'Ethnographic Materials',
      text: 'A collection of ethnographic research materials including field notes, audio recordings, and visual documentation from diverse cultures worldwide.',
      image: {
        id: '3156835',
        src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
        alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
        focalPoint: [0.5, 0.5],
      },
      sectionHandle: 'collection',
      customDateTime: 'November 1, 1963',
    },
  ],
}

// Variant 1: Los Angeles Times (default)
export const mockPageCollectionsDetail = {
  collectionOverview: {
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
  gridMetadata: {
    items: [
      {
        title: 'Access Information',
        items: [
          {
            label: 'Access Condition',
            value: { text: 'copyrighted' },
          },
          {
            label: 'Rights Statement',
            value: {
              text: 'UCLA Library Special Collections, A1713',
            },
          },
          {
            label: 'Rights Contact',
            value: {
              text: 'Charles E. Young Research Library, Box 951575, Los Angeles, CA 90095-1575.<br>Email: <a href="mailto:spec-coll@library.ucla.edu">spec-coll@library.ucla.edu</a>. Phone: <a href="tel:310 825-4988">(310) 825-4988</a>',
            },
          },
        ],
      },
      {
        title: 'Technical Details',
        items: [
          {
            label: 'License',
            image: API.image,
            value: {
              text: 'This work is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International</a>',
            },
          },
          {
            label: 'Manifest URL',
            showButtonIiif: true,
            buttonIiifTo:
                            'https://www.figma.com/design/CDhWDARLb36ftkQce1LyLC/Breakpoints?node-id=75-12920&m=dev',
            value: [
              {
                label: 'Copy URL',
                variant: 'secondary',
                isOutlined: true,
                copyOnClick: true,
                copyUrl:
                                    'https://example.com/resource/123?ref=storybook',
              },
              {
                label: 'Download',
                variant: 'secondary',
                isOutlined: true,
                to: '/src/assets/vue.svg',
                isDownload: true,
              },
            ],
          },
        ],
      },
      {
        title: 'Collection Information',
        items: [
          {
            label: 'Collection',
            value: { text: 'UCLA Digital Library' },
            image: API.image,
          },
          {
            label: 'Resource',
            value: {
              text: '<a href=\'https://ucla.edu\'>UCLA Homepage</a>',
            },
            image: API.image,
          },
        ],
      },
      {
        title: 'Publication Details',
        items: [
          {
            label: 'Publisher',
            value: { text: 'UCLA Press' },
          },
          {
            label: 'Publication Date',
            value: { text: '2024' },
          },
          {
            label: 'ISBN',
            value: { text: '978-0-123456-78-9' },
          },
        ],
      },
    ],
    // Accordion Excerpt Pod
    excerptPod: {
      title: 'Notes',
      subtitle: 'Subtitle goes here',
      text: 'This digital collection is comprised of selected digitized photographic negatives from the analog photographic archive. Digitization and description of this collection is ongoing. The analog collection consists of photonegatives documenting events and people in Southern California and photographic prints documenting events and people in Southern California, the U.S., and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-present). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.',
      labelOpen: 'Show Less',
      labelClose: 'Show More',
      sentenceSplitCount: 1,
    },
    // Button More
    buttonMore: {
      text: 'browse items from collection',
      to: '/',
    },
  },

  sectionTeaserCards: sharedSectionTeaserCards,
}

// Variant 2: Albanian Photographic and Graphic Art Collection (scraped from UCLA DLC)
export const mockPageCollectionsDetailAlbanian = {
  collectionOverview: {
    title: 'Albanian Photographic and Graphic Art Collection',
    subtitle: 'About this Collection',
    itemsCount: 18031,
    blockButtons: {
      buttons: [
        {
          label: 'Browse items in this collection',
          to: '/catalog?f%5Bmember_of_collections_ssim%5D%5B%5D=Albanian+Photographic+and+Graphic+Art+Collection',
          iconName: ButtonLinkIcons.ARROW_RIGHT,
        },
      ],
    },
    description:
            'Following WWII, the government of Albania centered itself on isolationist politics, which separated the country from not only political, but also cultural influences of others. This caused Albanian culture, including film, to follow a strict set of ideologies and aesthetics. Despite media restrictions and enforced censorship, Albanian filmmakers created and shared stories, defining a distinct approach to creating films.',
    image: API.image,
  },
  gridMetadata: {
    items: [
      {
        title: 'Collection Overview',
        items: [
          {
            label: 'Alternative title',
            value: {
              text: 'Albania\'s Photographic and Graphic Art Collections from its Archival National Film Archive',
            },
          },
          {
            label: 'Date created',
            value: { text: '1948-2019' },
          },
          {
            label: 'Program',
            value: {
              text: 'Modern Endangered Archives Program',
              href: '/catalog?f%5Bprogram_sim%5D%5B%5D=Modern+Endangered+Archives+Program',
            },
          },
        ],
      },
      {
        title: 'Find this Collection',
        items: [
          {
            label: 'Repository',
            value: {
              text: 'Arkivi Qendror Shtetëror i Filmit (AQSHF)',
              href: '/catalog?f%5Brepository_sim%5D%5B%5D=Arkivi+Qendror+Shtet%C3%ABror+i+Filmit+%28AQSHF%29',
            },
          },
          {
            label: 'ARK',
            value: { text: 'ark:/21198/z1s19vm6' },
          },
          {
            label: 'Manifest URL',
            showButtonIiif: true,
            buttonIiifTo:
                            'https://iiif.library.ucla.edu/collections/ark%3A%2F21198%2Fz1s19vm6',
            value: [],
          },
        ],
      },
      {
        title: 'Access Condition',
        items: [
          {
            label: 'Rights holder',
            value: { text: 'info@aqshf.gov.al' },
          },
          {
            label: 'Funding note',
            value: {
              text: 'Digitization for the Albanian Photographic and Graphic Art Collection was sponsored by the Modern Endangered Archives Program with funding from Arcadia.',
            },
          },
        ],
      },
      {
        title: 'Notes',
        items: [
          {
            label: 'Description',
            value: {
              text: 'The Albanian National Film Archive (AQSHF) has digitized a curated selection of materials from the photographic and graphic art collections that includes costume and set design sketches, animation slides and production stills, allowing viewers to trace the journey of Albanian visual artists.',
            },
          },
        ],
      },
      {
        title: 'Keywords',
        items: [
          {
            label: 'Genre',
            value: {
              text: '<a href="/catalog?f%5Bgenre_sim%5D%5B%5D=posters">posters</a><br><a href="/catalog?f%5Bgenre_sim%5D%5B%5D=negatives+%28photographs%29">negatives (photographs)</a><br><a href="/catalog?f%5Bgenre_sim%5D%5B%5D=animation+drawings">animation drawings</a><br><a href="/catalog?f%5Bgenre_sim%5D%5B%5D=black-and-white+photographs">black-and-white photographs</a><br><a href="/catalog?f%5Bgenre_sim%5D%5B%5D=color+photographs">color photographs</a>',
            },
          },
          {
            label: 'Subject Geographic',
            value: {
              text: '<a href="/catalog?f%5Bsubject_geographic_sim%5D%5B%5D=Albania">Albania</a>',
            },
          },
          {
            label: 'Subject Temporal',
            value: {
              text: '<a href="/catalog?f%5Bsubject_temporal_sim%5D%5B%5D=20th+century">20th century</a><br><a href="/catalog?f%5Bsubject_temporal_sim%5D%5B%5D=Albania%2C+Present+day+%281950+to+1990s%29">Albania, Present day (1950 to 1990s)</a>',
            },
          },
          {
            label: 'Subjects',
            value: {
              text: '<a href="/catalog?f%5Bsubject_sim%5D%5B%5D=New+Albania+Film+Studio">New Albania Film Studio</a>',
            },
          },
          {
            label: 'Subject Topic',
            value: {
              text: '<a href="/catalog?f%5Bsubject_topic_sim%5D%5B%5D=20th+Century">20th Century</a><br><a href="/catalog?f%5Bsubject_topic_sim%5D%5B%5D=Motion+picture+posters">Motion picture posters</a><br><a href="/catalog?f%5Bsubject_topic_sim%5D%5B%5D=East+European+cinema">East European cinema</a><br><a href="/catalog?f%5Bsubject_topic_sim%5D%5B%5D=Film">Film</a><br><a href="/catalog?f%5Bsubject_topic_sim%5D%5B%5D=Tirana+%28Albania%29">Tirana (Albania)</a><br><a href="/catalog?f%5Bsubject_topic_sim%5D%5B%5D=Motion+picture+stills">Motion picture stills</a>',
            },
          },
        ],
      },
    ],
    excerptPod: null, // Notes only in grid - no ExcerptPod duplicate
    buttonMore: {
      text: 'Browse items in this collection',
      to: '/catalog?f%5Bmember_of_collections_ssim%5D%5B%5D=Albanian+Photographic+and+Graphic+Art+Collection',
    },
  },
  sectionTeaserCards: sharedSectionTeaserCards,
}

// Variant 3: The Ricardo Montejano Collection (scraped from UCLA DLC)
export const mockPageCollectionsDetailRicardoMontejano = {
  collectionOverview: {
    title: 'The Ricardo Montejano Collection',
    subtitle: 'About this Collection',
    itemsCount: 3303,
    blockButtons: {
      buttons: [
        {
          label: 'Browse items in this collection',
          to: '/catalog?f%5Bmember_of_collections_ssim%5D%5B%5D=The+Ricardo+Montejano+Collection',
          iconName: ButtonLinkIcons.ARROW_RIGHT,
        },
      ],
    },
    description:
      'Starting in the 1970s, Ricardo Montejano collected field and studio recordings of various populations in Mexico. His work illuminates a history of social movements and indigenous knowledge throughout the country.',
    image: API.image,
  },
  gridMetadata: {
    items: [
      {
        title: 'Collection Overview',
        items: [
          {
            label: 'Program',
            value: {
              text: 'Modern Endangered Archives Program',
              href: '/catalog?f%5Bprogram_sim%5D%5B%5D=Modern+Endangered+Archives+Program',
            },
          },
        ],
      },
      {
        title: 'Find this Collection',
        items: [
          {
            label: 'Repository',
            value: {
              text: 'Fonoteca Nacional de México',
              href: '/catalog?f%5Brepository_sim%5D%5B%5D=Fonoteca+Nacional+de+M%C3%A9xico',
            },
          },
          {
            label: 'ARK',
            value: { text: 'ark:/21198/z1j44g9k' },
          },
          {
            label: 'Manifest URL',
            showButtonIiif: true,
            buttonIiifTo: 'https://iiif.library.ucla.edu/collections/ark%3A%2F21198%2Fz1j44g9k',
            value: [],
          },
        ],
      },
      {
        title: 'Access Condition',
        items: [
          {
            label: 'Rights contact',
            value: { text: 'investigaciondgfn@cultura.gob.mx' },
          },
          {
            label: 'Funding note',
            value: {
              text: 'Digitization for The Ricardo Montejano Collection was sponsored by the Modern Endangered Archives Program with funding from Arcadia.',
            },
          },
        ],
      },
      {
        title: 'Notes',
        items: [
          {
            label: 'Description',
            value: {
              text: 'This collection includes 3,300 audio recordings that document Mexican social movements and indigenous cultures through the voices of social activists, peasants, native (indigenous) Mexicans, musicians, traditional physicians, and guardians of traditional culture. The original field and studio recordings were collected throughout Mexico by Ricardo Montejano between 1970 and the present. These audio recordings document political and cultural realities of Mexican people.',
            },
          },
        ],
      },
      {
        title: 'Keywords',
        items: [
          {
            label: 'Genre',
            value: {
              text: '<a href="/catalog?f%5Bgenre_sim%5D%5B%5D=radio+news+programs">radio news programs</a>',
            },
          },
          {
            label: 'Subject Geographic',
            value: {
              text: '<a href="/catalog?f%5Bsubject_geographic_sim%5D%5B%5D=Mexico">Mexico</a><br><a href="/catalog?f%5Bsubject_geographic_sim%5D%5B%5D=Latin+America">Latin America</a>',
            },
          },
        ],
      },
    ],
    excerptPod: null, // Notes only in grid - no ExcerptPod duplicate
    buttonMore: {
      text: 'Browse items in this collection',
      to: '/catalog?f%5Bmember_of_collections_ssim%5D%5B%5D=The+Ricardo+Montejano+Collection',
    },
  },
  sectionTeaserCards: sharedSectionTeaserCards,
}

// Variant 4: Placeholder for future scraped data
export const mockPageCollectionsDetailVariant3 = {
  ...mockPageCollectionsDetail,
  collectionOverview: {
    ...mockPageCollectionsDetail.collectionOverview,
    title: 'Collection Variant 3',
    itemsCount: 12000,
    description: 'Placeholder description for variant 3. Add scraped data when available.',
  },
  gridMetadata: {
    ...mockPageCollectionsDetail.gridMetadata,
    items: mockPageCollectionsDetail.gridMetadata.items.slice(0, 2),
    excerptPod: mockPageCollectionsDetail.gridMetadata.excerptPod,
    buttonMore: mockPageCollectionsDetail.gridMetadata.buttonMore,
  },
  sectionTeaserCards: sharedSectionTeaserCards,
}

// Variant selector for Storybook
export const mockPageCollectionsDetailVariants = {
  default: mockPageCollectionsDetail,
  albanian: mockPageCollectionsDetailAlbanian,
  ricardoMontejano: mockPageCollectionsDetailRicardoMontejano,
  variant3: mockPageCollectionsDetailVariant3,
}
