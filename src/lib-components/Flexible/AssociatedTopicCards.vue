<script setup>
import { computed } from 'vue'

import SectionCardsWithIllustrations from '@/lib-components/SectionCardsWithIllustrations.vue'
import stripMeapFromURI from '@/utils/stripMeapFromURI'

const { block } = defineProps({
  block: {
    type: Object,
    default: () => {},
  },
})

const parseditems = computed(() => {
  return block.associatedTopicsFlexiblePageBlock[0].topics.map(
    (obj) => {
      return {
        ...obj,
        to: obj.externalResourceUrl
          ? obj.externalResourceUrl
          : `/${stripMeapFromURI(obj.uri)}`,
      }
    }
  )
})
</script>

<template>
  <SectionCardsWithIllustrations
    v-if="block && block.associatedTopicsFlexiblePageBlock"
    :items="parseditems"
    :section-title="block.sectionTitle"
    :section-summary="block.sectionSummary"
    :is-horizontal="false"
    class="associated-topic-cards"
  />
</template>

<style lang="scss" scoped>
.associated-topic-cards {
}
</style>
