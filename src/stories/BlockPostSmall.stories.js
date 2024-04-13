// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockPostSmall from '@/lib-components/BlockPostSmall'

// Storybook default settings
export default {
  title: 'BLOCK / Post Small',
  component: BlockPostSmall,
}

const mockDefault = {
  image: API.image,
  to: '/foo/bar',
  categoryName: 'squirrels',
  author: 'Fluffy Ranger',
  title: 'What to Feed Squirrels',
}

const mockVisit = {
  image: API.image,
  to: '/visit/foo/bar/',
  categoryName: 'wild pets',
  author: 'Dexter Diamond',
  title: 'Introducing Mammals to Young Naturalists',
}

const mockAbout = {
  image: API.image,
  to: '/about/foo/bar',
  categoryName: 'red squirrels',
  author: 'Dexter Diamond',
  title: 'Twenty-two Things About Squirrels',
}

const mockHelp = {
  image: API.image,
  to: '/help/foo/bar/',
  categoryName: 'gray squirrels',
  author: 'Smokey Smith',
  title: 'Squirrels: Diet, Habits & Other Facts',
}

const mockLongText = {
  image: API.image,
  to: '/visit/foo/bar/',
  categoryName: 'wild squirrels',
  author: 'Fluffy Ranger',
  title: 'Six Stupendous Reasons to Appreciate the Heck Out of these surprisingly brainy, aerodynamic, nut-crazed squirrels',
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        item: {
          ...mockDefault,
        },
      }
    },
    components: { BlockPostSmall },
    template: `
      <block-post-small
        v-bind="item"
      />
  `,
  }
}

export function Visit() {
  return {
    data() {
      return {
        item: {
          ...mockVisit,
        },
      }
    },
    components: { BlockPostSmall },
    template: `
      <block-post-small
        v-bind="item"
      />
  `,
  }
}

export function About() {
  return {
    data() {
      return {
        item: {
          ...mockAbout,
        },
      }
    },
    components: { BlockPostSmall },
    template: `
      <block-post-small
        v-bind="item"
      />
  `,
  }
}

export function Help() {
  return {
    data() {
      return {
        item: {
          ...mockHelp,
        },
      }
    },
    components: { BlockPostSmall },
    template: `
      <block-post-small
        v-bind="item"
      />
  `,
  }
}

export function LongText() {
  return {
    data() {
      return {
        item: {
          ...mockLongText,
        },
      }
    },
    components: { BlockPostSmall },
    template: `
      <block-post-small
        v-bind="item"
      />
  `,
  }
}
