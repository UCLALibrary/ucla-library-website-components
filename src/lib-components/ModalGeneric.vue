<script>
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'

export default {
  name: 'ModalGeneric',
  components: {
    SvgGlyphClose,
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<template>
  <div class="modal" @click="close">
    <button class="svg-glyph-close" @click="close">
      <SvgGlyphClose />
    </button>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  background-color: var(--color-primary-blue-05);
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  overflow-y: auto;

  justify-items: center;

  display: grid;
  grid-template-columns:
      [left-col] 48px
      [middle-col] auto
      [right-col] 48px;
  grid-template-rows:
      [top-row] 64px
      [middle-row] auto
      [bottom-row] auto;

  .content {
    grid-row: middle-row / span 1;
    grid-column: middle-col / span 1;
    position: absolute;
  }

  .svg-glyph-close {
    grid-row: top-row / span 1;
    grid-column: right-col / span 1;
    justify-self: start;
    align-self: end;
    color: white;

    circle {
      fill: var(--color-primary-blue-05);
    }
    path {
      stroke: var(--color-white);
    }
  }

  // Hovers
  @media #{$has-hover} {
    .svg-glyph-close:hover {
      path {
        stroke-width: 3px;
      }
    }
  }

  // Breakpoints
  @media #{$medium} {
    .content {
      max-width: 100%;
    }
  }
  @media #{$small} {
    .content {
      max-width: 100%;
    }
  }
}
</style>
