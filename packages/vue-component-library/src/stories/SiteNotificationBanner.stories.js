import SiteNotificationBanner from '@/lib-components/SiteNotificationBanner.vue'

export default {
  title: 'GLOBAL / Site Notification Banner',
  component: SiteNotificationBanner,
  parameters: {
    docs: {
      description: {
        component: `
The SiteNotificationBanner displays a persistent, non-dismissible site-wide notification above the site brand bars.

The component uses the same design across Library, MEAP, and FTVA sites.

The notification supports rich text content, including links. The alert icon is displayed on desktop and hidden at tablet and mobile breakpoints.
        `,
      },
    },
  },
  argTypes: {
    text: {
      description: 'Rich text content displayed in the notification banner.',
      control: 'text',
      table: {
        type: {
          summary: 'String',
        },
        defaultValue: {
          summary: "''",
        },
      },
    },
  },
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

export function ShortNotice() {
  return {
    components: {
      SiteNotificationBanner,
    },
    data() {
      return {
        text: '<p>Campus is closed for the holidays 12-21-26 through  1-1-27.</p>',
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
