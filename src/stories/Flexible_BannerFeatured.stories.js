import FlexibleBannerFeatured from '@/lib-components/Flexible/BannerFeatured.vue'

export default {
  title: 'FLEXIBLE / Banner Featured',
  component: FlexibleBannerFeatured,
}

// MOCK DATA
// EXTERNAL
// Default - External
const mockExternalArticle = {
  id: '27050',
  sectionTitle: 'FPB - BANNER FEATURED - External Article - Alignment: Right',
  content: [
    {
      id: '27051',
      image: [
        {
          id: '26089',
          src: 'https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg',
          height: 2074,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w',
          alt: 'Albino Fox',
          focalPoint: [0.5, 0.5],
          altText: null,
        },
      ],
      title: 'External Article - Alignment: Right',
      summary: '<p>Arctic foxes generally eat any small animal they can find, including lemmings, voles, other rodents, hares, birds, eggs, fish, and carrion.</p>',
      alignment: 'right',
      location: {
        title: 'Rain Forest',
        to: 'www.google.com',
      },
      byline1: 'Feburary 2022',
      byline2: 'Kiki Smith',
      to: 'www.foxes.com',
      category: 'foxes',
      contentType: 'project',
    },
  ],
  typeHandle: 'bannerFeatured',
}

const mockExternalArticle2 = {
  id: '2810836',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED - External Article - Alignment: Left',
  content: [
    {
      id: '2810837',
      image: [
        {
          id: '2900595',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/squirrel-cheeto.jpeg',
          height: 1707,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/squirrel-cheeto.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/squirrel-cheeto.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/squirrel-cheeto.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/squirrel-cheeto.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/squirrel-cheeto.jpeg 2560w',
          alt: 'Squirrel cheeto',
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      title: 'External Article - Alignment: Left',
      summary: '<p><strong>Squirrels Love Cheetos.</strong> <a href=\"https://www.humanesociety.org/animals/squirrels\" target=\"_blank\" rel=\"noreferrer noopener\">Squirrels who were trapped and relocated far from areas where Cheetos are available</a> showed that the animals either soon died or disappeared from the release area.</p>',
      alignment: 'left',
      byline1: 'Jen Diamond',
      byline2: '3-13-2024',
      to: 'https://cheezburger.com/6045701/just-17-funny-squirrels-eating-weird-things',
      category: 'article',
      contentType: 'article'
    }
  ]
}

const mockExternalArticleWithVideo = {
  id: '42757',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'External Article With Video - Section title',
  content: [
    {
      id: '42758',
      image: [
        {
          id: '42732',
          src: 'https://static.library.ucla.edu/craftassetstest/images/PXL_20220829_021552028.mp4',
          height: null,
          width: null,
          srcset: '',
          alt: 'Sample 5s',
          focalPoint: [0.5, 0.5],
        },
      ],
      title: 'External Article With Video ',
      summary: '<p><strong>626 Night Market</strong> Jumpers at the fair, <em>August 8th 2022</em></p>',
      alignment: 'right',
      byline1: 'Jen Diamond',
      byline2: null,
      to: 'https://www.626nightmarket.com/',
      category: 'Category External Article With Video',
      contentType: 'article',
    },
  ],
}

const mockExternalCollection = {
  id: '2924728',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED  - External Collection',
  content: [
    {
      id: '2924729',
      image: [
        {
          id: '2924155',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/squirrel-banana.png',
          height: 1590,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/squirrel-banana.png 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/squirrel-banana.png 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/squirrel-banana.png 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/squirrel-banana.png 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/squirrel-banana.png 2560w',
          alt: 'Squirrel banana',
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      title: 'External Collection - Alignment: Right',
      summary: '<p><strong>Squirrels</strong> love to <em>bananas and other fruits</em>.</p>',
      alignment: 'right',
      byline1: 'Terry Butcher',
      byline2: 'November 19, 2025',
      to: 'https://www.pixoto.com/images-photography/animals/other-mammals/squirrels-love-bananas-too---5320359971651584',
      category: 'lecture',
      contentType: 'collection'
    }
  ]
}

const mockExternalEvent = {
  id: '2924730',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED - External Event - Alignment: Left',
  content: [
    {
      id: '2924731',
      image: [
        {
          id: '2924288',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/squirrel-maze.jpeg',
          height: 1438,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/squirrel-maze.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/squirrel-maze.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/squirrel-maze.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/squirrel-maze.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/squirrel-maze.jpeg 2560w',
          alt: 'Squirrel maze',
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      title: 'External Event - Alignment: Left',
      summary: '<p><strong>Squirrelympics 3.0</strong><br />Squirrels battle each other in a <em><a href=\"https://www.usatoday.com/story/tech/2021/05/20/mark-robers-latest-video-features-new-backyard-squirrel-maze/5180342001/\" target=\"_blank\" rel=\"noreferrer noopener\">maze challenge</a></em> designed by Mark Rober. They compete to win the prestigious Walnut Cup.</p>',
      alignment: 'left',
      byline1: 'October 14, 2024',
      byline2: '3PM',
      to: 'https://www.youtube.com/watch?v=lg5wznn3IBE',
      category: 'exhibit opening',
      contentType: 'event'
    }
  ]
}

const mockExternalExhibition = {
  id: '2924732',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED - External Exhibition - Alignment: Right',
  content: [
    {
      id: '2924733',
      image: [
        {
          id: '2924685',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Screenshot-2024-03-21-at-3.56.34-PM.png',
          height: 1940,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Screenshot-2024-03-21-at-3.56.34-PM.png 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Screenshot-2024-03-21-at-3.56.34-PM.png 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Screenshot-2024-03-21-at-3.56.34-PM.png 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Screenshot-2024-03-21-at-3.56.34-PM.png 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Screenshot-2024-03-21-at-3.56.34-PM.png 2560w',
          alt: 'Acorn Jones the squirrel',
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      title: 'External Exhibition - Alignment: Right',
      summary: '<p><strong>Wild L.A. with a Squirrel</strong><br />Enjoy a tour of Hahamongna Watershed park, a <em>large green space</em> located just north of Pasadena, right below the <a href=\"https://www.fs.usda.gov/angeles\" target=\"_blank\" rel=\"noreferrer noopener\">Angeles National Forest</a> on native land of the Tongva.</p>',
      alignment: 'right',
      byline1: 'Acorn Jones (the only squirrel on staff)',
      byline2: '9-10-2024: 9:30 am to 5 pm',
      to: 'https://nhm.org/stories/wild-la-squirrel',
      category: 'exhibit opening',
      contentType: 'exhibition'
    }
  ]
}

const mockExternalMeapProject = {
  id: '2924734',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'External MEAP Project - Alignment: Right',
  content: [
    {
      id: '2924735',
      image: [
        {
          id: '2924727',
          src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/squirrel-jump.jpeg',
          height: 1707,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/squirrel-jump.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/squirrel-jump.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/squirrel-jump.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/squirrel-jump.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/squirrel-jump.jpeg 2560w',
          alt: 'Squirrel jumping',
          focalPoint: [
            0.5,
            0.5
          ]
        }
      ],
      title: 'External MEAP Project - Alignment: Left',
      summary: '<p><strong>Modern Endangered Archives Program</strong><br />Our grants <em>enable digitization</em> and access to at-risk cultural heritage collections from around the world.</p>',
      alignment: 'left',
      byline1: 'Arcadia',
      byline2: '10-19-2024',
      to: 'https://meap.library.ucla.edu/',
      category: 'announcement',
      contentType: 'project'
    }
  ]
}

// STORIES
// EXTERNAL
export function Default() {
  return {
    data() {
      return {
        block: mockExternalArticle,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function ExternalArticle2() {
  return {
    data() {
      return {
        block: mockExternalArticle2,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function ExternalArticleWithVideo() {
  return {
    data() {
      return {
        block: mockExternalArticleWithVideo,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function ExternalCollection() {
  return {
    data() {
      return {
        block: mockExternalCollection,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function ExternalEvent() {
  return {
    data() {
      return {
        block: mockExternalEvent,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function ExternalExhibition() {
  return {
    data() {
      return {
        block: mockExternalExhibition,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function ExternalMeapProject() {
  return {
    data() {
      return {
        block: mockExternalMeapProject,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

// INTERNAL MOCK DATA
const mockInternalArticle = {
  id: '26943',
  sectionTitle: 'Internal Article - Section title',
  content: [
    {
      id: '26944',
      contentLink: [
        {
          contentType: 'article',
          title: 'La Niña - Internal Article',
          to: 'about/news/la-niña',
          sectionHandle: 'article',
          summary:
                        '<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>',
          articleCategory: [
            {
              title: 'Weather',
            },
          ],
          articleByline1: [
            {
              id: '11827',
              to: 'about/staff/brigid-abreu',
              title: 'Brigid Abreu',
            },
            {
              id: '11910',
              to: 'about/staff/sylvia-page',
              title: 'Sylvia Page',
            },
          ],
          articleByline2: '2022-06-21T12:39:00-07:00',
          articleLocations: [
            {
              id: '11709',
              title: 'William Andrews Clark Memorial Library',
              to: 'visit/locations/william-andrews-clark-memorial-library',
            },
            {
              id: '11497',
              title: 'Richard C. Rudolph East Asian Library',
              to: 'visit/locations/east-asian-library',
            },
          ],
          heroImage: [
            {
              image: [
                {
                  id: '20637',
                  src: 'https://static.library.ucla.edu/craftassetstest/LaNina-Jet-Wintertime-Pattern.jpg',
                  height: 1997,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 2560w',
                  alt: 'La Nina Jet Wintertime Pattern',
                  focalPoint: [0.5, 0.5],
                  altText: 'La Niña',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  typeHandle: 'bannerFeatured',
}

const mockInternalArticleWithVideo = {
  id: '36699',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Internal Article With Video Article - Section title',
  content: [
    {
      id: '36700',

      contentLink: [
        {
          contentType: 'impactReportStory',
          title: 'After Covid Triggered a Campus Closure, UCLA Library Reimagined Its Services',
          to: 'impact/2021/ucla-library-reimagined',
          sectionHandle: 'article',
          summary:
                        '<p>Undergraduates reflect on successfully completing their research projects while learning remotely.</p>',
          articleByline2: '2021-09-09T10:03:00-07:00',
          heroImage: [
            {
              image: [
                {
                  id: '42094',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/ucla-impact-report-animation.mp4',
                  height: null,
                  width: null,
                  srcset: '',
                  alt: 'Ucla impact report animation',
                  focalPoint: [0.5, 0.5],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const mockImpactReportArticle = {
  id: '36699',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Internal Impact Report Article - Section title',
  content: [
    {
      id: '36700',
      contentLink: [
        {
          contentType: 'impactReportStory',
          sectionHandle: 'article',
          title: 'After Covid Triggered a Campus Closure, UCLA Library Reimagined Its Services for Students and Faculty Scattered Across the Country and Globe',
          to: 'impact/2021/ucla-library-reimagined',
          summary:
                        '<p>Undergraduates reflect on successfully completing their research projects while learning remotely.</p>',
          articleByline2: '2021-09-09T10:03:00-07:00',
          heroImage: [
            {
              image: [
                {
                  id: '2900571',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/fox-squirrel.jpeg',
                  height: 1699,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/fox-squirrel.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/fox-squirrel.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/fox-squirrel.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/fox-squirrel.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/fox-squirrel.jpeg 2560w',
                  alt: 'Fox squirrel',
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ],
            },
          ],
        },
      ],
    },
  ],
}

const mockInternalCollection = {
  id: '2930670',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED  - Internal - Collection',
  content: [
    {
      id: '2930671',
      contentLink: [
        {
          parent: null,
          contentType: 'collection',
          title: 'Internal Collection Tamagotchi',
          to: 'collections/explore/tamagotchi',
          summary: '<p>The <em>Tamagotchi</em> is a handheld digital <em>pet</em> that was created in Japan by Akihiro Yokoi of WiZ and Aki Maita of Bandai.</p>',
          articleByline2: '2022-11-08T13:45:00-08:00',
          physicalDigital: [
            'physical'
          ],
          heroImage: [
            {
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
          ]
        }
      ]
    }
  ]
}

const mockInternalEventLeftAlign = {
  id: '695718',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Internal Event - Section title',
  content: [
    {
      contentLink: [
        {
          contentType: 'event',
          title: 'The White Balloon',
          to: 'visit/events-exhibitions/test-the-white-balloon',
          summary: null,
          eventDescription: '<p><strong>All <em>Family Flicks</em> screenings are free admission. Seating is first come, first served. The Billy Wilder Theater opens 15 minutes before each <em>Family Flicks</em> program.</strong></p>\n\n<p>Director Jafar Panahi’s debut feature, <em>The White Balloon</em>, won the Camera d’Or at the Cannes Film Festival and announced the arrival of a major new voice on the international film scene. A simply presented but powerful moving fable of perseverance, it follows a young girl as she overcomes the obstacles of the big city on her way to buy a goldfish for Nowruz, the Iranian New Year. Among The Guardian newspaper’s top 50 family films of all time, <em>The White Balloon</em> is also on the British Film Institute’s list of 50 films you should see by the age of 14.</p>\n\n<p>35mm, color, in Persian with English subtitles, 85 min. Director: Jafar Panahi. Screenwriter: Abbas Kiarostami. With: Aida Mohammadkhani, Mohsen Kafili, Fereshteh Sadre Orafaiy.</p>\n\n<p>Part of: <a href="https://www.cinema.ucla.edu/events/family-flicks" target="_blank" rel="noreferrer noopener">Family Flicks</a><br /><a href="https://www.cinema.ucla.edu/events/2023/01/22/the-white-balloon" target="_blank" rel="noreferrer noopener">Learn more</a> </p>',
          startDateWithTime: '2022-12-19T11:00',
          endDateWithTime: '2022-12-19T12:30',
          articleByline2: '2022-12-19T07:48:00-08:00',
          articleLocations: [
            {
              id: '11612',
              title: 'UCLA Film & Television Archive',
              to: 'visit/locations/film-television-archive',
            },
          ],
          heroImage: [
            {
              image: [
                {
                  id: '86612',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/1670615203.jpg',
                  height: 1846,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/1670615203.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/1670615203.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/1670615203.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/1670615203.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/1670615203.jpg 2560w',
                  alt: 'placeholder',
                  focalPoint: [0.5, 0.5],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const mockInternalExhibition = {
  id: '696007',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Internal Exhibiton',
  content: [
    {
      id: '696008',
      contentLink: [
        {
          contentType: 'exhibition',
          title: 'Fante Asafo Flags',
          to: 'visit/events-exhibitions/fante-asafo-flags',
          summary:
                        '<p>Prior to the colonial era, asafo companies were charged with the safety and protection of the region. Surviving a century of violence and upheaval, they remain one of the core local institutions.</p>',
          startDate: '2023-01-04T00:00',
          endDate: '2023-03-05T00:00',
          articleByline2: '2022-03-09T15:17:00-08:00',
          heroImage: [
            {
              image: [
                {
                  id: '63048',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/flag_2022-11-23-012414_fjms.jpg',
                  height: 1703,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/flag_2022-11-23-012414_fjms.jpg 2560w',
                  alt: null,
                  focalPoint: [0.5, 0.5],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const mockInternalMeapArticle = {
  "id": "3093454",
  "typeHandle": "bannerFeatured",
  "sectionTitle": "Internal Meap Article - Section title",
  "content": [
    {
      "id": "3093455",
      "contentLink": [
        {
          "parent": null,
          "contentType": "meapArticle",
          "articleCategory": [
            {
              "title": "Featured"
            }
          ],
          "title": "Kids Play",
          "to": "about/news/kids-play",
          "summary": "<span>It is through play that children learn to develop a sense of self, participate and socialise with others, take turns, be a part of a team, cooperate, and share or withhold crucial information</span>",
          "articleByline2": "2022-07-15T16:22:00-07:00",
          "heroImage": [
            {
              "image": [
                {
                  "id": "26046",
                  "src": "https://static.library.ucla.edu/craftassetstest/MEAP-test/_fullscreen/kids3.jpg",
                  "height": 1707,
                  "width": 2560,
                  "srcset": "https://static.library.ucla.edu/craftassetstest/MEAP-test/_375xAUTO_crop_center-center_none/kids3.jpg 375w, https://static.library.ucla.edu/craftassetstest/MEAP-test/_960xAUTO_crop_center-center_none/kids3.jpg 960w, https://static.library.ucla.edu/craftassetstest/MEAP-test/_1280xAUTO_crop_center-center_none/kids3.jpg 1280w, https://static.library.ucla.edu/craftassetstest/MEAP-test/_1920xAUTO_crop_center-center_none/kids3.jpg 1920w, https://static.library.ucla.edu/craftassetstest/MEAP-test/_2560xAUTO_crop_center-center_none/kids3.jpg 2560w",
                  "alt": null,
                  "focalPoint": [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const mockInternalMeapProject = {
  id: '27175',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Internal Meap Project - Section title',
  content: [
    {
      id: '27176',
      contentLink: [
        {
          contentType: 'meapProject',
          title: 'Argentinean Human Rights Digital Library of Periodical and Non-periodical Publications',
          to: 'meap/projects/argentinean-human-rights-digital-library-of-periodical-and-non-periodical-publications',
          summary: '<p><span>Memoria Abierta is an alliance of nine Argentinean human rights organizations. Most of them were created during the last dictatorship (1976-1983) to denounce the violations committed during that period and to support relatives and victims. The Argentinean human rights movement, with its innovative strategies to fight oblivion and achieve justice, is known worldwide and referenced by other countries where human rights crimes have been or are being committed. </span><br /></p>',
          projectCategory: 'Publications',
          projectByline1: [
            {
              id: '25325',
              title: 'Memoria Abierta',
            },
          ],
          articleByline2: '2022-07-26T10:49:00-07:00',
          sectionHandle: 'article',
          projectLocations: [
            {
              id: '25324',
              title: 'South America',
            },
          ],
          heroImage: [
            {
              image: [
                {
                  id: '24878',
                  src: 'https://static.library.ucla.edu/craftassetstest/toni-g-rbregi1jeo-unsplash.jpg',
                  height: 4552,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 2560w',
                  alt: 'Toni g rbregi1jeo unsplash',
                  focalPoint: [0.5, 0.5],
                  altText: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  componentName: 'flexible-banner-featured',
}

const mockInternalEventSeries = {
  id: '3091840',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED - Internal Event Series',
  content: [
    {
      id: '3091841',
      contentLink: [
        {
          parent: null,
          workshopOrEventSeriesType: 'visit/events-exhibitions',
          contentType: 'workshopOrEventSeries',
          title: 'Marion Davies: Captain of Her Soul',
          to: 'visit/events-exhibitions/marion-davies-captain-of-her-soul',
          summary: '<p>A producer, philanthropist and vivacious screen presence, Marion Davies was always more than popular myth allowed her to be. <br /></p>',
          startDate: '2023-02-04T00:00',
          endDate: '2023-02-26T00:00',
          articleByline2: '2022-12-14T11:36:00-08:00',
          articleLocations: [
            {
              id: '11612',
              title: 'UCLA Film & Television Archive',
              to: 'visit/locations/film-television-archive'
            }
          ],
          heroImage: [
            {
              image: [
                {
                  id: '143502',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Patsy_crop-1.jpeg',
                  height: 1811,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Patsy_crop-1.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Patsy_crop-1.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Patsy_crop-1.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Patsy_crop-1.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Patsy_crop-1.jpeg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const mockInternalWorkshop = {
  id: '2930666',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED - Internal Workshop',
  content: [
    {
      id: '2930667',
      contentLink: [
        {
          parent: null,
          workshopOrEventSeriesType: 'help/services-resources',
          contentType: 'workshopOrEventSeries',
          title: 'Test - Workshop - Family Flicks',
          to: 'help/services-resources/family-flicks',
          summary: '<p>All <strong>Family Flicks</strong> screenings are <em>free admission</em>. An incorrigible squirrel helps his friends raid a nut store, a location that also happens to be a front for a human gang\'s bank robbery.</p>',
          startDate: '1967-10-09T00:00',
          endDate: '2002-04-19T00:00',
          articleByline2: '2022-12-19T07:44:00-08:00',
          articleLocations: [
            {
              id: '11612',
              title: 'UCLA Film & Television Archive',
              to: 'visit/locations/film-television-archive'
            }
          ],
          heroImage: [
            {
              image: [
                {
                  id: '2930537',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Screenshot-2024-03-22-at-3.07.33-PM.png',
                  height: 1391,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Screenshot-2024-03-22-at-3.07.33-PM.png 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Screenshot-2024-03-22-at-3.07.33-PM.png 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Screenshot-2024-03-22-at-3.07.33-PM.png 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Screenshot-2024-03-22-at-3.07.33-PM.png 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Screenshot-2024-03-22-at-3.07.33-PM.png 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const mockInternalEndowment = {
  id: '2923932',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'FPB - BANNER FEATURED - Internal - Endowment',
  content: [
    {
      id: '2923933',
      contentLink: [
        {
          parent: null,
          contentType: 'endowment',
          title: 'The Jen & Diane Living Memorial Endowment',
          to: 'give/endowments/the-jen-diane-living-memorial-endowment',
          summary: '<p><strong>Jen &amp; Diane want</strong> everyone to have as many stuffed animals as they need to make them happy. This fund will allow recipients to purchase as many stuff animals as they want in one fiscal year.</p>',
          articleByline2: '2022-12-06T16:05:00-08:00',
          articleLocations: [
            {
              id: '801',
              title: 'Charles E. Young Research Library',
              to: 'visit/locations/young-research-library'
            },
            {
              id: '11602',
              title: 'UCLA Library Special Collections',
              to: 'visit/locations/library-special-collections'
            }
          ],
          heroImage: [
            {
              image: [
                {
                  id: '75076',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/Animals-1-pick.jpg',
                  height: 2560,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Animals-1-pick.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Animals-1-pick.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Animals-1-pick.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Animals-1-pick.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Animals-1-pick.jpg 2560w',
                  alt: null,
                  focalPoint: [
                    0.5,
                    0.5
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// INTERNAL STORIES
export function InternalArticle() {
  return {
    data() {
      return {
        block: mockInternalArticle,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalArticleWithVideo() {
  return {
    data() {
      return {
        block: mockInternalArticleWithVideo,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalImpactReportArticle() {
  return {
    data() {
      return {
        block: mockImpactReportArticle,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalCollection() {
  return {
    data() {
      return {
        block: mockInternalCollection,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalEventLeftAlign() {
  return {
    data() {
      return {
        block: mockInternalEventLeftAlign,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalExhibition() {
  return {
    data() {
      return {
        block: mockInternalExhibition,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalMeapArticle() {
  return {
    data() {
      return {
        block: mockInternalMeapArticle,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalMeapProject() {
  return {
    data() {
      return {
        block: mockInternalMeapProject,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalEventSeries() {
  return {
    data() {
      return {
        block: mockInternalEventSeries,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalWorkshop() {
  return {
    data() {
      return {
        block: mockInternalWorkshop,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}

export function InternalEndowment() {
  return {
    data() {
      return {
        block: mockInternalEndowment,
      }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
  }
}
