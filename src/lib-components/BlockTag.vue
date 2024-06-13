<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'

// PROPS & DATA
const { label, iconName, styles, classes, showRemoveIcon, isSecondary } = defineProps({
  label: {
    type: String,
    default: '' // Text displayed on the tag or pill.
  },
  iconName: {
    type: String,
    required: false
  },
  // classes: {
  //     type: String,
  //     required: false
  // },
  // todo rename as class, styles, or theme?
  // site: {
  //     type: String,
  //     default: "" // Specifies the site context ("website" use white background, "ftva" use pale white).
  // },
  styles: {
    type: Object,
    default: () => ({}) // Specifies css styles for themes
  },
  // if we keep this here, might also need click event prop for function
  // showRemoveIcon: {
  //     type: Boolean,
  //     default: true
  // },
  isSecondary: {
    type: Boolean,
    default: false
  }
})
// import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'

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

const parsedClasses = computed(() => {
  // TODO if using classes prop pattern, add classes ? classes : '',
  // (maybe classes.join() if need an array)
  return ['block-tag', isSecondary ? '' : 'primary']
})
</script>

<template>
  <span :class="parsedClasses" :style="styles">
    <component :is="BlockTagIcons[iconName]" v-if="iconName" class="svg" aria-hidden="true" :style="styles['.svg']" />
    <div class="label" :style="styles['.label']">
      {{ label }}
    </div>
    <!-- <span v-if="showRemoveIcon" class="button-close">
            <SvgGlyphClose class="svg-glyph-close" />
        </span> -->
    <!-- slot for 'x' button or any additional content parent needs to display in tag -->
    <slot />
  </span>
</template>

<style lang="scss" scoped>
// Need imports to access ftva tokens
// can be removed once this file is included here
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

// TODO
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
    }
    // primary colors & styles
    &.primary {
        background-color: $accent-blue;
        border: none;
        color: #fff;
        .label {
        color: #fff;
        }
    }
}
</style>
