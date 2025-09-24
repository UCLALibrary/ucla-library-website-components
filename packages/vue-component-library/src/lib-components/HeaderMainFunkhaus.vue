<script setup lang="ts">
// Imports
import SvgLibraryLogo from 'ucla-library-design-tokens/assets/svgs/logo-library-digital-collections.svg'
import SmartLink from '@/lib-components/SmartLink.vue'
import GlobalHamburger from '@/lib-components/GlobalHamburger.vue'
import SiteBrandBar from '@/lib-components/SiteBrandBar'

import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'

// Props
type HeaderMainFunkhausProps = {
  menuOpened: boolean
}
const props = defineProps<HeaderMainFunkhausProps>()

// Emits
const emit = defineEmits(['toggle-menu'])

// Data
const theme = useTheme()

// Computed
const classes = computed(() => {
  return ['header-main-funkahus', theme?.value || '', { 'menu-opened': props.menuOpened }]
})

// Methods
const toggleMenu = () => {
  emit('toggle-menu')
}

// Watchers

// Lifecycle Hooks
</script>

<template>
  <div :class="classes">
    <SiteBrandBar class="brand-bar" />
    <div class="container">
      <SmartLink
        to="/"
        class="ucla-dlc-logo-link"
      >
        <SvgLibraryLogo
          class="ucla-dlc-logo"
          alt="UCLA Library Digital Collections logo"
        />
      </SmartLink>

      <div class="header-links show-desktop">
        <slot name="header-links" />
      </div>

      <GlobalHamburger
        class="hamburger show-mobile"
        :is-opened="menuOpened"
        @toggle-menu="toggleMenu"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_header-main-funkahaus.scss";
</style>
