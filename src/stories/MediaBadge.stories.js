// Import mock api data
import * as API from "@/stories/mock-api.json"
// import SvgIconExpand from "node-modules/ucla-library-design-tokens/assets/svgs/icon-expand"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import MediaBadge from "@/lib-components/MediaBadge"

// Storybook default settings
export default {
    title: "Media Badge",
    component: MediaBadge,
}

const mock = {
    image: API.image,
}

// Variations of stories below
export const Default = () => ({
    components: {
        // SvgIconExpand,
        ResponsiveImage,
        MediaBadge,
    },
    data() {
        return { ...mock }
    },
    template: `
      <responsive-image :image="image">
        <media-badge
            :image="image"
            :image-aspect-ratio="60"
        >
            5 Images <svg-icon-expand/>
        </media-badge>
      </responsive-image>
  `,
})
