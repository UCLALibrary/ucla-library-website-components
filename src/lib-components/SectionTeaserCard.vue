<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { BlockCardMetaType, EventItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'

const { items } = defineProps({
  items: {
    type: Array as PropType<BlockCardMetaType[] & EventItemType[]>,
    default: () => [],
  },
  sectionTitle: {
    type: String,
    required: false
  },
})
const theme = useTheme()
const classes = computed(() => {
  return ['section-teaser-card', theme?.value || '']
})
const titleClasses = computed(() => {
  return ['section-teaser-card-title', theme?.value || '']
})
</script>

<template>
  <div v-if="sectionTitle" :class="titleClasses"> {{ sectionTitle }} </div>
  <ul :class="classes" :data-header="sectionTitle ? sectionTitle : null">
    <BlockCardWithImage v-for="(item, index) in items" :key="`Card${index}`" :image="item.image" :to="item.to"
      :category="item.category" :title="item.title" :alternative-full-name="item.alternativeFullName"
      :language="item.language" :start-date="item.startDate" :end-date="item.endDate" :text="item.text"
      :image-aspect-ratio="60" :is-vertical="true" :byline-one="item.bylineOne" :byline-two="item.bylineTwo"
      :section-handle="item.sectionHandle" :ongoing="item.ongoing" class="card" />
  </ul>
</template>

<style lang="scss" scoped>
  @import "ucla-library-design-tokens/scss/_tokens-ftva";
  @import "@/styles/default/_section-teaser-card.scss";
  @import "@/styles/ftva/_section-teaser-card.scss";
</style>
