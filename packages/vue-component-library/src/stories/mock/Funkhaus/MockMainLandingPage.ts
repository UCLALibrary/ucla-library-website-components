import { ButtonLinkIcons } from '../../../types/components/buttonLink.types'

// HeaderCollection mock data
export const mockHeaderCollection = {
  subtitle: 'Welcome to the',
  title: 'UCLA Library Digital Collections',
  text: 'New to UCLA Library? Get started with our quick start guide. ',
  buttons: [
    {
      label: 'Using Digital Collections Guide',
      to: 'https://www.google.com',
      iconName: ButtonLinkIcons.ARROW_RIGHT,
    },
  ],
}

const baseImage = {
  id: '26089',
  src: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
  height: 2074,
  width: 2560,
  alt: 'Albino Fox',
  focalPoint: [0.5, 0.5],
}

// Mock data for grid content
export const mockGridItems = [
  {
    id: 'collection-1',
    href: 'https://www.example.com/1',
    image: baseImage,
    title: 'Rare Books',
    description:
            'A curated selection of rare and antique books from our archives.',
  },
  {
    id: 'collection-2',
    href: 'https://www.example.com/2',
    image: baseImage,
    title: 'Historical Photos',
    description:
            'Photographs documenting Los Angeles history from the 19th and 20th centuries.',
  },
  {
    id: 'collection-3',
    href: 'https://www.example.com/3',
    image: baseImage,
    title: 'Manuscripts',
    description:
            'Handwritten letters, diaries, and documents from notable figures.',
  },
  {
    id: 'collection-4',
    href: 'https://www.example.com/1',
    image: baseImage,
    title: 'Rare Books',
    description:
            'A curated selection of rare and antique books from our archives.',
  },
  {
    id: 'collection-5',
    href: 'https://www.example.com/2',
    image: baseImage,
    title: 'Historical Photos',
    description:
            'Photographs documenting Los Angeles history from the 19th and 20th centuries.',
  },
]
