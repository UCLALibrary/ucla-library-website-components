import VideoEmbed from '@/lib-components/VideoEmbed'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'GLOBAL / VideoEmbed',
  component: VideoEmbed,
}

const mockTrailerData = {
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5" title="YouTube video player" frameborder="0"></iframe></figure>',
  posterImage: API.image
}

export function Default() {
  return {
    data() {
      return {
        mockTrailerData
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockTrailerData.trailer" />',
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const mockData43AspectRatio = {
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/n_CC_FSrRdQ?si=Tjfxvu_KGBKgv6V" title="YouTube video player" frameborder="0"></iframe></figure>'
}

export function _4_3AspectRatio() {
  return {
    data() {
      return {
        mockData43AspectRatio
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockData43AspectRatio.trailer" aspect-ratio="75" />',
  }
}

export function WithCustomImageandIcon() {
  return {
    data() {
      return {
        mockTrailerData
      }
    },
    components: { VideoEmbed },
    template: '<video-embed :trailer="mockTrailerData.trailer" :posterImage="mockTrailerData.posterImage"/>',
  }
}
