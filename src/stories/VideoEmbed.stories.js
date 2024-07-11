import VideoEmbed from '@/lib-components/VideoEmbed'
// import { computed } from 'vue'

export default {
  title: 'GLOBAL / VideoEmbed',
  component: VideoEmbed,
}
// Variations of stories below
export function Default() {
  return {
    components: { VideoEmbed },
    template: '<video-embed trailer="dfsdfs"/>',
  }
}