import SiteNotificationBanner from '@/lib-components/SiteNotificationBanner.vue'

export default {
  title: 'GLOBAL / Site Notification Banner',
  component: SiteNotificationBanner,
}

export function Default() {
  return {
    components: {
      SiteNotificationBanner,
    },
    data() {
      return {
        text: '<p>Please check <a href="/visit">Library Status Updates</a> before visiting for the latest information regarding Library locations and hours, current services and returning materials.</p>',
      }
    },
    template: `
      <SiteNotificationBanner :text="text" />
    `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=11180-2368&t=XPJo8x5Lj9gWIEM9-4',
  },
}
