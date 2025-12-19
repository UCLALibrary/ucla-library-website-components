<script setup lang="ts">
// Imports
import { computed } from 'vue'
import SvgArrowDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import { useTheme } from '@/composables/useTheme'

// Props
interface ButtonShowDynamicProps {
  isExpanded: boolean
  labelOpen: string
  labelClose: string
  show?: boolean
  stopPropagation?: boolean
  ariaHidden?: boolean
  variant?: 'default' | 'minimal'
  transitionSpeed?: 'normal' | 'fast'
}

const props = withDefaults(defineProps<ButtonShowDynamicProps>(), {
  show: true,
  stopPropagation: false,
  ariaHidden: true,
  variant: 'default',
  transitionSpeed: 'normal',
})

// Emits
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const theme = useTheme()

// Computed
const dynamicLabel = computed(() =>
  props.isExpanded ? props.labelOpen : props.labelClose
)

const wrapperClasses = computed(() => [
  'button-show-dynamic',
  theme?.value || '',
  {
    'is-expanded': props.isExpanded,
    'transition-fast': props.transitionSpeed === 'fast',
  },
])

const buttonClasses = computed(() => [
  'btn',
  {
    'btn-minimal': props.variant === 'minimal',
  },
])

// Methods
function handleClick(e: MouseEvent) {
  if (props.stopPropagation)
    e.stopPropagation()

  emit('click', e)
}
</script>

<template>
  <div
    v-if="show"
    :class="wrapperClasses"
  >
    <button
      :class="buttonClasses"
      :aria-expanded="isExpanded"
      @click="handleClick"
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
      <SvgArrowDown
        :aria-hidden="ariaHidden"
        class="caret-icon"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-show-dynamic.scss";
</style>
