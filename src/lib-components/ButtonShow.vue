<script>
import IconExpand from 'ucla-library-design-tokens/assets/svgs/icon-expand.svg'
import MoleculeStroke from 'ucla-library-design-tokens/assets/svgs/molecule-stroke.svg'

export default {
  name: 'ButtonShow',
  components: {
    IconExpand,
    MoleculeStroke,
  },
  props: {
    text: {
      type: String,
      default: 'See More',
    },
  },
}
</script>

<template>
  <button class="button-show">
    <div class="icon" aria-hidden="true">
      <MoleculeStroke class="molecule-stroke" />
      <IconExpand class="icon-expand" />
    </div>

    <div class="text">
      {{ text }}
    </div>
  </button>
</template>

<style lang="scss" scoped>
.button-show {
    background-color: var(--color-white);
    width: fit-content;
    max-width: 80px;
    line-height: #{$line-height--2};

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

    .icon {
        position: relative;
        margin-bottom: 16px;
    }
    .molecule-border {
        width: 83px;
        height: 83px;

        stroke: var(--color-default-cyan-03);
        stroke-width: 1.5px;
    }
    .icon-expand {
        position: absolute;
        z-index: 0;
        width: 49px;
        height: 49px;
        left: 50%;

        // Center this way so button can be streched and it still centers
        top: 50%;
        transform: translate(-50%, -50%);
        transition-property: left;
        @include animate-normal;

        :deep .svg__stroke--primary-blue-03 {
            stroke: var(--color-primary-blue-03);
            stroke-width: 1.25px;
            transition-property: stroke;
            @include animate-normal;
        }
    }

    .text {
        color: var(--color-primary-blue-05);
        @include overline;
        letter-spacing: 0.01em;
        transition: color;
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            cursor: pointer;
            .icon- {
                :deep .svg__stroke--primary-blue-03 {
                    stroke: var(--color-default-cyan-03);
                }
                left: calc(50% + 4px);
            }
            .text {
                color: var(--color-primary-blue-03);
            }
        }
    }
}
</style>
