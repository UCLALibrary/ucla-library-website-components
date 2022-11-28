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
        { title: "Acccessible", icon: "SvgIconAccessible" },
        { title: "Email", icon: "SvgIconEmail" },
        { title: "Phone", icon: "SvgIconPhone" },
        { title: "Virtual", icon: "SvgIconVirtual" },
        { title: "Calendar", icon: "SvgIconCalendar" },
        { title: "Location", icon: "SvgIconLocation" },
        { title: "Light", icon: "SvgIconLight" },
        { title: "Laptop", icon: "SvgIconLaptop" },
        { title: "Locker", icon: "SvgIconLocker" },
        { title: "Chair", icon: "SvgIconChair" },
        { title: "Share Printer", icon: "SvgIconSharePrinter" },
        { title: "Book", icon: "SvgIconBook" },
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
