<script lang="ts" setup>
import SvgLogoUcla from 'ucla-library-design-tokens/assets/svgs/logo-ucla.svg'
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import ButtonLink from './ButtonLink.vue';

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['site-brand-bar', theme?.value || '']
})
const parsedHeaderThemeSettings = computed(() => {
  // ftva
  if (theme?.value === 'ftva') {
    return {
      useLogo: false,
      headerText: 'UCLA Film & Television Archive',
      buttonText: 'Donate',
      buttonLink: "/donate",
    }
  }
  // default
  return {}
})
</script>

<template>
  <div :class="classes">
    <a
      href="https://www.ucla.edu"
      target="_blank">
      <span v-if="!parsedHeaderThemeSettings?.useLogo && parsedHeaderThemeSettings.headerText" class="ucla-text">{{
        parsedHeaderThemeSettings. headerText }}</span>
      <SvgLogoUcla v-else class="svg ucla-logo" />
      <span class="visually-hidden">UCLA Home</span>
    </a>
    <span v-if="parsedHeaderThemeSettings.buttonLink && parsedHeaderThemeSettings.buttonText" class="button-container">
      <ButtonLink
        :label="parsedHeaderThemeSettings.buttonText"
        icon-name="none"
        :to="parsedHeaderThemeSettings.buttonLink"
        class="button" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_site-brand-bar.scss";
@import "@/styles/ftva/_site-brand-bar.scss";
</style>
