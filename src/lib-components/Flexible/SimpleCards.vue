<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

// COMPONENTS
import _get from 'lodash/get'
import SimpleCards from '@/lib-components/SimpleCards.vue'

// TYPESCRPT
import type { FlexibleSimpleCards } from '@/types/flexible_types'

// UTILS
import stripMeapFromURI from '@/utils/stripMeapFromURI'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleSimpleCards>,
    default: () => { },
  },
})

const parsedContent = computed(() => {
  return block.cards.map((card) => {
    if (
      (card.typeHandle === 'internalResource'
        || card.typeHandle === 'internalServiceOrResource')
      && card.contentLink[0]
    ) {
      return {
        title: _get(card, 'contentLink[0].title', ''),
        text: _get(card, 'contentLink[0].summary', ''),
        to: card.contentLink[0].externalResourceUrl
          ? card.contentLink[0].externalResourceUrl
          : `/${stripMeapFromURI(
            card.contentLink[0].uri
          )}`,
      }
    }
    else if (
      card.typeHandle === 'externalResource'
      || card.typeHandle === 'externalServiceOrResource'
    ) {
      return {
        title: card.title,
        text: card.summary,
        to: card.externalLink,
      }
    }
    else {
      return {
        ...card,
      }
    }
  })
})
</script>

<template>
  <div class="flexible-simple-cards">
    <SimpleCards
      :section-title="block.sectionTitle"
      :section-summary="block.sectionSummary"
      :items="parsedContent"
    />
  </div>
</template>
