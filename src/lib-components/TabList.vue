<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, provide, ref, useSlots } from 'vue'
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

const activeTab = ref(tabItems.value[0]?.title)

const tabRefs = ref<Array<any>>([])

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

onMounted(() => {
  activeTab.value = tabItems.value[initialTab]?.title

  const tabElem = tabRefs.value[initialTab]

  // Boolean flag to disable initial width glider
  animateTabGlider(tabElem, false)
})

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

function switchTab(tabName: string) {
  activeTab.value = tabName

  const tabIndex = tabItems.value!.findIndex(tab => tab?.title === tabName)

  const tabElem: HTMLElement = tabRefs.value[tabIndex]

  if (tabElem)
    tabElem.focus()

  if (!tabElem.classList.contains('active'))
    animateTabGlider(tabElem, true)
}

function animateTabGlider(elem: HTMLElement, hasInitialWidth: boolean) {
  const tabGlider = tabGliderRef.value

  // Positional values of tab button
  const tabBtn = elem.getBoundingClientRect()

  if (!hasInitialWidth) {
    tabGlider.style.width = '0'
    tabGlider.style.setProperty('--translate_glider_left', `${elem.offsetLeft}px`)
  }
  else {
    // Set glider width to match tab button
    tabGlider.style.width = `${tabBtn.width}px`

    // Note
    tabGlider.style.setProperty('--translate_glider_left', `${elem.offsetLeft - 12}px`)
  }

  // Set glider height to match tab button
  tabGlider.style.height = `${tabBtn.height}px`
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
        :class="{ active: activeTab === tab?.title }"
        role="tab"
        :tabindex="activeTab === tab?.title ? 0 : -1"
        :aria-controls="setTabAriaControl(tab?.title)"
        :aria-selected="activeTab === tab?.title"
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
  <div :id="parsedAriaLabel" class="tab-list-body" role="tabpanel" :aria-labelledby="parsedAriaLabel" :hidden="!activeTab">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-list.scss";
@import "@/styles/ftva/_tab-list.scss";
</style>
