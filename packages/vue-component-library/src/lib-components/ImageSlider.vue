<script lang="ts" setup>
import { ref } from 'vue'
import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-right.svg'

const { beforeImage, afterImage } = defineProps({
  beforeImage: {
    type: Object,
    required: true
  },
  afterImage: {
    type: Object,
    required: true
  }
})

const sliderContainer = ref<HTMLElement | null>(null)
const slider = ref<HTMLInputElement | null>(null)
const beforeImageElement = ref<HTMLImageElement | null>(null)

function handleSliderInput(event: Event) {
  const target = event.target as HTMLInputElement
  if (sliderContainer.value && slider.value && beforeImageElement.value)
    sliderContainer.value.style.setProperty('--position', `${target.value}%`)
}
</script>

<template>
  <div ref="sliderContainer" class="image-slider">
    <div class="image-container">
      <img class="after-image slider-image" :src="afterImage.src" :alt="afterImage.alt">
      <img ref="beforeImageElement" class="before-image slider-image" :src="beforeImage.src" :alt="beforeImage.alt">
      <div class="image-labels">
        <span class="before-label slider-label">
          <slot name="beforeLabel">Before</slot>
        </span>
        <span class="after-label slider-label">
          <slot name="afterLabel">After</slot>
        </span>
      </div>
    </div>
    <input
      ref="slider" type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown"
      class="slider" @input="(e) => handleSliderInput(e)"
    >
    <div class="slider-line" aria-hidden="true" />
    <div class="slider-button" aria-hidden="true">
      <span class="button-text">
        <SvgIconCaretLeft class="button-icon" />
        <SvgIconCaretRight class="button-icon" />
      </span>
    </div>
  </div>
  <div class="caption">
    <slot name="captionText" />
  </div>
</template>

<style lang="scss" scoped>
/* Add your styles here */
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.image-slider {
    position: relative;
    display: grid;
    width: 100%;
    height: 400px;
    max-width: 1160px;
    place-content: center;
    position: relative;
    overflow: hidden;
    --position: 50%; // Initial position of the slider
    .image-container {
        width: 100%;
        max-width: 1160px;
        max-height: 90vh;
        overflow: hidden;
        aspect-ratio: 2/1;

        :deep(img) {
          display: block;
          max-width: 100%;

        }
      }
}

.image-labels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9;
  padding: 1rem;
  span.slider-label {
    text-transform: uppercase;
    color: black;
    background-color: white;
    padding: .25rem .5rem;
  }
}

.slider-image {
  position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    resize: horizontal;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.before-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  clip-path: polygon(0 0, var(--position) 0, var(--position) 100%, 0 100%); // Adjust the width of the visible area
}

.caption {
  @include ftva-caption;
  padding-top: 15px;
  width: 100%;
  text-align: center;
  color: #737373;
}

.slider {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
    z-index: 10; // keep this element on top of the images
    /* for Firefox */
    width: 100%;
    height: 100%;
}

.slider:focus-visible~.slider-button {
    outline: 5px solid black;
    outline-offset: 3px;
}

.slider-line {
    position: absolute;
    inset: 0;
    width: .2rem;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    left: var(--position);
    transform: translateX(-50%);
    pointer-events: none;
}

.slider-button {
    position: absolute;
    background-color: #fff;
    color: black;
    border-radius: 100vw;
    min-width: 75px; // set minimum width to prevent icons wrapping near slider edges
    padding: .25rem 0 0 0;
    display: grid;
    place-items: center;
    top: 50%;
    left: var(--position);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 10;
}
</style>
