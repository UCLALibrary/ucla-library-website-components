<script
  setup
  lang="ts"
>
import { computed, defineAsyncComponent } from 'vue'

// import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import RichText from '@/lib-components/RichText.vue'
import VideoEmbed from '@/lib-components/VideoEmbed.vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'

// TYPES
import type { EventFiltersItemType, MediaItemType } from '@/types/types'

defineProps({
  count: {
    type: String,
    default: '',
  },
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

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-screening-detail', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <!-- COUNT -->
    <div
      v-if="count"
      class="count"
    >{{ count }}</div>

    <h3
      class="title-no-link"
      v-if="title"
    >
      {{ title }}

      <span
        v-if="alternativeTitle"
        :lang="language"
      >
        {{ alternativeTitle }}</span>
    </h3>

    <dl>
      <dt v-if="year">
        Year
      </dt>
      <dd v-if="year">
        {{ year }}
      </dd>
      <dt v-if="country">
        Country
      </dt>
      <dd v-if="country">
        {{ country }}
      </dd>
      <dt v-if="languageInfo">
        Language
      </dt>
      <dd v-if="languageInfo">
        {{ languageInfo }}
      </dd>
      <dt v-if="runtime">
        Runtime
      </dt>
      <dd v-if="runtime">
        {{ runtime }}
      </dd>
    </dl>

    <div
      v-if="tagLabels && tagLabels.length > 0"
      class="block-tags"
    >
      <BlockTag
        v-for="tag in tagLabels"
        :key="`tag-${tag.title}`"
        :label="tag.title"
        :is-secondary="true"
        class="tag-label"
      />
    </div>

    <RichText
      v-if="text"
      class="text"
      :rich-text-content="text"
    />

    <VideoEmbed
      v-if="trailer"
      :trailer="trailer"
      :poster-image="image"
    />

    <divider-way-finder class="divider" />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/themes.scss";
</style>
