<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, useSlots } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { singleItem, initialSlide } = defineProps({
  // display a single card in the carousel at a time instead of a continuous list of cards
  singleItem: {
    type: Boolean,
    default: false
  },
  // used only for singleItem mode
  initialSlide: {
    type: Number,
    default: 1
  }
})
// Refs for singleItem mode
const slots = useSlots()
const numSlides = ref(0)
const currentSlide = ref(1)
const rootRef = ref<HTMLElement | null>(null)

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['scroll-wrapper', theme?.value || '']
})

function onTitleClick(e: MouseEvent) {
  console.log('onTitleClickCheck', e.target)
  const link = (e.target as HTMLElement).closest?.('.card-meta a.title')
  if (link instanceof HTMLAnchorElement) {
    console.log('onTitleClick', link)
    requestAnimationFrame(() => {
      link.click()
    })
  }
}

// Set initial index when component mounts
onMounted(() => {
  // Count the number of item slots provided
  if (slots && singleItem) {
    const slotCount = Object.keys(slots).length
    if (slotCount > 0)
      numSlides.value = slotCount
  }

  currentSlide.value = initialSlide - 1

  // Fire click twice on a.title so navigation still happens if first click was captured (e.g. by pan)
  rootRef.value?.addEventListener('click', onTitleClick)
})
onBeforeUnmount(() => {
  rootRef.value?.removeEventListener('click', onTitleClick)
})
</script>

<template>
  <div ref="rootRef" :class="classes">
    <template v-if="singleItem">
      <v-window v-model="currentSlide" class="v-window-container" show-arrows>
        <v-window-item v-for="n in numSlides" :key="`card-${n}`">
          <v-card class="padded-card" elevation="2">
            <slot :name="`item-${n}`" />
          </v-card>
        </v-window-item>
      </v-window>
    </template>
    <template v-else>
      <v-sheet class="mx-auto">
        <v-slide-group :show-arrows="true">
          <v-slide-group-item>
            <slot />
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrapper {
  :deep(ul.section-teaser-card) {
    background-color: red;
    pointer-events: none; // whole container: treat taps as taps so link click fires
  }

  // ensure links are clickable (not captured as pan/scroll by the slide container)
  :deep(.block-highlight) {
    touch-action: manipulation; // whole card: treat taps as taps so link click fires
    .card-meta {
      a.title {
        pointer-events: auto; // allow clicks to reach the link instead of the overlay
        display: block;// links in a flexbox that are partially scrolled offscreen will still work
        // touch-action: manipulation; // treat taps as taps so click fires; prevents capture as pan

        // overwrite styles from @include card-clickable-area to prevent after element from blocking the link
        &::after {
          display: none;
          top: auto;
          right: auto;
          bottom: auto;
          left: auto;
          // pointer-events: none; // allow clicks to reach the link instead of the overlay
        }
        &:hover {
          // display: block;
          color: red !important;
          text-decoration: underline;
          text-decoration-color: $accent-blue;
          text-decoration-thickness: 3px;
          text-underline-offset: 4px;
        }
      }
    }
  }

  // move arrows on top of content
  position: relative;

  // padded card for single item
  .padded-card {
    // padding: 0 80px;
    background-color: transparent;
  }

  // custom prev arrow for v-window and v-slide-group
  // arrow containers overlay content; use pointer-events so link clicks pass through to cards
  :deep(.v-slide-group__prev) {
    height: 100%;
    position: absolute;
    z-index: 1;
    pointer-events: none;

    i.v-icon,
    .v-icon {
      pointer-events: auto;
    }
    i.v-icon {
      &::before {
        content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-left_icon.svg');
      }
    }
  }
  :deep(.v-window__left) {
    background: none;
    border: none;
    box-shadow: none;

    .v-btn__overlay,
    .v-btn__underlay,
    .v-ripple__container {
      display: none;
    }

    i.v-icon {
      &::before {
        content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-left_icon.svg');
      }
    }
  }

  // custom next arrow for v-window and v-slide-group
  :deep(.v-slide-group__next) {
    height: 100%;
    position: absolute;
    z-index: 1;
    right: 0px;
    pointer-events: none;

    i.v-icon,
    .v-icon {
      pointer-events: auto;
    }
    i.v-icon {
      &::before {
        content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-right_icon.svg');
      }
    }
  }
  :deep(.v-window__right) {
    background: none;
    border: none;
    box-shadow: none;

    .v-btn__overlay,
    .v-btn__underlay,
    .v-ripple__container {
      display: none;
    }

    i.v-icon {
      &::before {
        content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-right_icon.svg');
      }
    }
  }

  // hide arrow icons on mobile screens
  @media #{$small} {
  .v-slide-group {
    :deep(i.v-icon) {
      display: none;
      }
    }
  }

  // let link taps register inside the scroll area (especially on touch devices)
  :deep(.v-slide-group__container) {
    // touch-action: ; // whole container: treat taps as taps so link click fires
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
