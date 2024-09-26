<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// COMPONENTS
import RichText from '@/lib-components/RichText.vue'

import { useTheme } from '@/composables/useTheme'

// TYPESCRPT
import type { FlexibleRichText } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleRichText>,
    default: () => { },
  },
})

const theme = useTheme()

const classes = computed(() => {
  return ['rich-text', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <h2
      v-if="block.sectionTitle"
      class="section-title"
      v-html="block.sectionTitle"
    />

    <RichText :rich-text-content="block.richText" />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_flexible-rich-text.scss";
@import "@/styles/ftva/_flexible-rich-text.scss";
</style>
