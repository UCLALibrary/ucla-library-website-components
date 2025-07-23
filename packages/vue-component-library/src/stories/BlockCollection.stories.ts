import BlockCollection from '@/lib-components/BlockCollection.vue'

export default {
  title: 'Funkhaus / Block Collection',
  component: BlockCollection,
}

// MOCK DATA
const baseImage = {
  id: '26089',
  src: 'https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg',
  height: 2074,
  width: 2560,
  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w',
  alt: 'Albino Fox',
  focalPoint: [0.5, 0.5],
}

const mockDefault = {
  id: 'block-1',
  title: 'Default Block Collection',
  description: 'This is a default block collection with all fields filled.',
  image: baseImage,
  href: 'https://www.example.com',
}

const mockLongText = {
  id: 'block-3',
  title: 'Block With Very Long Title That Should Wrap Or Truncate Properly In The UI To Avoid Layout Breaking',
  description: 'This is a very long description. '.repeat(10),
  image: baseImage,
  href: 'https://www.example.com',
}

// STORIES
export function Default() {
  return {
    data() {
      return { ...mockDefault }
    },
    components: { BlockCollection },
    template: `<block-collection :href="href" :image="image" :title="title" :description="description"/>`,
  }
}

export function LongText() {
  return {
    data() {
      return { ...mockLongText }
    },
    components: { BlockCollection },
    template: `<block-collection :href="href" :image="image" :title="title" :description="description"/>`,
  }
}




