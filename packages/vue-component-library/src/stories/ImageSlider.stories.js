// import { computed } from 'vue'
import ImageSlider from '../lib-components/ImageSlider'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'Image Slider',
  component: ImageSlider,
}

// Mock data for the ImageSlider carousel, which is a carousel of ImageSlider components
const mockBeforeAfterImageCarousel = [{
    id: '37072',
    caption: 'Before and After Image Slider caption #1',
    beforeImage: API.image,
    afterImage: API.image
}]

export function Default() {
  return {
    data() {
      return {
        ...mockBeforeAfterImageCarousel[0],
      }
    },
    components: { ImageSlider },
    template: `
        <image-slider
            :before-image="beforeImage"
            :after-image="afterImage"
            :caption="caption"
        />
    `,
  }
}