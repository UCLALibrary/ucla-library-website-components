// Import component
import SectionTeaserHighlight from '@/lib-components/SectionTeaserHighlight'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Teaser / Highlight',
  component: SectionTeaserHighlight,
}

const mock = [
  {
    image: null,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
  },
  {
    image: API.image,
    to: '/visit/foo/bat/',
    category: 'Aliquam Varius',
    title: 'Pretium magna eget dignissim placerat arcu velit et metus',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'workshopOrEventSeries',
    locations: [
      { title: 'Powellarium', to: '/location/bar' },
      {
        title: 'Research Library (Charles E. Young)',
        to: '/location/baz',
      },
    ],
    text: 'Pellentesque molestie, est ut vestibulum convallis, velit ante auctor mauris, sed mattis dolor ante ac purus. Nullam egestas neque sed ullamcorper suscipit.',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Sagittis',
    title: 'Auctor Ligula',
    startDate: '2021-01-03T08:00:00+00:00',
    endDate: '2021-02-08T07:10:00+00:00',
    sectionHandle: 'event',
    locations: [
      { title: 'Online', to: '/location/bar' },
      {
        title: 'Research Library (Charles E. Young)',
        to: '/location/baz',
      },
    ],
    text: 'Proin sit amet leo eros. Pellentesque luctus tortor eu aliquet tristique. Proin fringilla enim eget sagittis mattis. Praesent faucibus libero ipsum.',
  },
  {
    image: API.image,
    to: '/visit/foo/buzz/',
    category: 'Tristique',
    title: 'Amet nisl suscipit adipiscing bibendum lectus sed',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.',
  },
]

const mixedOngoingEvents = [
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
  },

  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
    ongoing: true,
  },
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionTeaserHighlight },
    template: `
      <section-teaser-highlight
        :items="items"
      />
  `,
  }
}

export function MixedOngoingEvents() {
  return {
    data() {
      return { items: mixedOngoingEvents }
    },
    components: { SectionTeaserHighlight },
    template: `
      <section-teaser-highlight
        :items="items"
      />
  `,
  }
}

const homepage = [
  {
    id: '39641',
    sectionHandle: 'collection',
    title: 'Vintage Clock Collection',
    text: '<p>Seth Thomas Regulator, an E. Howard Regulator, an Ithaca Double-Dial Calendar, a big Waterbury Jeweler\'s Regulator, a Longcase, Tallcase or “Grandfather\'s” Clock</p>',
    uri: 'collections/explore/vintage-clock-collection',
    category: 'physical,digital',
    heroImage: [
      {
        id: '48296',
        image: [
          {
            id: '48295',
            src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/clock1.jpg',
            height: 1920,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/clock1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/clock1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/clock1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/clock1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/clock1.jpg 2560w',
            alt: null,
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    buttonUrl: [
      {
        buttonText: 'Reserve',
        buttonUrl: 'https://runescape.wiki/w/Clockwork'
      }
    ],
    to: '/collections/explore/vintage-clock-collection',
    image: {
      id: '48295',
      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/clock1.jpg',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/clock1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/clock1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/clock1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/clock1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/clock1.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    id: '59175',
    sectionHandle: 'collection',
    title: 'Tamagotchi',
    text: '<p>The <em>Tamagotchi</em> is a handheld digital <em>pet</em> that was created in Japan by Akihiro Yokoi of WiZ and Aki Maita of Bandai.</p>',
    uri: 'collections/explore/tamagotchi',
    category: 'physical',
    heroImage: [
      {
        id: '59178',
        image: [
          {
            id: '59177',
            src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Tamagotchi_0124_ubt.jpeg',
            height: 1974,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 2560w',
            alt: 'Tamagotchi 0124 ubt',
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    buttonUrl: [],
    to: '/collections/explore/tamagotchi',
    image: {
      id: '59177',
      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Tamagotchi_0124_ubt.jpeg',
      height: 1974,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Tamagotchi_0124_ubt.jpeg 2560w',
      alt: 'Tamagotchi 0124 ubt',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    id: '59166',
    sectionHandle: 'collection',
    title: 'Sneakers',
    text: '<p><span class=\"def_text\">A shoe with a rubber sole that is designed for people to wear while running, playing sports. A</span><span class=\"cas_h\">lso</span> <span class=\"ca_prefix\">(British)</span> <span class=\"ca_text\">trainer</span>, <span class=\"ca_prefix\">(chiefly British)</span> <span class=\"ca_text\">training shoe.</span></p>',
    uri: 'collections/explore/sneakers',
    category: 'physical,digital',
    heroImage: [
      {
        id: '59172',
        image: [
          {
            id: '59170',
            src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp',
            height: 1796,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 2560w',
            alt: 'color photograph of yellow and blue nikes',
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    buttonUrl: [],
    to: '/collections/explore/sneakers',
    image: {
      id: '59170',
      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp',
      height: 1796,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/nike-dunk-low-blue-yelllow-ucla-DD1391-402-4.webp 2560w',
      alt: 'color photograph of yellow and blue nikes',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    id: '32299',
    sectionHandle: 'collection',
    title: 'Laurie Anderson',
    text: '<p>Laurie Anderson is known for her multimedia presentations, as varied as visual artist, composer, poet, photographer, filmmaker, electronics whiz, vocalist, and instrumentalist.</p>',
    uri: 'collections/explore/laurie-anderson',
    category: 'digital',
    heroImage: [
      {
        id: '60213',
        image: [
          {
            id: '60212',
            src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/anderson.png',
            height: 1872,
            width: 2560,
            srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/anderson.png 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/anderson.png 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/anderson.png 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/anderson.png 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/anderson.png 2560w',
            alt: 'b&w photograph',
            focalPoint: [
              0.5,
              0.5
            ]
          }
        ]
      }
    ],
    buttonUrl: [
      {
        buttonText: 'View the Videos Here',
        buttonUrl: 'https://boingboing.net/2021/12/05/a-collection-of-laurie-anderson-videos-from-the-80s-90s.html'
      }
    ],
    to: '/collections/explore/laurie-anderson',
    image: {
      id: '60212',
      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/anderson.png',
      height: 1872,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/anderson.png 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/anderson.png 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/anderson.png 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/anderson.png 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/anderson.png 2560w',
      alt: 'b&w photograph',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  }
]
export function HomePageCollections() {
  return {
    data() {
      return { items: homepage }
    },
    components: { SectionTeaserHighlight },
    template: `
        <section-teaser-highlight
          :items="items"
        />
    `,
  }
}
