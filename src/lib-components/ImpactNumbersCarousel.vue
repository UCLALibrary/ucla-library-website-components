<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

// COMPONENTS
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

// SVGs
import SvgArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import SvgIconMoleculeBullet from 'ucla-library-design-tokens/assets/svgs/icon-molecule-bullet-filled.svg'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

// PROPS & DATA
import type { BlockImpactNumbersCarouselType } from '@/types/types'

const { blocks } = defineProps({
  blocks: {
    type: Array as PropType<BlockImpactNumbersCarouselType[]>,
    default: () => [],
    required: true,
  },
})
const currentSlide = ref(0)

// COMPUTED
// returns 'disabled' if current slide is first
const prevIsDisabled = computed(() => {
  return currentSlide.value === 0 ? 'disabled' : ''
})
// returns 'disabled' if current slide is last
const nextIsDisabled = computed(() => {
  return currentSlide.value === blocks.length - 1
    ? 'disabled'
    : ''
})

// METHODS
function checkCurrentSlide(index: number) {
  if (index === currentSlide.value)
    return 'current-slide'
}
function setCurrentSlide(currentSlideIndex: number) {
  currentSlide.value = currentSlideIndex
}
</script>

<template>
  <div class="impact-numbers-carousel">
    <div class="slide-indicator">
      <SvgIconMoleculeBullet v-for="(block, index) in blocks" :key="block.largeText" :class="checkCurrentSlide(index)"
        @click="setCurrentSlide(index)" />
    </div>
    <!--
        <vue-glide :per-view="1" :rewind="false" :active="currentSlide" @change="setCurrentSlide">
            <vue-glide-slide v-for="(block) in blocks" :key="block.largeText">
                <div class="slide-image">
                    <ResponsiveImage :image="block.image[0]" />
                </div>
                <div class="impact-numbers-text-container">
                    <span class="impactNumber">{{ block.largeText }}</span>
                    <span class="impactText">{{ block.mediumText }}</span>
                </div>
                <div class="small-descriptor">
                    {{ block.smallDescriptor }}
                </div>
            </vue-glide-slide>
            <template #control>
                <button data-glide-dir="<" :class="prevIsDisabled">
                    <SvgArrowRight aria-label="Go to previous item" class="prev-control" />
                </button>
                <button data-glide-dir=">" :class="nextIsDisabled">
                    <SvgArrowRight aria-label="Go to next item" />
                </button>
            </template>
</vue-glide> -->

    <Carousel v-model="currentSlide">
      <Slide v-for="(block) in blocks" :key="block.largeText">
        <div class="slide-image">
          <ResponsiveImage :image="block.image[0]" />
        </div>
        <div class="impact-numbers-text-container">
          <span class="impactNumber">{{ block.largeText }}</span>
          <span class="impactText">{{ block.mediumText }}</span>
        </div>
        <div class="small-descriptor">
          {{ block.smallDescriptor }}
        </div>
      </Slide>
    </Carousel>
    <!-- navigation -->
    <div class="controls">
      <button data-glide-dir="<" :class="prevIsDisabled">
        <SvgArrowRight aria-label="Go to previous item" class="prev-control" />
      </button>
      <button data-glide-dir=">" :class="nextIsDisabled">
        <SvgArrowRight aria-label="Go to next item" />
      </button>
    </div>
    <!-- to do tablist refactor? what happened to it in lightbox-->
    <div role="tablist" class="dots" />
  </div>
</template>

<style lang="scss" scoped>
.carousel__slide {
  display: block;
  // width: calc(100% - 32px);
}

.impact-numbers-carousel {
  display: flex;
  max-width: $container-l-main + px;
  margin-top: var(--space-xl);

  .slide-indicator {
    :deep(.svg__fill--primary-blue-03) {
      fill: transparent;
    }

    :deep(.current-slide path.svg__fill--primary-blue-03) {
      fill: var(--color-primary-blue-03);
    }
  }

  // TODO equivalent
  .responsive-image {
    max-height: 544px;
  }

  .impact-numbers-text-container {
    background: white;
    margin-top: -64px;
    margin-bottom: var(--space-m);
    padding-left: 25px;
    position: relative;
    width: 431px;
    -webkit-clip-path: polygon(0 0,
        calc(100% - 39px) 0,
        100% 95px,
        100% 102%,
        0 102%);
    clip-path: polygon(0 0,
        calc(100% - 39px) 0,
        100% 95px,
        100% 102%,
        0 102%);

    .impactNumber {
      font-family: var(--font-secondary);
      font-weight: medium;
      font-size: 128px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: var(--color-primary-blue-03);
    }

    .impactText {
      @include step-5;
      line-height: 85%;
      letter-spacing: -0.005em;
      color: var(--color-black);
    }

    .small-descriptor {
      margin-left: 25px;
      max-width: 352px;
    }
  }

  .controls {

    button,
    .separator {
      bottom: 36px;
      position: absolute;
      // the right arrow svg has a built in 21px padding, so adding 4px
      // to the right to make 25px margin to match the left margin
      right: 48px;

      &[data-glide-dir="<"] {
        right: 104px;
      }

      &.disabled {
        cursor: default;

        path {
          stroke: var(--color-secondary-grey-02);
        }
      }

      path {
        stroke: var(--color-secondary-grey-04);
      }
    }

    .prev-control {
      right: 52px;
      transform: scaleX(-1);
    }

    .separator {
      border-left: dotted 1px;
      bottom: 56px;
      border-color: var(--color-secondary-grey-02);
      height: 16px;
      right: 107px;
    }
  }
}

@media #{$small} {
  .impact-numbers-carousel {
    flex-direction: column-reverse;

    .slide-indicator {
      display: flex;
      justify-content: center;
      margin: 12px 0;
    }

    // TODO FIX
    .glide {
      .impact-numbers-text-container {
        width: unset;
      }
    }

    [data-glide-el="controls"] button,
    [data-glide-el="controls"] .separator {
      display: none;
    }
  }
}
</style>
