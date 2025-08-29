import MetadataTable from "@/lib-components/MetadataTable.vue"
import { computed } from "vue"

// Import mock api data
import * as API from "@/stories/mock-api.json"

export default {
    title: "Funkhaus / MetadataTable",
    component: MetadataTable,
}

const baseItems = [
    { label: "Access Condition", value: { text: "copyrighted" } },
    {
        label: "Rights Statement",
        value: { text: "UCLA Library Special Collections, A1713" },
    },
    {
        label: "Rights Contact",
        value: {
            text: 'Charles E. Young Research Library, Box 951575, Los Angeles, CA 90095-1575.<br>Email: <a href="mailto:spec-coll@library.ucla.edu">spec-coll@library.ucla.edu</a>. Phone: <a href="tel:310 825-4988">(310) 825-4988</a>',
        },
    },
    {
        label: "Rights Holder",
        value: { text: "The Regents of the University of California" },
    },
    { label: "Rights Country", value: { text: "US" } },
    {
        label: "License",
        image: API.image,
        value: {
            text: 'This work is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International</a>',
        },
    },
    {
        label: "Manifest URL",
        showButtonIiif: true,
        buttonIiifTo:
            "https://www.figma.com/design/CDhWDARLb36ftkQce1LyLC/Breakpoints?node-id=75-12920&m=dev",
        value: [
            {
                label: "Download",
                variant: "secondary",
                isOutlined: true,
                to: "/src/assets/vue.svg",
                isDownload: true,
            },
            {
                label: "Copy URL",
                variant: "secondary",
                isOutlined: true,
                copyOnClick: true,
                copyUrl: "https://example.com/resource/123?ref=storybook",
            },
        ],
    },
]

function Template(args) {
    return {
        components: { MetadataTable },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        setup() {
            return { args }
        },
        template: `
          <MetadataTable :title="args.title" :items="args.items" />
        `,
    }
}

function TemplateNoTheme(args) {
    return {
        components: { MetadataTable },
        setup() {
            return { args }
        },
        template: `
          <MetadataTable :title="args.title" :items="args.items" />
        `,
    }
}

export const Default = Template.bind({})
Default.args = { title: "Access Condition", items: baseItems }


export const ImageAndText = Template.bind({})
ImageAndText.args = {
    title: "Image and Text",
    items: [
        {
            label: "Collection",
            value: { text: "UCLA Digital Library" },
            image: API.image,
        },
    ],
}

export const ImageTextAndLink = Template.bind({})
ImageTextAndLink.args = {
    title: "Image, Text, and Link",
    items: [
        {
            label: "Resource",
            value: { text: "<a href='https://ucla.edu'>UCLA Homepage</a>" },
            image: API.image,
        },
    ],
}

export const OnlyImage = Template.bind({})
OnlyImage.args = {
    title: "Only Image",
    items: [{ label: "Logo", value: { text: "" }, image: API.image }],
}

export const Empty = Template.bind({})
Empty.args = { title: "Empty Metadata", items: [] }

export const ImageTextWithHtmlLink = Template.bind({})
ImageTextWithHtmlLink.args = {
    title: "Image, Text with HTML Link",
    items: [
        {
            label: "Resource",
            value: {
                text: 'See the <a href="https://ucla.edu" target="_blank">UCLA Homepage</a> for more info.',
            },
            image: API.image,
        },
    ],
}

export const NoTheme = TemplateNoTheme.bind({})
NoTheme.args = { title: "Access Condition", items: baseItems }
