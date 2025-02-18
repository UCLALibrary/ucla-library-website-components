<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

enum Orientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal'
}

const { numItems, orientation } = defineProps({
  numItems: {
    type: Number,
    default: 1
  },
  orientation: { // triggers CSS styling for vertical or horizontal layout
    type: String, // as PropType<Orientation>,
    default: Orientation.Vertical
  },
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['definition-list', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <slot name="list-top" />
    <dl class="definition-list-wrapper">
      <!-- TO DO MAY NEED CHILD COMPONENT LIKE https://mokkapps.de/vue-tips/dynamic-slot-names -->
      <template v-for="i in numItems" :key="i">
        <dt>
          <slot :name="`term${i}`" />
        </dt>
        <dd>
          <slot :name="`definition${i}`" />
        </dd>
      </template>
    </dl>
    <slot name="list-bottom" />
  </div>
</template>

<style scoped>
.definition-list {

}
</style>
