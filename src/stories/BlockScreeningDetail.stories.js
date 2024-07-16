import { computed } from 'vue'
import BlockScreeningDetail from '@/lib-components/BlockScreeningDetail'

// Import mock api data
import * as MEDIA from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'BLOCK / Screening Detail',
  component: BlockScreeningDetail
}

const mockDefault = {
    title: 'Central Regions',
    alternateTitle: 'Alternate  La Central Region',
    language: 'es',
    year: '2025',
    country: 'South Country',
    languageInfo: 'Spanglish',
    runtime: '190 minutes',
    screeningTags: [
      {
        title: 'IMAX'
      },
      {
        title: 'Experimental Film'
      }
    ],
    text: '<p><em>This is the first part of a two-part article, the second half of which will be published in the December issue.</em></p> <p><a href="https://www.cinema.ucla.edu/events/2023/11/05/la-region-centrale">The late avant-garde master Michael Snow’s work</a> explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident.</p>',
    trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/3sQ9k4yvvPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>',
    embedCode: MEDIA.VideoEmbed,
    image: [
      {
        id: "3119538",
        src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/ZWEIUNTER-small_1.jpg",
        height: 1920,
        width: 2560,
        srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/ZWEIUNTER-small_1.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/ZWEIUNTER-small_1.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/ZWEIUNTER-small_1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/ZWEIUNTER-small_1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/ZWEIUNTER-small_1.jpg 2560w",
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
}

// Variations of stories below

export function Default() {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockScreeningDetail },
    template: `
      <block-screening-detail
        :title="title"
        :year="year"
        :country="country"
        :languageInfo="languageInfo"
        :runtime="runtime"
        :tagLabels="screeningTags"
        :text="text"
        :trailer= "trailer"

      />
  `,
  }
}

// MediaItem.stories
// export function VideoEmbed() {
//   return {
//     data() {
//       return {
//         embedCode: MEDIA.VideoEmbed,
//       }
//     },
//     components: { MediaItem },
//     template: '<media-item :embedCode="embedCode" />',
//   }
// }
