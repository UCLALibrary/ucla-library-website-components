import ResponsiveImage from '@/lib-components/ResponsiveImage'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'GLOBAL / Responsive Image',
  component: ResponsiveImage,
}

// Variations of stories below
export function Default() {
  return {
    components: { ResponsiveImage },
    data() {
      return {
        image: API.image,
      }
    },
    template: '<responsive-image :media="image"/>',
  }
}

export function SquareRatio() {
  return {
    components: { ResponsiveImage },
    data() {
      return {
        image: API.image,
      }
    },
    template: `
        <responsive-image
            :media="image"
            :aspect-ratio="100"
        />
    `,
  }
}

export function ObjectFitContain() {
  return {
    components: { ResponsiveImage },
    data() {
      return {
        image: API.image,
      }
    },
    template: `
        <responsive-image
            :media="image"
            :aspect-ratio="100"
            object-fit="contain"
        />
    `,
  }
}
