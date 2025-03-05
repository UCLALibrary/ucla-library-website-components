import { mock } from './mock/BlockMediaWithText'
import * as MEDIA from './mock/Media'
import BlockMediaWithText from '@/lib-components/BlockMediaWithText'

export default {
  title: 'BLOCK / Media with Text',
  component: BlockMediaWithText,
}

export function Default() {
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

export function NoMediaLink() {
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

export function Video() {
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

export function Audio() {
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

export function Embed() {
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

export function NoImage() {
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
