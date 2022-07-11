// Import mock api data
import * as API from "@/stories/mock-api.json"
import SiteNotificationAlert from "@/lib-components/SiteNotificationAlert"

// Storybook default settings
export default {
    title: "Global / SiteNotificationAlert",
    component: SiteNotificationAlert,
}

export const Default = () => ({
    data() {
        return {
            title: API.alert.title,
            text: API.alert.text,
        }
    },
    components: { SiteNotificationAlert },
    template: `<site-notification-alert :title="title" :text="text" />`,
})

// Variations of stories below
export const LongMessage = () => ({
    data() {
        return {
            title: API.alert.title,
            text: API.alert.textLong,
        }
    },
    components: { SiteNotificationAlert },
    template: `<site-notification-alert :title="title" :text="text" />`,
})
