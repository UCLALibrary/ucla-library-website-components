import { computed } from 'vue'

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
  author: 'Penelope Nutstop',
  title: 'Twenty-two Things About Flying Squirrels',
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

const mockFtva = {
  image: API.image,
  to: '/about',
  title: 'Donating Materials',
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
        :image="item.image"
        :to="item.to"
      >
        <template #category>
          <div class="category">{{ item.categoryName }}</div>
        </template>
        <template #title>
          <h3 class="title">{{ item.title }}</h3>
        </template>
        <template #author>
          <div class="author">By {{ item.author }}</div>
        </template>
      </block-post-small>
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
        :image="item.image"
        :to="item.to"
      >
        <template #category>
          <div class="category">{{ item.categoryName }}</div>
        </template>
        <template #title>
          <h3 class="title">{{ item.title }}</h3>
        </template>
        <template #author>
          <div class="author">By {{ item.author }}</div>
        </template>
      </block-post-small>
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
        :image="item.image"
        :to="item.to"
      >
        <template #category>
          <div class="category">{{ item.categoryName }}</div>
        </template>
        <template #title>
          <h3 class="title">{{ item.title }}</h3>
        </template>
        <template #author>
          <div class="author">By {{ item.author }}</div>
        </template>
      </block-post-small>
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
        :image="item.image"
        :to="item.to"
      >
        <template #category>
          <div class="category">{{ item.categoryName }}</div>
        </template>
        <template #title>
          <h3 class="title">{{ item.title }}</h3>
        </template>
        <template #author>
          <div class="author">By {{ item.author }}</div>
        </template>
      </block-post-small>
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
        :image="item.image"
        :to="item.to"
      >
        <template #category>
          <div class="category">{{ item.categoryName }}</div>
        </template>
        <template #title>
          <h3 class="title">{{ item.title }}</h3>
        </template>
        <template #author>
          <div class="author">By {{ item.author }}</div>
        </template>
      </block-post-small>
  `,
  }
}

export function Ftva() {
  return {
    data() {
      return {
        item: {
          ...mockFtva,
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockPostSmall },
    template: `
      <block-post-small
        :image="item.image"
        :to="item.to"
      >
        <template #title>
          <h3 class="title">{{ item.title }}</h3>
        </template>
      </block-post-small>
  `,
  }
}
