<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { PropType } from 'vue'
import type { MastheadLinkItemType } from '@/types/types'

// TODO: Add back when SearchHome component is added.
// import SearchHome from './SearchHome.vue'

const { linkItems, advancedSearchLink } = defineProps({
  linkItems: {
    type: Array as PropType<MastheadLinkItemType[]>,
    default: () => [],
  },
  advancedSearchLink: {
    type: Object as PropType<MastheadLinkItemType>,
    default: () => {},
  },
})

const SvgLogoUclaLibraryUnderline = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/logo-ucla-library-underline.svg')
)
</script>

<template>
  <div class="masthead-primary">
    <div class="container">
      <div class="logo">
        <SvgLogoUclaLibraryUnderline class="svg" />
      </div>

      <SearchHome
        :link-items="linkItems"
        :advanced-search-link="advancedSearchLink"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.masthead-primary::after {
  content: "";
  background: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"),
      center -100px;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.5;
  z-index: -10;
}
.masthead-primary {
  position: relative;
  z-index: 0;
  background: var(--gradient-01);
  .container {
      max-width: $container-l-main + px;
      height: 560px;

      position: relative;
      z-index: 20;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: stretch;
  }
  .logo {
      flex: 1 1 auto;
      height: 350px;

      display: flex;
      align-items: flex-end;

      .svg {
          max-width: 664px;
          width: 100%;
          height: auto;
      }
  }

  // Breakpoints
  @media #{$small} {
      .background {
          height: 230px;
      }
      .logo {
          height: 185px;
          justify-content: center;
          align-content: center;
          align-items: center;
          padding: 0 10px;

          .svg {
              max-width: 325px;
          }
      }
  }
}
</style>
