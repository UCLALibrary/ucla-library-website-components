<script setup lang="ts">
import { computed } from 'vue'
import type { MediaItemType } from '@/types/types'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import Button from '@/lib-components/Button.vue'
import ButtonIiif from '@/lib-components/ButtonIiif.vue'
import { ButtonVariant } from '@/types/components/button.types'
import { useTheme } from '@/composables/useTheme'

defineProps<MetaDataTableProps>()

const theme = useTheme()

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
      to?: string
      isDownload?: boolean
      copyOnClick?: boolean
    }>
    image?: MediaItemType
    showButtonIiif?: boolean
    buttonIiifTo?: string
  }>
}

const classes = computed(() => (['metadata-table', theme?.value || '']))

// Functions
function handleButtonClick(button: any) {
  if (button.copyOnClick) {
    // Copy current URL to clipboard
    if (typeof window !== 'undefined' && window.location) {
      navigator.clipboard.writeText(window.location.href)
        .catch((err) => {
          console.error('Failed to copy URL:', err)
        })
    }
  }
}
</script>

<template>
  <div :class="classes">
    <h3
      class="title"
      v-html="title"
    />
    <ul class="items">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list-item"
      >
        <span
          class="label"
          v-html="item.label"
        />
        <div class="values">
          <!-- Buttons -->
          <template v-if="Array.isArray(item.value)">
            <div class="buttons">
              <ButtonIiif
                v-if="item.showButtonIiif && item.buttonIiifTo"
                :to="item.buttonIiifTo"
              />
              <div class="action-buttons">
                <Button
                  v-for="(button, btnIdx) in item.value"
                  :key="btnIdx"
                  :text="button.label"
                  :variant="button.variant || ButtonVariant.Secondary"
                  :is-outlined="button.isOutlined ?? true"
                  :to="button.to"
                  :is-download="button.isDownload"
                  @click="handleButtonClick(button)"
                />
              </div>
            </div>
          </template>

          <template v-else-if="typeof item.value === 'object' && item.value !== null">
            <template v-if="item.image">
              <ResponsiveImage
                class="icon"
                :media="item.image"
                object-fit="cover"
              />
            </template>
            <template v-if="'href' in item.value && item.value.href && !item.image">
              <SmartLink
                class="link value"
                :to="item.value.href"
              >
                <span v-html="item.value.text" />
              </SmartLink>
            </template>
            <template v-else-if="'href' in item.value && item.value.href && item.image">
              <SmartLink
                class="link value"
                :to="item.value.href"
              >
                <span v-html="item.value.text" />
              </SmartLink>
            </template>
            <template v-else-if="item.image && 'text' in item.value && item.value.text">
              <span
                class="value"
                v-html="item.value.text"
              />
            </template>
            <template v-else-if="'text' in item.value && item.value.text">
              <span
                class="value"
                v-html="item.value.text"
              />
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
