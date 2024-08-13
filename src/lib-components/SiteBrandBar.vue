<script lang="ts" setup>
import SvgLogoUcla from 'ucla-library-design-tokens/assets/svgs/logo-ucla.svg'
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['site-brand-bar', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <a
      href="https://www.ucla.edu"
      target="_blank"
    >
      <SvgLogoUcla class="svg ucla-logo" />
      <span class="visually-hidden">UCLA Home</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_site-brand-bar.scss";
@import "@/styles/ftva/_site-brand-bar.scss";
</style>
