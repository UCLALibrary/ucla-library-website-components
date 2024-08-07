// Import mock api data
import * as API from '@/stories/impact-report_index.json'
import StoryWithImage from '@/lib-components/StoryWithImage.vue'

// Storybook default settings
export default {
  title: 'IMPACT REPORT / Story with Image',
  component: StoryWithImage,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        item: { ...API.story[0] },
      }
    },
    components: { StoryWithImage },
    template: `
      <story-with-image
          :image="item.image"
          :caption="item.image.caption"
          :title="item.title"
          :text="item.text"
          :footnote="item.footnote"
          :calltoaction="item.calltoaction"
      />
  `,
  }
}
