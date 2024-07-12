import ResponsiveVideo from '@/lib-components/ResponsiveVideo'
import VideoEmbed from '@/lib-components/VideoEmbed'
import { computed } from 'vue'

// Import mock api data
import * as API from '@/stories/mock-api.json'

export default {
  title: 'GLOBAL / Responsive Video',
  component: ResponsiveVideo,
}

export function ImageWithVideo() {
  return {
    data() {
      return {
        video: API.video
      }
    },
    components: { ResponsiveVideo },
    template: '<responsive-video :media="video" />',
  }
}

export function VideoWithControls() {
  return {
    data() {
      return {
        video: API.video,
      }
    },
    components: { ResponsiveVideo },
    template: '<responsive-video :media="video" :controls="true"/>',
  }
}

// Example using a slot to put a VideoEmbed iframe inside ResponsiveVideo
const mockFTVAData = {
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5" title="YouTube video player" frameborder="0"></iframe></figure>'
}
export function WithSlottedVideoEmbed() {
  return {
    setup() {
      return {
        mockFTVAData
      }
    },
    data() {
      return {
        video: API.video,
      }
    },
    components: { ResponsiveVideo, VideoEmbed },
    template: '<responsive-video :aspect-ratio="56.9" :controls="true"><template v-slot><video-embed :trailer="mockFTVAData.trailer" /></template></responsive-video>',
  }
}
