<script>
export default {
  name: 'DividerGeneral', // vue component name
  props: {
    isBold: {
      type: Boolean,
      default: false,
    },
    isTertiary: {
      type: Boolean,
      default: false,
    },
    isHalfWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return ['divider-general', { 'is-bold': this.isBold }, { 'is-tertiary': this.isTertiary }, { 'is-half-width': this.isHalfWidth }]
    },
  },
}
</script>

<template>
  <div :class="classes" />
</template>

<style
  lang="scss"
  scoped
>
.divider-general {
  max-width: $container-l-main + px;
  margin: var(--space-2xl) auto;
  border-bottom: 2px dotted var(--color-secondary-grey-02);
  height: 1px;

  &.is-bold {
    border-bottom-color: var(--color-secondary-grey-03);
  }

  &.is-tertiary {
    border-bottom-color: var(--color-secondary-grey-03);
    border-bottom: 2px solid var(--color-secondary-grey-02);
  }

  &.is-half-width {
    max-width: calc((100% - 16px) / 2);
  }
}
</style>
