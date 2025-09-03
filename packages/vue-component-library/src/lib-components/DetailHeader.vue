<script setup lang="ts">
// Imports
import SvgIconArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import Button from './Button.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { ButtonColor } from '@/types/components/button.types'
import { formatNumber } from '@/utils/formatNumber.ts'
import { pluralize } from '@/utils/pluralize.ts'

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
}

// Props
const props = defineProps<DetailHeaderProps>()
</script>

<template>
  <div class="detail-header">
    <div class="left">
      <div class="prev-next-container">
        <SmartLink v-if="previousTo" :to="previousTo" class="previous">
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
            `${formatNumber(totalResults)
            } ${
              pluralize(totalResults, "result")}`
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
        v-if="props.backTo"
        :to="props.backTo"
        class="back-button"
        :color="ButtonColor.Grey"
        text="Back to Search Results"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_detail-header.scss";
</style>
