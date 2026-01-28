import * as API from '../../mock-api.json'
import { ButtonLinkIcons } from '../../../types/components/buttonLink.types'

// Mock collections single page
export const mockCollectionsDataPage = {
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

  sectionTeaserCards: {
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
  },
}
