<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// PROPS & DATA
const props = defineProps({
  // The number of columns to create for data
  // Each column has the structure:
  // <td class="column-#"><slot name="column#" /></td>
  numCells: {
    type: Number,
    default: 0,
  },
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['block-staff-subject-librarian', theme?.value || '']
})
</script>

<template>
  <tr :class="classes">
    <template v-if="props.numCells !== 0">
      <td v-for="i in props.numCells" :key="i" :class="`column-${i}`">
        <slot :name="`column${i}`" />
      </td>
    </template>
  </tr>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-staff-subject-librarian.scss";
@import "@/styles/ftva/_block-staff-subject-librarian.scss";
</style>
