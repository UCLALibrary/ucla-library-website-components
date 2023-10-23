<script>
import ArrowRight from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import MoleculeStroke from 'ucla-library-design-tokens/assets/svgs/molecule-stroke.svg'
import SmartLink from '@/lib-components/SmartLink.vue'

export default {
  name: 'ButtonMore',
  components: {
    ArrowRight,
    MoleculeStroke,
    SmartLink,
  },
  props: {
    text: {
      type: String,
      default: 'See More',
    },
    to: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <smart-link :to="to" class="button-more">
    <div class="icon" aria-hidden="true">
      <MoleculeStroke class="molecule-stroke" />
      <ArrowRight class="arrow-right" />
    </div>

    <div class="text">
      {{ text }}
    </div>
  </smart-link>
</template>

<style lang="scss" scoped>
.button-more {
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

  .arrow-right {
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

    :deep(.svg__stroke--primary-blue-03) {
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

      .arrow-right {
        :deep(.svg__stroke--primary-blue-03) {
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
