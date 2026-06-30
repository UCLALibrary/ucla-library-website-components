import ResponsiveVideo from '@/lib-components/ResponsiveVideo'
import VideoEmbed from '@/lib-components/VideoEmbed'

// Import mock api data
import * as API from '@/stories/mock-api.json'

export default {
  title: 'GLOBAL / Responsive Video',
  component: ResponsiveVideo,
  argTypes: {
    media: { control: 'object' },
    controls: { control: 'boolean' },
    aspectRatio: { control: 'number' },
    useSlottedVideoEmbed: { control: 'boolean' },
    trailer: { control: 'text' },
  },
}

function Template(args) {
  return {
    components: { ResponsiveVideo, VideoEmbed },
    setup() {
      return { args }
    },
    template: `
      <responsive-video
        :media="args.media"
        :controls="args.controls"
        :aspect-ratio="args.aspectRatio"
      >
        <template v-if="args.useSlottedVideoEmbed" #default>
          <video-embed :trailer="args.trailer" />
        </template>
      </responsive-video>
    `,
  }
}

export const ImageWithVideo = Template.bind({})
ImageWithVideo.args = {
  media: API.video,
  controls: false,
  aspectRatio: undefined,
  useSlottedVideoEmbed: false,
  trailer: '',
}
ImageWithVideo.parameters = {
  chromatic: { disableSnapshot: false },
}

export const VideoWithControls = Template.bind({})
VideoWithControls.args = {
  ...ImageWithVideo.args,
  controls: true,
}

// Example using a slot to put a VideoEmbed iframe inside ResponsiveVideo
const mockFTVAData = {
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5" title="YouTube video player" frameborder="0"></iframe></figure>'
}
export const WithSlottedVideoEmbed = Template.bind({})
WithSlottedVideoEmbed.args = {
  ...ImageWithVideo.args,
  controls: true,
  aspectRatio: 56.9,
  useSlottedVideoEmbed: true,
  trailer: mockFTVAData.trailer,
}
