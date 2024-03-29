import BannerHeader from "@/lib-components/BannerHeader"
import StoryRouter from "storybook-vue-router"
// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockFormData from "@/stories/mock/BlockFormData.json"

export default {
    title: "Banner Header",
    component: BannerHeader,
    decorators: [StoryRouter()],
}

const mock = {
    image: API.image,
    to: "/applicants/foo/bar/",
    title: "Curabitur Tortor Pellentesque Nibh Aenean",
    category: "Lectus",
    startDate: "1995-12-17T03:24:00",
    endDate: "1995-12-17T03:24:00",
    byline: ["Jen Diamond", "Pikku Lehtonen"],
    subjectAreas: [{ title: "Ghosts" }, { title: "Clowns" }],
    locations: [
        {
            id: "523",
            title: "Powell Library",
            to: "visit/locations/powell-library",
        },
        {
            id: "3062",
            title: "Online",
            to: "visit/locations/online",
        },
    ],
    prompt: "Cursus Quis",
    alignRight: true,
    sectionHandle: "event",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
})

export const LeftAligned = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
})

export const NoCategory = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :start-date="startDate"
           :end-date="endDate"
           :prompt="prompt"
           :align-right="false"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
})

export const WithBylineAndSubjectAreas = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :subjectAreas="subjectAreas"
           :prompt="prompt"
           :align-right="false"
           :section-handle="sectionHandle"
       />
    `,
})

export const OnlyTitle = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :title="title"
           :align-right="false"
       />
    `,
})

export const Video = () => ({
    data() {
        return {
            ...mock,
            video: API.video,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="video"
           :title="title"
           :align-right="false"
       />
    `,
})

export const WithContactInfo = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           email="ada@somewhere.com"
           phone="555-555-5555"
           address="1337 Trails End Road Fort Lauderdale, FL 33301"
           staff-directory-link="/about/staff?q=*&location=slug"
           address-link="https://map.ucla.edu/?k=false&id=81516"
           :prompt="prompt"
       />
    `,
})

// --------- ARTICLE --------------

const article = {
    image: API.image,
    title: "I Like Turtles",
    category: "Library News",
    dateCreated: "2022-02-09T10:57:46-08:00",
    sectionHandle: "article",
    byline: [" Written by Courtney Hoffner", "Illustrations by Jen Diamond"],
    subjectAreas: [{ title: "Ghosts" }, { title: "Clowns" }],
    locations: [
        {
            id: "523",
            title: "Powell Library",
            to: "visit/locations/powell-library",
        },
        {
            id: "3062",
            title: "Online",
            to: "visit/locations/online",
        },
    ],
    alignRight: true,
    text: "Turtles are an order of reptiles known as Testudines, characterized by a shell developed mainly from their ribs. Turtles are groups, big ones and small ones.",
}

export const ArticleDetail = () => ({
    data() {
        return {
            ...article,
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :title="title"
           :byline="byline"
           :subjectAreas="subjectAreas"
           :dateCreated="dateCreated"
           :locations="locations"
           :text="text"
           :section-handle="sectionHandle"
       />
    `,
})

export const ExternalLink = () => ({
    data() {
        return {
            ...mock,
            to: "https://an.external.url/",
        }
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :to="to"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
           :section-handle="sectionHandle"
       />
    `,
})

export const WithBlockForm = () => ({
    data() {
        return {
            ...mock,
            ...BlockFormData,
        }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock1,
        libcalEndpoint: "https://proxy.calendar.library.ucla.edu/",
        registrationType: "both",
    },
    components: { BannerHeader },
    template: `
        <banner-header
           :image="image"
           :title="title"
           :category="category"
           :start-date="startDate"
           :end-date="endDate"
           :byline="byline"
           :prompt="prompt"
           :locations="locations"
           :registerEvent="true"
           :section-handle="sectionHandle"
       />
    `,
})
