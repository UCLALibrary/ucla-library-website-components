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
const DefaultTemplate = (args) => {
  void args
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

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const SquareRatioTemplate = (args) => {
  void args
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

export const SquareRatio = SquareRatioTemplate.bind({})
SquareRatio.args = {}


const ObjectFitContainTemplate = (args) => {
  void args
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

export const ObjectFitContain = ObjectFitContainTemplate.bind({})
ObjectFitContain.args = {}


const WithCreditTextTemplate = (args) => {
  void args
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

export const WithCreditText = WithCreditTextTemplate.bind({})
WithCreditText.args = {}


const WithLongCreditTextTemplate = (args) => {
  void args
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

export const WithLongCreditText = WithLongCreditTextTemplate.bind({})
WithLongCreditText.args = {}


const WithBadgeAtTopTemplate = (args) => {
  void args
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

export const WithBadgeAtTop = WithBadgeAtTopTemplate.bind({})
WithBadgeAtTop.args = {}

