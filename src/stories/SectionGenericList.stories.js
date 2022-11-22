// Import component
import SectionGenericList from "@/lib-components/SectionGenericList"

// Import mock api data
import * as API from "@/stories/mock-api.json"

// A storybook decorator that allows you to use routing-aware components in your stories
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SECTION / Generic / List",
    component: SectionGenericList,
    decorators: [StoryRouter()],
}

const mock = [
    {
        title: "Real Job",
        summary:
            "<p><span>This job is a real job that will satisfy your artistic needs. </span><span>Note: Two positions are being filled.</span></p>",
        jobType: [
            {
                title: "Artist Assistant",
            },
        ],
        jobRequisitionNumber: "JPF08053",
        jobPostingURL: "https://recruit.apo.ucla.edu/JPF08053",
        department: [
            {
                title: "Artistic Needs",
            },
        ],
        associatedLocations: [
            {
                title: "UCLA Film & Television Archive",
                uri: "visit/locations/film-television-archive",
            },
        ],
    },
    {
        title: "Humanities and Social Sciences Librarian",
        summary:
            "<p><span>The UCLA Library seeks a highly collaborative, user-focused professional for the position of Humanities and Social Sciences Librarian. The incumbent will join a multi-location, cross disciplinary team that supports teaching and all levels of research in the humanities and social sciences. </span><span>Note: Two positions are being filled.</span><br /></p>",
        jobType: [
            {
                title: "Academic Librarian",
            },
        ],
        jobRequisitionNumber: "JPF08053",
        jobPostingURL: "https://recruit.apo.ucla.edu/JPF08053",
        department: [
            {
                title: "User Engagement",
            },
            {
                title: "Human Resources",
            },
        ],
        associatedLocations: [
            {
                title: "UCLA Film & Television Archive",
                uri: "visit/locations/film-television-archive",
            },
            {
                title: "Powell Library",
                uri: "visit/locations/powell-library",
            },
        ],
    },
    {
        title: "Humanities and Social Sciences Librarian",
        summary:
            "<p><span>The UCLA Library seeks a highly collaborative, user-focused professional for the position of Humanities and Social Sciences Librarian. The incumbent will join a multi-location, cross disciplinary team that supports teaching and all levels of research in the humanities and social sciences. </span><span>Note: Two positions are being filled.</span><br /></p>",
        jobType: [
            {
                title: "Academic Librarian",
            },
        ],
        jobRequisitionNumber: "JPF08053",
        jobPostingURL: "https://recruit.apo.ucla.edu/JPF08053",
        department: [
            {
                title: "User Engagement",
            },
            {
                title: "Human Resources",
            },
        ],
        associatedLocations: [
            {
                title: "UCLA Film & Television Archive",
                uri: "visit/locations/film-television-archive",
            },
            {
                title: "Powell Library",
                uri: "visit/locations/powell-library",
            },
        ],
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    components: { SectionGenericList },
    template: `
      <section-generic-list
        :items="items"
      />
  `,
})
