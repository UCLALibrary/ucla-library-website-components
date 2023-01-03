import BannerText from "@/lib-components/BannerText"
import StoryRouter from "storybook-vue-router"
import BlockFormData from "@/stories/mock/BlockFormData.json"

export default {
    title: "Banner Text",
    component: BannerText,
    decorators: [StoryRouter()],
}

const mock = {
    category: "Event",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
    title: "Curabitur Tortor Pellentesque",
    alternativeFullName: "陳餘敏卿纪念基金",
    language: "zh",
    locations: [
        { id: "523", title: "Powellarium", to: "/location/bar" },
        {
            id: "801",
            title: "Research Library (Charles E. Young)",
            to: "/location/baz",
        },
    ],
    date: "1995-12-17T03:24:00",
    buttonText: "Curabitur",
    subjectAreas: [{ title: "Ghosts" }, { title: "Clowns" }],
    byline: ["Cursus Quis", "Charles E. Young"],
    to: "/visit/foo/bar/",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :text="text"
        :button-text="buttonText"
        :to="to"
        :byline="byline"
        :alternativeFullName="alternativeFullName"
        :language="language"
    />`,
})

export const WithSubjectAreas = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :subjectAreas="subjectAreas"
        :byline="byline"
        :text="text"
        :button-text="buttonText"
        :to="to"
    />`,
})

export const NoButton = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :text="text"
        :title="title"
        :date="date"
        :byline="byline"
    />`,
})

export const NoText = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"

    />`,
})

export const DarkBlueBackground = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :button-text="buttonText"
        :date="date"
        :to="to"
        :isDarkBlue="true"
    />`,
})

export const LocationInfo = () => ({
    data() {
        return {
            ...mock,
            to: "/help/foo/bar/",
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :date="date"
        :locations="locations"
        :text="text"
        :button-text="buttonText"
        :to="to"
    />`,
})

export const LocationInfoDarkBlue = () => ({
    data() {
        return {
            ...mock,
            to: "/help/foo/bar/",
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :date="date"
        :locations="locations"
        :text="text"
        :button-text="buttonText"
        :to="to"
        :isDarkBlue="true"
    />`,
})

export const ExternalLink = () => ({
    data() {
        return {
            ...mock,
            to: "https://an.external.url/",
        }
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :text="text"
        :button-text="buttonText"
        :to="to"
        :byline="byline"
    />`,
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
        blockFormData: BlockFormData.mock0,
    },
    components: { BannerText },
    template: `<banner-text
        :category="category"
        :title="title"
        :text="text"
        :button-text="buttonText"
        :byline="byline"
        :registerEvent="true"
    />`,
})

// --------- ARTICLE --------------

const article = {
    title: "I Like Turtles",
    category: "Library News",
    articleType: "news",
    dateCreated: "2022-02-09T10:57:46-08:00",
    byline: [" Written by Courtney Hoffner", "Illustrations by Jen Diamond"],
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
    components: { BannerText },
    template: `
        <banner-text
           :title="title"
           :byline="byline"
           :dateCreated="dateCreated"
           :locations="locations"
           :text="text"
           articleType="news"
       />
    `,
})
