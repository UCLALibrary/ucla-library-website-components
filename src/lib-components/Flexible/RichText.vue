<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

import type RichText from "@/types/flexible_types"

// COMPONENTS
import RichText from '@/lib-components/RichText.vue'


const { block } = defineProps({
  block: {
    type: Object,
    default: () => { },
  },
})

const parsedContent = computed(() => {
  const block = []
  return this.block.richText
})

// computed: {
//   parsedContent() {
//     return this.block.richText
//   },
// },

</script>

<template>
  <div class="rich-text">
    <h2
      v-if="block.sectionTitle"
      class="section-title"
      v-html="block.sectionTitle"
    />

    <RichText :rich-text-content="parsedContent" />
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
