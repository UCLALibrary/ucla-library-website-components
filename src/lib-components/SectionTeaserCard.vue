<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'
import IconFTVAVideo from 'ucla-library-design-tokens/assets/svgs/icon-ftva-video.svg'
import type { BlockCardMetaType, CollectionItemType, EventItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'

const { items } = defineProps({
  items: {
    type: Array as PropType<BlockCardMetaType[] & EventItemType[] & CollectionItemType[]>,
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

const parsedAspectRatio = computed(() => {
  if (items[0].sectionHandle === 'ftvaItemInCollection')
    return 75

  return 60
})

const currentTheme = computed(() => {
  return theme?.value || ''
})
</script>

<template>
  <ul :class="classes" :data-header="sectionTitle ? sectionTitle : null">
    <BlockCardWithImage
      v-for="(item, index) in items" :key="`Card${index}`" :image="item.image" :to="item.to"
      :category="item.category" :title="item.title" :alternative-full-name="item.alternativeFullName"
      :language="item.language" :start-date="item.startDate" :end-date="item.endDate" :text="item.text"
      :image-aspect-ratio="parsedAspectRatio" :is-vertical="true" :byline-one="item.bylineOne" :byline-two="item.bylineTwo"
      :section-handle="item.sectionHandle" :ongoing="item.ongoing"
      :date-created="currentTheme === 'ftva' ? item.postDate : ''" class="card"
    >
      <template v-if="item.videoEmbed && item.videoEmbed !== null" #toptext>
        <BlockTag>
          <IconFTVAVideo class="white-icon" />
        </BlockTag>
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
