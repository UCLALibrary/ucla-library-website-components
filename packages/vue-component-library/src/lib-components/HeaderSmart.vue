<script setup>
import { markRaw, onMounted, ref, watch, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/GlobalStore'
import SiteBrandBar from '@/lib-components/SiteBrandBar'
import HeaderMainResponsive from '@/lib-components/HeaderMainResponsive'
import HeaderMain from '@/lib-components/HeaderMain'
import { useTheme } from '@/composables/useTheme'

const theme = useTheme()
// Props
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  menuOpened: {
    type: Boolean,
    default: false,
  },
})

// Emits
const emit = defineEmits(['toggle-menu'])

// Access the global store
const globalStore = useGlobalStore()
const { header } = storeToRefs(globalStore)

// Use refs for primary, secondary menu items, and header type
const primaryMenuItems = ref(header.value.primary || [])
const secondaryMenuItems = ref(header.value.secondary || [])

// Mark components as raw to prevent them from being reactive
const currentHeader = ref(markRaw(HeaderMain))

const isMobile = ref(false)

const controlWidth = computed(() => {
  return theme.value === 'dlc' ? 1024 : 1200
})

const classes = computed(() => {
  return ['header-smart', theme.value || '']
})

onMounted(() => {
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    // console.log('newWidth', newWidth)
    isMobile.value = newWidth <= controlWidth.value
    currentHeader.value = markRaw(isMobile.value ? HeaderMainResponsive : HeaderMain)
  },
    { immediate: true })

  watch(
    header,
    (newVal, oldVal) => {
      // console.log('Header updated from parent page', newVal, oldVal)
      primaryMenuItems.value = newVal.primary
      secondaryMenuItems.value = newVal.secondary
    },
    { deep: true }
  )
})

function toggleMenu() {
  emit('toggle-menu')
}
</script>

<template>
  <header :class="classes">
    <SiteBrandBar class="brand-bar" />
    <component
      :is="currentHeader"
      :class="isMobile ? 'mobile-header' : 'desktop-header'"
      :primary-nav="primaryMenuItems"
      :secondary-nav="secondaryMenuItems"
      :menu-opened="menuOpened"
      :title="title"
      @toggle-menu="toggleMenu"
    />
  </header>
</template>

<style lang="scss" scoped>
.header-smart {
  @media #{$medium} {
    .brand-bar {
      position: absolute;
      width: 100%;
    }
  }

  &.dlc {
    @media #{$medium} {
      .brand-bar {
        position: relative;
        width: auto;
        padding: 0 50px;
      }
    }

    @media #{$small} {
      .brand-bar {

        padding: 0 25px;
      }
    }
  }
}
</style>
