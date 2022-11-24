// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockLocationListItem from "@/lib-components/BlockLocationListItem"
import StoryRouter from "storybook-vue-router"

const mock = {
    isUclaLibrary: false,
    title: "Arts Library",
    image: API.image,
    day: "Today",
    hour: "8am - 5pm",
    reserveSeat: "http://google.com/reserveSeat",
    address: "1400 Public Affairs Building Los Angeles, CA 90095-1392",
    addressLink: "http://google.com/address",
    amenities: [
        { title: "Clock", icon: "SvgIconClock" },
        { title: "Clock", icon: "SvgIconAccessible" },
        { title: "Clock", icon: "SvgIconEmail" },
        { title: "Clock", icon: "SvgIconPhone" },
        { title: "Clock", icon: "SvgIconVirtual" },
        { title: "Clock", icon: "SvgIconCalendar" },
        { title: "Clock", icon: "SvgIconLocation" },
        { title: "Clock", icon: "SvgIconLight" },
        { title: "Clock", icon: "SvgIconLaptop" },
        { title: "Clock", icon: "SvgIconLocker" },
        { title: "Clock", icon: "SvgIconChair" },
        { title: "Clock", icon: "SvgIconSharePrinter" },
        { title: "Clock", icon: "SvgIconBook" },
    ],
    to: "http://google.com/title",
}

export default {
    title: "BLOCK / Location List Item",
    component: BlockLocationListItem,
    decorators: [StoryRouter()],
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BlockLocationListItem },
    template: `<block-location-list-item v-bind="$props"/>`,
})

export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockLocationListItem },
    template: `
        <block-location-list-item
            :title="title"
            :to="to"
            :image="image"
            :day="day"
            :hour="hour"
            :address="address"
            :addressLink="addressLink"
            :amenities="amenities"
            :reserveSeat="reserveSeat"
            :isUclaLibrary="isUclaLibrary"
        />
    `,
})

export const WithControls = Template.bind({})
WithControls.args = {
    ...mock,
}

export const WithControlsAndNoImage = Template.bind({})
WithControlsAndNoImage.args = { ...mock, image: "" }
