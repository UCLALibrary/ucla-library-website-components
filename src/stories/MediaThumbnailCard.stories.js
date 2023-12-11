// Import mock api data
import * as API from '@/stories/mock/Media'
import MediaThumbnailCard from '@/lib-components/Media/ThumbnailCard.vue'

// Storybook default settings
export default {
  title: 'Media / Thumbnail Card',
  component: MediaThumbnailCard,
}

const mock = API.Gallery.mediaGallery[0]

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
    components: { MediaThumbnailCard },
    template: `
    <div style="max-width: 400px">
      <MediaThumbnailCard v-bind=mock level=3 />
    </div>
  `,
  }
}

export function FocalPoint() {
  return {
    data() {
      return { mock: mockFocalPoint }
    },
    components: { MediaThumbnailCard },
    template: `
    <div style="max-width: 400px">
      <MediaThumbnailCard v-bind=mock level=3 />
    </div>
`,
  }
}
