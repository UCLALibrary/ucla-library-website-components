<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'

// Track height of sidebars and ensure main content is at least as tall
const isMobile: Ref<boolean> = ref(false)
const isPageAnchorMobile: Ref<boolean> = ref(false)
const sidebar: Ref<HTMLDivElement | null> = ref(null)
const pageAnchorSidebar: Ref<HTMLDivElement | null> = ref(null)
const primaryCol: Ref<HTMLDivElement | null> = ref(null)
const pageAnchorStickyClass = computed(() => {
  return isPageAnchorMobile.value ? 'sticky-mobile' : ''
})

function setMainMinHeight() {
  const sidebarHeight = sidebar.value?.clientHeight || 0
  const pageAnchorHeight = pageAnchorSidebar.value?.clientHeight || 0
  const tallest = Math.max(sidebarHeight, pageAnchorHeight)
  primaryCol.value!.style!.minHeight = `${tallest + 125}px` // add 125 px to account for top and bottom padding
}

onMounted(() => {
  const { width } = useWindowSize()
  watch([width, sidebar, pageAnchorSidebar], ([newWidth]) => {
    // Main sidebar goes mobile below 899px
    isMobile.value = newWidth <= 899
    // PageAnchor goes mobile below 1024px
    isPageAnchorMobile.value = newWidth <= 1024

    if (isMobile.value === true)
      primaryCol.value!.style!.minHeight = 'auto' // on mobile, reset height

    else
      setMainMinHeight()
  }, { immediate: true })
})
</script>

<template>
  <div class="two-column">
    <!-- main column -->
    <div
      ref="primaryCol"
      class="primary-column top"
      :class="{ 'primary-with-page-anchor': isPageAnchorMobile && $slots.sidebarPageAnchor }"
    >
      <SectionWrapper class="primary-section-wrapper">
        <!-- PageAnchor moves above primaryTop for tablet/mobile -->
        <div v-if="isPageAnchorMobile && $slots.sidebarPageAnchor" class="sidebar-mobile-top" :class="pageAnchorStickyClass">
          <slot name="sidebarPageAnchor" />
        </div>

        <!-- Main top content -->
        <slot name="primaryTop" />

        <!-- Main sidebarTop moves at ≤899px -->
        <div v-if="isMobile" class="sidebar-mobile-top">
          <slot name="sidebarTop" />
        </div>

        <slot name="primaryMid" />

        <!-- Mobile bottom sidebar -->
        <div v-if="isMobile" class="sidebar-mobile-bottom">
          <slot name="sidebarBottom" />
        </div>

        <slot name="primaryBottom" />
      </SectionWrapper>
    </div>

    <!-- main sidebar column -->
    <div v-if="$slots.sidebarTop || $slots.sidebarBottom" class="sidebar-column sidebar-main">
      <div ref="sidebar" class="sidebar-content-wrapper">
        <slot v-if="!isMobile" name="sidebarTop" />
        <slot v-if="!isMobile" name="sidebarBottom" />
      </div>
    </div>

    <!-- pageAnchor sidebar column -->
    <div v-if="$slots.sidebarPageAnchor" class="sidebar-column sidebar-page-anchor">
      <div ref="pageAnchorSidebar" class="sidebar-content-wrapper">
        <slot v-if="!isPageAnchorMobile" name="sidebarPageAnchor" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.two-column {
  position: relative;
  width: 100%;
  max-width: var(--ftva-container-max-width);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .primary-column {
    margin-bottom: 0px;
    width: 67%;

    .primary-section-wrapper {
      margin: var(--space-2xl) auto;
      padding: 0 var(--unit-gutter) 0 0;

      :deep(.block-call-to-action.slim-left-align){
        padding: var(--space-m);
      }
    }
  }

  .sidebar-column {
    width: #{$sidebar-width}px;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    padding-top: var(--space-2xl);
    padding-bottom: 40px;

    .sidebar-content-wrapper {
      position: sticky;
      top: 85px;
      will-change: top;

    :deep(.block-call-to-action.slim-left-align) {
      border-radius: 10px;
    }

      >* {
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 48px;
        }
      }
    }
  }

  :deep(.sidebar-page-anchor) {
    .sidebar-content-wrapper {
      display: inline-block;
    }
  }
  // .sidebar-main { right: 0; }
}

.sidebar-mobile-top.sticky-mobile {
  position: sticky;
  //hieght of navbar
  top: 64px;
  z-index: 10;
}

// MEDIUM DEVICE STYLES
@media (min-width: 900px) and (max-width: 1200px){
  .two-column {

    .primary-column {
      width: 62%;
    }

    .sidebar-column {
      margin-right: var(--unit-gutter);
    }

    .sidebar-page-anchor {
      margin-right: 0;
    }

  }
}

@media (max-width: 1200px) {
  .two-column {
    padding-right: var(--unit-gutter);

    .primary-column {

      .primary-section-wrapper {
        padding-left: var(--unit-gutter);
      }
    }
  }
}

// MOBILE STYLES
@media (max-width: 899px) {
  .two-column {
    display: grid;
    grid-template-columns: 1fr;
    padding-right: 0;

    .primary-column {
      width: auto;
      grid-column: 1;

      .primary-section-wrapper {
        padding-left: var(--unit-gutter);

        // Cardmeta divs have a bottom-margin, but the last one doesn't always display if content is overflowing.
        // We remove the margin from the last card-meta div to ensure it displays consistently, and re-add the spacing below
        :deep(.card-meta) {
          div:last-child {
            margin-bottom: 0px;
          }
        }
      }

      .sidebar-mobile-top {
        padding-top: var(--space-l); // add padding to top of sidebar
      }
      .sticky-mobile.sidebar-mobile-top {
        padding-top: 0;
      }
      .sidebar-mobile-top, .sidebar-mobile-bottom {
        > * {
          margin-bottom: 30px;
        }
      }
    }

    .sidebar-column {
      display: none;
    }
  }
}
</style>
