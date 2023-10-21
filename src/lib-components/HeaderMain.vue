<script setup>
import { computed } from 'vue'
import NavPrimary from '@/lib-components/NavPrimary'
import NavSecondary from '@/lib-components/NavSecondary'

const { primaryNav, secondaryNav, title } = defineProps(
  {
    primaryNav: {
      // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
      type: Array,
      default: () => [],
    },
    secondaryNav: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
)

const parseTitle = computed(() => {
  return !!title
})
</script>

<template>
  <header class="header-main">
    <NavSecondary :items="secondaryNav" :is-microsite="parseTitle" />
    <NavPrimary class="primary" :items="primaryNav" :title="title" />
  </header>
</template>

<style lang="scss" scoped>
.header-main {
    z-index: 200;

    position: relative;
    height: 128px;

    .primary {
        position: absolute;
    }

    // TODO nav on smaller viewports
}
</style>
