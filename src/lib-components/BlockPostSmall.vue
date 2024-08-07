<script
  lang="ts"
  setup
>
import type { PropType } from 'vue'
import { computed } from 'vue'

// TYPESCRIPT
import type { MediaItemType } from '@/types/types'

// UTILITY FUNCTION
import getSectionName from '@/utils/getSectionName'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  categoryName: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})

const sectionName = computed(() => {
  return getSectionName(props.to)
})

const classes = computed(() => {
  return ['block-post-small', `color-${sectionName.value}`]
})

const parsedAuthor = computed(() => {
  return `By ${props.author}`
})
</script>

<template>
  <div>
    <smart-link
      :to="to"
      :class="classes"
    >
      <ResponsiveImage
        v-if="image"
        :media="image"
        :aspect-ratio="100"
        class="image"
      />
      <div class="meta">
        <div
          class="category"
          v-html="categoryName"
        />
        <h3
          class="title"
          v-html="title"
        />
        <div
          class="author"
          v-html="parsedAuthor"
        />
      </div>
    </smart-link>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.block-post-small {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;

  width: 320px;
  min-height: 150px;
  padding: 25px;
  border-radius: var(--rounded-slightly-all);
  transition-property: background-color, box-shadow;
  transition-duration: 400ms;
  transition-timing-function: ease-in-out;

  .image {
    width: 100px;
    flex-shrink: 0;
  }

  .meta {
    max-width: 150px;
    margin-left: 20px;
  }

  .category {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-primary-blue-05);
  }

  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: var(--color-primary-blue-03);
    margin: 15px 0 0 0;
  }

  .author {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    color: var(color-grey-01);
    margin-top: 10px;
  }

  // Themes
  --color-theme: var(--color-primary-blue-02);

  &.color-visit {
    --color-theme: var(--color-visit-fushia-01);
  }

  &.color-help {
    --color-theme: var(--color-help-green-01);
  }

  &.color-about {
    --color-theme: var(--color-about-purple-01);
  }

  // Hovers
  @media #{$has-hover} {
    &:hover {
      background-color: var(--color-theme);
      box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
    }
  }
}
</style>
