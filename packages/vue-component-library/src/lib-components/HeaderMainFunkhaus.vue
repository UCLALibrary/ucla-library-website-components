<script setup lang="ts">
// Imports
import SvgLibraryLogo from 'ucla-library-design-tokens/assets/svgs/logo-library-digital-collections.svg'
import { computed } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import GlobalHamburger from '@/lib-components/GlobalHamburger.vue'
import SiteBrandBar from '@/lib-components/SiteBrandBar.vue'

import { useTheme } from '@/composables/useTheme'

// Props
interface HeaderMainFunkhausProps {
  menuOpened: boolean
  showSecondary: boolean
  menuItems: any[]
  secondaryItems: any[]
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

const parsedSubMenuItems = computed(() => {
  return props.secondaryItems.map((item) => {
    const supportUsClass = item.label?.toLowerCase() === 'support us' ? ' support-us' : ''

    return {
      ...item,
      classes: supportUsClass
    }
  })
})

// Methods
function toggleMenu() {
  emit('toggle-menu')
}

function handleAccountButtonClick() {
  console.log('handleAccountButtonClick')
}
</script>

<template>
  <div :class="classes">
    <SiteBrandBar class="brand-bar" />

    <ul
      v-if="showSecondary"
      class="container-secondary show-desktop"
    >
      <li
        v-for="item in parsedSubMenuItems"
        :key="item.label"
        class="menu-item"
      >
        <SmartLink
          :to="item.to"
          :class="item.classes"
          class="menu-link"
        >
          {{ item.label }}
        </SmartLink>
      </li>

      <button
        class="account-button"
        @click="handleAccountButtonClick"
      >
        My Account
      </button>
    </ul>
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

      <ul class="header-links show-desktop">
        <li
          v-for="item in menuItems"
          :key="item.label"
          class="menu-item"
        >
          <SmartLink
            :to="item.to"
            :class="item.classes"
            class="menu-link"
          >
            {{ item.label }}
          </SmartLink>
        </li>
      </ul>

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
