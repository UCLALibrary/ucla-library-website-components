// Import component
import BlockAmenities from '@/lib-components/BlockAmenities'

const mock = {
  amenities: [
    'icon-clock',
    'icon-accessible',
    'icon-chair',
    'icon-virtual',
    'icon-laptop',
    'icon-locker',
    'icon-light',
    'icon-share-printer',
    'icon-book',
  ],
}

export default {
  title: 'BLOCK / Amenities',
  component: BlockAmenities,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BlockAmenities },
    template: `
        <block-amenities
            :amenities="amenities"
        />
    `,
  }
}
