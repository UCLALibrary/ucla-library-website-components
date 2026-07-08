import IconWithLink from '@/lib-components/IconWithLink'
import { ICON_NAME_OPTIONS } from '@/types/components/iconWithLink.types'

export default {
  title: 'Icon With Link',
  component: IconWithLink,
  argTypes: {
    text: { control: 'text' },
    iconName: {
      control: { type: 'select' },
      options: ICON_NAME_OPTIONS,
    },
    to: { control: 'text' },
    items: { control: 'object' },
  },
}

function SingleIconTemplate(args) {
  return {
    setup() {
      return { args }
    },
    components: { IconWithLink },
    template: `
      <icon-with-link
        :text="args.text"
        :icon-name="args.iconName"
        :to="args.to"
      />
    `,
  }
}

function IconListTemplate(args) {
  return {
    setup() {
      return { args }
    },
    components: { IconWithLink },
    template: `
      <ul>
        <li v-for="(item, index) in args.items" :key="index">
          <icon-with-link
            :text="item.text"
            :icon-name="item.iconName"
            :to="item.to"
          />
        </li>
      </ul>
    `,
  }
}

export const Default = SingleIconTemplate.bind({})
Default.args = {
  text: 'Powell',
  iconName: 'svg-icon-location',
  to: '/visit/library/powell',
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const WithExternalLink = SingleIconTemplate.bind({})
WithExternalLink.args = {
  text: 'See More',
  iconName: 'svg-icon-search',
  to: 'https://www.google.com/',
}

export const InternalLink = SingleIconTemplate.bind({})
InternalLink.args = {
  text: 'Emergency Phone Booth',
  iconName: 'svg-icon-phone',
  to: '/help/services-and-resources',
}

export const ConsultationIconLink = SingleIconTemplate.bind({})
ConsultationIconLink.args = {
  text: 'Book a Consultation',
  iconName: 'svg-icon-consultation',
  to: '/help/services-and-resources',
}

export const LongText = SingleIconTemplate.bind({})
LongText.args = {
  text: 'A Icon with Link with Very Very Long Text What Happens?',
  iconName: 'svg-icon-share-twitter',
  to: '/help/services-and-resources',
}

export const GeneralIcons = IconListTemplate.bind({})
GeneralIcons.args = {
  items: [
    { text: 'Consultation', iconName: 'svg-icon-consultation', to: '/help/services-and-resources' },
    { text: 'List', iconName: 'svg-icon-list', to: '/help/services-and-resources' },
    { text: 'Location', iconName: 'svg-icon-location', to: '/help/services-and-resources' },
    { text: 'Phone', iconName: 'svg-icon-phone', to: '/help/services-and-resources' },
    { text: 'Search', iconName: 'svg-icon-search', to: '/help/services-and-resources' },
    { text: 'Virtual', iconName: 'svg-icon-virtual', to: '/help/services-and-resources' },
    { text: 'Headphones', iconName: 'svg-icon-headphones', to: '/help/services-and-resources' },
    { text: 'Video', iconName: 'svg-icon-video', to: '/help/services-and-resources' },
    { text: 'Image Stack', iconName: 'svg-icon-image-stack', to: '/help/services-and-resources' },
    { text: 'Money', iconName: 'svg-icon-money', to: '/help/services-and-resources' },
    { text: 'Message', iconName: 'svg-icon-message', to: '/help/services-and-resources' },
    { text: 'Play', iconName: 'svg-icon-play', to: '/help/services-and-resources' },
    { text: 'Play Filled', iconName: 'svg-icon-play-filled', to: '/help/services-and-resources' },
    { text: 'Eye', iconName: 'svg-icon-eye', to: '/help/services-and-resources' },
    { text: 'Check', iconName: 'svg-icon-check', to: '/help/services-and-resources' },
    { text: 'Email', iconName: 'svg-icon-email', to: '/help/services-and-resources' },
    { text: 'Card', iconName: 'svg-icon-card', to: '/help/services-and-resources' },
    { text: 'Calendar', iconName: 'svg-icon-calendar', to: '/help/services-and-resources' },
    { text: 'Laptop', iconName: 'svg-icon-laptop', to: '/help/services-and-resources' },
    { text: 'Book', iconName: 'svg-icon-book', to: '/help/services-and-resources' },
    { text: 'Locker', iconName: 'svg-icon-locker', to: '/help/services-and-resources' },
    { text: 'Person', iconName: 'svg-icon-person', to: '/help/services-and-resources' },
    { text: 'Accessible', iconName: 'svg-icon-accessible', to: '/help/services-and-resources' },
    { text: 'Clock', iconName: 'svg-icon-clock', to: '/help/services-and-resources' },
    { text: 'Chair', iconName: 'svg-icon-chair', to: '/help/services-and-resources' },
    { text: 'Light', iconName: 'svg-icon-light', to: '/help/services-and-resources' },
    { text: 'Location Filled', iconName: 'svg-icon-location-filled', to: '/help/services-and-resources' },
    { text: 'Alert', iconName: 'svg-icon-alert', to: '/help/services-and-resources' },
  ],
}

export const SocialIcons = IconListTemplate.bind({})
SocialIcons.args = {
  items: [
    { text: 'Share Email', iconName: 'svg-icon-share-email', to: '/help/services-and-resources' },
    { text: 'Share Facebook', iconName: 'svg-icon-share-facebook', to: '/help/services-and-resources' },
    { text: 'Share Instagram', iconName: 'svg-icon-share-instagram', to: '/help/services-and-resources' },
    { text: 'Share LinkedIn', iconName: 'svg-icon-share-linkedin', to: '/help/services-and-resources' },
    { text: 'Share Twitter', iconName: 'svg-icon-share-twitter', to: '/help/services-and-resources' },
    { text: 'Share Whatsapp', iconName: 'svg-icon-share-whatsapp', to: '/help/services-and-resources' },
  ],
}

export const FTVACalendarIcons = IconListTemplate.bind({})
FTVACalendarIcons.args = {
  items: [
    { text: 'iCal', iconName: 'svg-icon-ftva-appleinc', to: '/help/services-and-resources' },
    { text: 'Google Calendar', iconName: 'svg-icon-ftva-gcal', to: '/help/services-and-resources' },
    { text: 'Outlook.com', iconName: 'svg-icon-ftva-outlook', to: '/help/services-and-resources' },
    { text: 'Download .ics file', iconName: 'svg-icon-ftva-download', to: '/help/services-and-resources' },
  ],
}

export const FTVASocialIcons = IconListTemplate.bind({})
FTVASocialIcons.args = {
  items: [
    { text: 'Share', iconName: 'svg-icon-ftva-share', to: '/help/services-and-resources' },
    { text: 'Confirm', iconName: 'svg-icon-ftva-social-confirm', to: '/help/services-and-resources' },
    { text: 'Copy Link', iconName: 'svg-icon-ftva-social-link', to: '/help/services-and-resources' },
    { text: 'Email', iconName: 'svg-icon-ftva-social-email', to: '/help/services-and-resources' },
    { text: 'Facebook', iconName: 'svg-icon-ftva-social-facebook', to: '/help/services-and-resources' },
    { text: 'X', iconName: 'svg-icon-ftva-social-x', to: '/help/services-and-resources' },
  ],
}
