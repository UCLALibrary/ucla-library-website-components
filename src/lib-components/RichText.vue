<script>
// UTILITY FUNCTIONS
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

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
    parsedContent() {
      const content = stripCraftURLFromText(this.richTextContent)

      return accessibleExternalLinks(content)
    },
  },
}
</script>

<template>
  <div class="rich-text">
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
