// Mock collections single page
export const mockAssetDetailDataPage = {
  title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
  searchForm: {
    placeholder: 'Search',
    dropdownOptions: [
      'All Collections',
      'Books & E-books',
      'Articles & Journals',
      'Databases',
    ],
  },
  detailHeader: {
    totalResults: 21963,
    tag: {
      name: 'Collection',
      value: {
        label: 'Los Angeles Times Photographic Collection',
        to: '/collections/latimes-photographic',
      },
    },
    previousTo: '/collections/latimes-photographic/previous-item',
    nextTo: '/collections/latimes-photographic/next-item',
    backTo: '/search?collection=latimes-photographic',
  },
  detailMedia: {
    manifestUrl: 'https://wellcomelibrary.org/iiif/b18035723/manifest',
    title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
    description:
            'A self-portrait by Vincent van Gogh from 1888, dedicated to Paul Gauguin',
  },
}
