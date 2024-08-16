<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'
import NavPrimary from '@/lib-components/NavPrimary.vue'
import NavSecondary from '@/lib-components/NavSecondary.vue'
import type { NavPrimaryItemType, NavSecondaryItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'
import NavSearch from './NavSearch.vue'

const { primaryItems, secondaryItems } = defineProps({
  primaryItems: {
    type: Array as PropType<NavPrimaryItemType[]>,
    default: () => [],
  },
  secondaryItems: {
    type: Array as PropType<NavSecondaryItemType[]>,
    default: () => [],
  },
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['header-sticky', theme?.value || '']
})
</script>

<template>
  <header :class="classes">
    <NavPrimary :items="primaryItems" class="primary">
      <NavSearch /> <!-- v-if="theme?.value === 'ftva'"/>-->
    </NavPrimary>

    <NavSecondary v-if="secondaryItems.length !== 0" :items="secondaryItems" class="secondary" />
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_header-sticky.scss";
@import "@/styles/ftva/_header-sticky.scss";
</style>
