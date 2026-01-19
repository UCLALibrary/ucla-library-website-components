import ImageSlider from '../lib-components/ImageSlider'
import ScrollWrapper from '../lib-components/ScrollWrapper'

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

export function DefaultWithAltText() {
  return {
    data() {
      return {
        ...mockBeforeAfterImageCarousel[0],
        beforeImage: {
          ...mockBeforeImage[0],
          altText: 'Before image alt text'
        },
        afterImage: {
          ...mockBeforeImage[0],
          altText: 'After image alt text'
        }
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

const mockSquareImage = [
  {
    id: '3280520',
    src: 'https://static.library.ucla.edu/craftassetstest/_fullscreen/lostlake.jpeg',
    height: 1500,
    width: 1500,
    srcset: 'https://static.library.ucla.edu/craftassetstest/_fullscreen/lostlake.jpeg',
    alt: 'Lostlake',
    focalPoint: [
      0.5,
      0.5
    ]
  }
]

const mockSquareImageCarousel = [{
  id: '37072',
  caption: 'Before and After Image Slider caption #1',
  beforeImage: mockSquareImage[0],
  afterImage: mockSquareImage[0]
}]

const mockTallImage = [
  {
    id: '3280520',
    src: 'https://static.library.ucla.edu/craftassetstest/FTVA/film-reel_4_18.jpg',
    height: 350,
    width: 250,
    srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/film-reel_4_18.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/film-reel_4_18.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/film-reel_4_18.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/film-reel_4_18.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/film-reel_4_18.jpg 2560w',
    alt: 'Lostlake',
    focalPoint: [
      0.5,
      0.5
    ]
  }
]

const mockTallImageCarousel = [{
  id: '37072',
  caption: 'Before and After Image Slider caption #1',
  beforeImage: mockTallImage[0],
  afterImage: mockTallImage[0]
}]

export function TallImage() {
  return {
    data() {
      return {
        ...mockTallImageCarousel[0],
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

export function WithScrollWrapperCarousel() {
  return {
    data() {
      return {
        firstImage: mockBeforeAfterImageCarousel[0],
        secondImage: mockTallImageCarousel[0],
        thirdImage: mockSquareImageCarousel[0],
      }
    },
    components: { ImageSlider, ScrollWrapper },
    template: `
        <component is="style" type="text/css">
.before-image {
    filter: grayscale(100%)
}
    </component>
        <div style="padding: 1rem; max-width: 1160px;">
          <ScrollWrapper :single-item="true" :initial-slide="1">
            <template #item-1>
              <image-slider
                  :before-image="firstImage.beforeImage"
                  :after-image="firstImage.afterImage"
              >
                <template #beforeLabel>
               Custom Before Label
            </template>
            <template #afterLabel>
              Custom After Label
            </template>
              </image-slider>
            </template>
            <template #item-2>
              <image-slider
                  :before-image="secondImage.beforeImage"
                  :after-image="secondImage.afterImage"
              />
            </template>
            <template #item-3>
              <image-slider
                  :before-image="thirdImage.beforeImage"
                  :after-image="thirdImage.afterImage"
              />
            </template>
             </ScrollWrapper>
        </div>
    `,
  }
}
