import { computed } from 'vue'

import { mock, mockFTVA } from './mock/BlockMediaWithText'
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

// The 'kind' key appears to be needed by the MediaItem component that renders images in this component; without there's an empty space where the image should be. But this key is not a part of the data structure for images in FTVA; it will have to be added manually when MediaWithText is used for the theme.
const parsedFTVAData = computed(() => {
  const imageKind = { kind: 'image' }

  const parsedFTVAImage = [{ ...mockFTVA.ftvaImage[0], ...imageKind }]

  return {
    ...mockFTVA,
    ftvaImage: parsedFTVAImage
  }
})

export function FTVADefault() {
  return {
    data() {
      return { parsedFTVAData }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="parsedFTVAData.title"
            :short-description="parsedFTVAData.description"
            button-text="Linked Text"
            :button-url="parsedFTVAData.uri"
            :item="parsedFTVAData.ftvaImage"
        />
    `,
  }
}
