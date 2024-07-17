import { computed } from 'vue'
import SectionScreeningDetails from '@/lib-components/SectionScreeningDetails'

// Storybook default settings
export default {
  title: 'SECTION / Screening Details',
  component: SectionScreeningDetails,
}

const mockDefault = [
  {
    title: 'One Screening',
    alternateTitle: 'Alternate La Central Region',
    language: 'sp',
    year: '2025',
    country: 'South Country',
    languageInfo: 'Spanglish',
    runtime: '190 minutes',
    tagLabels: [
      {
        title: 'IMAX'
      },
      {
        title: 'Experimental Film'
      }
    ],
    text: '<p><em>This is the first part of a two-part article, the second half of which will be published in the December issue.</em></p> <p><a href="https://www.cinema.ucla.edu/events/2023/11/05/la-region-centrale">The late avant-garde master Michael Snow</a> explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident.</p>',
    trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=DzBCtX84znzh9EML" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>',
    embedCode: '<figure><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nir7aNK5794?si=QZAJFI1fYNGZ96rc\" title=\"YouTube video player\" frameborder=\"0\"></iframe></figure>',
    image: [
      {
        id: '3156203',
        src: 'https://static.library.ucla.edu/craftassetstest/_fullscreen/michaelSnow.jpeg',
        height: 2416,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/michaelSnow.jpeg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/michaelSnow.jpeg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/michaelSnow.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/michaelSnow.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/michaelSnow.jpeg 2560w',
        alt: 'michael snow in thinking man pose',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  }
]

const mockMultiple = [
  {
    title: 'Multiple Screenings',
    alternateTitle: 'Alternate  La Central Region',
    language: 'es',
    year: '2025',
    country: 'South Country',
    languageInfo: 'Spanglish',
    runtime: '190 minutes',
    tagLabels: [
      {
        title: 'IMAX'
      },
      {
        title: 'Experimental Film'
      }
    ],
    text: '<p><em>This is the first part of a two-part article, the second half of which will be published in the December issue.</em></p> <p><a href="https://www.cinema.ucla.edu/events/2023/11/05/la-region-centrale">The late avant-garde master Michael Snow</a> explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident.</p>',
    trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=DzBCtX84znzh9EML" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>',
    embedCode: '<figure><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nir7aNK5794?si=QZAJFI1fYNGZ96rc\" title=\"YouTube video player\" frameborder=\"0\"></iframe></figure>',

  },
  {
    title: 'South America is Super Interesting',
    alternateTitle: 'Sudamérica es súper interesante',
    languageTranslated: 'es',
    year: '1971',
    country: 'South America',
    languageInfo: 'Spanish',
    runtime: '3 hours',
    tagLabels: [
      {
        title: 'Guest Speaker'
      }
    ],
    text: '<p>Snow shot <em>La Région Centrale</em> from September 14 to 20, 1970 with his wife <a href=\"https://en.wikipedia.org/wiki/Joyce_Wieland\" title=\"Joyce Wieland\">Joyce Wieland</a>, Abbeloos, and Bernard Goussard. They chartered a helicopter to transport them to the mountain. Snow and his team were shooting for five days, producing sixty hours of footage. He edited the film during a residency at the <a href=\"https://en.wikipedia.org/wiki/Nova_Scotia_College_of_Art_and_Design\" title=\"Nova Scotia College of Art and Design\">Nova Scotia College of Art and Design</a>.</p>',
    trailer: null,
  },
  {
    title: 'Michael Snow 1983',
    alternateTitle: null,
    languageTranslated: 'es',
    year: '1983',
    country: 'Spain',
    languageInfo: 'Spanish',
    runtime: '30 minutes',
    tagLabels: [
      {
        title: 'Interview'
      },
      {
        title: 'Film'
      }
    ],
    text: '<p>Interview and profile of experimental filmmaker Michael Snow from 1983. Includes extracts from \'Back and Forth\', \'Wavelength\', \'La Region Central\', \'So Is This\' and gallery piece \'Two Sides To Every Story\'. Made for Channel 4 \'Visions\' and broadcast 19 January 1983. Interview: Simon Field; Director: Keith Griffiths</p>',
    trailer: '<figure><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nir7aNK5794?si=QZAJFI1fYNGZ96rc\" title=\"YouTube video player\" frameborder=\"0\"></iframe></figure>',
  }
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionScreeningDetails },
    template: `
    <div>
      <section-screening-details
        :items="items"
      />
    </div>
  `,
  }
}

export function MultipleScreenings() {
  return {
    data() {
      return { items: mockMultiple }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionScreeningDetails },
    template: `
    <div>
      <section-screening-details
        :items="items"
      />
      </div>
  `,
  }
}
