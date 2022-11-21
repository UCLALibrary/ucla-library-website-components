// Import mock api data
import * as API from "@/stories/mock-api.json"

// Import component
import SectionLocationList from "@/lib-components/SectionLocationList"

// A storybook decorator that allows you to use routing-aware components in your stories
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SECTION / Location / List",
    component: SectionLocationList,
    decorators: [StoryRouter()],
}

const mock = [
    {
        isUclaLibrary: false,
        locationType: "uclaLibrary",
        campusMapId: "81513",
        libcalLocationIdForHours: "2081",
        libcalSpacesUrl: "https://calendar.library.ucla.edu/spaces?lid=6578",
        day: "Today",
        hour: "8am - 5pm",
        reserveSeat: "http://google.com/reserveSeat",
        title: "Louise M. Darling Biomedical Library",
        image: API.image,
        address:
            "12-077 Center for the Health Sciences Los Angeles, CA 9009-1798",
        addressLink: "http://google.com/address",
        amenities: [
            "SvgIconClock",
            "SvgIconAccessible",
            "SvgIconEmail",
            "SvgIconPhone",
        ],
        amenitiesIcons: ["icon-accessible", "icon-chair", "icon-book"],
        uri: "visit/locations/biomed",
        affiliateLibraryUrl: null,
        to: "http://google.com/title",
    },
    {
        locationType: "uclaLibrary",
        isUclaLibrary: false,
        title: "Arts Library",
        image: API.image,
        day: "Today",
        hour: "8am - 5pm",
        reserveSeat: "http://google.com/reserveSeat",
        address: "1400 Public Affairs Building Los Angeles, CA 90095-1392",
        addressLink: "http://google.com/address",
        amenities: [
            "SvgIconClock",
            "SvgIconAccessible",
            "SvgIconEmail",
            "SvgIconPhone",
            "SvgIconVirtual",
            "SvgIconCalendar",
            "SvgIconLocation",
        ],
        to: "http://google.com/title",
    },
    {
        locationType: "affiliateLibrary",
        affiliateLibraryUrl: "https://pubmed.ncbi.nlm.nih.gov/?otool=uclalib",
        campusMapId: "324",
        libcalLocationIdForHours: "2082",
        libcalSpacesUrl: "https://calendar.library.ucla.edu/spaces?lid=657",
        title: "William Andrews Clark Memorial Library",
        image: null,
        address: "2520 Cimarron St. BOX 951575 Los Angeles, CA 90018",
        addressLink: "http://google.com/address",
        amenities: [
            "Lockers",
            "SvgIconLight",
            "SvgIconLaptop",
            "SvgIconLocker",
            "SvgIconChair",
            "SvgIconSharePrinter",
            "SvgIconBook",
        ],
        amenitiesIcons: [
            "icon-locker",
            "icon-light",
            "icon-share-printer",
            "icon-book",
        ],
        uri: "visit/locations/william-andrews-clark-memorial-library",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    components: { SectionLocationList },
    template: `
      <section-location-list
        :items="items"
      />
  `,
})
