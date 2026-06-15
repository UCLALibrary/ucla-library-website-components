import MediaItem from '@/lib-components/Media/Item'

// Import mock api data
import * as MEDIA from '@/stories/mock/Media'

// eslint-disable-next-line unused-imports/no-unused-vars
function Template(args, { argTypes }) {
  return {
    props: Object.keys(argTypes),
    components: { MediaItem },
    template: '<media-item v-bind="$props"/>',
  }
}

export default {
  title: 'GLOBAL / Media Item',
  component: MediaItem,
}

export const Default = {
  args: {
    item: MEDIA.ImageFile,
  }
}
Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const ImageTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: MEDIA.ImageFile,
      }
    },
    components: { MediaItem },
    template: '<media-item :item="item" />',
  }
}

export const Image = ImageTemplate.bind({})
Image.args = {}


const VideoTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: MEDIA.VideoFile,
        coverImage: MEDIA.VideoFileCoverImage,
      }
    },
    components: { MediaItem },
    template: '<media-item v-bind="$data" />',
  }
}

export const Video = VideoTemplate.bind({})
Video.args = {}


const VideoEmbedTemplate = (args) => {
  void args
  return {
    data() {
      return {
        embedCode: MEDIA.VideoEmbed,
      }
    },
    components: { MediaItem },
    template: '<media-item :embedCode="embedCode" />',
  }
}

export const VideoEmbed = VideoEmbedTemplate.bind({})
VideoEmbed.args = {}


const AudioTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: MEDIA.AudioFile,
        coverImage: MEDIA.AudioFileCoverImage,
      }
    },
    components: { MediaItem },
    template: '<media-item v-bind="$data" />',
  }
}

export const Audio = AudioTemplate.bind({})
Audio.args = {}


const AudioEmbedTemplate = (args) => {
  void args
  return {
    data() {
      return {
        embedCode: MEDIA.AudioEmbed,
      }
    },
    components: { MediaItem },
    template: '<media-item :embedCode="embedCode" />',
  }
}

export const AudioEmbed = AudioEmbedTemplate.bind({})
AudioEmbed.args = {}

