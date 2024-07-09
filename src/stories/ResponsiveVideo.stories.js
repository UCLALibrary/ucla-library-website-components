import { computed } from 'vue'
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

// Example using a slot to put a responsive iframe inside responsive video
const mockFTVAData = {
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5" title="YouTube video player" frameborder="0"></iframe></figure>'
}
const parsedTrailer = computed(() => {
  return mockFTVAData.trailer.split('src=\"')[1].split('\"')[0]
})
export function FTVAVideoEmbed() {
  return {
    setup() {
      return {
        parsedTrailer
      }
    },
    data() {
      return {
        video: API.video,
      }
    },
    components: { ResponsiveVideo },
    template: '<responsive-video :aspect-ratio="56.9" :controls="true"><template v-slot><iframe :src="parsedTrailer" title="YouTube video player" class="responsive-iframe" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></template></responsive-video>',
  }
}
