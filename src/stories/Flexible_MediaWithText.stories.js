// import StoryRouter from 'storybook-vue-router'

import { mock, mockSingle } from './mock/Flexible_MediaWithText'
import FlexibleMediaWithText from '@/lib-components/Flexible/MediaWithText'

export default {
  title: 'FLEXIBLE / Media With Text',
  component: FlexibleMediaWithText,
  //decorators: [StoryRouter()],
}

function Template(args, { argTypes }) {
  return {
    components: { FlexibleMediaWithText },
    props: Object.keys(argTypes),
    template: '<flexible-media-with-text v-bind="$props"/>',
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

// export const WithControls = Template.bind({})
// WithControls.args = {
//   block: mock,
// }
