import GridCollections from '@/lib-components/GridCollections.vue'

export default {
  title: 'Funkhaus / Grid Collections',
  component: GridCollections,
}

const baseImage = {
  id: '26089',
  src: 'https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg',
  height: 2074,
  width: 2560,
  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w',
  alt: 'Albino Fox',
  focalPoint: [0.5, 0.5],
}

const defaultItems = [
  {
    id: 'collection-1',
    href: 'https://www.example.com/1',
    image: baseImage,
    title: 'Rare Books',
    description: 'A curated selection of rare and antique books from our archives.'
  },
  {
    id: 'collection-2',
    href: 'https://www.example.com/2',
    image: baseImage,
    title: 'Historical Photos',
    description: 'Photographs documenting Los Angeles history from the 19th and 20th centuries.'
  },
  {
    id: 'collection-3',
    href: 'https://www.example.com/3',
    image: baseImage,
    title: 'Manuscripts',
    description: 'Handwritten letters, diaries, and documents from notable figures.'
  },
  {
    id: 'collection-1',
    href: 'https://www.example.com/1',
    image: baseImage,
    title: 'Rare Books',
    description: 'A curated selection of rare and antique books from our archives.'
  },
  {
    id: 'collection-2',
    href: 'https://www.example.com/2',
    image: baseImage,
    title: 'Historical Photos',
    description: 'Photographs documenting Los Angeles history from the 19th and 20th centuries.'
  },
  {
    id: 'collection-3',
    href: 'https://www.example.com/3',
    image: baseImage,
    title: 'Manuscripts',
    description: 'Handwritten letters, diaries, and documents from notable figures.'
  },
]

const longTextItems = [
  {
    id: 'collection-4',
    href: 'https://www.example.com/4',
    image: baseImage,
    title: 'Extremely Long Title That Should Wrap Or Truncate Properly In The UI To Avoid Layout Breaking',
    description: 'This is an example of a grid collection with an extremely long description. '.repeat(10)
  },
  {
    id: 'collection-5',
    href: 'https://www.example.com/5',
    image: baseImage,
    title: 'Another Long Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(15)
  },
]


const emptyItems = []

export function Default() {
  return {
    data() {
      return { items: defaultItems }
    },
    components: { GridCollections },
    template: `<grid-collections :items="items" />`,
  }
}

export function LongText() {
  return {
    data() {
      return { items: longTextItems }
    },
    components: { GridCollections },
    template: `<grid-collections :items="items" />`,
  }
}
