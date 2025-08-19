<script setup lang="ts">
import { computed } from 'vue'
import SmartLink from './SmartLink.vue'
import type { ButtonProps } from '@/types/components/button.types'
import { ButtonColor, ButtonVariant } from '@/types/components/button.types'

// Props
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: ButtonVariant.Primary,
  color: ButtonColor.Default,
  type: 'button',
  isDisabled: false,
  isOutlined: false,
  linkTarget: '',
  isDownload: false,
})

// Emits
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Computeds
const classes = computed(() => [
  'button',
  props.variant,
  props.color ? `color-${props.color}` : '',
  { 'is-outlined': props.isOutlined },
  { 'is-disabled': props.isDisabled },
])

// Methods
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  }
  catch (error) {
    // no-op, try fallback below
  }

  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    // eslint-disable-next-line deprecation/deprecation
    // execCommand is deprecated but used here as a legacy fallback
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  }
  catch (error) {
    return false
  }
}

async function handleClick(event: MouseEvent) {
  if (props.isDisabled)
    return

  if (props.copyOnClick) {
    event.preventDefault()
    const urlToCopy = props.copyUrl || (typeof window !== 'undefined' ? window.location.href : '')
    if (urlToCopy)
      await copyToClipboard(urlToCopy)
  }

  emit('click', event)
}
</script>

<template>
  <SmartLink v-if="to && !copyOnClick" :class="classes" :to="to" :link-target="linkTarget" :is-download="isDownload">
    {{ text }}
  </SmartLink>

  <button v-else :class="classes" :type="type" :disabled="isDisabled" @click="handleClick">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_button.scss";
</style>
