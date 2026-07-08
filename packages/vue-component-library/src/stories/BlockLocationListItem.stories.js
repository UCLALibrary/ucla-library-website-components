import { onUnmounted } from 'vue'

// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockLocationListItem from '@/lib-components/BlockLocationListItem'

const mock = {
  isUclaLibrary: true,
  title: 'Arts Library',
  image: API.image,
  libcalLocationIdForHours: '4690',
  reserveSeat: 'http://google.com/reserveSeat',
  address: '1400 Public Affairs Building Los Angeles, CA 90095-1392',
  addressLink: 'http://google.com/address',
  amenities: [
    { title: '24 Hour Study Space', icon: 'IconClock' },
    { title: 'ADA Stations', icon: 'IconAccessible' },
    { title: 'Cafe', icon: 'IconChair' },
    { title: 'Computer/Laptop Access', icon: 'IconVirtual' },
    { title: 'Laptop Lending', icon: 'IconLaptop' },
    { title: 'Lockers', icon: 'IconLocker' },
    { title: 'Makerspace', icon: 'IconLight' },
    { title: 'Printing, Scanning, and Copying', icon: 'IconShare' },
    { title: 'Research Help', icon: 'IconBook' },
  ],
  to: 'http://google.com/title',
}

const mockHoursResponse = {
  locations: [
    {
      status: 'open',
      day: 'Monday',
      times: {
        hours: [{ from: '2pm', to: '5pm' }],
        status: 'open',
        text: '',
      },
    },
  ],
}

export default {
  title: 'BLOCK / Location List Item',
  component: BlockLocationListItem,
  argTypes: {
    title: {
      control: 'text',
      description: 'Location title',
    },
    image: {
      description: 'Image object with src and alt properties',
    },
    address: {
      control: 'text',
      description: 'Location address',
    },
    addressLink: {
      control: 'text',
      description: 'Link to location address',
    },
    amenities: {
      control: 'object',
      description: 'Array of amenities',
    },
    reserveSeat: {
      control: 'text',
      description: 'Link to reserve a seat',
    },
    isUclaLibrary: {
      control: 'boolean',
      description: 'Is this a UCLA Library location?',
    },
    libcalLocationIdForHours: {
      control: 'text',
      description: 'LibCal location ID for hours',
    },
    to: {
      control: 'text',
      description: 'Link to location title',
    },
  },
}

function Template(args) {
  return {
    setup() {
      /*
      We want to prevent a fetch call from being made to the actual API
      during visual regression testing, because Chromatic creates
      differences each time data changes. Instead we're mocking a fetch
      call to return static [location hours] data.
      */

      const originalFetch = globalThis.fetch

      globalThis.fetch = async () => {
        if (args.libcalLocationIdForHours === '4690') {
          return {
            ok: true,
            json: async () => mockHoursResponse,
          }
        }
      }

      // Reset fetch to original state after unmounting the component
      onUnmounted(() => {
        globalThis.fetch = originalFetch
      })

      return { args }
    },
    components: { BlockLocationListItem },
    template: '<block-location-list-item v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  ...mock,
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const NoImage = Template.bind({})
NoImage.args = { ...mock, image: '' }

export const NoHours = Template.bind({})
NoHours.args = {
  ...mock,
  // Non-existent id that returns empty data [no location hours] with actual Fetch call
  libcalLocationIdForHours: '4691',
}
