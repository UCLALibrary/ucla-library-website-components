import MediaItem from "@/lib-components/Media/Item"

// Import mock api data
import * as API from "@/stories/mock-api.json"

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MediaItem },
    template: `<media-item v-bind="$props"/>`,
})

export default {
    title: "GLOBAL / Media Item",
    component: MediaItem,
    argTypes: {
        type: {
            options: [null, "image", "video"],
            control: { type: "radio" },
        },
    },
}

// Variations of stories below
export const Default = Template.bind({})
Default.args = {
    type: null,
    mediaItem: API.image,
}

export const ImageSquareRatio = Template.bind({})
ImageSquareRatio.args = {
    type: null,
    mediaItem: API.image,
    aspectRatio: 100,
}

export const ImageObjectFitContain = Template.bind({})
ImageObjectFitContain.args = {
    type: null,
    mediaItem: API.image,
    aspectRatio: 100,
    objectFit: "contain",
}

export const Video = Template.bind({})
Video.args = {
    type: null,
    mediaItem: API.video,
    objectFit: "cover",
}

export const VideoWithControls = Template.bind({})
VideoWithControls.args = {
    type: null,
    mediaItem: API.video,
    controls: true,
    objectFit: "cover",
}
