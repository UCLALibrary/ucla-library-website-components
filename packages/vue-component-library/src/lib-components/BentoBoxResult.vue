<script setup lang="ts">
// Imports
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BentoBoxBlock from '@/lib-components/BentoBoxBlock.vue'
import type { MediaItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'
import RichText from '@/lib-components/RichText.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

const props = withDefaults(defineProps<BentoBoxResultProps>(), {
  items: () => [],
})
const theme = useTheme()
// Props
interface BentoBoxResultProps {
  title: string
  items?: Array<{
    to: string
    image: MediaItemType
    title: string
    text: string
    count?: number
  }>
}
// Data
const itemsRef = ref<HTMLElement | null>(null)
const thumbRef = ref<HTMLElement | null>(null)

const dragging = ref(false)
const dragStartX = ref(0)
const startScrollLeft = ref(0)
const thumbStartLeft = ref(0)

// Computed
const classes = computed(() => {
  return ['bento-box-result', theme?.value || '']
})

// Methods
function updateThumb() {
  const items = itemsRef.value
  const thumb = thumbRef.value
  if (!items || !thumb)
    return
  const { scrollWidth, clientWidth, scrollLeft } = items
  if (scrollWidth <= clientWidth) {
    thumb.style.opacity = '0'
    return
  }
  else {
    thumb.style.opacity = '1'
  }
  const ratio = clientWidth / scrollWidth
  const thumbWidth = Math.max(clientWidth * ratio, 40)
  const maxThumbLeft = clientWidth - thumbWidth
  const maxScrollLeft = scrollWidth - clientWidth
  const thumbLeft = maxScrollLeft
    ? (scrollLeft / maxScrollLeft) * maxThumbLeft
    : 0
  thumb.style.width = `${thumbWidth}px`
  thumb.style.left = `${thumbLeft}px`
}

function onScroll() {
  updateThumb()
}

function startDrag(clientX: number) {
  dragging.value = true
  dragStartX.value = clientX
  startScrollLeft.value = itemsRef.value?.scrollLeft || 0
  thumbStartLeft.value = thumbRef.value?.offsetLeft || 0
}

function handleDrag(clientX: number) {
  if (!dragging.value || !itemsRef.value || !thumbRef.value)
    return
  const items = itemsRef.value
  const thumb = thumbRef.value
  const { scrollWidth, clientWidth } = items
  const thumbWidth = thumb.offsetWidth
  const maxThumbLeft = clientWidth - thumbWidth
  const maxScrollLeft = scrollWidth - clientWidth
  const deltaX = clientX - dragStartX.value
  const newThumbLeft = Math.min(
    Math.max(thumbStartLeft.value + deltaX, 0),
    maxThumbLeft
  )
  const newScrollLeft = (newThumbLeft / maxThumbLeft) * maxScrollLeft
  items.scrollLeft = newScrollLeft
}

function endDrag() {
  dragging.value = false
}

function onThumbMousedown(e: MouseEvent) {
  e.preventDefault()
  startDrag(e.clientX)
}

function onThumbMousemove(e: MouseEvent) {
  if (!dragging.value)
    return
  e.preventDefault()
  handleDrag(e.clientX)
}

function onThumbMouseup() {
  if (!dragging.value)
    return
  endDrag()
}

function onThumbTouchstart(e: TouchEvent) {
  e.preventDefault()
  const touch = e.touches[0]
  if (touch)
    startDrag(touch.clientX)
}

function onThumbTouchmove(e: TouchEvent) {
  if (!dragging.value)
    return
  e.preventDefault()
  const touch = e.touches[0]
  if (touch)
    handleDrag(touch.clientX)
}

function onThumbTouchend() {
  if (!dragging.value)
    return
  endDrag()
}

// Lifecycle Hooks
onMounted(() => {
  nextTick(() => {
    updateThumb()
    itemsRef.value?.addEventListener('scroll', onScroll)
    window.addEventListener('resize', updateThumb)
    document.addEventListener('mousemove', onThumbMousemove)
    document.addEventListener('mouseup', onThumbMouseup)
    document.addEventListener('touchmove', onThumbTouchmove, { passive: false })
    document.addEventListener('touchend', onThumbTouchend)
  })
})
onBeforeUnmount(() => {
  itemsRef.value?.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateThumb)
  document.removeEventListener('mousemove', onThumbMousemove)
  document.removeEventListener('mouseup', onThumbMouseup)
  document.removeEventListener('touchmove', onThumbTouchmove)
  document.removeEventListener('touchend', onThumbTouchend)
})

watch(
  () => props.items,
  () => nextTick(() => updateThumb()),
  { deep: true }
)
</script>

<template>
  <div :class="classes">
    <h5
      class="title"
      v-html="props.title"
    />
    <div
      ref="itemsRef"
      class="items"
    >
      <slot>
        <div
          v-for="(item, index) in props.items"
          :key="(item.title || 'item') + index"
          class="item"
        >
          <BentoBoxBlock
            :image="item.image"
            :to="item.to"
          >
            <template
              v-if="item.count !== undefined"
              #eyebrow
            >
              <RichText :rich-text-content="`${item.count} Results`" />
            </template>
            <template
              v-if="item.title"
              #title
            >
              <RichText :rich-text-content="item.title" />
            </template>
            <template
              v-if="item.text"
              #text
            >
              <RichText :rich-text-content="item.text" />
            </template>
            <template
              v-if="item.to"
              #button
            >
              <ButtonLink
                :is-senary="true"
                :to="item.to"
                label="View Results"
                icon-name="svg-external-link"
              />
            </template>
          </BentoBoxBlock>
        </div>
      </slot>
    </div>
    <div class="custom-scrollbar">
      <div
        ref="thumbRef"
        class="custom-scrollbar-thumb"
        @mousedown="onThumbMousedown"
        @touchstart="onThumbTouchstart"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-box-result.scss";
</style>
