<script setup lang="ts">
// Imports
import { computed } from 'vue'
import IconIiif from 'ucla-library-design-tokens/assets/svgs/icon-iiif.svg'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

// Theme
const theme = useTheme()

// Props
interface ButtonIiifProps {
  to: string
}
defineProps<ButtonIiifProps>()

// Computed
const classes = computed(() => (['button-iiif', theme?.value || '']))
</script>

<template>
  <SmartLink
    :to="to"
    :class="classes"
  >
    <IconIiif class="icon-iiif" />
  </SmartLink>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-iiif.scss";
</style>
