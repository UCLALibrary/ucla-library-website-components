<script
  lang="ts"
  setup
>
// import { computed } from 'vue'
import type { PropType } from 'vue'

// COMPONENTS
import BlockTag from './BlockTag.vue'
// import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
// import ResponsiveVideo from '@/lib-components/ResponsiveVideo.vue'

const props = defineProps({
  screeningTitle
  alternateTitle
  languageTranslated
  year
  country
  languageInfo
  runtime
  screeningTags {
  title
}
  descriptionOfScreening
  trailer
  media

  title: {
  type: String,
  default: '',
},
  alternativeTitle: {
  type: String,
  default: '',
},
  language: {
  type: String,
  default: '',
},
  year: {
  type: String,
  default: '',
},
  country: {
  type: String,
  default: '',
},
  languageInfo: {
  type: String,
  default: '',
},
  runtime: {
  type: String,
  default: '',
},
  text: {
  type: String,
  default: '',
},
  screeningTags: {
  type: Array as PropType<DepartmentItemType[]>,
  default: () => [],
},
})

</script>

<template>
  <div class="block-screening-detail">
    <RichText
      v-if="text"
      class="text"
      :rich-text-content="text"
    />

    <block-tag
      :label="label"
      isSecondary="true"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
.block-screening-detail {

  display: flex;
  flex-direction: column;

  //.title {}

  .text {
    @include step-0;
    color: var(--color-black);
    @include truncate(4);
    margin-left: initial;
    margin-right: initial;
  }

  // Hovers
  @media #{$has-hover} {}
}
</style>
