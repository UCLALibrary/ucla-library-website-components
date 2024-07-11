import ResponsiveVideo from '@/lib-components/ResponsiveVideo'

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
