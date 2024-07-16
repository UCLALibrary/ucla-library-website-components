<script
  setup
  lang="ts"
>
import { computed, defineAsyncComponent } from 'vue'

//import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import RichText from '@/lib-components/RichText.vue'
import VideoEmbed from '@/lib-components/VideoEmbed.vue'
// TYPES
import type { EventFiltersItemType, MediaItemType } from '@/types/types'

const { props } = defineProps({

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
  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  trailer: {
    type: String,
    default: '',
  },
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
})

const BlockTag = defineAsyncComponent(() => import('@/lib-components/BlockTag.vue'))

// const route = useRoute()

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-screening-detail', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <!-- COUNT -->
    <slot />

    <h3 class="title-no-link">
      {{ title }}

      <span
        v-if="alternativeTitle"
        :lang="language"
      >
        {{ alternativeTitle }}</span>
    </h3>

    <!-- Screening Details -->
    <table
      v-if="year || country || language || runtime"
      class="definition-list"
    >
      <tbody>
        <tr>
          <th
            scope="row"
            v-if="year"
            class="detail-key"
          >Year</th>
          <td
            v-if="year"
            class="definition-item"
            v-html="year"
          />
        </tr>

        <tr>
          <th
            scope="row"
            v-if="country"
            class="detail-key"
          >Country</th>
          <td
            v-if="country"
            class="definition-item"
            v-html="country"
          />
        </tr>

        <tr>
          <th
            scope="row"
            v-if="languageInfo"
            class="detail-key"
          >Language</th>
          <td
            v-if="languageInfo"
            class="definition-item"
            v-html="languageInfo"
          />
        </tr>

        <tr>
          <th
            scope="row"
            v-if="runtime"
            class="detail-key"
          >Runtime</th>
          <td
            v-if="runtime"
            class="definition-item"
            v-html="runtime"
          />
        </tr>
      </tbody>
    </table>

    <div
      v-if="tagLabels && tagLabels.length > 0"
      class="block-tags"
    >
      <BlockTag
        v-for="tag in tagLabels"
        :key="`tag-${tag.title}`"
        :label="tag.title"
        :isSecondary="true"
        class="tag-label"
      />
    </div>

    <RichText
      v-if="text"
      class="text"
      :rich-text-content="text"
    />

    <VideoEmbed
      :trailer="trailer"
      :posterImage="image"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/themes.scss";
</style>
