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

const mockDataShortenedYouTubeURL = {
  trailer: 'https://youtu.be/n_CC_FSrRdQ',
}

const mockDataVimeoEmbed = {
  trailer: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/1016387851?h=6a5ff72c35" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>',
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

export function AspectRatio4_3() {
  return {
    data() {
      return {
        mockDataAspectRatio43
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockDataAspectRatio43.trailer" :aspect-ratio=75 />',
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
    template: '<video-embed :trailer="mockDataAspectRatio43.trailer" :posterImage="mockDataAspectRatio43.posterImage" :aspect-ratio=75 />',
  }
}

// Edge case: Non-embeddable YouTube

export function ShortenedYoutubeURL() {
    return {
    data() {
      return {
        mockDataShortenedYouTubeURL
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockDataShortenedYouTubeURL.trailer" />',
  }
}

// Non YouTube Embed
export function VimeoEmbed() {
    return {
    data() {
      return {
        mockDataVimeoEmbed
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockDataVimeoEmbed.trailer" />',
  }
}
