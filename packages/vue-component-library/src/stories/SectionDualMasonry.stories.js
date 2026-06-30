// Import component
import SectionDualMasonry from '@/lib-components/SectionDualMasonry'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Dual Masonry',
  component: SectionDualMasonry,
}

const items = API.bricks

const DefaultTemplate = (args) => {
  return {
    data() {
      return {
        items,
      }
    },
    components: { SectionDualMasonry },
    template: `
        <section-dual-masonry
            :items="items"
            to="/visit/foo"
            text="See All Events"
        />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
