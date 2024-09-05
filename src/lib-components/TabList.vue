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

const tabItems = ref(slots.map((tab) => {
  // console.log(tab.props.icon)
  return tab.props // {title, icon-name}
}))

// const selectedTitle = ref(tabItems.value[0].title)

// provide('selectedTitle', selectedTitle)

const activeTab = ref(tabItems.value[0].title)

provide('activeTab', activeTab)

// Computed
const parsedAriaLabel = computed(() => {
  return `panel-${activeTab.value}`
})

const theme = useTheme()

const classes = computed(() => {
  return ['tab-list', theme?.value || '']
})

// Methods
function setTabId(tabName) {
  return `tab-${tabName}`
}

function setTabAriaControl(tabName) {
  return `panel-${tabName}`
}

function switchTab(tabName) {
  activeTab.value = tabName
  document.getElementById(setTabId(tabName)).focus()
}

function keydownHandler(e) {
  // console.log(tabItems.value)
  const test = tabItems.value.map(obj => obj.title)

  // const activeIndex = tabItems.value.indexOf(activeTab.value)
  const activeIndex = test.indexOf(activeTab.value)
  let targetTab

  switch (e.key) {
    case 'ArrowLeft':
      if (activeIndex - 1 < 0)
        targetTab = test[test.length - 1]
      else
        targetTab = test[activeIndex - 1]

      switchTab(targetTab)
      break
    case 'ArrowRight': // (7)
      if (activeIndex + 1 > test.length - 1)
        targetTab = test[0]
      else
        targetTab = test[activeIndex + 1]

      switchTab(targetTab)
      break
    default:
  }
}

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
</script>

<template>
  <div :class="[classes, alignment]" role="tabs">
    <!-- Slot: Dropdown Filters -->
    <div v-if="$slots.filters" class="filters">
      <slot name="filters" />
    </div>

    <div class="tab-list-header" role="tablist">
      <button
        v-for="tab in tabItems"
        :id="setTabId(tab.title)"
        :key="tab.title"
        class="tab-list-item"
        :class="{ selected: activeTab === tab.title }"
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
        {{ tab.icon }}
        <span class="glider" />
      </button>
    </div>
  </div>
  <!-- Slot: TabItem -->
  <div :id="parsedAriaLabel" class="tab-list-body" role="tabpanel" :aria-labelledby="parsedAriaLabel">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-list.scss";
@import "@/styles/ftva/_tab-list.scss";
</style>
