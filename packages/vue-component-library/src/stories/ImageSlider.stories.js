import ImageSlider from '../lib-components/ImageSlider'

export default {
  title: 'Image Slider',
  component: ImageSlider,
}

const mockBeforeImage = [
  {
    id: '3280520',
    src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/hot_air_balloon.jpg',
    height: 1748,
    width: 2560,
    srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/hot_air_balloon.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/hot_air_balloon.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/hot_air_balloon.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/hot_air_balloon.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/hot_air_balloon.jpg 2560w',
    alt: 'Hot air balloon',
    focalPoint: [
      0.5,
      0.5
    ]
  }
]

// Mock data for the ImageSlider carousel, which is a carousel of ImageSlider components
const mockBeforeAfterImageCarousel = [{
  id: '37072',
  caption: 'Before and After Image Slider caption #1',
  beforeImage: mockBeforeImage[0],
  afterImage: mockBeforeImage[0]
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
    <component is="style" type="text/css">
.before-image {
    filter: grayscale(100%)
}
    </component>
        <div style="padding: 1rem; max-width: 1160px;">
        <image-slider
            :before-image="beforeImage"
            :after-image="afterImage"
        >
            <template #captionText>
               {{ caption }}
            </template>
        </image-slider>
        </div>
    `,
  }
}

export function WithCustomLabels() {
  return {
    data() {
      return {
        ...mockBeforeAfterImageCarousel[0],
      }
    },
    components: { ImageSlider },
    template: `
        <component is="style" type="text/css">
.before-image {
    filter: grayscale(100%)
}
    </component>
        <div style="padding: 1rem; max-width: 1160px;">
        <image-slider
            :before-image="beforeImage"
            :after-image="afterImage"
        >
            <template #beforeLabel>
               Black and White
            </template>
            <template #afterLabel>
              Color
            </template>
        </image-slider>
        </div>
    `,
  }
}
