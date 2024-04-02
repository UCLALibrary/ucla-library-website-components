// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockLocationListItem from '@/lib-components/BlockLocationListItem'

const mock = {
  isUclaLibrary: true,
  title: 'Arts Library',
  image: API.image,
  libcalLocationIdForHours: '2081',
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
      return { args }
    },
    components: { BlockLocationListItem },
    template: '<block-location-list-item v-bind="args"/>',
  }
}
export const Default = Template.bind({})
Default.args = {
  ...mock,
    libcalLocationIdForHours: '4690',
}

export const NoHours = Template.bind({})
NoHours.args = {
  ...mock,
  libcalLocationIdForHours: '4691',
}
export const TextHours = Template.bind({})
TextHours.args = {
  ...mock,
  libcalLocationIdForHours: '2081',
}

export const WithControls = Template.bind({})
WithControls.args = {
  ...mock
}

export const WithControlsAndNoImage = Template.bind({})
WithControlsAndNoImage.args = { ...mock, image: '' }
