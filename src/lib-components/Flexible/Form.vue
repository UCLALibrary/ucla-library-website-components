<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { FlexibleForm } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleForm>,
    default: () => { },
  },
})

const parsedFormContent = computed(() => {
  return block.form
})
</script>

<template>
  <div class="form">
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
.form {
  width: 100%;
  height: auto;
  margin: var(--space-2xl) auto;
  max-width: $container-l-main + px;

  .content {
    border: 2px var(--color-primary-blue-01) solid;
    border-radius: 4px;
  }

  .section-header {
    margin-bottom: var(--space-xl);
  }

  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-m);
  }

  .section-summary {
    @include step-0;

    :deep(p) {
      margin: 0;
    }
  }

  .iframe {
    max-width: 928px;
    padding: 4px;
  }
}
</style>
