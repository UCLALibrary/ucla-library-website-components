import { computed, onBeforeUnmount, onMounted } from 'vue'
import ButtonDropdown from '@/lib-components/ButtonDropdown.vue'
import { useGlobalStore } from '@/stores/GlobalStore'

// Storybook default settings
export default {
  title: 'BUTTON / Dropdown',
  component: ButtonDropdown,
  decorators: [
    () => ({
      template: '<story />',
    }),
  ],
}

const mockDropdownList = {
  buttonTitle: 'Label',
  hasIcon: true,
  dropdownList: [
    {
      dropdownItemTitle: 'Generic Item',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-x',
    },
    {
      dropdownItemTitle: 'Generic Item',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-x',
    },
    {
      dropdownItemTitle: 'Generic Item',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-x',
    },
    {
      dropdownItemTitle: 'Generic Item',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-x',
    },
  ],
}

function Template(args) {
  return {
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        // Set initial winWidth
        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        // Clean up
        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })

      return { args }
    },
    components: { ButtonDropdown },
    template: '<button-dropdown v-bind="args" />',
  }
}

export const Default = Template.bind({})

Default.args = {
  ...mockDropdownList,
}

const mockSocialList = {
  buttonTitle: 'Share',
  hasIcon: true,
  dropdownList: [
    {
      dropdownItemTitle: 'Copy Link',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-link',
    },
    {
      dropdownItemTitle: 'Email',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-email',
    },
    {
      dropdownItemTitle: 'Facebook',
      dropdownItemUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
      iconName: 'svg-icon-ftva-social-facebook',
    },
    {
      dropdownItemTitle: 'X',
      dropdownItemUrl: 'https://twitter.com/share?url=',
      iconName: 'svg-icon-ftva-social-x',
    },
  ],
}

export const Share = Template.bind({})

Share.args = {
  ...mockSocialList,
}

// FTVA

function TemplateFTVA(args) {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })
      return { args }
    },
    components: { ButtonDropdown },
    template: '<button-dropdown v-bind="args" />',
  }
}

export const FTVAShare = TemplateFTVA.bind({})

FTVAShare.args = {
  ...mockSocialList,
}

// ADD TO CALENDAR

function TemplateAddToCalendar(args) {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    setup() {
      return { args }
    },
    components: { ButtonDropdown },
    template: '<button-dropdown v-bind="args" />',
  }
}

const mockCalendarData = {
  isEvent: true,
  title: 'TEST - La Région Centrale Screening',
  startDateWithTime: '2025-07-08T02:30:00+00:00',
  endTime: '20:30:00',
  location: [
    {
      title: 'Billy Wilder Theater',
      campusMapId: null,
      publicUrl: 'https://www.cinema.ucla.edu/billy-wilder-theater',
      address: []
    }
  ],
  eventDescription: '<p>Admission is free. No advance reservations. Your seat will be assigned to you when you pick up your ticket at the box office. Seats are assigned on a first come, first served basis. The box office opens one hour before the event.</p>\n<p>La Région Centrale</p>\n<p>Canada, 1971</p>\n<p>The late avant-garde master Michael Snow’s work explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident. He worked in many mediums and his films playfully and prolifically rethink the parameters while requiring audiences to actively participate in this work. La Région Centrale is a three-hour-long film that calls attention to the mechanics of filmmaking, using a computer-programmed, motorized tripod that rotates the camera 360 degrees in any direction, repeatedly, without dialogue or any other subject beyond the landscape, over the course of a day.'
}

export const AddToCalendar = TemplateAddToCalendar.bind({})

AddToCalendar.args = {
  ...mockCalendarData,
}
