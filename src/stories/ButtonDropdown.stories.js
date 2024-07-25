import { computed, onBeforeUnmount, onMounted } from 'vue'
import router from '@/router'
import ButtonDropdown from '@/lib-components/ButtonDropdown.vue'
import { useGlobalStore } from '@/stores/GlobalStore'

// Storybook default settings
export default {
  title: 'BUTTON / Dropdown',
  component: ButtonDropdown,
  decorators: [
    () => ({
      router,
      template: '<story />',
    }),
  ],
}

const mockArticleUrl
    = '/about/news/the-75th-anniversary-of-the-university-archives'

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
  router.push(mockArticleUrl)
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
  router.push(mockArticleUrl)
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
  startDate: '2024-07-09',
  startTime: '09:30',
  endTime: '10:30',
  location: [
    {
      title: 'Billy Wilder Theater',
      campusMapId: null,
      publicUrl: 'https://www.cinema.ucla.edu/billy-wilder-theater',
      address: []
    }
  ],
  eventDescription:
'La Région Centrale Canada, 1971 The late avant-garde master Michael Snow’s work explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident.',
}

export const AddToCalendar = TemplateAddToCalendar.bind({})

AddToCalendar.args = {
  ...mockCalendarData,
}
