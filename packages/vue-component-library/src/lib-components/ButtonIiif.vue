<script setup lang="ts">
// Imports
import { computed } from 'vue'
import IconIiif from 'ucla-library-design-tokens/assets/svgs/icon-iiif.svg'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

// Theme
const theme = useTheme()

// Props
type ButtonIiifProps = {
  to: string
}

// Computed
const classes = computed(() => (['button-iiif', theme?.value || '']))

defineProps<ButtonIiifProps>()
</script>

<template>
  <SmartLink :to="to" :class="classes">
    <IconIiif class="icon-iiif" />
  </SmartLink>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-iiif.scss";
</style>
