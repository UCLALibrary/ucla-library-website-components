<script lang="ts" setup>
import { ref } from 'vue'

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
const afterImageElement = ref<HTMLImageElement | null>(null)

function handleSliderInput(event: Event) {
  const target = event.target as HTMLInputElement
  console.log('Slider input event:', target.value)
  // if (sliderContainer.value) {
  //   // sliderContainer.value.style.setProperty('--position', `${target.value}%`)
  //   afterImageElement.value.style.clip = `rect(0, ${offsetX}px, ${sliderRect.height}px, 0)`;
  // }
}
</script>

<template>
  <div ref="sliderContainer" class="image-slider">
    <div class="image-container">
      <img
        class="before-image slider-image"
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="color photo"
      >
      <img
        ref="afterImageElement" class="after-image slider-image"
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="black and white"
      >
      <!-- <ResponsiveImage :media="beforeImage" class="slider-image before-image" />
      <ResponsiveImage :media="afterImage" class="slider-image after-image" /> -->
      <!-- <div class="image-labels">
                <span class="before-label"><slot name="beforeLabel">Before</slot></span>
                <span class="after-label"><slot name="afterLabel">After</slot></span>
            </div> -->
    </div>
    <input
      ref="slider" type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown"
      class="slider" @input="(e) => handleSliderInput(e)"
    >
    <div class="slider-line" aria-hidden="true" />
    <div class="slider-button" aria-hidden="true">
      <span class="button-text">Slide to Compare</span>
    </div>
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
    // border-radius: 1rem;
    --position: 50%; // Initial position of the slider
    .image-container {
        // position: relative;
        width: 100%;
        // height: 100%;
        // max-height: 90vh;
        // aspect-ratio: 1/1;
        max-width: 1160px;
        max-height: 90vh;
        overflow: hidden;
        aspect-ratio: 2/1;
        // padding-bottom: 25%;

        :deep(img) {
          display: block;
          max-width: 100%;

        }
      }
}

.slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
}

.before-image {
    // position: absolute;
    // inset: 0;
    // width: var(--position);
    filter: grayscale(100%)
}

.before-image, .after-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  resize: horizontal;
}

.after-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // clip: rect(0, 400px, 300px, 0);
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%); // WORKS!
  /* Adjust the width of the visible area */
}

.slider {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
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
    padding: .5rem;
    border-radius: 100vw;
    display: grid;
    place-items: center;
    top: 50%;
    left: var(--position);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 100;
    box-shadow: 1px 1px 1px hsl(0, 50%, 2%, .5);
}
</style>
