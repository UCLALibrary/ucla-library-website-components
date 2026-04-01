<script setup lang="ts">
// Imports
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import SvgIconClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import SvgIconFilter from 'ucla-library-design-tokens/assets/svgs/icon-dlc-filter.svg'
import PageAnchor from './PageAnchor.vue'
import ButtonLink from './ButtonLink.vue'
import DividerGeneral from './DividerGeneral.vue'

//  Props
const props = withDefaults(defineProps<PanelAnchorNavProps>(), {
  color: '' as routeColors,
  hasBackToTop: true,
  isOpened: false,
  showOpenIconAlways: true,
})

// Emits
const emit = defineEmits(['closePanel', 'openPanel'])

type routeColors = 'about' | 'help' | 'visit' | 'default' | ''

interface PanelAnchorNavProps {
  sectionTitles: string[]
  color?: routeColors
  hasBackToTop?: boolean
  isOpened: boolean
  showOpenIconAlways?: boolean
}

// Data
const hasScrolled = ref(false)

// Methods
function openPanel() {
  emit('openPanel')
}
function closePanel() {
  emit('closePanel')
}

// Body scroll lock methods
function lockBodyScroll() {
  document.documentElement.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  document.documentElement.style.overflow = ''
}

// Scroll detection
function handleScroll() {
  if (!props.showOpenIconAlways) {
    // Show open icon after scrolling 50% of the viewport height
    hasScrolled.value = window.scrollY >= window.innerHeight * 0.5
  }
}

// Watchers
watch(
  () => props.isOpened,
  (isOpened) => {
    if (isOpened)
      lockBodyScroll()
    else unlockBodyScroll()
  }
)

// Lifecycle
onMounted(() => {
  if (!props.showOpenIconAlways) {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position
  }
})

onUnmounted(() => {
  unlockBodyScroll()
  if (!props.showOpenIconAlways)
    window.removeEventListener('scroll', handleScroll)
})

// Computed
const classes = computed(() => [
  'panel-anchor-nav',
  { 'is-opened': props.isOpened },
  { 'show-open-icon': props.showOpenIconAlways || hasScrolled.value },
])
</script>

<template>
  <div :class="classes">
    <SvgIconFilter class="icon-open" @click="openPanel" />

    <div class="panel">
      <PageAnchor
        :section-titles="sectionTitles"
        :color="color"
        :has-back-to-top="hasBackToTop"
        class="page-anchor"
      >
        <template #header>
          <div class="title-container">
            <span class="title"> Topics covered: </span>
            <DividerGeneral class="divider" />
          </div>
        </template>

        <template #link="{ title, href }">
          <ButtonLink
            :label="title"
            :to="href"
            :is-secondary="true"
          />
        </template>

        <template #back-to-top>
          <ButtonLink
            label="Back to Top"
            to="#"
            :is-secondary="true"
          />
        </template>
      </PageAnchor>
    </div>

    <SvgIconClose class="icon-close" @click="closePanel" />
    <div class="bg-color" @click="closePanel" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_panel-anchor-nav.scss";
</style>
