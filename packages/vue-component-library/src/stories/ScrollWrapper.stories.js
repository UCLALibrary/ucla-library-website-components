import ScrollWrapper from '../lib-components/ScrollWrapper.vue';
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue';
import FlexibleCardWithImage from '../lib-components/Flexible/CardWithImage.vue'
import { computed } from 'vue';
import { mockExternal } from './mock/Flexible_CardWithImage'

export default {
  title: 'ScrollWrapper',
  component: ScrollWrapper,
}

// const mockDefault = {}

const mockFTVABlogSeries = [
  {
    id: '3310088',
    title: 'TEST - Tom Reed’s “For Members Only”: Black Perspectives on Local L.A. TV',
    to: 'test-tom-reeds-for-members-only-black-perspectives-on-local-l-a-tv',
    articleCategories: [
      {
        title: 'Featured'
      },
      {
        title: 'Announcement'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3156835',
            src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
            height: 1813,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
            alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3264674',
    title: 'TEST -  Coronae Borealis Nova',
    to: 'test-coronae-borealis-nova',
    articleCategories: [
      {
        title: 'Collections'
      },
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    imageCarousel: [
      {
        image: [
          {
            id: '3264676',
            src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/T-Coronae-Borealis-nova.jpg',
            height: 1426,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/T-Coronae-Borealis-nova.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    postDate: '2024-07-02T05:08:00-07:00',
  },
  {
    id: '3266907',
    title: 'TEST - Hot Air Balloons',
    to: 'test-hot-air-balloons',
    articleCategories: [
      {
        title: 'Collections'
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
    postDate: '2024-07-02T05:08:00-07:00',
  }
]

const parsedFTVABlogSeries = mockFTVABlogSeries.map((item) => {
  return {
    to: item.to,
    title: item.title,
    category: item.articleCategories[0].title,
    image: item.imageCarousel[0].image[0],
    postDate: item.postDate,
  }
})

export function Default() {
  return {
    data() {
      return { items: parsedFTVABlogSeries }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { ScrollWrapper, SectionTeaserCard },
    template: `
      <scroll-wrapper>
        <section-teaser-card
        :items="items"
        />
      <scroll-wrapper/>
  `,
  }
}

export function FTVAFlexibleCardWithImage() {
  return {
    data() {
      // WILL NOT WORK W TITLE AND SUMMARY
      return { block: { ...mockExternal, sectionTitle: null, sectionSummary: null } }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { ScrollWrapper, FlexibleCardWithImage },
    template: `
      <scroll-wrapper>
        <flexible-card-with-image
            :block="block"
       />
      </scroll-wrapper>
  `,
  }
}