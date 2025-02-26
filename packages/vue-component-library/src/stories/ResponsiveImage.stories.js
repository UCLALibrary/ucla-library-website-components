import { computed } from 'vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage'
import BlockTag from '@/lib-components/BlockTag'

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

export function WithCreditText() {
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
        >
        <template v-slot:credit>
               Photo by John Doe
        </template>
        </responsive-image>
    `,
  }
}

export function WithLongCreditText() {
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
        >
        <template v-slot:credit>
               lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum 
        </template>
        </responsive-image>
    `,
  }
}

export function WithBadgeAtTop() {
  return {
    components: { ResponsiveImage, BlockTag },
    data() {
      return {
        image: API.image,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
        <responsive-image
            :media="image"
        >
        <template v-slot:toptext>
            <block-tag
            label="Some Label"
          />
        </template>
        </responsive-image>
    `,
  }
}
