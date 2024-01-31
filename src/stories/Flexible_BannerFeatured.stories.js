import FlexibleBannerFeatured from '@/lib-components/Flexible/BannerFeatured.vue'

export default {
  title: 'FLEXIBLE / Banner Featured',
  component: FlexibleBannerFeatured,
}

const mock = {
  id: '26943',
  sectionTitle: 'Internal link',
  content: [
    {
      id: '26944',
      contentLink: [
        {
          contentType: 'article',
          title: 'La Niña',
          to: 'about/news/la-niña',
          sectionHandle: 'article',
          summary:
            '<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>',
          articleCategory: [
            {
              title: 'Featured Category',
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

const mock2 = {
  id: '27050',
  sectionTitle: 'External Link',
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
      title: 'Halelua',
      summary: '<p>White foxes are in Artic.</p>',
      alignment: 'right',
      location: 'Rain Forest',
      byline1: 'Feburary 2022',
      byline2: 'Dr ABC',
      to: 'www.foxes.com',
      category: 'foxes',
      contentType: 'project',
    },
  ],
  typeHandle: 'bannerFeatured',
}

const mock3 = {
  id: '27175',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Use this for breadcrumb',
  content: [
    {
      id: '27176',
      contentLink: [
        {
          contentType: 'meapProject',
          title: 'Argentinean Human Rights Digital Library of Periodical and Non-periodical Publications',
          to: 'meap/projects/argentinean-human-rights-digital-library-of-periodical-and-non-periodical-publications',
          summary:
            '<p><span>Memoria Abierta is an alliance of nine Argentinean human rights organizations. Most of them were created during the last dictatorship (1976-1983) to denounce the violations committed during that period and to support relatives and victims. The Argentinean human rights movement, with its innovative strategies to fight oblivion and achieve justice, is known worldwide and referenced by other countries where human rights crimes have been or are being committed. </span><br /></p>',
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

const mock4 = {
  id: '36699',
  typeHandle: 'bannerFeatured',
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
                  id: '36778',
                  src: 'https://static.library.ucla.edu/craftassetstest/images/open-sourced-video-ucla-library.jpeg',
                  height: 1440,
                  width: 2560,
                  srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 2560w',
                  alt: 'Open sourced video ucla library',
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

const externalVideo = {
  id: '42757',
  typeHandle: 'bannerFeatured',
  content: [
    {
      id: '42758',
      image: [
        {
          id: '42732',
          src: 'https://static.library.ucla.edu/craftassetstest/images/sample-5s.mp4',
          height: null,
          width: null,
          srcset: '',
          alt: 'Sample 5s',
          focalPoint: [0.5, 0.5],
        },
      ],
      title: 'External Video',
      summary:
        '<p>This is sample test video which has few seconds of video</p>',
      alignment: 'left',
      byline1: null,
      byline2: null,
      to: 'www.samplevideos.com',
      category: null,
      contentType: 'article',
      sectionHandle: 'article',
    },
  ],
}

const internalVideo = {
  id: '36699',
  typeHandle: 'bannerFeatured',
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

const event = {
  id: '695718',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Flexible Banner featured with dates',
  content: [
    {
      id: '695719',
      contentLink: [
        {
          contentType: 'event',
          title: 'TEST - The White Balloon',
          to: 'visit/events-exhibitions/test-the-white-balloon',
          summary: null,
          eventDescription:
            '<p><strong>All <em>Family Flicks</em> screenings are free admission. Seating is first come, first served. The Billy Wilder Theater opens 15 minutes before each <em>Family Flicks</em> program.</strong></p>\n\n<p>Director Jafar Panahi’s debut feature, <em>The White Balloon</em>, won the Camera d’Or at the Cannes Film Festival and announced the arrival of a major new voice on the international film scene. A simply presented but powerful moving fable of perseverance, it follows a young girl as she overcomes the obstacles of the big city on her way to buy a goldfish for Nowruz, the Iranian New Year. Among The Guardian newspaper’s top 50 family films of all time, <em>The White Balloon</em> is also on the British Film Institute’s list of 50 films you should see by the age of 14.</p>\n\n<p>35mm, color, in Persian with English subtitles, 85 min. Director: Jafar Panahi. Screenwriter: Abbas Kiarostami. With: Aida Mohammadkhani, Mohsen Kafili, Fereshteh Sadre Orafaiy.</p>\n\n<p>Part of: <a href="https://www.cinema.ucla.edu/events/family-flicks" target="_blank" rel="noreferrer noopener">Family Flicks</a><br /><a href="https://www.cinema.ucla.edu/events/2023/01/22/the-white-balloon" target="_blank" rel="noreferrer noopener">Learn more</a> </p>',
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

const exhibition = {
  id: '696007',
  typeHandle: 'bannerFeatured',
  sectionTitle: 'Flexible banner featured with exhibiton',
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

export function Default() {
  return {
    data() {
      return {
        block: mock,
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

export function ExternalContent() {
  return {
    data() {
      return {
        block: mock2,
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

export function InternalContentProject() {
  return {
    data() {
      return {
        block: mock3,
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

export function ImpactStory() {
  return {
    data() {
      return {
        block: mock4,
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

export function InternalVideo() {
  return {
    data() {
      return {
        block: internalVideo,
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
export function ExternalVideo() {
  return {
    data() {
      return {
        block: externalVideo,
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

export function Event() {
  return {
    data() {
      return {
        block: event,
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

export function Exhibition() {
  return {
    data() {
      return {
        block: exhibition,
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
