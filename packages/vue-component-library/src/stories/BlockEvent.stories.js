// Storybook default settings
import BlockEvent from '@/lib-components/BlockEvent'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Event',
  component: BlockEvent,
}

const ShortTextTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: { ...API.bricks[0] },
      }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :start-date="item.startDate"
            :end-date="item.endDate"
            :to="item.to"
            :sectionHandle="item.sectionHandle"
        />
    `,
  }
}

export const ShortText = ShortTextTemplate.bind({})
ShortText.args = {}


ShortText.parameters = {
  chromatic: { disableSnapshot: false },
}

const LongTextTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: { ...API.bricks[1] },
      }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            :to="item.to"
        />
    `,
  }
}

export const LongText = LongTextTemplate.bind({})
LongText.args = {}


const VisitTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: { ...API.bricks[1] },
      }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            to="/visit/foo/bar/"
        />
    `,
  }
}

export const Visit = VisitTemplate.bind({})
Visit.args = {}


const AboutTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: { ...API.bricks[1] },
      }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            to="/about/foo/bar/"
        />
    `,
  }
}

export const About = AboutTemplate.bind({})
About.args = {}


const HelpTemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: { ...API.bricks[1] },
      }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            to="/help/foo/bar/"
        />
    `,
  }
}

export const Help = HelpTemplate.bind({})
Help.args = {}

