// TEST ARTICLE - ALL FPB - So Many Squirrels
import { computed } from 'vue'
import { mockExternal, mockInternalArticle, mockInternalCollection, mockInternalEndowment, mockInternalEvent, mockInternalExhibition, mockInternalSeries, mockInternalWorkshop } from './mock/Flexible_CardWithImage'
import FlexibleCardWithImage from '@/lib-components/Flexible/CardWithImage'

export default {
  title: 'FLEXIBLE / Card With Image',
  component: FlexibleCardWithImage,
}

// External Content
export function Default() {
  return {
    data() {
      return { block: mockExternal }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - EVENT
export function InternalContentEvent() {
  return {
    data() {
      return {
        block: mockInternalEvent,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - Exhibition
export function InternalContentExhibiton() {
  return {
    data() {
      return {
        block: mockInternalExhibition
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - WORKSHOP
export function InternalWorkshop() {
  return {
    data() {
      return {
        block: mockInternalWorkshop,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - SERIES
export function InternalSeries() {
  return {
    data() {
      return {
        block: mockInternalSeries,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - ARTICLE
export function InternalArticle() {
  return {
    data() {
      return {
        block: mockInternalArticle,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - ENDOWMENT
export function InternalEndowment() {
  return {
    data() {
      return {
        block: mockInternalEndowment,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// Internal Content - COLLECTION
export function InternalCollection() {
  return {
    data() {
      return {
        block: mockInternalCollection,
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
  }
}

// FTVA
// INTERNAL CARDWITHIMAGE
const mockFtvaInternal = {
  id: '3754183',
  typeHandle: 'cardWithImage',
  sectionTitle: 'Card with Image / Associated Topics - INTERNAL CONTENT',
  sectionSummary: null,
  cardWithImage: [
    {
      id: '3803130',
      typeHandle: 'internalContent',
      contentLink: [
        {
          id: '3512384',
          typeHandle: 'ftvaEvent',
          sectionHandle: 'ftvaEvent',
          contentType: 'ftvaEvent',
          uri: 'events/4-givings-09-07-24',
          slug: '4-givings-09-07-24',
          ftvaImage: [
            {
              id: '3512388',
              src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Screenshot-2024-12-13-at-8.00.38-AM.png',
              height: 1663,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Screenshot-2024-12-13-at-8.00.38-AM.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Screenshot-2024-12-13-at-8.00.38-AM.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Screenshot-2024-12-13-at-8.00.38-AM.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Screenshot-2024-12-13-at-8.00.38-AM.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Screenshot-2024-12-13-at-8.00.38-AM.png 2560w',
              alt: null,
              focalPoint: [
                0.5,
                0.5
              ]
            }
          ],
          imageCarousel: [
            {
              image: [
                {
                  id: '3807065',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20250309_163035600.jpg',
                  height: 1440,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20250309_163035600.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20250309_163035600.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20250309_163035600.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20250309_163035600.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20250309_163035600.jpg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ],
          title: '4 Givings 09-07-24',
          eventTitle: '4 Givings',
          startDateWithTime: '2024-09-07PST19:30',
          endDateWithTime: '2024-12-17PST12:00',
          postDate: '2024-08-17'
        }
      ]
    },
    {
      id: '3803131',
      typeHandle: 'internalContent',
      contentLink: [
        {
          id: '3512397',
          typeHandle: 'eventSeries',
          sectionHandle: 'ftvaEventSeries',
          contentType: 'ftvaEventSeries',
          uri: 'series/films-of-ericka-beckman',
          slug: 'films-of-ericka-beckman',
          ftvaImage: [
            {
              id: '3512401',
              src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists_2024-12-17-203818_myzi.jpg',
              height: 1748,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists_2024-12-17-203818_myzi.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists_2024-12-17-203818_myzi.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists_2024-12-17-203818_myzi.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists_2024-12-17-203818_myzi.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists_2024-12-17-203818_myzi.jpg 2560w',
              alt: null,
              focalPoint: [
                0.5,
                0.5
              ]
            }
          ],
          imageCarousel: [
            {
              image: [
                {
                  id: '3512399',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists.jpg',
                  height: 1748,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Ericka-Beckman-Hiatus-1999.-Image-courtesy-the-artists.jpg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ],
          title: 'Films of Ericka beckman',
          startDate: '2024-08-03',
          endDate: '2024-08-24',
          postDate: '2024-12-17',
          ongoing: false
        }
      ]
    },
    {
      id: '3803132',
      typeHandle: 'internalContent',
      contentLink: [
        {
          id: '3266907',
          typeHandle: 'ftvaArticle',
          sectionHandle: 'ftvaArticle',
          contentType: 'ftvaArticle',
          uri: 'blog/test-hot-air-balloons',
          slug: 'test-hot-air-balloons',
          ftvaImage: [
            {
              id: '3280520',
              src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/hot_air_balloon.jpg',
              height: 1280,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/hot_air_balloon.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/hot_air_balloon.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/hot_air_balloon.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/hot_air_balloon.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/hot_air_balloon.jpg 2560w',
              alt: 'Hot air balloon',
              focalPoint: [
                0.5,
                0.5
              ]
            }
          ],
          imageCarousel: [
            {
              image: [
                {
                  id: '3267149',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/balloons-1.jpg',
                  height: 1347,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/balloons-1.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/balloons-1.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/balloons-1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/balloons-1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/balloons-1.jpg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            },
            {
              image: [
                {
                  id: '3267372',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/ballon-heating.jpg',
                  height: 1921,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/ballon-heating.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/ballon-heating.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/ballon-heating.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/ballon-heating.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/ballon-heating.jpg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            },
            {
              image: [
                {
                  id: '3280534',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kpil7j-21cut1large.webp',
                  height: 1664,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 2560w',
                  alt: 'many hot air balloons in the air',
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            },
            {
              image: [
                {
                  id: '3280543',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/temecula_balloons.jpg',
                  height: 1595,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/temecula_balloons.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/temecula_balloons.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/temecula_balloons.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/temecula_balloons.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/temecula_balloons.jpg 2560w',
                  alt: 'Temecula balloons',
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ],
          title: 'TEST - Hot Air Balloons',
          formattedTitle: null,
          postDate: '2024-09-20'
        }
      ]
    },
    {
      id: '3827150',
      typeHandle: 'internalContent',
      contentLink: [
        {
          id: '3701678',
          typeHandle: 'generalContentPage',
          sectionHandle: 'ftvaGeneralContentPage',
          contentType: 'ftvaGeneralContentPage',
          uri: 'ftva/daffodil-days',
          slug: 'daffodil-days',
          ftvaImage: [],
          imageCarousel: [
            {
              image: [
                {
                  id: '3701680',
                  src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20240323_163248504.jpg',
                  height: 1920,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 2560w',
                  alt: 'Image alt text here',
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ],
          title: 'Daffodil Days',
          formattedTitle: '<em>Daffodil Days Formatted Title</em>',
          postDate: '2025-02-05'
        }
      ]
    },
    {
      id: '3823257',
      typeHandle: 'internalContent',
      contentLink: [
        {
          id: '64717',
          typeHandle: 'generalContentPage',
          sectionHandle: 'generalContentPage',
          contentType: 'generalContentPage',
          uri: 'about/jobs',
          slug: 'jobs',
          heroImage: [
            {
              image: [
                {
                  id: '64755',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/screens_feature3-1.jpg',
                  height: 1443,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/screens_feature3-1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/screens_feature3-1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/screens_feature3-1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/screens_feature3-1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/screens_feature3-1.jpg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ],
          title: 'Jobs',
          postDate: '2022-11-30T13:48'
        }
      ]
    },
    {
      id: '3807262',
      typeHandle: 'internalContent',
      contentLink: [
        {
          id: '2930588',
          typeHandle: 'article',
          sectionHandle: 'article',
          contentType: 'article',
          uri: 'about/news/test-article-squirrel-guinea-pig-garden-in-japan',
          slug: 'test-article-squirrel-guinea-pig-garden-in-japan',
          heroImage: [
            {
              image: [
                {
                  id: '2930586',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/guinea-pi-squirrel_2024-03-22-221716_nvfk.jpeg',
                  height: 1953,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/guinea-pi-squirrel_2024-03-22-221716_nvfk.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/guinea-pi-squirrel_2024-03-22-221716_nvfk.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/guinea-pi-squirrel_2024-03-22-221716_nvfk.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/guinea-pi-squirrel_2024-03-22-221716_nvfk.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/guinea-pi-squirrel_2024-03-22-221716_nvfk.jpeg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ],
          title: 'Test - Article - Squirrel & Guinea Pig Garden in Japan',
          postDate: '2024-03-22T15:21'
        }
      ]
    },
  ]
}

export function FtvaInternal() {
  return {
    data() {
      return {
        block: mockFtvaInternal,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
        />
    `,
  }
}

// EXTERNAL CARDSWITHIMAGE
const mockFtvaExternal = {
  id: '3754183',
  typeHandle: 'cardWithImage',
  sectionTitle: 'Card with Image / Associated Topics - EXTERNAL CONTENT',
  sectionSummary: null,
  cardWithImage: [
    {
      id: '3754187',
      typeHandle: 'externalContent',
      titleGeneral: 'Peacocks',
      image: [
        {
          id: '3754131',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/PXL_20250224_234728720_2025-02-28-191656_idqw.jpg',
          height: 4551,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/PXL_20250224_234728720_2025-02-28-191656_idqw.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/PXL_20250224_234728720_2025-02-28-191656_idqw.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/PXL_20250224_234728720_2025-02-28-191656_idqw.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/PXL_20250224_234728720_2025-02-28-191656_idqw.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/PXL_20250224_234728720_2025-02-28-191656_idqw.jpg 2560w',
          alt: null,
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      to: 'https://www.birdnote.org/podcasts/birdnote-daily/peacocks-tail-more-meets-eye'
    },
    {
      id: '3826943',
      typeHandle: 'externalContent',
      titleGeneral: 'Helsinki',
      image: [
        {
          id: '3807469',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Helsinki.jpg',
          height: 2306,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Helsinki.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Helsinki.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Helsinki.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Helsinki.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Helsinki.jpg 2560w',
          alt: null,
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      to: 'https://en.wikipedia.org/wiki/Helsinki'
    },
  ]
}

export function FtvaExternal() {
  return {
    data() {
      return {
        block: mockFtvaExternal,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
        />
    `,
  }
}
