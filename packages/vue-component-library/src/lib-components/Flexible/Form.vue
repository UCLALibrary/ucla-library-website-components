<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { FlexibleForm } from '@/types/flexible_types'
import { useTheme } from '@/composables/useTheme'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleForm>,
    default: () => { },
  },
})

const parsedFormContent = computed(() => {
  return block.form
})

// THEME
const theme = useTheme()
const parsedClasses = computed(() => {
  return ['form', theme?.value || '']
})
</script>

<template>
  <div :class="parsedClasses">
    <div class="section-header">
      <h2
        v-if="block.sectionTitle"
        class="section-title"
        v-html="block.sectionTitle"
      />
      <div
        v-if="block.sectionSummary"
        class="section-summary"
        v-html="block.sectionSummary"
      />
    </div>

    <div class="content">
      <iframe
        id="the-iframe"
        title="Form"
        refs="form_iframe"
        class="iframe"
        :srcdoc="parsedFormContent"
        frameBorder="0"
        width="100%"
        height="100%"
        onload="this.width=screen.width;this.height=screen.height;"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/default/_block-form.scss";
@use "@/styles/ftva/_block-form.scss";
</style>
