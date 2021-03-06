import FlexibleSimpleCards from "@/lib-components/Flexible/SimpleCards"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Simple Cards",
    component: FlexibleSimpleCards,
    decorators: [StoryRouter()],
}

const mockTwoCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
    ],
}

// Variations of stories below
// TwoCards
export const Default = () => ({
    data() {
        return { block: mockTwoCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards
          :block="block"
      />
  `,
})

// -------3----------------
const mockThreeCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
    ],
}

export const ThreeCards = () => ({
    data() {
        return { block: mockThreeCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

// -------4----------------

const mockFourCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
    ],
}

export const FourCards = () => ({
    data() {
        return { block: mockFourCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

// -------5----------------

const mockFiveCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
        {
            id: "13958",
            contentLink: [
                {
                    slug: "frost-heave",
                    title: "Frost Heave",
                    summary:
                        "<p>Frost heave refers to <strong>the upward or outward movement of the ground surface (or objects on, or in, ground) caused by formation of ice in soil</strong>.</p>",
                },
            ],
        },
    ],
}

export const FiveCards = () => ({
    data() {
        return { block: mockFiveCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

// -------6----------------

const mockSixCards = {
    id: "13783",
    typeHandle: "simpleCards",
    sectionTitle: "Fix Potholes",
    sectionSummary:
        "<p>Get pothole repair service in Los Angeles and surrounding areas. We look forward to serving all your needs. Contact us now for fast service. Get A Free Quote.</p>",
    cards: [
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
        {
            id: "13899",
            contentLink: [
                {
                    slug: "road-work",
                    title: "Road Work Guide",
                    summary: "<p>A research guide</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
        {
            id: "13900",
            title: "Types of Sinkholes",
            summary:
                "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
            externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
        },
        {
            id: "13958",
            contentLink: [
                {
                    slug: "frost-heave",
                    title: "Frost Heave",
                    summary:
                        "<p>Frost heave refers to <strong>the upward or outward movement of the ground surface (or objects on, or in, ground) caused by formation of ice in soil</strong>.</p>",
                },
            ],
        },
        {
            id: "13784",
            contentLink: [
                {
                    slug: "foxes",
                    title: "Foxes - Guides",
                    summary:
                        "<p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae.</p>",
                    externalResourceUrl: "http://libguides.library.ucla.edu",
                },
            ],
        },
    ],
}

export const SixCards = () => ({
    data() {
        return { block: mockSixCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})
