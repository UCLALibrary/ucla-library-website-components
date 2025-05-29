import { computed } from 'vue'

// Import mock api data
import * as API from '@/stories/mock-api.json'
import SectionPostSmall from '@/lib-components/SectionPostSmall'

/**
 * Section / wrapper component for BlockPostSmall.
 *
 * `fullWidth` prop set to `false` (default) displays blocks at standard width:
 * - Library: max width of 300px
 * - FTVA: 49% of wrapper
 *
 * `fullWidth` prop set to `true`, items span the width of the wrapper
 *
 * Props:
 * - items: (array)
 * - sectionTitle (string)
 * - sectionSummary (string)
 * - fullWidth: (boolean)
 */

// Storybook default settings
export default {
  title: 'Section / Post Small',
  component: SectionPostSmall,
}

const mock = [
  {
    image: API.image,
    to: '/foo/bar',
    categoryName: 'squirrels',
    author: 'Fluffy Ranger',
    title: 'What to Feed Squirrels',
  },
  {
    image: API.image,
    to: '/visit/fizz',
    categoryName: 'wild pets',
    author: 'Dexter Diamond',
    title: 'Introducing Mammals to Young Naturalists',
  },
  {
    image: API.image,
    to: '/about/foo/bar',
    categoryName: 'red squirrels',
    author: 'Penelope Nutstop',
    title: 'Twenty-two Things About Flying Squirrels',
  },
  {
    image: API.image,
    to: '/help/foo/bar/',
    categoryName: 'gray squirrels',
    author: 'Smokey Smith',
    title: 'Squirrels: Diet, Habits & Other Facts',
  }
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionPostSmall },
    template: `
      <section-post-small
        :items="items"
        to="/visit/foo/bar/"
      />
  `,
  }
}

export function DefaultFullWidth() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionPostSmall },
    template: `
      <section-post-small
        :items="items"
        :full-width=true
        to="/visit/foo/bar/"
      />
  `,
  }
}

const mockFtva = [
  {
    image: API.image,
    to: '/collection-policy',
    title: 'Collection Policy',
  },
  {
    image: API.image,
    to: '/media-licensing',
    title: 'Media Licensing',
  },
  {
    image: API.image,
    to: 'https://www.cinema.ucla.edu/donating-materials',
    title: 'Donating Materials',
  }
]

export function FTVADefault() {
  return {
    data() {
      return { items: mockFtva }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionPostSmall },
    template: `
      <SectionPostSmall
        :items="items"
        sectionTitle="About Our Collections"
        sectionSummary="<p>With over 350,00 motion pictures and 170,000 television programs, and 27 million feet of newsreel footage, the <em>UCLA Film & Television Archive</em> is the largest university-held collection of motion pictures and broadcast programming.</p> <p>For more information on our collections or to arrange research viewing please contact the <strong>Archive Research and Study Center</strong> (ARSC).</p>"
      />
  `,
  }
}

export function FTVANoSummary() {
  return {
    data() {
      return { items: mockFtva }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionPostSmall },
    template: `
      <SectionPostSmall
        :items="items"
        sectionTitle="About Our Collections"
      />
  `,
  }
}

const mockFtva2 = [
  {
    image: API.image,
    to: '/collection-policy',
    title: 'Collection Policy',
  }
]

export function FTVAOneItem() {
  return {
    data() {
      return { items: mockFtva2 }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionPostSmall },
    template: `
      <SectionPostSmall
        :items="items"
        sectionTitle="About Our Collections"
        sectionSummary="<p>With over 350,00 motion pictures and 170,000 television programs, and 27 million feet of newsreel footage, the <em>UCLA Film & Television Archive</em> is the largest university-held collection of motion pictures and broadcast programming.</p> <p>For more information on our collections or to arrange research viewing please contact the <strong>Archive Research and Study Center</strong> (ARSC).</p>"
      />
  `,
  }
}

export function FTVAOneItemFullWidth() {
  return {
    data() {
      return { items: mockFtva2 }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionPostSmall },
    template: `
      <SectionPostSmall
        :items="items"
        :full-width=true
        sectionTitle="About Our Collections"
        sectionSummary="<p>With over 350,00 motion pictures and 170,000 television programs, and 27 million feet of newsreel footage, the <em>UCLA Film & Television Archive</em> is the largest university-held collection of motion pictures and broadcast programming.</p> <p>For more information on our collections or to arrange research viewing please contact the <strong>Archive Research and Study Center</strong> (ARSC).</p>"
      />
  `,
  }
}

export function FTVAMultipleFullWidth() {
  return {
    data() {
      return { items: mockFtva }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionPostSmall },
    template: `
      <SectionPostSmall
        :items="items"
        :full-width=true
        sectionTitle="About Our Collections"
        sectionSummary="<p>With over 350,00 motion pictures and 170,000 television programs, and 27 million feet of newsreel footage, the <em>UCLA Film & Television Archive</em> is the largest university-held collection of motion pictures and broadcast programming.</p> <p>For more information on our collections or to arrange research viewing please contact the <strong>Archive Research and Study Center</strong> (ARSC).</p>"
      />
  `,
  }
}
