<script setup lang="ts">
// Imports
import { computed, defineProps, ref } from 'vue'
import SvgArrowDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import { useTheme } from '@/composables/useTheme'
import EffectSlideToggle from '@/lib-components/EffectSlideToggle.vue'

// Props
interface ExcerptPodProps {
  title: string
  subtitle: string
  text: string
  labelOpen: string
  labelClose: string
  sentenceSplitCount: number
}
const props = withDefaults(defineProps<ExcerptPodProps>(), {
  title: '',
  subtitle: '',
  text: '',
  labelOpen: '',
  labelClose: '',
  sentenceSplitCount: 2,
})

const theme = useTheme()

// Data
const isOpen = ref(false)

// Computed
const classes = computed(() => [
  'excerpt-pod',
  theme?.value || '',
  { 'is-open': isOpen.value },
])

const dynamicLabel = computed(() =>
  isOpen.value ? props.labelOpen : props.labelClose
)

// Split text into first two sentences and the rest
const textParts = computed(() => {
  if (!props.text)
    return { truncatedText: '', remainingText: '', hasMore: false }

  // Simple sentence splitting - splits on period followed by space and capital letter
  const sentenceRegex = /\.\s+(?=[A-Z])/g
  const sentences = props.text.split(sentenceRegex)

  if (sentences.length <= props.sentenceSplitCount) {
    return {
      truncatedText: props.text,
      remainingText: '',
      hasMore: false
    }
  }

  // First X sentences
  let truncatedText = sentences.slice(0, props.sentenceSplitCount).join('. ')

  // Add period if not present
  if (!truncatedText.endsWith('.'))
    truncatedText += '.'

  // Remaining text - rejoin with periods
  const remainingText = ` ${sentences.slice(props.sentenceSplitCount).join('.')}`

  return {
    truncatedText,
    remainingText,
    hasMore: true,
  }
})

// Methods
function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div :class="classes">
    <!-- Title -->
    <h5
      class="title"
      v-html="title"
    />
    <!-- Info -->
    <div class="info">
      <h6
        class="subtitle"
        v-html="subtitle"
      />
      <div class="text-excerpt">
        <EffectSlideToggle
          :opened="isOpen"
          @click.stop="toggle"
        >
          <!-- summary -->
          <template #summary>
            <div class="summary-content">
              <span v-html="textParts.truncatedText" />
            </div>
          </template>
          <!-- content -->
          <div v-html="textParts.remainingText" />
        </EffectSlideToggle>
        <button
          v-if="textParts.hasMore"
          class="btn"
          :aria-expanded="isOpen"
          @click.stop="toggle"
        >
          <transition
            name="fade-label"
            mode="out-in"
          >
            <span
              :key="dynamicLabel"
              class="label"
              v-html="dynamicLabel"
            />
          </transition>
          <SvgArrowDown class="caret-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_excerpt-pod.scss";
</style>
