<script lang="ts" setup>
import { computed } from 'vue'

import type { PropType } from 'vue'

import BlockSimpleCard from '@/lib-components/BlockSimpleCard.vue'

import { useTheme } from '@/composables/useTheme'

import type { CardItemType } from '@/types/types'

const { items, sectionTitle, sectionSummary } = defineProps({
  items: {
    type: Array as PropType<CardItemType[]>,
    default: () => [],
  },
  sectionTitle: {
    type: String,
    default: '',
  },
  sectionSummary: {
    type: String,
    default: '',
  },
})

const parsedContent = computed (() => {
  let output = ['card', 'card-small']
  switch (items.length) {
    case 1:
      output = ['card']
      break
    case 2:
    case 4:
      output = ['card', 'card-large']
      break
    case 5:
      output = ['card', 'card-five']
      break
  }

  return items.map((obj) => {
    return {
      ...obj,
      classes: output,
    }
  })
})

const theme = useTheme()
const classes = computed(() => {
  return ['simple-cards', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="section-header">
      <h2
        v-if="sectionTitle"
        class="section-title"
        v-text="sectionTitle"
      />
      <div
        v-if="sectionSummary"
        class="section-summary"
        v-html="sectionSummary"
      />
    </div>

    <ul class="simple-cards-list">
      <BlockSimpleCard
        v-for="(item, index) in parsedContent"
        :key="`SimpleCardsKey${index}`"
        :class="item.classes"
        :to="item.to"
        :title="item.title"
        :text="item.text"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_simple-cards.scss";
@import "@/styles/ftva/_simple-cards.scss";
</style>
