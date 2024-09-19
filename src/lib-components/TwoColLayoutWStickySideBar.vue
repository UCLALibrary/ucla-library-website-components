<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

// Track height of sidebar and ensure main content as at least as tall
const isMobile: Ref<Boolean> = ref(false)
const sidebar: Ref<HTMLDivElement | null> = ref(null)
const primaryCol: Ref<HTMLDivElement | null> = ref(null)
onMounted(() => {
    const { width } = useWindowSize()
    watch(width, (newWidth) => {
        isMobile.value = newWidth <= 750
    }, { immediate: true })

    watch([isMobile, sidebar], ([newValIsMobile, newValSidebar]) => {
        // Ensure main column min-height is at least as tall as the sidebar, except on mobile
        // '!' indicates to typescript that we are certain the element is defined when the watcher executes
        if (newValIsMobile === true) {
            primaryCol!.value!.style!.minHeight = 'auto' // on mobile, reset height
        } else {
            primaryCol!.value!.style!.minHeight = `${newValSidebar!.clientHeight + 125}px`
        }
    }, { immediate: true, deep: true })
})
</script>

<template>

    <div class="two-column">
        <!-- main column -->
        <div
            ref="primaryCol"
            class="primary-column top">
            <!-- TODO section wrapper here instead of external ?-->
            <slot name="primaryTop"></slot>
            <div v-if="isMobile" class="sidebar-mobile-top">
                <slot name="sidebarTop"></slot>
            </div>
            <slot name="primaryMid"></slot>
            <div v-if="isMobile" class="sidebar-mobile-bottom">
                <slot name="sidebarBottom"></slot>
            </div>
            <slot name="primaryBottom"></slot>
        </div>

        <!-- sidebar column -->
        <div class="sidebar-column">
            <div
                ref="sidebar"
                class="sidebar-content-wrapper">
                <slot v-if="!isMobile" name="sidebarTop"></slot>
                <slot v-if="!isMobile" name="sidebarBottom"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//TODO move styles to theme file? these are for FTVA
.two-column {
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .primary-column {
        margin-bottom: 0px;
        width: 67%;

        .section-wrapper {
            padding-left: 0px;
        }

        &.bottom {
            margin-top: -30px;
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
        padding-bottom: 40px; // TODO move?

        .sidebar-content-wrapper {
            position: sticky;
            top: 85px;
            will-change: top;

            // :deep(.block-info, .block-event-detail, .dropdown-button) {
            //     margin-bottom: 48px; // was margin top
            // }
            > * {
                margin-bottom: 30px;
            }
        }
    }   
}
  // MEDIUM DEVICE STYLES
  @media (max-width: 1200px) {
      .two-column {
          padding-left: var(--unit-gutter);
          padding-right: var(--unit-gutter);
        .sidebar-column {
            padding-right: var(--unit-gutter);
        }
      }

      .two-column>.primary-column {
          width: 62%;
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

              .section-wrapper {
                  padding-left: var(--unit-gutter);
              }

              &.bottom {
                  margin-top: auto;
              }
          }

          .sidebar-column {
            display: none;
            //   width: auto;
            //   position: relative;
            //   grid-column: 1;
            //   margin: auto var(--unit-gutter);
            //   padding-top: 0px;
            //   height: auto; // let content determine height on mobile
          }
      }
  }
</style>