<script setup>
import { computed, defineAsyncComponent, provide, ref, useSlots } from 'vue'
import { useTheme } from '@/composables/useTheme'

const SvgIconCalendar= defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-calendar.svg')
)
const SvgIconList = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-list.svg')
)

const { tabListAlignment } = defineProps({
  tabListAlignment: {
    type: String,
    default: 'left',
  },
})

const slots = useSlots().default?.()

const tabItems = ref(slots.map(tab => {
  return tab.props // {title, icon-name}
}))

const selectedTitle = ref(tabItems.value[0].title)


provide('selectedTitle', selectedTitle)

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

const theme = useTheme()

const classes = computed(() => {
  return ['tab-list', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="tabs-list">
      <ul class="tabs-list-header">
        <li
          v-for="tab in tabItems"
          :key="tab.title"
          @click="selectedTitle = tab.title"
        >
        <component :is="iconMapping[tab.iconName].icon" class="svg"
        aria-hidden="true" v-if="tab.iconName" />
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <slot></slot>
    
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-list.scss";
@import "@/styles/ftva/_tab-list.scss";
</style>
