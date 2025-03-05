<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

import _isEmpty from 'lodash/isEmpty'

import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import RichText from '@/lib-components/RichText.vue'

import type { MediaItemType } from '@/types/types'

const props = defineProps({
  hasMolecules: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: '',
  },
  heroImage: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
})

const defaultSlotContent = ref<HTMLElement | null>(null)

const hasDefaultSlotContent = computed(() => {
  return defaultSlotContent.value !== null
})

const hasHeroImage = computed(() => {
  return !_isEmpty(props.heroImage)
})

const classes = computed(() => {
  return [
    'masthead-secondary',
    {
      'has-molecule': props.hasMolecules && !hasHeroImage.value,
    },
    {
      'has-slot': hasDefaultSlotContent.value,
    },
    {
      'theme-meap': props.theme.toLowerCase() === 'meap',
    },
  ]
})
</script>

<template>
  <div :class="classes">
    <ResponsiveImage
      v-if="hasHeroImage"
      class="hero-image"
      :media="heroImage"
    />
    <div class="container">
      <div class="meta">
        <h1
          class="title"
          v-html="title"
        />
        <RichText
          v-if="text"
          class="text"
          :rich-text-content="text"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.masthead-secondary {
  z-index: 0;
  position: relative;
  background: var(--gradient-03), var(--text-overlay);

  .hero-image {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: brightness(0.75);

    :deep(.media) {
      object-fit: cover;
    }
  }

  .rich-text {

    :deep(p),
    :deep(div) {
      color: var(--color-white);
    }

    :deep(div) {
      margin-bottom: 0;
    }
  }

  .container {
    max-width: $container-l-cta + px;

    position: relative;
    z-index: 20;
    margin: 0 auto;
    padding-top: var(--space-xl);
    padding-bottom: var(--space-4xl);
  }

  .meta {
    color: var(--color-white);

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: var(--space-s);

    .title {
      @include step-5;
      text-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
    }

    .text {
      @include step-0;
      text-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
      margin: 0;
    }
  }

  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(p),
  :deep(li) {
    color: var(--color-white);
    margin: 0;
  }

  // Variants
  &.has-molecule:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("ucla-library-design-tokens/assets/svgs/molecule-masthead.svg");
    background-repeat: no-repeat;
    background-position: center 60%;
    mix-blend-mode: soft-light;
  }

  &.theme-meap {
    .container {
      padding: var(--space-2xl) 0;
    }

    .meta {
      gap: var(--space-s);

      padding: var(--space-l) var(--space-xl) var(--space-xl);
      background: var(--color-primary-blue-03);

      .title {
        @include step-4;
      }
    }
  }

  // Breakpoints
  @media (max-width: 1200px) {
    &.theme-meap .container {
      margin-left: var(--unit-gutter);
      margin-right: var(--unit-gutter);
    }

    .container {
      margin-left: var(--unit-gutter);
      margin-right: var(--unit-gutter);
    }
  }

  @media #{$medium} {
    &.theme-meap .container {
      padding-left: var(--unit-gutter);
      padding-right: var(--unit-gutter);
      margin: 0;
    }

    .container {
      padding-left: var(--unit-gutter);
      padding-right: var(--unit-gutter);
      padding-bottom: var(--space-xl);
      margin: 0;
    }
  }
}
</style>
