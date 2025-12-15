<script setup lang="ts">
import { computed } from 'vue'
import type { MetadataTableProps } from '@/types/components/metadata-table.types'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import RichText from '@/lib-components/RichText.vue'
import Button from '@/lib-components/Button.vue'
import ButtonIiif from '@/lib-components/ButtonIiif.vue'
import { ButtonVariant } from '@/types/components/button.types'
import { useTheme } from '@/composables/useTheme'

// Props
defineProps<MetadataTableProps>()

const theme = useTheme()

const classes = computed(() => ['metadata-table', theme?.value || ''])

// Helper functions
function hasHref(value: { text: string; href?: string }): boolean {
  return 'href' in value && !!value.href
}

function hasText(value: { text: string; href?: string }): boolean {
  return 'text' in value && !!value.text
}

function containsHtml(text: string): boolean {
  // Simple check for HTML tags
  return /<[a-z][\s\S]*>/i.test(text)
}

// Functions
function handleButtonClick(button: any) {
  if (button.copyOnClick) {
    // Copy current URL to clipboard
    if (typeof window !== 'undefined' && window.location) {
      navigator.clipboard.writeText(window.location.href).catch((err) => {
        console.error('Failed to copy URL:', err)
      })
    }
  }
}
</script>

<template>
  <div :class="classes">
    <h3 class="title">
      {{ title }}
    </h3>
    <ul class="items">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list-item"
      >
        <span class="label">
          {{ item.label }}
        </span>
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
                  :variant="button.variant
                    || ButtonVariant.Secondary
                    "
                  :is-outlined="button.isOutlined ?? true"
                  :to="button.to"
                  :is-download="button.isDownload"
                  @click="handleButtonClick(button)"
                />
              </div>
            </div>
          </template>

          <template v-else-if="
            typeof item.value === 'object'
            && item.value !== null
          ">
            <template v-if="item.image">
              <ResponsiveImage
                class="icon"
                :media="item.image"
                object-fit="cover"
              />
            </template>
            <template v-if="hasHref(item.value)">
              <SmartLink
                class="link value"
                :to="item.value.href"
              >
                <RichText
                  v-if="hasText(item.value) && containsHtml(item.value.text)"
                  :rich-text-content="item.value.text"
                />
                <span
                  v-else-if="hasText(item.value)"
                  class="value"
                >
                  {{ item.value.text }}
                </span>
              </SmartLink>
            </template>
            <template v-else-if="hasText(item.value)">
              <RichText
                v-if="containsHtml(item.value.text)"
                :rich-text-content="item.value.text"
                class="value"
              />
              <span
                v-else
                class="value"
              >
                {{ item.value.text }}
              </span>
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
