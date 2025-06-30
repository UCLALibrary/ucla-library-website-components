<script setup lang="ts">
import {
  computed,
  defineProps,
  onMounted,
  onUnmounted,
  ref,
  useTemplateRef
} from 'vue'

// Imports
import SvgArrowDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'

// Props
const props = defineProps({
  title: String,
  text: String,
  labelOpen: {
    type: String,
    default: 'Less',
  },
  labelClose: {
    type: String,
    default: 'More',
  },
})

// Data
// const textRef = useTemplateRef('hidden-text')
const textRef = ref<HTMLElement | null>(null)
const textHeight = ref(0)
const isOpen = ref(false)

// Computed
const classes = computed(() => {
  return [
    'notes-accordion',
    { 'is-open': isOpen.value }
  ]
})

const dynamicLabel = computed(() => {
  return isOpen.value && props.labelOpen
    ? props.labelOpen
    : props.labelClose
})

const wrapperStyles = computed(() => {
  return {
    height: isOpen.value ? `${textHeight.value}px` : '0'
  }
})

// Methods

// Measures the height of the text and sets it to the textHeight variable
function measureTextHeight() {
  if (textRef.value)
    textHeight.value = textRef.value.getBoundingClientRect().height
}

// Toggles the open state of the accordion
function toggle() {
  isOpen.value = !isOpen.value
}

// Lifecycle Hooks
onMounted(() => {
  measureTextHeight()
  window.addEventListener('resize', measureTextHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', measureTextHeight)
})
</script>

<template>
  <div :class="classes">
    <div class="wrapper" :style="wrapperStyles">
      <div ref="textRef" class="text-wrapper">
        <span class="title" v-html="title" />
        <div class="text" v-html="text" />
      </div>
    </div>

    <button class="btn" :aria-expanded="isOpen" @click="toggle">
      <transition name="fade-label" mode="out-in">
        <span :key="dynamicLabel" class="label" v-html="dynamicLabel" />
      </transition>

      <SvgArrowDown class="caret-icon" />
    </button>
  </div>
</template>

<style lang="scss">
.notes-accordion {
    position: relative;

    font-family: var(--font-primary);
    color: var(--color-black);

    .btn{
        padding: 5px 5px 5px 0;
        box-sizing: border-box;

        font-size: 18px;
        font-weight: 400;
        line-height: normal;

        display: flex;
        align-items: center;
    }
    .caret-icon{
        transition: transform 0.5s ease-in-out;
        width: 30px;
        height: auto;
    }

    .wrapper{
        position: relative;

        margin-bottom: 0;

        overflow: hidden;
        height: 0;
        transition: height 0.5s ease-in-out, margin-bottom 0.5s ease-in-out;
    }
    .text-wrapper{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .title{
        font-size: 16px;
        font-weight: 600;
        line-height: 150%; /* 24px */
    }
    .text{
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        color: var(--color-text-primary);
    }

    &.is-open{
        .wrapper{
            margin-bottom: 25px;
        }
        .caret-icon{
            transform: rotate(180deg);
        }
    }
}

// Transitions
.fade-label-enter-active, .fade-label-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.fade-label-enter-from, .fade-label-leave-to {
  opacity: 0;
}
.fade-label-enter-to, .fade-label-leave-from {
  opacity: 1;
}
</style>
