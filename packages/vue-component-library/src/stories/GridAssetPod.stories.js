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
        media: API.image,
        to: "https://www.google.com",
        title: "1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963",
        metadata: [
            {
                key: "Description",
                value: "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
            },
            {
                key: "Date",
                value: "November 1, 1963",
            },
            {
                key: "Resource type",
                value: "Still Image",
            },
            {
                key: "Collection",
                value: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "1/2 length portrait",
        metadata: [
            {
                key: "Description",
                value: "SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin curb.",
            },
            {
                key: "Date",
                value: "November 7, 1965",
            },
            {
                key: "Collection",
                value: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "5th grade boy pinning diaper on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965 on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965",
        metadata: [
            {
                key: "Description",
                value: "Lionel Richie: He'll headline the Closing Ceremony",
            },
            {
                key: "Date",
                value: "August 10, 1984",
            },
            {
                key: "Resource type",
                value: "Still Image",
                to: "https://www.instagram.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel in Los Angeles, Calif., 1961",
        metadata: [
            {
                key: "Description",
                value: "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
            },
            {
                key: "Date",
                value: "November 1, 1963",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "5th grade boy pinning diaper on baby doll in family life class at Steele Elementary School, Torrance, Calif., 1965",
        metadata: [
            {
                key: "Description",
                value: "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
            },
            {
                key: "Resource type",
                value: "Still Image",
            },
            {
                key: "Collection",
                value: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "3/4 length portrait of singer Lionel Richie, 1984",
        metadata: [
            {
                key: "Description",
                value: "Lionel Richie: He'll headline the Closing Ceremony",
            },
            {
                key: "Date",
                value: "August 10, 1984",
            },
            {
                key: "Resource type",
                value: "Still Image",
                to: "https://www.instagram.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for",
        metadata: [
            {
                key: "Description",
                value: "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
            },
            {
                key: "Date",
                value: "November 1, 1963",
            },
            {
                key: "Resource type",
                value: "Still Image",
            },
            {
                key: "Collection",
                value: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "1/2 length",
        metadata: [
            {
                key: "Description",
                value: "SPEAKS OUT-Dr. Lewis Yablonsky, VSC, attacks value of heroin curb.",
            },
            {
                key: "Date",
                value: "November 7, 1965",
            },
            {
                key: "Collection",
                value: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for",
        metadata: [
            {
                key: "Description",
                value: "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
            },
            {
                key: "Date",
                value: "November 1, 1963",
            },
            {
                key: "Resource type",
                value: "Still Image",
            },
            {
                key: "Collection",
                value: "Los Angeles Times Photographic Collection OpenUCLA Collections",
                to: "https://www.facebook.com",
            },
        ],
    },
    {
        media: API.image,
        to: "https://www.google.com",
        title: "3,500 pound industrial robot, Unimate, pouring coffee for a woman at Biltmore Hotel in Los Angeles, Calif., 1961",
        metadata: [
            {
                key: "Description",
                value: "PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.",
            },
            {
                key: "Date",
                value: "November 1, 1963",
            },
        ],
    },
]

const template = `
                    <div>
                        <button @click="handleChangeLayout" style="margin-bottom: 20px; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
                            Change Layout
                        </button>
                        <grid-asset-pod
                            v-bind="props"
                        />
                    </div>
                `

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
        template,
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
        template,
    }),
}
