// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockAssetPod from "@/lib-components/BlockAssetPod.vue"

export default {
    title: "Funkhaus / BlockAssetPod",
    component: BlockAssetPod,
}

const mock = {
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
}

const template = `
    <block-asset-pod
        v-bind="props"
    />
`

export const Default = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutResourceType = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                    resourceType: [],
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutCollection = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                    collection: [],
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutDate = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                    date: "",
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutDescription = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                    description: "",
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutTitle = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                    title: "",
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutImage = {
    render: () => ({
        data() {
            return {
                props: {
                    ...mock,
                    image: null,
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}

export const WithoutMeta = {
    render: () => ({
        data() {
            return {
                props: {
                    image: API.image,
                    to: "https://www.google.com",
                },
            }
        },
        components: { BlockAssetPod },
        template,
    }),
}
