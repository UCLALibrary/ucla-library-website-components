<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'
import NavSearch from './NavSearch.vue'
import ButtonLink from './ButtonLink.vue'
import NavPrimary from '@/lib-components/NavPrimary.vue'
import NavSecondary from '@/lib-components/NavSecondary.vue'
import type { NavPrimaryItemType, NavSecondaryItemType } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

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
const themeSettings = computed(() => {
  switch (theme?.value) {
    case 'ftva':
      return {
        showSearch: true,
        showDonate: true,
      }
    default:
      return {
        showSearch: false,
        showDonate: false,
      }
  }
})
</script>

<template>
  <header :class="classes">
    <NavPrimary :items="primaryItems" class="primary">
      <template #additional-menu>
        <NavSearch v-if="themeSettings.showSearch" />
      </template>
      <template v-if="themeSettings.showDonate" #additional-mobile-menu-items>
        <ButtonLink
          label="DONATE"
          icon-name="none"
          to="/donate"
          class="donate-button"
        />
      </template>
    </NavPrimary>

    <NavSecondary v-if="secondaryItems.length !== 0" :items="secondaryItems" class="secondary" />
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_header-sticky.scss";
@import "@/styles/ftva/_header-sticky.scss";
</style>
