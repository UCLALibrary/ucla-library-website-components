// Import component
import SectionLocationList from "@/lib-components/SectionLocationList"

// Import mock api data
import * as API from "@/stories/mock-api.json"

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
        locationType: "uclaLibrary",
        campusMapId: "81513",
        libcalLocationIdForHours: "2081",
        libcalSpacesUrl: "https://calendar.library.ucla.edu/spaces?lid=6578",
        title: "Louise M. Darling Biomedical Library",
        text: "<p><span>The collections are broad in scope and to function as a resource for the health and life sciences community.</span><br /></p>",
        image: API.image,
        // concatonate the Address on the page
        // address: [
        //     {
        //         addressLine1: "12-077 Center for the Health Sciences",
        //         addressLine2: null,
        //         addressCity: "Los Angeles",
        //         addressState: "CA",
        //         addressZipCode: "90095-1798",
        //     },
        // ],
        address:
            "12-077 Center for the Health Sciences Los Angeles, CA 9009-1798",
        amenities: ["ADA Stations", "Cafe", "Research Help"],
        amenitiesIcons: ["icon-accessible", "icon-chair", "icon-book"],
        uri: "visit/locations/biomed",
        affiliateLibraryUrl: null,
    },
    {
        locationType: "affiliateLibrary",
        campusMapId: "324",
        libcalLocationIdForHours: "2082",
        libcalSpacesUrl: "https://calendar.library.ucla.edu/spaces?lid=657",
        title: "William Andrews Clark Memorial Library",
        summary:
            "<p>This holds rare books and manuscripts with particular strengths in English literature and history (1641–1800), Oscar Wilde and the fin de siècle, and fine press printing.</p>",
        image: API.image,
        address: "2520 Cimarron St. BOX 951575 Los Angeles, CA 90018",
        amenities: [
            "Lockers",
            "Makerspace",
            "Printing, Scanning, and Copying",
            "Research Help",
        ],
        amenitiesIcons: [
            "icon-locker",
            "icon-light",
            "icon-share-printer",
            "icon-book",
        ],
        uri: "visit/locations/william-andrews-clark-memorial-library",
        affiliateLibraryUrl: "https://pubmed.ncbi.nlm.nih.gov/?otool=uclalib",
    },
    {
        locationType: "uclaLibrary",
        campusMapId: "81502",
        libcalLocationIdForHours: null,
        libcalSpacesUrl: null,
        title: "UCLA Film & Television Archive",
        summary:
            "<p>The Archive is the second-largest repository of motion pictures and broadcast programming in the United States, after the Library of Congress, and the world's largest university-held collection.</p>",
        image: API.image,
        address: "26155 Rockwell Canyon Rd. Santa Clarita, CA 91355",
        amenities: [
            "Cafe",
            "Computer/Laptop Access",
            "Laptop Lending",
            "Lockers",
        ],
        amenitiesIcons: [
            "icon-chair",
            "icon-virtual",
            "icon-laptop",
            "icon-locker",
        ],
        uri: "visit/locations/film-television-archive",
        affiliateLibraryUrl: null,
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
