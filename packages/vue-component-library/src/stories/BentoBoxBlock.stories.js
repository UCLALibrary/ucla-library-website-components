import BentoBoxBlock from "@/lib-components/BentoBoxBlock.vue"

export default {
    title: "Funkhaus / Bento Box Block",
    component: BentoBoxBlock,
}

// MOCK DATA
const baseImage = {
    id: "26089",
    src: "https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg",
    height: 2074,
    width: 2560,
    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w",
    alt: "Albino Fox",
    focalPoint: [0.5, 0.5],
}

const mockDefault = {
    id: "bento-1",
    title: "Default Bento Block",
    summary: "<p>This is a default bento block with all fields filled.</p>",
    image: baseImage,
    link: "https://www.example.com",
    count: 345,
}

const mockNoImage = {
    id: "bento-2",
    title: "No Image Bento Block",
    summary: "<p>This bento block has no image.</p>",
    image: [],
    link: "https://www.example.com",
}

const mockLongText = {
    id: "bento-3",
    title: "Bento Block With Very Long Title That Should Wrap Or Truncate Properly In The UI To Avoid Layout Breaking",
    summary: "<p>" + "This is a very long summary. ".repeat(20) + "</p>",
    image: baseImage,
    link: "https://www.example.com",
}

const mockNoTitle = {
    id: "bento-4",
    title: "",
    summary: "<p>Bento block with no title.</p>",
    image: baseImage,
    link: "https://www.example.com",
}

const mockNoSummary = {
    id: "bento-5",
    title: "No Summary Bento Block",
    summary: "",
    image: baseImage,
    link: "https://www.example.com",
}

const mockNoLink = {
    id: "bento-6",
    title: "No Link Bento Block",
    summary: "<p>Bento block with no link.</p>",
    image: baseImage,
    link: "",
}

// STORIES

import { computed } from "vue"

function Template(args) {
    return {
        components: { BentoBoxBlock },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        setup() {
            return { args }
        },
        template: `
      <bento-box-block
        :to="args.link"
        :image="args.image"
        :title="args.title"
        :text="args.summary"
        :count="args.count"
      />
    `,
    }
}

function TemplateNoTheme(args) {
    return {
        components: { BentoBoxBlock },
        setup() {
            return { args }
        },
        template: `
      <bento-box-block
        :to="args.link"
        :image="args.image"
        :title="args.title"
        :text="args.summary"
        :count="args.count"
      />
    `,
    }
}

const themeDecorator = () => ({
    provide() {
        return {
            theme: computed(() => "dlc"),
        }
    },
    template: "<story />",
})

export const Default = Template.bind({})
Default.args = { ...mockDefault }
Default.decorators = [themeDecorator]

export const NoImage = Template.bind({})
NoImage.args = { ...mockNoImage }
NoImage.decorators = [themeDecorator]

export const LongText = Template.bind({})
LongText.args = { ...mockLongText }
LongText.decorators = [themeDecorator]

export const NoTitle = Template.bind({})
NoTitle.args = { ...mockNoTitle }
NoTitle.decorators = [themeDecorator]

export const NoSummary = Template.bind({})
NoSummary.args = { ...mockNoSummary }
NoSummary.decorators = [themeDecorator]

export const NoLink = Template.bind({})
NoLink.args = { ...mockNoLink }
NoLink.decorators = [themeDecorator]

export const NoTheme = TemplateNoTheme.bind({})
NoTheme.args = { ...mockDefault }
