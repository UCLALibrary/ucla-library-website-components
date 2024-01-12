<script setup lang="ts">
import type { PropType } from 'vue'
import type { EventItemType } from '@/types/types'

import ButtonMore from '@/lib-components/ButtonMore.vue'
import BlockEvent from '@/lib-components/BlockEvent.vue'

import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

const { items, to, text } = defineProps({
  items: {
    type: Array as PropType<EventItemType[]>,
    default: () => [],
  },
  to: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: 'See More',
  }
})
</script>

<template>
  <section class="section-dual-masonry">
    <div class="masonry">
      <BlockEvent
        v-for="item in items"
        :key="item.to"
        :title="item.title"
        :category="item.category"
        :start-date="item.startDate"
        :end-date="item.endDate"
        :prompt="item.prompt"
        :to="item.to"
        :section-handle="item.sectionHandle"
        class="brick"
      />

      <SmartLink
        v-for="item in items"
        :key="`image-${item.to}`"
        :to="item.to"
        class="brick brick-image"
      >
        <ResponsiveImage :media="item.image" :aspect-ratio="100" />
      </SmartLink>
    </div>
    <SmartLink class="more" :to="to">
      <ButtonMore :text="text" />
    </SmartLink>
  </section>
</template>

<style lang="scss" scoped>
.section-dual-masonry {
  .more {
      padding: 0;
  }
  .masonry {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;

      max-width: $container-l-main + px;
      margin: 0 auto;
  }

  .brick {
      width: 50%;
      margin: 0;
      border: 8px solid white;
      &:nth-child(1) {
          order: 1;
          border-left: 0;
          :deep() {
              .molecule {
                  transform: rotate(180deg);
              }
          }
      }
      &:nth-child(2) {
          order: 4;
          border-right: 0;
          // Half of 37.5
          margin-top: calc(-19.1% + 6.5px);
          :deep() {
              .molecule {
                  bottom: 0;
                  top: auto;
              }
              .text {
                  top: 0;
                  bottom: auto;
              }
          }
      }
      &:nth-child(3) {
          order: 2;
          border-right: 0;
      }
      &:nth-child(4) {
          order: 3;
          border-left: 0;
      }
  }

  .more {
      display: block;
      margin: var(--space-2xl) auto 0 auto;
      width: max-content;
  }

  // Breakpoints
  @media #{$small} {
      flex-direction: column;
      flex-wrap: nowrap;
      .brick {
          width: 100%;
          border: 0;

          &:nth-child(1) {
              order: 1;
          }
          &:nth-child(2) {
              order: 3;
              margin-top: 0;
          }
          &:nth-child(3) {
              order: 2;
          }
          &:nth-child(4) {
              order: 4;
          }
      }
  }
}
</style>
