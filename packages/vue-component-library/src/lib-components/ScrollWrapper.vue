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
    // move arrows on top of content
    position: relative;
    :deep(.v-slide-group__prev) {
        height: 100%;
        position: absolute;
        z-index: 1;
        i.v-icon {
            &::before {
                // todo updated icon from serena?
                content: url('ucla-library-design-tokens/assets/svgs/icon-caret-left.svg');
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
                    // todo updated icon from serena?
                    content: url('ucla-library-design-tokens/assets/svgs/icon-caret-right.svg');
                }
            }
    }
    :deep(i.v-icon) {
        height: 54px;
        width: 43px;
        background-color: $navy-blue;
        border-radius: 6px;
        &::before {
            // remove this if icon updated
            transform: scale(2, 2.5);
            filter: invert(98%) sepia(131%) saturate(1029%) hue-rotate(196deg) brightness(130%) contrast(68%);
            padding-top: 1px;
        }
    }

    // set the widths of cards that appear within scrollwrapper
    --card-max-width: 450px;
    --card-min-width: 280px;
    // when card-with-image is in a scroll-wrapper, it should not wrap horizontally but scroll instead
    :deep(.card-with-image) {
        max-width: unset;

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
