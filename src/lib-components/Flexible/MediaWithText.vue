<script>
import BlockMediaWithText from "@/lib-components/BlockMediaWithText.vue"

export default {
  name: "FlexibleMediaWithText",
  components: { BlockMediaWithText },
  props: {
    block: {
      type: Object,
      default: () => { },
    },
  },
  computed: {
    parsedContent() {
      const mediaWithText = this.block.mediaWithText
      return mediaWithText.map((obj) => {
        return {
          ...obj,
          parsedTitle: obj.titleLink
            ? obj.titleLink
            : obj.titleUpload,
          parsedButtonUrl:
            obj.upload && obj.typeMedia == "other"
              ? obj.upload[0].src
              : obj.buttonUrl,
        }
      })
    },
  },
}
</script>

<template>
  <div class="section-media-with-text">
    <div class="flexible-page-block-container">
      <h2 class="visually-hidden">Resources</h2>
      <div class="section-header">
        <h3
          v-if="block.sectionTitle"
          class="section-title"
          v-html="block.sectionTitle"
        />
        <div
          v-if="block.sectionSummary"
          class="section-summary"
          v-html="block.sectionSummary"
        />
      </div>

      <div
        v-for="(item, index) in parsedContent"
        :key="`MediaWithTextKey${index}`"
        class="meta"
      >
        <block-media-with-text
          :section-header="item.parsedTitle"
          :short-description="item.description"
          :item="item.item"
          :coverImage="item.coverImage"
          :button-text="item.buttonText"
          :button-url="item.parsedButtonUrl"
          :embed-code="item.embedCode"
          :type-media="item.typeMedia"
          class="flexible-media-with-text"
        />

        <divider-general class="divider" />
      </div>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.section-media-with-text {
  // Themes
  --background-color: var(--color-theme, var(--color-white));

  &.color-grey {
    --background-color: var(--color-theme, var(--color-secondary-grey-02));
  }

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--background-color);

  width: 100%;

  .flexible-page-block-container {
    max-width: $container-l-main + px;
    width: 100%;
  }

  >.meta {
    width: 100%;
  }

  .visually-hidden {
    @include visually-hidden;
  }

  .section-header {
    margin-bottom: var(--space-xl);
  }

  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-m);
  }

  .section-summary {
    @include step-0;
  }

  .flexible-media-with-text {
    margin-bottom: 56px;
  }

  ::v-deep .clipped-play {
    background-color: var(--background-color);
  }

  .divider {
    max-width: $container-xl-full-width + px;
    margin-bottom: 56px;
  }

  .meta:last-child {
    .divider {
      display: none;
    }
  }

  // Breakpoints

  @media #{$medium} {
    .flexible-page-block-container {
      padding: 0 var(--unit-gutter);
    }

    &.section-media-with-text {
      padding-top: 40px;

      .flexible-media-with-text {
        margin-bottom: 32px;
      }

      .divider {
        margin-bottom: 32px;
      }
    }
  }

  @media #{$small} {
    .flexible-page-block-container {
      padding: 0 var(--unit-gutter);
    }

    &.section-media-with-text {
      padding-top: 32px;

      .flexible-media-with-text {
        margin-bottom: 24px;
      }

      .divider {
        margin-bottom: 24px;
      }

      ::v-deep .clipped-play-mobile {
        background-color: var(--background-color);
      }
    }
  }
}
</style>
