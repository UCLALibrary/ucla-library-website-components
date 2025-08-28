<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import BlockMediaWithText from '@/lib-components/BlockMediaWithText.vue'
import DividerGeneral from '@/lib-components/DividerGeneral.vue'

// TYPESCRPT
import type { FlexibleMediaWithText } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleMediaWithText>,
    default: () => { },
  }
})

const parsedContent = computed(() => {
  const mediaWithText = block.mediaWithText
  return mediaWithText.map((obj) => {
    return {
      ...obj,
      // mediaWithText_mediaEmbed or mediaWithText_mediaUpload
      parsedTitle: obj.titleLink
        ? obj.titleLink
        : obj.titleUpload,
      // item: upload
      // item[0].src & buttonUrl can return as null - neither are required
      parsedButtonUrl:
        obj.item && obj.typeMedia === 'other'
          ? obj.item[0]?.src
          : obj.buttonUrl,
    }
  })
})

const theme = useTheme()

const classes = computed(() => {
  return ['section-media-with-text', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="flexible-page-block-container">
      <h2 class="visually-hidden">
        Resources
      </h2>
      <div class="section-header">
        <h3
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

      <div
        v-for="(item, index) in parsedContent"
        :key="`MediaWithTextKey${index}`"
        class="meta"
      >
        <BlockMediaWithText
          :section-header="item.parsedTitle"
          :short-description="item.description"
          :item="item.item"
          :cover-image="item.coverImage"
          :button-text="item.buttonText"
          :button-url="item.parsedButtonUrl"
          :embed-code="item.embedCode"
          :type-media="item.typeMedia"
          class="flexible-media-with-text"
        />

        <DividerGeneral v-if="theme !== 'ftva'" class="divider" />
      </div>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_flexible-media-with-text.scss";
@import "@/styles/ftva/_flexible-media-with-text.scss";
</style>
