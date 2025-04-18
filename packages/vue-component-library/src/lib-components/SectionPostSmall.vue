<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'

// COMPONENTS
import BlockPostSmall from '@/lib-components/BlockPostSmall.vue'

// UTILS

// THEME
import { useTheme } from '@/composables/useTheme'

// TYPES
interface PostSmallItemType {
  image: MediaItemType
  categoryName: string
  author: string
  title: string
  to: string
}

const { items, sectionTitle, sectionSummary } = defineProps({
  items: {
    type: Array as PropType<PostSmallItemType[]>,
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

// THEME & SECTION COLOR
const theme = useTheme()

const classes = computed(() => [
  'section-post-small',
  theme?.value || '',
])
</script>

<template>
  <section :class="classes">
    <div class="grid">
      <div
        v-if="sectionTitle || sectionSummary"
        class="section-header"
      >
        <h2
          v-if="sectionTitle"
          id="cards-with-illustration-title"
          class="section-title"
          v-html="sectionTitle"
        />
        <div
          v-if="sectionSummary"
          class="section-summary"
          v-html="sectionSummary"
        />
      </div>

      <BlockPostSmall
        v-for="item in items"
        :key="`block-post-${item.title || item.to}`"
        :image="item.image"
        :to="item.to"
        class="block"
      >
        <template
          v-if="item.categoryName"
          #category
        >
          <div class="category">
            {{ item.categoryName }}
          </div>
        </template>

        <template
          v-if="item.title"
          #title
        >
          <h3 class="title">
            {{ item.title }}
          </h3>
        </template>

        <template
          v-if="item.author"
          #author
        >
          <div class="author">
            {{ item.author }}
          </div>
        </template>
      </BlockPostSmall>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_section-post-small.scss";
@import "@/styles/ftva/_section-post-small.scss";
</style>
