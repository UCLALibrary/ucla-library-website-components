import { computed } from 'vue'
import * as API from './mock/Media'
import * as FTVAGallery from './mock/FTVAMedia'
import FlexibleMediaGallery from '@/lib-components/Flexible/MediaGallery'

export default {
  title: 'FLEXIBLE / Media Gallery',
  component: FlexibleMediaGallery,
}

export function Default() {
  return {
    data() {
      return {
        block: {
          ...API.Gallery,
          mediaGalleryStyle: 'fullWidth',
        },
      }
    },

    components: { FlexibleMediaGallery },
    template: '<flexible-media-gallery :block="block"/>',
  }
}

export function FTVA() {
  return {
    data() {
      return {
        block: {
          ...FTVAGallery.Gallery,
          mediaGalleryStyle: 'fullWidth',
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGallery },
    template: '<flexible-media-gallery :block="block"/>',
  }
}

export function WithHalfWidth() {
  return {
    data() {
      return {
        block: {
          ...API.Gallery,
          mediaGalleryStyle: 'halfWidth',
          sectionTitle: 'Pine Needles',
          richTextSimplified:
                    'Pine needles range in size from 3 to 5 inches and are a deep forest green color. The long, thin needles vary slightly from variety to variety, depending on the region in which they grow. Pine needles have a strong pine scent, and a biting resinous flavor.  They are leaves. They do the same job that broad leaves do—capture sunlight, “inhale” carbon dioxide, and “exhale” oxygen—providing the tree with food and air for us to breath.',
        },
      }
    },
    components: { FlexibleMediaGallery },
    template: '<flexible-media-gallery :block="block"/>',
  }
}
