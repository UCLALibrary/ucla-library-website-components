// Import mock api data
import * as API from '@/stories/mock-api.json'
import BlockLocationListItem from '@/lib-components/BlockLocationListItem'

// import StoryRouter from "storybook-vue-router"

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
  // decorators: [StoryRouter()],
}

function Template(args, { argTypes }) {
  return {
    props: Object.keys(argTypes),
    components: { BlockLocationListItem },
    template: '<block-location-list-item v-bind="$props"/>',
  }
}

export function Default() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockLocationListItem },
    template: `
        <block-location-list-item
            :title="title"
            :to="to"
            :image="image"

            :address="address"
            :addressLink="addressLink"
            :amenities="amenities"
            :reserveSeat="reserveSeat"
            :isUclaLibrary="isUclaLibrary"
            libcalLocationIdForHours="4690"
        />
    `,
  }
}
export function NoHours() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockLocationListItem },
    template: `
        <block-location-list-item
            :title="title"
            :to="to"
            :image="image"

            :address="address"
            :addressLink="addressLink"
            :amenities="amenities"
            :reserveSeat="reserveSeat"
            :isUclaLibrary="isUclaLibrary"
            libcalLocationIdForHours="4691"
        />
    `,
  }
}
export function TextHours() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockLocationListItem },
    template: `
        <block-location-list-item
            :title="title"
            :to="to"
            :image="image"
            :address="address"
            :addressLink="addressLink"
            :amenities="amenities"
            :reserveSeat="reserveSeat"
            :isUclaLibrary="isUclaLibrary"
            libcalLocationIdForHours="2081"
        />
    `,
  }
}

export const WithControls = Template.bind({})
WithControls.args = {
  ...mock,
}

export const WithControlsAndNoImage = Template.bind({})
WithControlsAndNoImage.args = { ...mock, image: '' }
