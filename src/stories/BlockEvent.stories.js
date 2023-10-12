// Storybook default settings
import BlockEvent from '@/lib-components/BlockEvent'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Event',
  component: BlockEvent,
}

export function ShortText() {
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

export function LongText() {
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

export function Visit() {
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

export function About() {
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

export function Help() {
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
