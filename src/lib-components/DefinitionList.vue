<script lang="ts" setup>
/* eslint-disable vue/define-macros-order */
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// Define type for orientation to prevent unknown strings
const Orientations = {
  Vertical: 'vertical',
  Horizontal: 'horizontal'
} as const
type OrientationType = typeof Orientations[keyof typeof Orientations]

const { metaDataObject, orientation } = defineProps({
  metaDataObject: {
    type: Object,
    default: () => {}
  },
  // switch CSS styling between vertical or horizontal layout
  orientation: {
    type: String as PropType<OrientationType>,
    default: 'vertical'
  },
})

// loops through keys in an object and converts them to strings based on type
function parsedValue(value: any): string {
  if (typeof value === 'string') {
    return value
  }
  else if (Array.isArray(value)) {
    return value.map((item) => {
      return parsedValue(item)
    }).join('\r\n')
  }
  else if (typeof value === 'object') {
    return Object.keys(value).map((key) => {
      return `${key}: ${value[key]}`
    }).join(', ')
  }
  else {
    return value
  }
}

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['definition-list', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div v-if="$slots['list-top']" class="list-top-wrapper">
      <slot name="list-top" />
    </div>
    <dl class="definition-list-wrapper">
      <div
        v-for="(value, key) in metaDataObject" :key="key" class="definition-list-item-wrapper"
        :class="orientation"
      >
        <dt>
          <slot :name="`term-${key}`">
            <!-- converts camelCase variables to sentences with spaces -->
            {{ key.replace(/([A-Z])/g, ' $1').trim() }}
          </slot>
        </dt>
        <dd class="white-space-wrap">
          <slot :name="`definition-${key}`">
            {{ parsedValue(value) }}
          </slot>
        </dd>
      </div>
    </dl>
    <div v-if="$slots['list-bottom']" class="list-bottom-wrapper">
      <slot name="list-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Theme not yet implemented.
.definition-list {
  .definition-list-item-wrapper {
    dt, dd {
      padding: 8px;
    }
    dt {
      @include ftva-emphasized-subtitle;
      font-size: 20px;
      color: $subtitle-grey;
      border-bottom: 1.5px solid $subtitle-grey;
    }
    dd.white-space-wrap {
        @include ftva-card-title-2;
        white-space: pre-wrap;
      }
  }
  .list-top-wrapper {
    text-align: center;
    padding-bottom: 40px;
  }
  .list-bottom-wrapper {
    text-align: center;
    padding-top: 40px;
  }
}
// horizontal mode
.horizontal {
  display: flex;
}
.horizontal dt,
.horizontal dd {
  flex: 1;
  border-bottom: 1.5px solid $subtitle-grey;
}
</style>
