<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useGlobalStore } from '@/stores/GlobalStore'
import { useWindowSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import SiteBrandBar from '@/lib-components/SiteBrandBar'
import HeaderMainResponsive from '@/lib-components/HeaderMainResponsive'
import HeaderMain from '@/lib-components/HeaderMain'

// Props
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

// Access the global store
const globalStore = useGlobalStore()
const { header } = storeToRefs(globalStore)
const isMobile = ref(false)
onMounted(() => {
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    isMobile.value = newWidth <= 1200
  },
    { immediate: true })
})
// Computed properties
const primaryMenuItems = computed(() => header.value.primary)
const secondaryMenuItems = computed(() => header.value.secondary)
const whichHeader = computed(() => (isMobile.value ? HeaderMainResponsive : HeaderMain))
</script>

<template>
  <header class="header-smart">
    <SiteBrandBar class="brand-bar" />
    <component
      :is="whichHeader"
      :class="isMobile ? 'mobile-header' : 'desktop-header'"
      :primary-nav="primaryMenuItems"
      :secondary-nav="secondaryMenuItems"
      :title="title"
    />
  </header>
</template>

<style lang="scss" scoped>
@media #{$medium} {
  .brand-bar {
    position: absolute;
    width: 100%;
  }
}
</style>
