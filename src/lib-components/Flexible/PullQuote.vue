<script setup lang="ts">
import type { PropType } from 'vue'
import type { FlexiblePullQuote } from '@/types/flexible_types'

// COMPONENTS
import PullQuote from '@/lib-components/PullQuote.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexiblePullQuote>,
    default: () => { },
  },
})
</script>

<template>
  <PullQuote
    v-if="block.content"
    :text="block.content[0].text"
    :attribution="block.content[0].attribution"
  />
</template>

<style lang="scss" scoped>
.pull-quote {
  &.flexible-block {
    margin: var(--unit-gutter) auto;
    padding: 0 var(--unit-gutter);
    max-width: $container-l-main + px;

    @media #{$medium} {
      margin: var(--unit-gutter);
    }
  }
}
</style>
