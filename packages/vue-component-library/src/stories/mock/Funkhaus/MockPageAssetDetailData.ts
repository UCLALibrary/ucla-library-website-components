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

// Variant 3: Main Highway Bridge at Castaic Junction (Saint Francis Dam) - scraped from UCLA DLC
export const mockPageAssetDetailDataCastaicBridge = {
  detailHeader: {
    totalResults: 21963,
    tag: {
      name: 'Collection',
      value: {
        label: 'Los Angeles Times Photographic Collection',
        to: '/catalog/ark:/21198/zz0002np7z',
      },
    },
    previousTo: null,
    nextTo: null,
    backTo: '/catalog',
  },
  detailMedia: {
    manifestUrl: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002dctgt/manifest',
    title:
      'Main Highway Bridge at Castaic Junction destroyed by the flood following the failure of the Saint Francis Dam, Castaic vicinity (Calif.), 1928',
    description:
      'The St. Francis Dam was a 200-foot high concrete gravity-arch dam built between 1924 and 1926 in St. Francisquito Canyon (near present-day Castaic and Santa Clarita). The dam collapsed on March 12, 1928 at two and a half minutes before midnight. The resulting flood killed more than 600 residents plus an unknown number of itinerant farm workers camped in San Francisquito Canyon, making it the 2nd greatest loss of life in California after the 1906 San Francisco earthquake. It is considered the worst American civil engineering failure in the 20th century.',
  },
  gridMetadata: {
    items: [
      {
        title: 'Item Overview',
        items: [
          {
            label: 'Title',
            value: {
              text: 'Main Highway Bridge at Castaic Junction destroyed by the flood following the failure of the Saint Francis Dam, Castaic vicinity (Calif.), 1928',
            },
          },
          {
            label: 'Date created',
            value: { text: 'March 1928' },
          },
          {
            label: 'Publisher',
            value: { text: 'Los Angeles Times' },
          },
          {
            label: 'Language',
            value: {
              text: '<a href="/catalog?f%5Bhuman_readable_language_sim%5D%5B%5D=No+linguistic+content">No linguistic content</a>',
            },
          },
          {
            label: 'Collection',
            value: {
              text: 'Los Angeles Times Photographic Collection',
              href: '/catalog/ark:/21198/zz0002np7z',
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
              text: 'The St. Francis Dam was a 200-foot high concrete gravity-arch dam built between 1924 and 1926 in St. Francisquito Canyon (near present-day Castaic and Santa Clarita). The dam collapsed on March 12, 1928 at two and a half minutes before midnight. The resulting flood killed more than 600 residents plus an unknown number of itinerant farm workers camped in San Francisquito Canyon, making it the 2nd greatest loss of life in California after the 1906 San Francisco earthquake. It is considered the worst American civil engineering failure in the 20th century.',
            },
          },
          {
            label: 'Caption',
            value: {
              text: 'Text from negative sleeve: Saint Francis Dam<br>Text from newspaper caption for a similar photograph: Graphic Views of Flood-swept Area Near Castaic After Dam Break: View of Main Highway Bridge One and One-half Miles from Castaic. Only Supports Remain. (Times photo) [Los Angeles Times, 14 Mar. 1928: 4]',
            },
          },
        ],
      },
      {
        title: 'Physical Description',
        items: [
          {
            label: 'Extent',
            value: { text: '1 photograph' },
          },
          {
            label: 'Medium',
            value: { text: 'b&w nitrate negative' },
          },
        ],
      },
      {
        title: 'Keywords',
        items: [
          {
            label: 'Genre',
            value: {
              text: '<a href="/catalog?f%5Bgenre_sim%5D%5B%5D=cellulose+nitrate+film">cellulose nitrate film</a><br><a href="/catalog?f%5Bgenre_sim%5D%5B%5D=news+photographs">news photographs</a>',
            },
          },
          {
            label: 'Latitude',
            value: { text: '34.442036' },
          },
          {
            label: 'Longitude',
            value: { text: '-118.610512' },
          },
          {
            label: 'Resource type',
            value: {
              text: '<a href="/catalog?f%5Bhuman_readable_resource_type_sim%5D%5B%5D=still+image">still image</a>',
            },
          },
          {
            label: 'Subjects',
            value: {
              text: '<a href="/catalog?f%5Bsubject_sim%5D%5B%5D=Saint+Francis+Dam+Failure%2C+Calif.%2C+1928">Saint Francis Dam Failure, Calif., 1928</a><br><a href="/catalog?f%5Bsubject_sim%5D%5B%5D=Bridges--Flood+damage--California--Santa+Clara+River+Valley">Bridges--Flood damage--California--Santa Clara River Valley</a><br><a href="/catalog?f%5Bsubject_sim%5D%5B%5D=Flood+damage--California--Santa+Clara+River+Valley">Flood damage--California--Santa Clara River Valley</a>',
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
              text: 'University of California, Los Angeles. Library. Department of Special Collections',
              href: '/catalog?f%5Brepository_sim%5D%5B%5D=University+of+California%2C+Los+Angeles.+Library.+Department+of+Special+Collections',
            },
          },
          {
            label: 'Local identifier',
            value: { text: 'uclamss_1429_1929' },
          },
          {
            label: 'ARK',
            value: { text: 'ark:/21198/zz002dctgt' },
          },
        ],
      },
      {
        title: 'Use This Item',
        items: [
          {
            label: 'Manifest url',
            showButtonIiif: true,
            buttonIiifTo: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002dctgt/manifest',
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
          {
            label: 'Rights holder',
            value: {
              text: 'UCLA Charles E. Young Research Library Department of Special Collections, A1713 Young Research Library, Box 951575, Los Angeles, CA 90095-1575. E-mail: spec-coll@library.ucla.edu. Phone: (310)825-4988',
            },
          },
          {
            label: 'Rights (country of creation)',
            value: { text: 'US' },
          },
          {
            label: 'Funding note',
            value: {
              text: 'Access to this collection is generously supported by Arcadia funds.',
            },
          },
          {
            label: 'License',
            value: {
              text: 'This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons BY Attribution 4.0 International</a>',
            },
          },
        ],
      },
    ],
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
  castaicBridge: mockPageAssetDetailDataCastaicBridge,
  variant3: mockPageAssetDetailDataVariant3,
}
