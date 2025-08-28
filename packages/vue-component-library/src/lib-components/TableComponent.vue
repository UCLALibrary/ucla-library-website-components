<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// PROPS & DATA
const { tableHeaders, tableCaption, colorScheme } = defineProps({
  // Tableheaders will be used to infer the number of columns
  // Therefore, if you do not want header text in a column, pass an empty string instead
  tableHeaders: {
    type: Array,
    default: () => [''],
  },
  tableCaption: {
    type: String,
    default: 'Table data',
  },
  // if a theme needs more than 1 style for tables,
  // use color-scheme prop to specify further
  colorScheme: {
    type: String,
    default: '',
  },
})

// THEME w/ COLORSCHEME
const theme = useTheme()
const classes = computed(() => {
  return ['table-component', theme?.value || '', colorScheme]
})
const wrapperClasses = computed(() => {
  return ['table-wrapper', theme?.value || '', colorScheme]
})
</script>

<template>
  <div :class="wrapperClasses">
    <table :class="classes">
      <caption>
        {{ tableCaption }}
      </caption>
      <thead>
        <tr>
          <th v-for="(header, index) in tableHeaders" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_table-component.scss";
@import "@/styles/ftva/_table-component.scss";
</style>
