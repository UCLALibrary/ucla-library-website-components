<script>
// UTILITY FUNCTIONS
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

import { useTheme } from '@/composables/useTheme'

export default {
  name: 'RichText',
  components: {},

  props: {
    richTextContent: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return ['rich-text', theme?.value || '']
    },
    parsedContent() {
      const content = stripCraftURLFromText(this.richTextContent)

      return accessibleExternalLinks(content)
    },
  },
}

const theme = useTheme()
</script>

<template>
  <div :class="classes">
    <div
      class="parsed-content"
      v-html="parsedContent"
    />
    <slot />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/themes.scss";
</style>
