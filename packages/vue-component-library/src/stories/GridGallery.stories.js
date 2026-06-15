import * as API from '@/stories/mock-api.json'
import GridGallery from '@/lib-components/GridGallery'

// Storybook default settings
export default {
  title: 'IMPACT REPORT / Grid Gallery',
  component: GridGallery
}

const mock = [
  {
    image: API.image,
    monthYear: 'March 2020',
    to: '/visit/foo/bar/',
    headlineText: 'Vel Quam Elementum',
    snippet:
            'Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. ',
  },
  {
    image: API.image,
    monthYear: 'March 2020',
    to: '/visit/foo/baz/',
    headlineText:
            'Mauris pellentesque pulvinar pellentesque habitant morbi tristique',
    snippet:
            'Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.',
  },
  {
    image: API.image,
    monthYear: 'March 2020',
    to: '/visit/foo/bat/',
    headlineText: 'Adipiscing Tristique',
    snippet:
            'Vel eros donec ac odio  nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. ',
  },
  {
    image: API.image,
    monthYear: 'March 2020',
    to: '/visit/foo/ban/',
    headlineText: 'Fames ac turpis egestas sed tempus lorem ipsum',
    snippet: 'Vel eros donec ac .',
  },
  {
    image: API.image,
    monthYear: 'March 2020',
    to: '/visit/foo/barf/',
    headlineText: 'Vel Quam Elementum',
  },
  {
    image: API.image,
    to: '/visit/foo/bad/',
    headlineText: 'Aenean Lectus Elit',
    snippet:
            'Vel eros donec ac odio tempor orci dapibus. Ante metus dictum at tempor. Pretium nibh ipsum consequat nisl vel pretium. Amet consectetur adipiscing elit ut aliquam purus sit. Diam quis enim lobortis scelerisque fermentum dui faucibus. Hac habitasse platea dictumst quisque.',
  },
]

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return { items: mock }
    },
    components: { GridGallery },
    template: `
      <grid-gallery
        :items="items"
      />
  `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FeaturedWithSnippetTemplate = (args) => {
  void args
  return {
    data() {
      return { items: mock }
    },
    computed: {
      parsedItems() {
        return this.items.map((obj, index) => {
          let featured = false
          if (index === 5)
            featured = true
          return {
            ...obj,
            featured,
          }
        })
      },
    },
    components: { GridGallery },
    template: `
      <grid-gallery
        :items="parsedItems"
      />
  `,
  }
}

export const FeaturedWithSnippet = FeaturedWithSnippetTemplate.bind({})
FeaturedWithSnippet.args = {}


const FeaturedNoSnippetTemplate = (args) => {
  void args
  return {
    data() {
      return { items: mock }
    },
    computed: {
      parsedItems() {
        return this.items.map((obj, index) => {
          const copyObj = Object.assign({}, obj)
          let featured = false
          if (index === 3)
            copyObj.snippet = ''
          if (index === 5 || index === 3)
            featured = true
          return {
            ...copyObj,
            featured,
          }
        })
      },
    },
    components: { GridGallery },
    template: `
      <grid-gallery
        :items="parsedItems"
      />
  `,
  }
}

export const FeaturedNoSnippet = FeaturedNoSnippetTemplate.bind({})
FeaturedNoSnippet.args = {}

