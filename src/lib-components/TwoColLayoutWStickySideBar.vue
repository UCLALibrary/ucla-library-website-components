<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'

// Track height of sidebar and ensure main content as at least as tall
const isMobile: Ref<boolean> = ref(false)
const sidebar: Ref<HTMLDivElement | null> = ref(null)
const primaryCol: Ref<HTMLDivElement | null> = ref(null)

function setMainMinHeight() {
  primaryCol.value!.style!.minHeight = `${sidebar.value!.clientHeight + 125}px` // add 125 px to account for top and bottom padding
}

onMounted(() => {
  const { width } = useWindowSize()
  watch([width, sidebar], ([newWidth]) => {
    isMobile.value = newWidth <= 750

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
    >
      <SectionWrapper class="primary-section-wrapper">
        <slot name="primaryTop" />
        <div v-if="isMobile" class="sidebar-mobile-top">
          <slot name="sidebarTop" />
        </div>
        <slot name="primaryMid" />
        <div v-if="isMobile" class="sidebar-mobile-bottom">
          <slot name="sidebarBottom" />
        </div>
        <slot name="primaryBottom" />
      </SectionWrapper>
    </div>

    <!-- sidebar column -->
    <div class="sidebar-column">
      <div
        ref="sidebar"
        class="sidebar-content-wrapper"
      >
        <slot v-if="!isMobile" name="sidebarTop" />
        <slot v-if="!isMobile" name="sidebarBottom" />
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
    }
  }

  .sidebar-column {
    min-width: 314px;
    width: 30%;
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

      >* {
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 48px;
        }
      }
    }
  }
}

// MEDIUM DEVICE STYLES
@media (max-width: 1200px) {
  .two-column {
    padding-right: var(--unit-gutter);

    .primary-column {
      width: 62%;

      .primary-section-wrapper {
        padding-left: var(--unit-gutter);
      }
    }

    .sidebar-column {
      padding-right: var(--unit-gutter);
    }
  }
}

// MOBILE STYLES
@media #{$small} {
  .two-column {
    display: grid;
    grid-template-columns: 1fr;

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
