import { computed } from 'vue'

import { mock, mockFTVA } from './mock/BlockMediaWithText'
import * as MEDIA from './mock/Media'
import BlockMediaWithText from '@/lib-components/BlockMediaWithText'

export default {
  title: 'BLOCK / Media with Text',
  component: BlockMediaWithText,
}

const DefaultTemplate = (args) => {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :item="mediaWithText[0].coverImage"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const NoMediaLinkTemplate = (args) => {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :item="mediaWithText[0].coverImage"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
  }
}

export const NoMediaLink = NoMediaLinkTemplate.bind({})
NoMediaLink.args = {}

const VideoTemplate = (args) => {
  return {
    data() {
      return {
        ...mock,
        item: MEDIA.VideoFile,
        coverImage: MEDIA.VideoFileCoverImage,
      }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :item="item"
            :coverImage="coverImage"
            type-media="video"
        />
    `,
  }
}

export const Video = VideoTemplate.bind({})
Video.args = {}

const VideoWithNoButtonTemplate = (args) => {
  return {
    data() {
      return {
        ...mock,
        item: MEDIA.VideoFile,
        coverImage: MEDIA.VideoFileCoverImage,
      }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text=""
            button-url="http://cinema.ucla.edu"
            :item="item"
            :coverImage="coverImage"
            type-media="video"
        />
    `,
  }
}

export const VideoWithNoButton = VideoWithNoButtonTemplate.bind({})
VideoWithNoButton.args = {}

const AudioTemplate = (args) => {
  return {
    data() {
      return {
        ...mock,
        item: MEDIA.AudioFile,
        coverImage: MEDIA.AudioFileCoverImage,
      }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :item="item"
            :coverImage="coverImage"
            type-media="audio"
        />
    `,
  }
}

export const Audio = AudioTemplate.bind({})
Audio.args = {}

const EmbedTemplate = (args) => {
  return {
    data() {
      return {
        ...mock,
        embedCode: MEDIA.AudioEmbed,
        coverImage: MEDIA.AudioEmbedCoverImage,
      }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :embedCode="embedCode"
            :coverImage="coverImage"
            type-media="audio"
        />
    `,
  }
}

export const Embed = EmbedTemplate.bind({})
Embed.args = {}

// Sometimes the type-media is an image but an image is not provided, so we need to display a placeholder image.

const NoImageTemplate = (args) => {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
  }
}

export const NoImage = NoImageTemplate.bind({})
NoImage.args = {}

const FTVADefaultTemplate = (args) => {
  return {
    data() {
      return { ...mockFTVA }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="titleLink"
            :short-description="description"
            :button-text="buttonText"
            :button-url="buttonUrl"
            :cover-image="coverImage"
            :type-media="typeMedia"
        />
    `,
  }
}

export const FTVADefault = FTVADefaultTemplate.bind({})
FTVADefault.args = {}
