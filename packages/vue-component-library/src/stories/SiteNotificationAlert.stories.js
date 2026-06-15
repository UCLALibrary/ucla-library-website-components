// Import mock api data
import * as API from '@/stories/mock-api.json'
import SiteNotificationAlert from '@/lib-components/SiteNotificationAlert.vue'

// Storybook default settings
export default {
  title: 'Global / SiteNotificationAlert',
  component: SiteNotificationAlert,
}
// TODO update message text as rich text
const DefaultTemplate = (args) => {
  void args
  return {
    data() {
      return {
        title: API.alert.title,
        text: API.alert.text,
      }
    },
    components: { SiteNotificationAlert },
    template: '<site-notification-alert :title="title" :text="text" />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

// Variations of stories below
const LongMessageTemplate = (args) => {
  void args
  return {
    data() {
      return {
        title: API.alert.title,
        text: API.alert.textLong,
      }
    },
    components: { SiteNotificationAlert },
    template: '<site-notification-alert :title="title" :text="text" />',
  }
}

export const LongMessage = LongMessageTemplate.bind({})
LongMessage.args = {}

