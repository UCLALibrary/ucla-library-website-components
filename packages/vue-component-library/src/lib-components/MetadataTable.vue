<script setup lang="ts">
import type { MediaItemType } from '@/types/types'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import Button from '@/lib-components/Button.vue'
import { ButtonVariant } from '@/types/components/button.types'

// Props
interface MetaDataTableProps {
  title: string
  items: Array<{
    label: string
    value:
    | { text: string; href?: string }
    | Array<{
      label: string
      variant?: ButtonVariant
      isOutlined?: boolean
      onClick?: () => void
    }>
    image?: MediaItemType
  }>
}
defineProps<MetaDataTableProps>()

// Methods
function handleDownload() {
  // Handle download functionality
  console.log('Download clicked')
}

function handleCopyUrl() {
  // Handle copy URL functionality
  console.log('Copy URL clicked')
}

function handleCustomAction(button: any) {
  // Handle custom button actions
  console.log('Custom action clicked:', button)
}
</script>

<template>
  <div class="metadata-table">
    <h3 class="title" v-html="title" />
    <ul class="items">
      <li v-for="(item, index) in items" :key="index" class="list-item">
        <span class="label" v-html="item.label" />
        <div class="values">
          <template v-if="Array.isArray(item.value)">
            <div class="buttons">
              <Button v-for="(button, btnIdx) in item.value" :key="btnIdx" :text="button.label"
                :variant="button.variant || ButtonVariant.Secondary" :is-outlined="button.isOutlined ?? true"
                @click="button.onClick ? button.onClick : () => { }" />
            </div>
          </template>
          <template v-else-if="typeof item.value === 'object' && item.value !== null">
            <template v-if="item.image">
              <ResponsiveImage class="icon" :media="item.image" object-fit="cover" />
            </template>
            <template v-if="'href' in item.value && item.value.href && !item.image">
              <SmartLink class="link value" :to="item.value.href">
                <span v-html="item.value.text" />
              </SmartLink>
            </template>
            <template v-else-if="'href' in item.value && item.value.href && item.image">
              <SmartLink class="link value" :to="item.value.href">
                <span v-html="item.value.text" />
              </SmartLink>
            </template>
            <template v-else-if="item.image && 'text' in item.value && item.value.text">
              <span class="value" v-html="item.value.text" />
            </template>
            <template v-else-if="'text' in item.value && item.value.text">
              <span class="value" v-html="item.value.text" />
            </template>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_metadata-table.scss";
</style>
