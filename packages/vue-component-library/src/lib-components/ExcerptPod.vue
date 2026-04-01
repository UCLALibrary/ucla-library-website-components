<script setup lang="ts">
// Imports
import { computed, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import EffectSlideToggle from '@/lib-components/EffectSlideToggle.vue'
import ButtonShowDynamic from '@/lib-components/ButtonShowDynamic.vue'

// Props
interface ExcerptPodProps {
  title: string
  subtitle: string
  text: string
  labelOpen: string
  labelClose: string
  sentenceSplitCount: number
}
withDefaults(defineProps<ExcerptPodProps>(), {
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
              <!-- <span v-html="textParts.truncatedText" />  -->
              <slot />
            </div>
          </template>
          <!-- content -->
          <!-- <div v-html="textParts.remainingText" /> -->
          <slot name="content" />
        </EffectSlideToggle>
        <ButtonShowDynamic
          :is-expanded="isOpen"
          :label-open="labelOpen"
          :label-close="labelClose"
          :show="!!$slots.content"
          :stop-propagation="true"
          :aria-hidden="false"
          variant="minimal"
          transition-speed="fast"
          @click="toggle"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_excerpt-pod.scss";
</style>
