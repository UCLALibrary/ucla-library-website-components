<script setup lang="ts">
// Imports
import {
  computed,
  defineProps,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import SvgArrowDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import type { ComponentPublicInstance } from 'vue'
import { useTheme } from '@/composables/useTheme'

const props = withDefaults(defineProps<NotesAccordionItem>(), {
  items: () => [],
  labelOpen: 'Less',
  labelClose: 'More',
})

const theme = useTheme()

// Props
interface NotesAccordionItem {
  items: Array<{
    title: string
    text: string
  }>
  labelOpen?: string
  labelClose?: string
}
// Data
const isOpen = ref(false)
const textRefs = ref<(HTMLElement | null)[]>([])
const textHeight = ref(0)

// Computed
const classes = computed(() => [
  'notes-accordion',
  theme?.value || '',
  { 'is-open': isOpen.value },
])

const dynamicLabel = computed(() =>
  isOpen.value ? props.labelOpen : props.labelClose
)

const wrapperStyles = computed(() => ({
  height: isOpen.value ? `${textHeight.value}px` : '0',
}))

// Methods
function measureTextHeight() {
  let totalHeight = 0
  for (const ref of textRefs.value) {
    if (ref)
      totalHeight += ref.getBoundingClientRect().height
  }

  textHeight.value = totalHeight
}

function toggle() {
  isOpen.value = !isOpen.value
  nextTick(() => {
    measureTextHeight()
  })
}

function getTextRef(idx: number) {
  return (el: Element | ComponentPublicInstance | null) => setTextRef(idx, el)
}

function setTextRef(idx: number, el: Element | ComponentPublicInstance | null) {
  // If it's a Vue component instance, get its $el property
  const element
        = el && '$el' in el ? (el.$el as HTMLElement) : (el as HTMLElement | null)
  textRefs.value[idx] = element
}

// Lifecycle Hook
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
      <div
        v-for="(item, idx) in items"
        :key="idx"
        :ref="getTextRef(idx)"
        class="text-wrapper"
      >
        <span class="title" v-html="item.title" />
        <div class="text" v-html="item.text" />
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

<style lang="scss" scoped>
@import "@/styles/dlc/_notes-accordion.scss";
</style>
