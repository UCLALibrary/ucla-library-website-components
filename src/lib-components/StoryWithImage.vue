<script lang="ts" setup>
import SvgArrowDiagonal from 'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
import type { PropType } from 'vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import DividerGeneral from '@/lib-components/DividerGeneral.vue'
import type { MediaItemType } from '@/types/types'

const { image, caption, title, text, footnote, calltoaction } = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  caption: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  footnote: {
    type: String,
    default: '',
  },
  calltoaction: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="story-with-image">
    <div v-if="image" class="image-block">
      <ResponsiveImage class="image" :media="image">
        <div class="gradient" />
      </ResponsiveImage>
      <div v-if="caption" class="caption" v-text="caption" />

      <div class="meta">
        <h2 v-if="title" class="title">
          {{ title }}
        </h2>
        <div v-if="text" class="text" v-html="text" />
        <DividerGeneral class="divider-general" />
        <div v-if="footnote" class="footnote" v-html="footnote" />
        <DividerGeneral class="divider-general" />
        <div class="calltoaction">
          <span v-if="calltoaction"> {{ calltoaction }}</span>
          <SvgArrowDiagonal class="svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.story-with-image {
    color: var(--color-black);

    .image {
        margin: 0 var(--unit-gutter);

        .gradient {
            background: var(--gradient-image-01),
                linear-gradient(180deg,
                    rgba(15, 15, 15, 0) 0%,
                    rgba(15, 15, 15, 0.25) 67.57%,
                    #0f0f0f 100%);
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .caption {
        font-family: Helvetica;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.01em;
        color: var(--color-secondary-grey-05);
        margin: 0 var(--unit-gutter);
        padding: 16px 50px 26px 16px;
        text-align: right;
    }

    .meta {
        margin: 50px auto;
        max-width: $container-l-main + px;
    }

    .title {
        color: var(--color-black);
        font-size: 28px;
        margin-bottom: 50px;
    }

    .text {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.01em;
        margin-bottom: 80px;
        max-width: $container-l-text + px;
        padding-right: 96px;
    }

    .footnote {
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
        margin: 42px 0;

    }

    .calltoaction {
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        margin: 55px 0 80px 0;

        display: flex;
        align-items: center;
    }

    .svg {
        text-decoration: underline;
        text-decoration-color: var(--color-primary-blue-03);
        padding-left: 5px;

        .line {
            stroke: var(--color-primary-blue-03);
        }

        .arrow-diagonal {
            fill: var(--color-primary-blue-03);
        }
    }

    // Hover states
    :deep(a) {
        color: var(--color-primary-blue-03);

        &:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 1.5px;
        }
    }

    @media #{$has-hover} {
        .calltoaction:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 2px;
        }

        .svg:hover {
            .arrow {
                path {
                    fill: var(--color-primary-blue-03);
                }
            }

            path {
                fill: var(--color-primary-blue-03);

                .arrow-diagonal {
                    color: var(--color-primary-blue-03);
                }
            }
        }
    }

    // Breakpoints
    @media #{$small} {
        .meta {
            margin-top: 25px;
            margin-left: 50px;
            width: 80%;
        }

        .caption {
            padding-right: var(--unit-gutter);
        }

        .title {
            margin-bottom: 25px;
        }

        .text {
            margin-bottom: 40px;
        }
    }
}
</style>
