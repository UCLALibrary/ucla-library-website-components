<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, provide, ref, useSlots, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useTheme } from '@/composables/useTheme'

const { alignment, initialTab } = defineProps({
  alignment: {
    type: String,
    default: 'left',
  },
  initialTab: {
    type: Number,
    default: 0
  }
})

const SvgIconCalendar = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-calendar.svg')
)
const SvgIconList = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-list.svg')
)

const tabSlots = useSlots()?.default?.()

const tabProps = tabSlots!.map((tabItem) => {
  return tabItem.props // {title, icon, content}
})

const tabItems = ref(tabProps)

const tabRefs = ref<Array<any>>([])

const activeTabIndex = ref(0)
const activeTabTitle = ref(tabItems.value[0]?.title)

const tabGliderRef = ref()

provide('activeTabTitle', activeTabTitle)

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

onMounted(() => {
  activeTabIndex.value = initialTab
  activeTabTitle.value = tabItems.value[initialTab]?.title

  const activeTabElem = tabRefs.value[initialTab]

  /* @argument {boolean} hasInitialWidth */
  // Boolean flag to disable glider's default
  // full width, and set glider's starting
  // position to align with initial tab.
  animateTabGlider(activeTabElem, false)

  const { width } = useWindowSize()
  watch(width, (_newWidth) => {
    // The glider width and animation/travel distance
    // depend on the width and position of the tab
    // buttons; when the window resizes, these button
    // values change. The animation method needs to be
    // called again to update the glider logic using the
    // new button values.
    const activeTabElem = tabRefs.value[activeTabIndex.value]
    animateTabGlider(activeTabElem, true)
  })
})

// Computed
const parsedAriaLabel = computed(() => {
  const tabTitle = hyphenateTabName(activeTabTitle.value)
  return `panel-${tabTitle}`
})

const theme = useTheme()

const classes = computed(() => {
  return ['tab-list', theme?.value || '']
})

// Methods
function setTabId(tabName: string) {
  const tabTitle = hyphenateTabName(tabName)
  return `tab-${tabTitle}`
}

function setTabAriaControl(tabName: string) {
  const tabTitle = hyphenateTabName(tabName)
  return `panel-${tabTitle}`
}

function hyphenateTabName(str: string) {
  return str.toLowerCase().replace(/\s/g, '-')
}

function keydownHandler(e: KeyboardEvent) {
  const tabTitleList = tabItems.value!.map(obj => obj?.title)

  const activeIndex = tabTitleList.indexOf(activeTabTitle.value)

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

function switchTab(tabName: string) {
  const tabIndex = tabItems.value!.findIndex(tab => tab?.title === tabName)

  activeTabTitle.value = tabName
  activeTabIndex.value = tabIndex

  const tabElem: HTMLElement = tabRefs.value[tabIndex]

  if (tabElem)
    tabElem.focus()

  if (!tabElem.classList.contains('active'))
    animateTabGlider(tabElem, true)
}

function animateTabGlider(elem: HTMLElement, hasInitialWidth: boolean) {
  const tabGlider = tabGliderRef.value

  // Get positional values of tab button
  // and set glider height to match tab button
  const tabBtn = elem.getBoundingClientRect()
  tabGlider.style.height = `${tabBtn.height}px`

  if (!hasInitialWidth) {
    tabGlider.style.width = '0'
  }
  else {
    // Set glider width to match tab button
    tabGlider.style.width = `${tabBtn.width}px`

    // Remove tab button background; display glider background instead
    elem.style.background = 'none'
  }

  // Calculate and set distance (CSS variable) to animate glider
  tabGlider.style.setProperty('--move_glider', `${elem.offsetLeft}px`)
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
        :id="setTabId(tab?.title)"
        :ref="(el) => tabRefs[index] = el"
        :key="tab?.title"
        class="tab-list-item"
        :class="{ active: activeTabTitle === tab?.title }"
        role="tab"
        :tabindex="activeTabTitle === tab?.title ? 0 : -1"
        :aria-controls="setTabAriaControl(tab?.title)"
        :aria-selected="activeTabTitle === tab?.title"
        @keydown="keydownHandler"
        @click="switchTab(tab?.title)"
      >
        <component
          :is="iconMapping[tab.icon as keyof typeof iconMapping].icon" v-if="tab?.icon"
          class="svg" aria-hidden="true"
        />
        {{ tab?.title }}
      </button>
    </div>
  </div>
  <!-- Slot: TabItem -->
  <div :id="parsedAriaLabel" class="tab-list-body" role="tabpanel" :aria-labelledby="parsedAriaLabel" :hidden="!activeTabTitle">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-list.scss";
@import "@/styles/ftva/_tab-list.scss";
</style>
