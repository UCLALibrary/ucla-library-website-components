<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// LODASH FUNCTIONS
import format from 'date-fns/format'

// SVGs
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'

// TYPESCRIPT
import type { ArticleStaffItemType, MediaItemType } from '@/types/types'

// UTILITY FUNCTIONS
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

// PROPS & DATA
const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
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
  authors: {
    type: Array as PropType<ArticleStaffItemType[]>,
    default: () => [],
  },
  date: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
})

const parsedDate = computed(() => {
  return format(new Date(props.date), 'MMMM d, Y')
})

const imageExists = computed(() => {
  return !!(props.image && Object.keys(props.image).length !== 0)
})

const parsedTextTruncated = computed(() => {
  return props.description
    ? removeHtmlTruncate(props.description, 130)
    : ''
})

const parsedTextAll = computed(() => {
  return props.description
    ? removeHtmlTruncate(props.description, 250)
    : ''
})
</script>

<template>
  <li class="block-staff-article-item">
    <ResponsiveImage
      v-if="imageExists"
      :media="props.image"
      :aspect-ratio="props.imageAspectRatio"
      object-fit="cover"
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

    <div class="meta">
      <div
        v-if="props.category"
        class="category"
        v-html="props.category"
      />

      <SmartLink
        class="title"
        :to="props.to"
        v-html="props.title"
      />

      <!-- SUMMARY ONLY -->
      <div v-if="props.authors.length < 1 || !props.date">
        <!-- If there is no author or date - increase max-length for truncation -->
        <div
          v-if="props.description"
          class="description-summary-only"
        >
          {{ parsedTextAll }}
        </div>
      </div>

      <!-- AUTHOR(S) - DATE - SUMMARY -->
      <div v-else>
        <div
          v-if="props.authors || props.date"
          class="byline"
        >
          <div
            v-for="author in props.authors"
            :key="author.id"
            class="author"
            v-html="author.title"
          />
          <div
            v-if="props.date"
            class="date"
            v-html="parsedDate"
          />
        </div>

        <div
          v-if="props.description"
          class="description"
        >
          {{ parsedTextTruncated }}
        </div>
      </div>
    </div>
  </li>
</template>

<style
  lang="scss"
  scoped
>
.block-staff-article-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-xl);

  .image {
    width: 50%;
    margin-right: var(--space-xl);
  }

  .molecule-no-image {
    width: 50%;
    height: 272px;
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

  .meta {
    width: calc(50% - var(--space-xl));
    height: 272px;
  }

  .category {
    @include overline;
    color: var(--color-primary-blue-05);
    margin-bottom: var(--space-s);
  }

  .title {
    @include step-1;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-s);
    @include truncate(3);
    @include card-clickable-area;
  }

  .byline {
    @include step-0;
    margin: var(--space-s) 0;
    color: var(--color-secondary-grey-04);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  // .author {
  //     &:after {
  //         content: ",";
  //         padding-right: 5px;
  //     }
  //     &:nth-last-child(2):after {
  //         content: "";
  //     }
  // }
  // .date:not(:only-child) {
  //     padding-left: 20px;
  // }

  .description {
    @include step-0;
    color: var(--color-black);
    @include truncate(4);
  }

  .description-summary-only {
    @include step-0;
    color: var(--color-black);
    @include truncate(5);
  }

  :deep(.image) {
    height: 272px;

    .media {
      object-fit: cover;
    }
  }

  // Hovers
  @media #{$has-hover} {
    .title:hover {
      @include link-hover;
    }
  }
}

// Breakpoints
@media #{$small} {
  .block-staff-article-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .image,
    .molecule-no-image {
      width: 100%;
      margin-right: 0;
      margin-bottom: var(--space-l);
    }

    .meta {
      width: 100%;
      height: 100%;

      >*:last-child {
        padding-bottom: 0;
      }
    }
  }
}
</style>
