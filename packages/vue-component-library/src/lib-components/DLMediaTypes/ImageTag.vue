<script>
export default {
  name: 'ImageTag',
  props: {
    options: {
      // { src: [...] }
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <img
    v-if="options.src"
    v-bind="options"
    class="image-tag"
  >
  <div
    v-else
    class="image-tag"
  >
    <!-- CSS Placeholder w/o broken image icon -->
  </div>
</template>

<style>
.image-tag {
  width: 100%;
  height: 100%;

  object-fit: contain;
  background-color: black;
}
</style>
