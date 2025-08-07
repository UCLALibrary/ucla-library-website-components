// Import mock api data
import * as API from "@/stories/mock-api.json"
import GridAssetPod from "@/lib-components/GridAssetPod.vue"
import { computed } from "vue"

export default {
    title: "Funkhaus / GridAssetPod",
    component: GridAssetPod,
}

const items = [
    {
        to: "https://www.google.com",
        title: "1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963",
        description:
            "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
        date: "November 1, 1963",
        resourceType: [
            { text: "Still Image" },
            { text: "Photograph", to: "https://www.instagram.com" },
        ],
        collection: [
            {
                text: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "1/2 length portrait",
        description:
            "SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin curb.",
        date: "November 7, 1965",

        collection: [
            {
                text: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "5th grade boy pinning diaper on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965 on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965",
        description: "Lionel Richie: He'll headline the Closing Ceremony",
        date: "August 10, 1984",
        resourceType: [
            { text: "Still Image", to: "https://www.instagram.com" },
        ],

        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel in Los Angeles, Calif., 1961",
        description:
            "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
        date: "November 1, 1963",

        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "5th grade boy pinning diaper on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965",
        description:
            "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",

        resourceType: [
            { text: "Still Image" },
            { text: "Photograph", to: "https://www.instagram.com" },
        ],
        collection: [
            {
                text: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "3/4 length portrait of singer Lionel Richie, 1984",
        description: "Lionel Richie: He'll headline the Closing Ceremony",
        date: "August 10, 1984",
        resourceType: [
            { text: "Still Image", to: "https://www.instagram.com" },
        ],

        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for",
        description:
            "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
        date: "November 1, 1963",
        resourceType: [
            { text: "Still Image" },
            { text: "Photograph", to: "https://www.instagram.com" },
        ],
        collection: [
            {
                text: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "1/2 length",
        description:
            "SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin curb.",
        date: "November 7, 1965",

        collection: [
            {
                text: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for",
        description:
            "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
        date: "November 1, 1963",
        resourceType: [
            { text: "Still Image" },
            { text: "Photograph", to: "https://www.instagram.com" },
        ],
        collection: [
            {
                text: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
        image: API.image,
    },
    {
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel in Los Angeles, Calif., 1961",
        description:
            "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
        date: "November 1, 1963",

        image: API.image,
    },
]

export const Default = {
    render: () => ({
        data() {
            return {
                props: {
                    items,
                    isGridLayout: false,
                },
            }
        },
        methods: {
            handleChangeLayout() {
                this.props.isGridLayout = !this.props.isGridLayout
            },
        },
        components: { GridAssetPod },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        template: `
            <div>
                <button @click="handleChangeLayout" style="margin-bottom: 20px; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
                    Change Layout
                </button>
                <grid-asset-pod
                    v-bind="props"
                />
            </div>
        `,
    }),
}

export const WithTransition = {
    render: () => ({
        data() {
            return {
                props: {
                    items,
                    isGridLayout: false,
                    hasTransition: true,
                },
            }
        },
        methods: {
            handleChangeLayout() {
                this.props.isGridLayout = !this.props.isGridLayout
            },
        },
        components: { GridAssetPod },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        template: `
            <div>
                <button @click="handleChangeLayout" style="margin-bottom: 20px; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
                    Change Layout
                </button>
                <grid-asset-pod
                    v-bind="props"
                />
            </div>
        `,
    }),
}
