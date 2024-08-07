<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

import SvgExternalLink from 'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
import SmartLink from '../../SmartLink.vue'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'
import SectionHeader from '@/lib-components/SectionHeader.vue'
import MediaItem from '@/lib-components/Media/Item.vue'

import type { MediaItemType } from '@/types/types'
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

const props = defineProps({
  item: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
  coverImage: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
  embedCode: {
    type: String,
    default: '',
  },
  captionTitle: {
    type: String,
    default: '',
  },
  captionText: {
    type: String,
    default: '',
  },
  credit: {
    type: String,
    default: '',
  },
  linkUrl: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
})

const thumbnailImage = computed(() => {
  // returns an array of objects that can be v-bound to <img> tags. Currently MediaItem only uses the first but in the future we might combine them all with <picture> and <source>, allowing the browser to chooose among versions
  return (props.coverImage || []) // replace null & undefined with empty array
    .concat(props.item || []) // add item to use if there's no coverImage
    .filter(item => item.kind === 'image') // only keep "image" items
})

const parsedText = computed(() => {
  return removeHtmlTruncate(props.captionText || props.credit || '')
})
</script>

<template>
  <SectionWrapper class="thumbnail-card" :no-margins="true">
    <MediaItem
      :item="thumbnailImage"
      :aspect-ratio="60"
      class="image"
      object-fit="cover"
    />
    <SectionHeader class="caption-title" v-text="captionTitle" />
    <p v-if="parsedText" class="caption-text">
      {{ parsedText }}
    </p>
    <SmartLink
      v-if="linkUrl && linkText"
      :to="linkUrl"
      class="caption-link"
    >
      {{ linkText }}
      <SvgExternalLink />
    </SmartLink>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
.thumbnail-card {
  width: 100%;

  .image {
      margin-bottom: var(--space-s);
  }

  .caption-title {
      @include step-1;
      color: #{$black};
      margin-bottom: var(--space-xs);
  }

  .caption-text {
      @include step-0;
      color: #{$secondary-grey-05};
      @include truncate($lines: 4);
  }

  .caption-link {
      @include button;
      margin-top: 10px;
      padding: 0;

      // /* identical to box height, or 22px */
      display: flex;
      align-items: center;

      // /* primary/blue-03 */
      color: $primary-blue-03;
  }
}
</style>
