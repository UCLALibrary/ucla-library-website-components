<script setup lang="ts">
import { computed } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

// Props
interface BentoFilterMenuItem {
  label: string
  to: string
}
interface BentoFilterMenuProps {
  items: BentoFilterMenuItem[]
}

defineProps<BentoFilterMenuProps>()

// Imports
const theme = useTheme()
// Data

// Computed
const classes = computed(() => {
  return ['bento-filter-menu', theme?.value || '']
})
// Methods

// Watchers

// Lifecycle Hooks
</script>

<template>
  <ul :class="classes">
    <li
      v-for="item in items"
      :key="item.label"
      class="bento-filter-menu-item"
    >
      <SmartLink
        :to="item.to"
        class="bento-filter-menu-link"
      >
        {{ item.label }}
      </SmartLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-filter-menu.scss";
</style>
