<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

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
  return ['flexible-block-info', theme?.value || '']
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
    <BlockInfo v-else-if="parsedItems.typeHandle === 'contactInfoBlock'" color-scheme="paleblue" :contact-list="parsedItems">
      <template #block-info-contact />
    </BlockInfo>
  </div>
</template>

<style lang="scss" scoped></style>
