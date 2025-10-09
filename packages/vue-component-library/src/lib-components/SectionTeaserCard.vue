<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'
import IconFTVAVideo from 'ucla-library-design-tokens/assets/svgs/icon-ftva-video.svg'
import IconFTVAWatchOnline from 'ucla-library-design-tokens/assets/svgs/icon-ftva-watch_online.svg'
import type { BlockCardMetaType, CollectionItemType, EventItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'

const { items, gridLayout, sectionTitle } = defineProps({
  items: {
    type: Array as PropType<BlockCardMetaType[] & EventItemType[] & CollectionItemType[]>,
    default: () => [],
  },
  sectionTitle: {
    type: String,
    required: false
  },
  gridLayout: {
    type: Boolean,
    default: true
  }
})

const theme = useTheme()

const classes = computed(() => {
  return ['section-teaser-card', theme?.value || '', { 'no-grid-layout': !gridLayout }]
})

const parsedAspectRatio = computed(() => {
  if (items[0].sectionHandle === 'ftvaItemInCollection')
    return 75

  return 60
})

const currentTheme = computed(() => {
  return theme?.value || ''
})

interface CardItem {
  sectionHandle?: string
  ftvaDate?: string
  postDate?: string
  releaseDate?: string
  episodeAirDate?: string
}

function parseCardItemDate(item: CardItem) {
  if (currentTheme.value === 'ftva') {
    if (item.sectionHandle === 'ftvaItemInCollection') {
      if (item.ftvaDate)
        return item.ftvaDate
      else if (item.episodeAirDate)
        return item.episodeAirDate
      else if (item.releaseDate)
        return item.releaseDate
    }

    else {
      return item.postDate
    }
  }

  return ''
}
</script>

<template>
  <ul :class="classes" :data-header="sectionTitle ? sectionTitle : null">
    <BlockCardWithImage
      v-for="(item, index) in items"
      :key="`Card${index}`"
      :image="item.image"
      :to="item.to"
      :category="item.category"
      :title="item.title"
      :alternative-full-name="item.alternativeFullName"
      :language="item.language"
      :start-date="item.startDate"
      :end-date="item.endDate" :text="item.text"
      :image-aspect-ratio="parsedAspectRatio"
      :is-vertical="true" :byline-one="item.bylineOne"
      :byline-two="item.bylineTwo"
      :section-handle="item.sectionHandle"
      :ongoing="item.ongoing"
      :date-created="parseCardItemDate(item)"
      class="card"
    >
      <template #toptext>
        <BlockTag v-if="item.videoEmbed && item.videoEmbed !== null">
          <IconFTVAVideo class="white-icon" />
        </BlockTag>
        <IconFTVAWatchOnline v-if="item.ftvaCollectionType && item.ftvaCollectionType.includes('watchAndListenOnline')" />
      </template>
    </BlockCardWithImage>
  </ul>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_section-teaser-card.scss";
@import "@/styles/ftva/_section-teaser-card.scss";
</style>
