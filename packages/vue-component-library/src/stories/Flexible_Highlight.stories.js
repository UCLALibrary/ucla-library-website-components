import { eventExhibitonArticle, mock } from './mock/Flexible_Highlight'
import FlexibleHighlight from '@/lib-components/Flexible/Highlight'

export default {
  title: 'FLEXIBLE / Highlight',
  component: FlexibleHighlight,
}

const DefaultTemplate = (args) => {
  return {
    data() {
      return {
        block: mock,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const EventExhibitonArticleTemplate = (args) => {
  return {
    data() {
      return {
        block: eventExhibitonArticle,
      }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
  }
}

export const EventExhibitonArticle = EventExhibitonArticleTemplate.bind({})
EventExhibitonArticle.args = {}
