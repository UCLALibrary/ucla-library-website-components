<script setup lang="ts">
import type { PropType } from 'vue'

// COMPONENTS
import RichText from '@/lib-components/RichText.vue'

// TYPESCRPT
import type { FlexibleRichText } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleRichText>,
    default: () => { },
  },
})
</script>

<template>
  <div class="rich-text">
    <h2
      v-if="block.sectionTitle"
      class="section-title"
      v-html="block.sectionTitle"
    />

    <RichText :rich-text-content="block.content" />
  </div>
</template>

<style lang="scss" scoped>
.rich-text {
  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-xl);
  }
}
</style>
