import MediaItem from '@/lib-components/Media/Item'

// Import mock api data
import * as MEDIA from '@/stories/mock/Media'

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

export const Default = Template.bind({})
Default.args = {
  item: MEDIA.ImageFile,
}

export function Image() {
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

export function Video() {
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

export function VideoEmbed() {
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

export function Audio() {
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

export function AudioEmbed() {
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
