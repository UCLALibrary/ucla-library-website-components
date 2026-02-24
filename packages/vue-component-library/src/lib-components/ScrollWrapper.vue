<script lang="ts" setup>
import { computed, onMounted, ref, useSlots } from 'vue'
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

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['scroll-wrapper', theme?.value || '']
})

const slotChildren = computed(() => {
  return slots?.default?.()
})

// Set initial index when component mounts
onMounted(() => {
  // Count the number of item slots provided
  if (slots) {
    const slotCount = Object.keys(slots).length
    if (slotCount > 0)
      numSlides.value = slotCount
  }

  currentSlide.value = initialSlide - 1
})
</script>

<template>
  <div :class="classes">
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
          <v-slide-group-item v-for="(vnode, index) in slotChildren" :key="index" v-slot="{ isSelected }">
            <component :is="vnode" class="slide-group-item" :class="[{ 'selected': isSelected, 'not-selected': !isSelected }]" />
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/ftva/_scroll-wrapper.scss';

.scroll-wrapper {
  width: 100%;
  // set the widths of cards that appear within scrollwrapper
  --card-max-width: 328px;
  --card-min-width: 322px;
  // START styles to emulate section-teaser-card for BlockCardWithImage inside Scrollwrapper
 :deep(.v-slide-group__content) {
     &:has(.block-highlight) {
        gap: var(--space-xl) 30px;
        margin: 0 auto;
        padding-top: 25px;
        margin-bottom: 15px;
        min-height: 403px;

      @media (min-width: 1047px) {
        justify-content: center;
      }
     }
}

 :deep(.block-highlight) {
    flex-basis: calc((100% / 3) - 22px);
    min-width: var(--card-min-width);
    // max-width: 327px !important;
    min-height: 350px;
    // END styles to emulate section-teaser-card for BlockCardWithImage inside Scrollwrapper

    // ensure links are clickable
    .card-meta {
      a.title {
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

  // padded card for single item
  .padded-card {
    background-color: transparent;
  }

  // custom prev arrow for v-window and v-slide-group
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
}
</style>
