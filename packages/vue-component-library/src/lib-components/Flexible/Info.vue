<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

import RichText from '@/lib-components/RichText.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import BlockCallToAction from '@/lib-components/BlockCallToAction.vue'
import BlockInfo from '@/lib-components/BlockInfo.vue'

import { useTheme } from '@/composables/useTheme'

interface infoBlock {
  typeHandle: string
  id: string
  icon?: string
  heading?: string
  text?: string
  email?: string
  phone?: string
  address?: string
}

interface FlexibleInfoBlock {
  id: string
  typeHandle: string
  infoBlock: infoBlock[]
}

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleInfoBlock>,
    default: () => { },
  },
})

const parsedItems = computed(() => {
  return block.infoBlock[0]
})

const theme = useTheme()

const classes = computed(() => {
  return ['flexible-info', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <BlockCallToAction
      v-if="parsedItems.typeHandle === 'infoBlock'"
      :title="parsedItems.heading"
      :text="parsedItems.text"
      :svg-name="parsedItems.icon"
      :is-centered="false"
    />
    <BlockInfo v-else-if="parsedItems.typeHandle === 'contactInfoBlock'" color-scheme="paleblue">
      <template #block-info-mid>
        <ul class="contact-info">
          <li>
            <IconWithLink
              :text="parsedItems.phone || ''"
              icon-name="svg-icon-ftva-phone"
              :to="parsedItems.phone"
            />
          </li>
          <li>
            <IconWithLink
              :text="parsedItems.email || ''"
              icon-name="svg-icon-ftva-email"
              :to="parsedItems.email"
            />
          </li>
          <li class="info-address">
            <IconWithLink
              icon-name="svg-icon-ftva-location-outline"
              text=""
            />
            <RichText :rich-text-content="parsedItems.address" />
          </li>
        </ul>
      </template>
    </BlockInfo>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/ftva/_flexible-info.scss";
</style>
