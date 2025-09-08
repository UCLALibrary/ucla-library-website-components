<template>
  <details
    ref="detailsRef"
    :class="classes"
    :open="isOpened"
  >
    <summary
      ref="summaryRef"
      class="summary"
      @click.prevent="onClick"
    >
      <slot name="summary" />
    </summary>
    <div
      ref="contentRef"
      class="content"
    >
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

interface Props {
  duration?: number
  easing?: string
  opened?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: 400,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  opened: false
})

const emit = defineEmits<{
  opening: []
  opened: []
  closing: []
  closed: []
}>()

const isOpened = ref<boolean>(props.opened)
const isClosing = ref<boolean>(false)
const isExpanding = ref<boolean>(false)
const animation = ref<Animation | null>(null)
const height = ref<string>('auto')
const detailsRef = ref<HTMLDetailsElement | null>(null)
const summaryRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const classes = computed(() => [
  'effect-slide-toggle',
  { 'is-opened': isOpened.value },
  { 'is-closed': !isOpened.value },
  { 'is-closing': isClosing.value },
  { 'is-opening': isExpanding.value }
])

watch(() => props.opened, (newVal: boolean) => {
  if (newVal) {
    open()
  }
  else {
    close()
  }
})

const onClick = (): void => {
  if (isClosing.value || !isOpened.value) {
    open()
  }
  else if (isExpanding.value || isOpened.value) {
    close()
  }
}

const close = (): void => {
  if (!detailsRef.value || !summaryRef.value) return

  isClosing.value = true
  emit('closing')

  const startHeight = `${detailsRef.value.offsetHeight}px`
  const endHeight = `${summaryRef.value.offsetHeight}px`

  if (animation.value) animation.value.cancel()

  animation.value = detailsRef.value.animate(
    { height: [startHeight, endHeight] },
    { duration: props.duration, easing: props.easing }
  )

  animation.value.onfinish = () => onAnimationFinish(false)
  animation.value.oncancel = () => (isClosing.value = false)
}

const open = async (): Promise<void> => {
  if (!detailsRef.value) return

  height.value = `${detailsRef.value.offsetHeight}px`
  isOpened.value = true
  emit('opening')

  await nextTick()
  expand()
}

const expand = (): void => {
  if (!detailsRef.value || !summaryRef.value || !contentRef.value) return

  isExpanding.value = true
  const startHeight = `${detailsRef.value.offsetHeight}px`
  const endHeight = `${summaryRef.value.offsetHeight + contentRef.value.offsetHeight}px`

  if (animation.value) animation.value.cancel()

  animation.value = detailsRef.value.animate(
    { height: [startHeight, endHeight] },
    { duration: props.duration, easing: props.easing }
  )

  animation.value.onfinish = () => onAnimationFinish(true)
  animation.value.oncancel = () => (isExpanding.value = false)
}

const onAnimationFinish = (open: boolean): void => {
  isOpened.value = open
  animation.value = null
  isClosing.value = false
  isExpanding.value = false
  height.value = 'auto'
  emit(open ? 'opened' : 'closed')
}
</script>

<style scoped>
.effect-slide-toggle {
  overflow: hidden;
  height: v-bind('height');

  .summary {
    display: block;
    cursor: pointer;
    user-select: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
  }
}
</style>
