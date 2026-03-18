import * as API from '../../mock-api.json'

// Variant 1: Default (Los Angeles Times)
export const mockPageAssetDetailData = {
  detailHeader: {
    totalResults: 21963,
    tag: {
      name: 'Collection',
      value: {
        label: 'Los Angeles Times Photographic Collection',
        to: 'https://www.google.com',
      },
    },
    previousTo: 'https://www.google.com',
    nextTo: 'https://www.google.com',
    backTo: 'https://www.google.com',
  },
  detailMedia: {
    manifestUrl:
            'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1kh5nht/manifest',
    title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
    description:
            'A self-portrait by Vincent van Gogh from 1888, dedicated to Paul Gauguin',
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
                            'https://wellcomelibrary.org/iiif/b18035723/manifest',
            value: [
              {
                label: 'Copy URL',
                variant: 'secondary',
                isOutlined: true,
                copyOnClick: true,
                copyUrl:
                                    'https://wellcomelibrary.org/iiif/b18035723/manifest',
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
        title: 'Asset Information',
        items: [
          {
            label: 'Collection',
            value: {
              text: 'Los Angeles Times Photographic Collection',
            },
            image: API.image,
          },
          {
            label: 'Date Created',
            value: { text: 'November 1, 1963' },
          },
          {
            label: 'Photographer',
            value: { text: 'Los Angeles Times Staff' },
          },
        ],
      },
      {
        title: 'Digital Preservation',
        items: [
          {
            label: 'Format',
            value: { text: 'TIFF' },
          },
          {
            label: 'Resolution',
            value: { text: '300 DPI' },
          },
          {
            label: 'File Size',
            value: { text: '2.4 MB' },
          },
        ],
      },
    ],
  },
}

// Variant 2: Songs, girlhood in Russia Part 2 (scraped from UCLA DLC)
export const mockPageAssetDetailDataSongsGirlhood = {
  detailHeader: {
    totalResults: 21963,
    tag: {
      name: 'Collection',
      value: {
        label: 'Wilgus (D.K.) Collection',
        to: '/catalog/ark:/21198/zz00089bvf',
      },
    },
    previousTo: null,
    nextTo: null,
    backTo: '/catalog',
  },
  detailMedia: {
    manifestUrl: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz000952mk/manifest',
    title: 'Songs, girlhood in Russia Part 2',
    description:
      'Recorded by: Marina Bokelman. UNNAMED BALLAD (He was sent to Siberia because of love); TALK ABOUT KINDLING WOOD; UNNAMED SONG (about spinning cobwebs); UNNAMED SONG; TALK ABOUT POPULARITY OF BALLADS; VANKA TANKA (Chatushka); UNNAMED SONG; TALK ABOUT POLITICS. Performer: Sema Lighter. Title from tape: Lighter * Bokelman. Location: Venice, CA.',
  },
  gridMetadata: {
    items: [
      {
        title: 'Item Overview',
        items: [
          {
            label: 'Title',
            value: { text: 'Songs, girlhood in Russia Part 2' },
          },
          {
            label: 'Date created',
            value: { text: '1963-07-11' },
          },
          {
            label: 'Collection',
            value: {
              text: 'Wilgus (D.K.) Collection',
              href: '/catalog/ark:/21198/zz00089bvf',
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
              text: 'Recorded by: Marina Bokelman<br>UNNAMED BALLAD (He was sent to Siberia because of love);TALK ABOUT KINDLING WOOD;UNNAMED SONG (about spinning cobwebs);UNNAMED SONG;TALK ABOUT POPULARITY OF BALLADS;VANKA TANKA (Chatushka);UNNAMED SONG;TALK ABOUT POLITICS.<br>Performer: Sema Lighter<br>Title from tape: Lighter * Bokelman<br>Location: Venice, CA.',
            },
          },
        ],
      },
      {
        title: 'Physical Description',
        items: [
          {
            label: 'Extent',
            value: { text: '19m 38s' },
          },
          {
            label: 'Dimensions',
            value: { text: '7 in.' },
          },
          {
            label: 'Medium',
            value: { text: 'sound tape reels : 3 3/4 ips, two track, mono.' },
          },
        ],
      },
      {
        title: 'Keywords',
        items: [
          {
            label: 'Resource type',
            value: {
              text: '<a href="/catalog?f%5Bhuman_readable_resource_type_sim%5D%5B%5D=sound+recording">sound recording</a>',
            },
          },
        ],
      },
      {
        title: 'Find This Item',
        items: [
          {
            label: 'Repository',
            value: {
              text: 'University of California, Los Angeles. Ethnomusicology Archive',
              href: '/catalog?f%5Brepository_sim%5D%5B%5D=University+of+California%2C+Los+Angeles.+Ethnomusicology+Archive',
            },
          },
          {
            label: 'ARK',
            value: { text: 'ark:/21198/zz000952mk' },
          },
        ],
      },
      {
        title: 'Use This Item',
        items: [
          {
            label: 'Manifest url',
            showButtonIiif: true,
            buttonIiifTo: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz000952mk/manifest',
            value: [],
          },
          {
            label: 'Learn about IIIF',
            value: {
              text: '<a href="https://guides.library.ucla.edu/digital-collections/iiif" target="_blank">IIIF Guide &amp; Toolkit</a>',
            },
          },
          {
            label: 'How to cite',
            value: {
              text: '<a href="https://guides.library.ucla.edu/digital-collections/cite" target="_blank">Citation Guide</a>',
            },
          },
        ],
      },
      {
        title: 'Access Condition',
        items: [
          {
            label: 'Rights statement',
            value: { text: 'copyrighted' },
          },
        ],
      },
    ],
  },
}

// Variant 3: Placeholder for future scraped data
export const mockPageAssetDetailDataVariant2 = {
  ...mockPageAssetDetailData,
  detailMedia: {
    ...mockPageAssetDetailData.detailMedia,
    title: 'Asset Variant 2',
    description: 'Placeholder for variant 2.',
  },
  gridMetadata: {
    ...mockPageAssetDetailData.gridMetadata,
    items: mockPageAssetDetailData.gridMetadata.items.slice(0, 2),
  },
}

// Variant 4: Placeholder for future scraped data
export const mockPageAssetDetailDataVariant3 = {
  ...mockPageAssetDetailData,
  detailMedia: {
    ...mockPageAssetDetailData.detailMedia,
    title: 'Asset Variant 3',
    description: 'Placeholder for variant 3.',
  },
  gridMetadata: {
    ...mockPageAssetDetailData.gridMetadata,
    items: mockPageAssetDetailData.gridMetadata.items.slice(0, 2),
  },
}

// Variant selector for Storybook
export const mockPageAssetDetailDataVariants = {
  default: mockPageAssetDetailData,
  songsGirlhood: mockPageAssetDetailDataSongsGirlhood,
  variant2: mockPageAssetDetailDataVariant2,
  variant3: mockPageAssetDetailDataVariant3,
}
