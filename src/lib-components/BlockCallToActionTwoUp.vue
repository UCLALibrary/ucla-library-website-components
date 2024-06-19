<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockCallToActionTwoUpType } from '@/types/types'
import BlockCallToAction from '@/lib-components/BlockCallToAction.vue'

const { items } = defineProps({
  items: {
    type: Array as PropType<BlockCallToActionTwoUpType[]>,
    default: () => [],
  },
})
</script>

<template>
  <section class="block-call-to-action-two-up">
    <BlockCallToAction
      v-for="(item, index) in items"
      :key="`BlockCallToActionTwoUpKey${index}`"
      :svg-name="item.svgName"
      :title="item.title"
      :text="item.text"
      :name="item.name"
      :to="item.to"
      :is-dark="item.isDark == 'true'"
      :is-small-size="true"
    />
  </section>
</template>

<style lang="scss" scoped>
.block-call-to-action-two-up {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 28px;
  margin: var(--space-2xl) auto; // When sectionWrapper component is available this can be removed and handled by sectionWrapper
  max-width: #{$container-l-cta}px;

  :deep(.block-call-to-action) {
    width: calc(50% - 14px);
  }

  @media #{$medium} {
    margin: calc(var(--unit-gutter) / 2);
    // When sectionWrapper component is available this can be removed and handled by sectionWrapper

    :deep(.button-link) {
      width: 100%;
    }
  }

  @media #{$small} {
    gap: calc(var(--unit-gutter) / 2);

    :deep(.block-call-to-action) {
      width: 100%;
    }
  }
}
</style>
