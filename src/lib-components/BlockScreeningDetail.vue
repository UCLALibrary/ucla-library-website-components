<script
  setup
  lang="ts"
>
import { computed } from 'vue'

import type { PropType } from 'vue'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import CardMeta from '@/lib-components/CardMeta.vue'
// TYPES
interface tagLabelsType {
  tagLabels: {
    title: string
  }[]
}
// TYPES
interface PostSmallItemType {
  image: MediaItemType
  categoryName: string
  author: string
  title: string
  to: string
}

interface ScreeningDetailItemType {
  screeningTitle: string
  alternateTitle: string
  languageTranslated: string
  year: string
  country: string
  languageInfo: string
  runtime: string
  screeningTags: [
    {
      title: "IMAX"
    },
    {
      title: "Experimental Film"
    }
  ],
  descriptionOfScreening: string
  trailer: MediaItemType
}

import type { MediaItemType } from '@/types/types'

const props = defineProps({
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

  screeningTitle: {
    type: String,
    default: '',
  },
  alternateTitle: {
    type: String,
    default: '',
  },
  languageTranslated: {
    type: String,
    default: '',
  },
  year: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  languageInfo: {
    type: String,
    default: '',
  },
  runtime: {
    type: String,
    default: '',
  },
  tagLabels: {
    type: Array as <tagLabelsType[] >,
    default: () => [],
  },
  alternativeFullName: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },


  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
})

const classes = computed(() => {
  return [
    'block-card-with-image',
    { 'is-vertical': props.isVertical },

  ]
})
</script>

<template>
  <li :class="classes">
    <div class="image-container">
      <ResponsiveImage
        v-if="image"
        :media="image"
        :aspect-ratio="imageAspectRatio"
        class="image"
      />
      <div
        v-else
        class="molecule-no-image"
      >
        <MoleculePlaceholder
          class="molecule"
          aria-hidden="true"
        />
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
      :byline-one="bylineOne"
      :byline-two="bylineTwo"
      :locations="locations"
      :alternative-full-name="alternativeFullName"
      :language="language"
      :section-handle="sectionHandle"
    />
  </li>
</template>

<style
  lang="scss"
  scoped
>
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
