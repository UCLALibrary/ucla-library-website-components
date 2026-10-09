import VideoEmbed from '@/lib-components/VideoEmbed'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'GLOBAL / VideoEmbed',
  component: VideoEmbed,
}

const mockData = {
  trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zCvQOYBQ4vE?si=sA_3OA-BYbLpVien" title="YouTube video player" frameborder="0" ></iframe>',
  posterImage: API.image
}

const mockDataAspectRatio43 = {
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/n_CC_FSrRdQ?si=Tjfxvu_KGBKgv6V" title="YouTube video player" frameborder="0"></iframe></figure>',
  posterImage: API.image_aspect_ratio_43
}

export function Default() {
  return {
    data() {
      return {
        mockData
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockData.trailer" />',
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function AspectRatio4_3() {
  return {
    data() {
      return {
        mockDataAspectRatio43
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockDataAspectRatio43.trailer" aspect-ratio="75" />',
  }
}

export function CustomImage() {
  return {
    data() {
      return {
        mockData
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockData.trailer" :posterImage="mockData.posterImage"/>',
  }
}

export function CustomImage4_3() {
  return {
    data() {
      return {
        mockDataAspectRatio43
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockDataAspectRatio43.trailer" :posterImage="mockDataAspectRatio43.posterImage" aspect-ratio="75"/>',
  }
}
