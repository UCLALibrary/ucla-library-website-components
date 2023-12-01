<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'

// COMPONENTS
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

// UTILITY FUNCTIONS
import getSectionName from '@/utils/getSectionName'

import type { ImageItemType, LocationItemType } from '@/types/types'

const props = defineProps({
  image: {
    type: Object as PropType<ImageItemType>,
    default: () => ({}),
  },
  to: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  alternativeFullName: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  startDate: {
    type: String,
    default: '',
  },
  endDate: {
    type: String,
    default: '',
  },
  ongoing: {
    type: Boolean,
    default: false,
  },

  isVertical: {
    type: Boolean,
    default: true,
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  bylineOne: {
    type: String,
    default: '',
  },
  bylineTwo: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '', // This will be "visit", "about", "help".
  },
  sectionHandle: {
    type: String,
    default: '',
  },
})

const route = useRoute()

const sectionName = computed(() => {
  return props.color || getSectionName(route.path)
})

const classes = computed(() => {
  return [
    'block-card-with-image',
    { 'is-vertical': props.isVertical },
              `color-${sectionName.value}`,
  ]
})
</script>

<template>
  <li :class="classes">
    <div class="image-container">
      <ResponsiveImage
        v-if="image"
        :image="image"
        :aspect-ratio="imageAspectRatio"
        class="image"
      />
      <div v-else class="molecule-no-image">
        <MoleculePlaceholder class="molecule" aria-hidden="true" />
      </div>
    </div>
    <CardMeta
      :to="to"
      :category="category"
      :title="title"
      :start-date="startDate"
      :end-date="endDate"
      :ongoing="ongoing"
      :text="text"
      :locations="locations"
      :alternative-full-name="alternativeFullName"
      :language="language"
      :section-handle="sectionHandle"
    />
  </li>
</template>

<style lang="scss" scoped>
.block-card-with-image {
  background-color: var(--color-theme, var(--color-white));
  font-family: var(--font-primary);
  position: relative;
  display: flex;
  flex-direction: row;

  .image-container {
      .molecule-no-image {
          width: 100%;
          margin-right: var(--space-xl);
          background: var(--gradient-01);
          overflow: hidden;
          display: flex;
          align-items: center;
          position: relative;

          .molecule {
              flex-shrink: 0;
              position: absolute;
              opacity: 0.7;
          }
      }
  }

  // Variations
  &.is-vertical {
      flex-direction: column;
      .molecule-no-image {
          width: 100%;
          height: 179.2px;
      }

      :deep(.card-meta) {
          margin-top: 16px;
      }
      :deep(.image) {
          width: 100%;
          .media {
              object-fit: cover;
          }
      }
  }
  // Breakpoints
  @media #{$medium} {
      &.is-vertical {
          .molecule-no-image {
              height: 226px;
          }
      }
  }
}
</style>
