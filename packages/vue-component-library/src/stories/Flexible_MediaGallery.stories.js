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

export function FTVAHalfWidth() {
  return {
    data() {
      return {
        block: {
          ...FTVAGallery.Gallery,
          mediaGalleryStyle: 'halfWidth',
          sectionTitle: 'FTVA Half Width Gallery',
          richTextSimplified:
                    'Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.',
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
