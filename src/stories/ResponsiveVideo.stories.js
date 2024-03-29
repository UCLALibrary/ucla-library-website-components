import ResponsiveVideo from "@/lib-components/ResponsiveVideo"

// Import mock api data
import * as API from "@/stories/mock-api.json"

export default {
    title: "GLOBAL / Responsive Video",
    component: ResponsiveVideo,
}

export const ImageWithVideo = () => ({
    data() {
        return {
            image: API.videoVideoUrl,
        }
    },
    components: { ResponsiveVideo },
    template: `<responsive-video :image="image" />`,
})

export const VideoWithControls = () => ({
    data() {
        return {
            image: API.videoVideoUrl,
        }
    },
    components: { ResponsiveVideo },
    template: `<responsive-video :image="image" :controls="true"/>`,
})
