<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'

// PROPS & DATA
const { label, iconName, styles, theme, isSecondary } = defineProps({
  label: {
    type: String,
    default: '' // Text displayed on the tag or pill.
  },
  iconName: {
    type: String,
    required: false
  },
  // this prop takes a classname that is based on the theme
  theme: {
    type: String,
    required: false
  },
  // this prop takes inline style objects, will override all else
  styles: {
    type: Object,
    default: () => ({})
  },
  isSecondary: {
    type: Boolean,
    default: false
  }
})

// TODO replace with real FTVA icons from Serena when available
const IconCollapse = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-collapse.svg')
)
const SvgIconList = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-list.svg')
)
const SvgIconVideo = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-video.svg')
)
// TODO make enum to go along with this?
const BlockTagIcons: any = {
  IconCollapse,
  SvgIconList,
  SvgIconVideo
}

// if we want to use theme pattern based on passing classes prop to each component
const parsedClasses = computed(() => {
  // (maybe classes.join() if need an array)
  return ['block-tag', theme || '', isSecondary ? '' : 'primary']
})
</script>

<template>
  <span :class="parsedClasses" :style="styles">
    <component :is="BlockTagIcons[iconName]" v-if="iconName" class="svg" aria-hidden="true" :style="styles['.svg']" />
    <div class="label" :style="styles['.label']">
      {{ label }}
    </div>
    <!-- slot for 'x' button or any additional content parent needs to display in tag -->
    <slot />
  </span>
</template>

<style lang="scss" scoped>
// Need imports to access ftva tokens
// can be removed once this file is included here by UX team
// https://github.com/UCLALibrary/design-tokens/blob/main/scss/app.scss
@import "ucla-library-design-tokens/scss/_tokens-ftva";

// default styles correspond to library-website-nuxt
.block-tag {
    padding: 12px;
    display: flex;
    flex-direction: row;
    border: 1.5px var(--color-default-cyan-03) solid;
    background-color: #ffffff;
    border-radius: 4px;
    align-items: center;
    width: fit-content;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    // was title
    .label {
        color: #032d5b;
    }
}

// example of class-based theme styles within component library
// ftva theme
.ftva.block-tag {
    // base ftva styles
    padding: 8px 16px;
    border-radius: 16px;
    font-size: 15px;
    font-weight: 500;
    height: 32px;
    // secondary colors and styles
    // TODO focused and disabled, if they are also variations maybe better to use styles modifier
    background-color: transparent;
    border: 1.5px solid $subtitle-grey;
    color: $subtitle-grey;
    .label {
        color: $subtitle-grey;
    }

    .svg {
        height: 15px;
        width: 15px;
        margin-right:8px;
        color: $subtitle-grey;
    }
    // primary colors & styles
    &.primary {
        background-color: $accent-blue;
        border: none;
        color: #fff;
        .label {
          color: #fff;
        }
        .svg {
        }
    }
}
</style>
