import * as API from '../../mock-api.json'
import { ButtonLinkIcons } from '../../../types/components/buttonLink.types'

// Mock collections single page
export const mockCollectionsDataPage = {
  title: 'Collections',
  description: 'Collections',
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
    title: 'Los Angeles Times Photographic Collection ',
    subtitle: 'About this Collection',
    itemsCount: 21963,

    blockButtons: {
      buttons: [
        {
          label: 'Click Here for UCLA Library Locations',
          to: 'https://google.com',
          iconName: ButtonLinkIcons.ARROW_RIGHT,
        },
        { label: 'Contact Us', to: 'https://google.com' },
      ],
    },
    description:
            'Collection consists of photonegatives documenting events and people in So. CA and photographic prints documenting events and people in So. CA, the US, and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-1990). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.',
    image: API.image,
  },
  gridAssets: {
    subtitle: 'Featured items from:',
    title: 'Los Angeles Times Photographic Collection',
    items: [
      {
        id: '4',
        href: '/asset-4',
        image: {
          src: 'https://picsum.photos/400/300?random=4',
          alt: 'Half-length portrait of comedian Danny Thomas with pills he takes for his voice',
          width: 400,
          height: 300,
        },
        title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
        description:
                    'PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.',
        date: 'November 1, 1963',
      },
      {
        id: '5',
        href: '/asset-5',
        image: {
          src: 'https://picsum.photos/400/300?random=5',
          alt: 'Half-length portrait of San Fernando Valley State College sociologist Dr. Lewis Yablonsky',
          width: 400,
          height: 300,
        },
        title: '1/2 length portrait of San Fernando Valley State College sociologist Dr. Lewis Yablonsky, 1965',
        description:
                    'SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin \'curbs\'',
        date: 'November 7, 1965',
      },
      {
        id: '6',
        href: '/asset-6',
        image: {
          src: 'https://picsum.photos/400/300?random=6',
          alt: '3/4 length portrait of singer Lionel Richie',
          width: 400,
          height: 300,
        },
        title: '3/4 length portrait of singer Lionel Richie, 1984',
        description:
                    'Lionel Richie: He\'ll headline the Closing Ceremony',
        date: 'August 10, 1984',
      },
      {
        id: '7',
        href: '/asset-7',
        image: {
          src: 'https://picsum.photos/400/300?random=7',
          alt: '3/4 length portrait of Walburga Oesterreich',
          width: 400,
          height: 300,
        },
        title: '3/4 length portrait of Walburga Oesterreich, circa 1930',
        description:
                    'Handwriting on negative states \'Mrs. Walburga Oesterreich\' In 1922 Walburga Oesterreich\'s husband Fred Oesterreich was shot and killed supposedly by a burglar in their Los Angeles, Calif. home.',
        date: '1930',
      },
      {
        id: '8',
        href: '/asset-8',
        image: {
          src: 'https://picsum.photos/400/300?random=8',
          alt: '3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel',
          width: 400,
          height: 300,
        },
        title: '3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel in Los Angeles, Calif., 1967',
        description:
                    'ROBOT COURTESY-Betty Myrah gets a mechanized coffee break with a 3,500-pound \'portable\' robot pouring in the most acceptable manner.',
        date: 'October 3, 1967',
      },
      {
        id: '9',
        href: '/asset-9',
        image: {
          src: 'https://picsum.photos/400/300?random=9',
          alt: '5th grade boy pinning diaper on baby doll in family life class',
          width: 400,
          height: 300,
        },
        title: '5th grade boy pinning diaper on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965',
        description:
                    'PRACTICE SESSION-Rickey Flocken fumbles with safety pin as he attempts to cinch diaper around doll. Project is part of health class at Torrance school',
        date: 'March 24, 1965',
      },
      {
        id: '10',
        href: '/asset-10',
        image: {
          src: 'https://picsum.photos/400/300?random=10',
          alt: '9-year-old Tracy Austin holding her tennis rackets at Los Angeles Junior Tennis Tournament',
          width: 400,
          height: 300,
        },
        title: '9-year-old Tracy Austin holding her tennis rackets at Los Angeles Junior Tennis Tournament, 1972',
        description:
                    'CHAMPI Tracy Austin is just 9 years old but she\'s already a champion. In fact, the Rolling Hills youngster is a double champ. She best Shelly Stillman of Encinitas, 6-4, 6-0, for the 12-and-under title in the L.A.',
        date: 'July 24, 1972',
      },
      {
        id: '11',
        href: '/asset-11',
        image: {
          src: 'https://picsum.photos/400/300?random=11',
          alt: 'Tracy Austin playing in the Los Angeles Junior Tennis Tournament',
          width: 400,
          height: 300,
        },
        title: 'Tracy Austin playing in the Los Angeles Junior Tennis Tournament, 1972',
        description:
                    '9-year-old Tracy Austin playing in the Los Angeles Junior Tennis Tournament, 1972',
        date: 'July 24, 1972',
      },
      {
        id: '12',
        href: '/asset-12',
        image: {
          src: 'https://picsum.photos/400/300?random=12',
          alt: '11 year-old actress Margaret O\'Brien seated on suitcase holding a doll at Los Angeles Union Station',
          width: 400,
          height: 300,
        },
        title: '11 year-old actress Margaret O\'Brien seated on suitcase holding a doll at Los Angeles Union Station, 1948',
        description:
                    'HOME AGAIN-Margaret O\'Brien, 11-year-old film star returns to Southland from 22 days of travel abroad. She holds a doll which was given her on visit to Paris.',
        date: 'May 24, 1948',
      },
    ],
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
  },
  sectionTeaserCards: {
    sectionTitle: 'DLC Collections - Edge Cases with Date',
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
  },
  buttonMore: {
    text: 'browse items from collection',
    to: '/',
  },
  excerptPod: {
    title: 'Notes',
    subtitle: 'Subtitle goes here',
    text: 'This digital collection is comprised of selected digitized photographic negatives from the analog photographic archive. Digitization and description of this collection is ongoing. The analog collection consists of photonegatives documenting events and people in Southern California and photographic prints documenting events and people in Southern California, the U.S., and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-present). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.',
    labelOpen: 'Show Less',
    labelClose: 'Show More',
    sentenceSplitCount: 1,
  },
}
