import VideoEmbed from '@/lib-components/VideoEmbed'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'GLOBAL / VideoEmbed',
  component: VideoEmbed,
}
// Variations of stories below
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
    template: '<video-embed :trailer="mockTrailerData.trailer"/>',
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
