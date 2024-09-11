<script setup>
import { computed, defineAsyncComponent, provide, ref, useSlots } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { alignment } = defineProps({
  alignment: {
    type: String,
    default: 'left',
  },
})

const SvgIconCalendar = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-calendar.svg')
)

const SvgIconList = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-list.svg')
)

const slots = useSlots()?.default?.()

const tabItems = ref(slots.map((tabItem) => {
  return tabItem.props // {title, icon}
}))

const activeTab = ref(tabItems.value[0].title)

const tabRefs = ref([])
const tabGliderRef = ref()

provide('activeTab', activeTab)

const iconMapping = {
  'icon-calendar': {
    icon: SvgIconCalendar,
    label: 'Calendar'
  },

  'icon-list': {
    icon: SvgIconList,
    label: 'List'
  },
}

// Computed
const parsedAriaLabel = computed(() => {
  const tabTitle = hyphenateTabName(activeTab.value)
  return `panel-${tabTitle}`
})

const theme = useTheme()

const classes = computed(() => {
  return ['tab-list', theme?.value || '']
})

// Methods
function setTabId(tabName) {
  const tabTitle = hyphenateTabName(tabName)
  return `tab-${tabTitle}`
}

function setTabAriaControl(tabName) {
  const tabTitle = hyphenateTabName(tabName)
  return `panel-${tabTitle}`
}

function switchTab(tabName) {
  activeTab.value = tabName

  const tabIndex = tabItems.value.findIndex(tab => tab.title === tabName)

  const tabElem = tabRefs.value[tabIndex]

  if (tabElem)
    tabElem.focus()

  if (!tabElem.classList.contains('active'))
    animateTabGlider(tabElem)
}

function animateTabGlider(elem) {
  const tabGlider = tabGliderRef.value

  const scaleGliderWidth = elem.offsetWidth / tabGlider.offsetWidth

  // Calculate width to scale animated glider
  // Use variable in CSS
  tabGlider.style.setProperty('--scale_glider_width', scaleGliderWidth)

  // Calculate and set distance to animate
  // Use variable in CSS
  tabGlider.style.setProperty('--translate_glider_left', `${elem.offsetLeft}px`)

  // Object with positional values of tab button
  const tabBtn = elem.getBoundingClientRect()

  // Set glider to same height as tab button
  tabGlider.style.height = `${tabBtn.height}px`
}

function hyphenateTabName(str) {
  return str.toLowerCase().replaceAll(' ', '-')
}

function keydownHandler(e) {
  const tabTitleList = tabItems.value.map(obj => obj.title)

  const activeIndex = tabTitleList.indexOf(activeTab.value)

  let targetTab

  switch (e.key) {
    case 'ArrowLeft':
      if (activeIndex - 1 < 0)
        targetTab = tabTitleList[tabTitleList.length - 1]
      else
        targetTab = tabTitleList[activeIndex - 1]

      switchTab(targetTab)
      break
    case 'ArrowRight':
      if (activeIndex + 1 > tabTitleList.length - 1)
        targetTab = tabTitleList[0]
      else
        targetTab = tabTitleList[activeIndex + 1]

      switchTab(targetTab)
      break
    default:
  }
}
</script>

<template>
  <div :class="[classes, alignment]" role="tabs">
    <!-- Slot: Dropdown Filters -->
    <div v-if="$slots.filters" class="filters">
      <slot name="filters" />
    </div>

    <div class="tab-list-header" role="tablist">
      <span ref="tabGliderRef" class="tab-glider" />
      <button
        v-for="(tab, index) in tabItems"
        :id="setTabId(tab.title)"
        :ref="(el) => tabRefs[index] = el"
        :key="tab.title"
        class="tab-list-item"
        :class="{ active: activeTab === tab.title }"
        role="tab"
        :tabindex="activeTab === tab.title ? 0 : -1"
        :aria-controls="setTabAriaControl(tab.title)"
        :aria-selected="activeTab === tab.title"
        @keydown="keydownHandler"
        @click="switchTab(tab.title)"
      >
        <component
          :is="iconMapping[tab.icon].icon" v-if="tab.icon"
          class="svg" aria-hidden="true"
        />
        {{ tab.title }}
      </button>
    </div>
  </div>
  <!-- Slot: TabItem -->
  <div :id="parsedAriaLabel" class="tab-list-body" role="tabpanel" :aria-labelledby="parsedAriaLabel" :hidden="!activeTab">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-list.scss";
@import "@/styles/ftva/_tab-list.scss";
</style>
