import * as API from '../../mock-api.json'

// Mock asset detail data page
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
