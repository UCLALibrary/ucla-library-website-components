<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['scroll-wrapper', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <v-sheet class="mx-auto">
      <v-slide-group :show-arrows="true">
        <v-slide-group-item>
          <slot />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrapper {
    // ensure links are clickable
    :deep(.block-highlight) {
        .card-meta {
        a.title {
            display: contents; // links in a flexbox that are partially scrolled offscreen will still work
            // overwrite styles from @include card-clickable-area to prevent after element from blocking the link
            &::after {
              top: auto;
              right: auto;
              bottom: auto;
              left: auto
            }
        }
      }
    }
    // move arrows on top of content
    position: relative;
    :deep(.v-slide-group__prev) {
        height: 100%;
        position: absolute;
        z-index: 1;
        i.v-icon {
            &::before {
                content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-left_icon.svg');
            }
        }
    }
    :deep(.v-slide-group__next) {
        height: 100%;
        position: absolute;
        z-index: 1;
        right: 0px;
        i.v-icon {
                &::before {
                    content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-right_icon.svg');
                }
            }
    }

    // hide arrow icons on mobile screens
    @media #{$small} {
        :deep(i.v-icon) {
            display: none;
        }
    }

    // set the widths of cards that appear within scrollwrapper
    --card-max-width: 450px;
    --card-min-width: 280px;
    // when card-with-image is in a scroll-wrapper, it should not wrap horizontally but scroll instead
    :deep(.card-with-image) {
        max-width: unset;
        margin-left: 0px; // ensure no margin on left side of card when within scroll-wrapper

        .section-header {
            display: none;
        }

        .block-group {
            flex-wrap: nowrap;

            li,
            .block {
                min-width: var(--card-min-width);
                max-width: var(--card-max-width);
            }
        }
    }
    :deep(.section-teaser-card) {
        .block-highlight {
            min-width: var(--card-min-width);
            max-width: var(--card-max-width);
        }
    }
}
</style>
