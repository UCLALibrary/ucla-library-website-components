import MediaItem from "@/lib-components/Media/Item"

// Import mock api data
import * as API from "@/stories/mock/Media.js"

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MediaItem },
    template: `<media-item v-bind="$props"/>`,
})

export default {
    title: "GLOBAL / Media Item",
    component: MediaItem,
}

export const Default = Template.bind({})
Default.args = {
    imageFile: API.Image,
    videoFile: API.Video,
    audioFile: API.Audio,
    embedCode: API.VideoEmbed,
}

export const Image = () => ({
    data() {
        return {
            item: API.Image,
        }
    },
    components: { MediaItem },
    template: `<media-item v-bind="item" />`,
})

export const Video = () => ({
    data() {
        return {
            item: API.Video,
        }
    },
    components: { MediaItem },
    template: `<media-item v-bind="item" />`,
})

export const VideoEmbed = () => ({
    data() {
        return {
            item: API.VideoEmbed,
        }
    },
    components: { MediaItem },
    template: `<media-item v-bind="item" />`,
})

// export const Audio = () => ({
//     data() {
//         return {
//             item: API.Audio,
//             controls: true,
//         }
//     },
//     components: { MediaItem },
//     template: `<media-item v-bind="item" />`,
// })

export const AudioEmbed = () => ({
    data() {
        return {
            item: API.AudioEmbed,
        }
    },
    components: { MediaItem },
    template: `<media-item v-bind="item" />`,
})
