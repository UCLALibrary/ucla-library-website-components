// Import mock api data
import * as API from '@/stories/mock-api.json'
import SiteNotificationAlert from '@/lib-components/SiteNotificationAlert.vue'

// Storybook default settings
export default {
  title: 'Global / SiteNotificationAlert',
  component: SiteNotificationAlert,
}
// TODO update message text as rich text
export function Default() {
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

// Variations of stories below
export function LongMessage() {
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
