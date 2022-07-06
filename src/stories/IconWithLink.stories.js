import IconWithLink from "@/lib-components/IconWithLink"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "Icon With Link",
    component: IconWithLink,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/visit/library/powell", component: IconWithLink },
                    {
                        path: "/help/services-and-resources",
                        component: IconWithLink,
                    },
                ],
            }
        ),
    ],
}

export const Default = () => ({
    components: { IconWithLink },
    template: `
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
    `,
})

export const WithExternalLink = () => ({
    components: { IconWithLink },
    template: `
        <icon-with-link
            text="See More"
            icon-name="svg-icon-search"
            to="https://www.google.com/"
        />
    `,
})

export const InternalLink = () => ({
    components: { IconWithLink },
    template: `
        <icon-with-link
            text="Emergency Phone Booth"
            icon-name="svg-icon-phone"
            to= "/help/services-and-resources"
        />
    `,
})

export const ConsultationIconLink = () => ({
    components: { IconWithLink },
    template: `
        <icon-with-link
            text="Book a Consultation"
            icon-name="svg-icon-consultation"
            to= "/help/services-and-resources"
        />
    `,
})

export const LongText = () => ({
    components: { IconWithLink },
    template: `
        <icon-with-link
            text="A Icon with Link with Very Very Long Text What Happens?"
            icon-name="svg-icon-share-twitter"
            to= "/help/services-and-resources"
        />
    `,
})
