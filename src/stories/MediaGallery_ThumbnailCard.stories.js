import { computed } from 'vue'
import * as API from '@/stories/mock/Media'
import FlexibleMediaGalleryThumbnailCard from '@/lib-components/Flexible/MediaGallery/ThumbnailCard.vue'

// Storybook default settings
export default {
  title: 'Media Gallery / Thumbnail Card',
  component: FlexibleMediaGalleryThumbnailCard,
}

const mock = API.Gallery.mediaGallery[0]

const mockFTVA = {
  id: '46452',
  captionTitle: 'Preservation and Access Initiative, Free Screening for the General Public: Tom Reed’s “For Members Only”: Black Perspectives on Local L.A. TV',
  captionText: 'I\'m baby meh bicycle rights activated charcoal cronut you probably haven\'t heard of them distillery flannel cliche woke. Raclette sustainable vape salvia direct trade hashtag street art.',
  sortOrder: 2,
  item: [{
    id: '3156835',
    src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
    height: 1813,
    width: 2560,
    srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
    alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
    focalPoint: [
      0.5,
      0.5
    ],
    kind: 'image',
  }],
}

const mockFocalPoint = {
  id: '43141',
  captionTitle: 'Ramakatane archive 15',
  captionText:
        'Man standing with foot on stool wearing a panama hat and sandals with coat in hand, photographed in Mr. M.T. Ramakatane\'s City Centre Studio',
  sortOrder: 5,
  item: [
    {
      id: '42883',
      src: 'https://static.library.ucla.edu/craftassetstest/images/Ramakatane-archive-15.jpeg',
      height: 2547,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 2560w',
      alt: 'Ramakatane archive 15',
      focalPoint: [0.5599, 0.3008],
      altText: 'Ramakatane archive 15',
      kind: 'image',
    },
  ],
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        mock,
      }
    },
    components: { FlexibleMediaGalleryThumbnailCard },
    template: `
    <div style="max-width: 400px">
      <flexible-media-gallery-thumbnail-card v-bind=mock level=3 />
    </div>
  `,
  }
}

export function FTVA() {
  return {
    data() {
      return {
        mock: mockFTVA,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryThumbnailCard },
    template: `
    <div style="max-width: 400px">
      <flexible-media-gallery-thumbnail-card v-bind=mock />
    </div>
  `,
  }
}

export function FocalPoint() {
  return {
    data() {
      return { mock: mockFocalPoint }
    },
    components: { FlexibleMediaGalleryThumbnailCard },
    template: `
    <div style="max-width: 400px">
      <flexible-media-gallery-thumbnail-card v-bind=mock level=3 />
    </div>
`,
  }
}
