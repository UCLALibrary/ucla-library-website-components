<!-- eslint-disable no-console -->
<script setup>
import { computed } from 'vue'
import BlockCallToAction from '@/lib-components/BlockCallToAction'

const { block } = defineProps({
  block: {
    type: Object,
    default: () => {},
  },
})

const parsedItems = computed(() => {
  console.log(block.callToAction[0])
  return block.callToAction[0]
})
</script>

<template>
  <BlockCallToAction
    class="cta-block-content-width"
    :to="parsedItems.buttonUrl"
    :name="parsedItems.buttonText"
    :title="parsedItems.titleCta"
    :text="parsedItems.summary"
    :svg-name="parsedItems.icon"
    :is-dark-blue="parsedItems.backgroundColor"
  />
</template>

<style lang="css" scoped></style>
