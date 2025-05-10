import { computed } from 'vue'

import { mock, mockFTVA, mockSingle } from './mock/Flexible_MediaWithText'
import FlexibleMediaWithText from '@/lib-components/Flexible/MediaWithText'

export default {
  title: 'FLEXIBLE / Media With Text',
  component: FlexibleMediaWithText,
}

function Template(args) {
  return {
    components: { FlexibleMediaWithText },
    setup() {
      return { args }
    },
    template: '<flexible-media-with-text v-bind="args"/>',
  }
}

export function Default() {
  return {
    data() {
      return { block: mock }
    },
    components: { FlexibleMediaWithText },
    template: `
        <flexible-media-with-text
            :block="block"
        />
    `,
  }
}

export function Single() {
  return {
    data() {
      return { block: mockSingle }
    },
    components: { FlexibleMediaWithText },
    template: `
        <flexible-media-with-text
            :block="block"
        />
    `,
  }
}

export const WithControls = Template.bind({})
WithControls.args = {
  block: mock,
}

const parsedFTVAData = computed(() => {
  // const imageKind = { kind: 'image' }

  // const parsedFTVAImage = [{ ...mockFTVA.ftvaImage[0], ...imageKind }]

  // return {
  //   ...mockFTVA,
  //   ftvaImage: parsedFTVAImage
  // }
})

export function FTVADefault() {
  return {
    data() {
      return { block: mockFTVA }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaWithText },
    template: `
        <flexible-media-with-text
            :block="block"
        />
    `,
  }
}
