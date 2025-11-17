<script lang="ts" setup>
import SvgLogoUcla from 'ucla-library-design-tokens/assets/svgs/logo-ucla.svg'
import SvgLogoFtva from 'ucla-library-design-tokens/assets/svgs/logo-ftva.svg'
import { computed } from 'vue'
import ButtonLink from './ButtonLink.vue'
import { useTheme } from '@/composables/useTheme'

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['site-brand-bar', theme?.value || '']
})
const parsedHeaderThemeSettings = computed(() => {
  // ftva
  if (theme?.value === 'ftva') {
    return {
      buttonText: 'Donate',
      buttonLink: '/donate',
      homepage: '/',
      homepageLinkTarget: '_self'
    }
  }
  // default
  return {}
})
</script>

<template>
  <div :class="classes">
    <a
      :href="parsedHeaderThemeSettings.homepage || 'https://www.ucla.edu'"
      :target="parsedHeaderThemeSettings.homepageLinkTarget || '_blank'"
    >

      <SvgLogoFtva v-if="theme === 'ftva'" />

      <SvgLogoUcla
        v-else
        class="svg ucla-logo"
      />
      <span class="visually-hidden">UCLA Home</span>
    </a>
    <span
      v-if="parsedHeaderThemeSettings.buttonLink && parsedHeaderThemeSettings.buttonText"
      class="button-container"
    >
      <ButtonLink
        :label="parsedHeaderThemeSettings.buttonText"
        icon-name="none"
        :to="parsedHeaderThemeSettings.buttonLink"
        class="button"
      />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_site-brand-bar.scss";
@import "@/styles/ftva/_site-brand-bar.scss";
</style>
