<script setup>
import { computed, onMounted, ref, watch, markRaw } from 'vue'
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

// Use refs for primary, secondary menu items, and header type
const primaryMenuItems = ref(header.value.primary || [])
const secondaryMenuItems = ref(header.value.secondary || [])

// Mark components as raw to prevent them from being reactive
const currentHeader = ref(markRaw(HeaderMain))

const isMobile = ref(false)
onMounted(() => {
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    console.log('newWidth', newWidth)
    isMobile.value = newWidth <= 1200
    currentHeader.value = markRaw(isMobile.value ? HeaderMainResponsive : HeaderMain)
  },
    { immediate: true })

  watch(
    header,
    (newVal, oldVal) => {
      console.log('Header updated from parent page', newVal, oldVal)
      primaryMenuItems.value = newVal.primary
      secondaryMenuItems.value = newVal.secondary
    },
    { deep: true, immediate: true }
  )
})
</script>

<template>
  <header class="header-smart">
    <SiteBrandBar class="brand-bar" />
    <component
      :is="currentHeader"
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
