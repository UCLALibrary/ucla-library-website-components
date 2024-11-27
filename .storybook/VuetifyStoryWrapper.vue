<!-- Integrating Vuetify with Storybook -->
<!-- https://storybook.js.org/recipes/vuetify -->
<!-- https://github.com/storybookjs/vue3-code-examples/blob/main/.storybook/VuetifyAppWrapper.vue -->

<template>
      <div class="vuetify-storybook-wrapper">
      <slot name="story"></slot>
    </div>
</template>

<style>
.vuetify-storybook-wrapper {
  display: flex;
  justify-content: center;
}
</style>