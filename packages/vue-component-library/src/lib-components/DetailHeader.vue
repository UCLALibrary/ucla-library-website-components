<script setup lang="ts">
// Imports
import SvgIconArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import { computed } from 'vue'
import Button from './Button.vue'
import DividerGeneral from './DividerGeneral.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { ButtonColor } from '@/types/components/button.types'
import { formatNumber } from '@/utils/formatNumber.ts'
import { pluralize } from '@/utils/pluralize.ts'
import { useTheme } from '@/composables/useTheme'

// Props
const props = withDefaults(defineProps<DetailHeaderProps>(), {
  showDivider: false,
})

const theme = useTheme()

// Types
interface DetailHeaderProps {
  totalResults?: number
  tag: {
    name: string
    value: {
      label: string
      to: string
    }
  }
  previousTo?: string
  nextTo?: string
  backTo?: string
  showDivider?: boolean
}

// Computeds
const classes = computed(() => [
  'detail-header',
  theme?.value || '',
  { 'has-divider': props.showDivider },
])
</script>

<template>
  <div :class="classes">
    <div class="top-container">
      <div class="left">
        <div class="prev-next-container">
          <SmartLink
            v-if="previousTo"
            :to="previousTo"
            class="previous"
          >
            <SvgIconArrowRight class="previous-svg" />
            <div class="underline-hover">
              Previous
            </div>
          </SmartLink>

          <div v-if="previousTo && nextTo" class="divider-vertical" />

          <SmartLink v-if="nextTo" :to="nextTo" class="next">
            <div class="underline-hover">
              Next
            </div>
            <SvgIconArrowRight class="next-svg" />
          </SmartLink>

          <div
            v-if="typeof totalResults === 'number'"
            class="results-number"
          >
            {{
              `${formatNumber(totalResults)} ${pluralize(
                totalResults,
                "result",
              )}`
            }}
          </div>
        </div>

        <div v-if="tag?.name" class="tag">
          <span class="tag-name">{{ tag.name }}:</span>
          <SmartLink :to="tag?.value?.to" class="tag-value">
            {{ tag?.value?.label }}
          </SmartLink>
        </div>
      </div>

      <div class="right">
        <Button
          v-if="backTo"
          :to="backTo"
          class="back-button"
          :color="ButtonColor.Grey"
          text="Back to Search Results"
        />
      </div>
    </div>

    <DividerGeneral
      v-if="showDivider"
      :is-tertiary="true"
      class="divider-general"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_detail-header.scss";
</style>
