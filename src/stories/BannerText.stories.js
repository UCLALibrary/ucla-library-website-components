import BannerText from "@/lib-components/BannerText"
import StoryRouter from "storybook-vue-router"

export default {
    title: "Banner Text",
    component: BannerText,
    decorators: [StoryRouter()],
}

const mock = {
    category: "Event",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
    title: "Curabitur Tortor Pellentesque",
    locations: [
        { id: "523", title: "Powellarium", to: "/location/bar" },
        { id: "801", title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    date: "1995-12-17T03:24:00",
    buttonText: "Curabitur",
    byline: ["Cursus Quis"],
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
