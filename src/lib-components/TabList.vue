<script setup>
import { computed, ref } from 'vue'
import TabItem from './TabItem.vue'
import { useTheme } from '@/composables/useTheme'

const { initialSelectedTab, tabs, tabAlignment } = defineProps({
  initialSelectedTab: {
    type: Number,
    default: 0
  },
  tabs: {
    type: Array,
    default: () => []
  },
  tabAlignment: {
    type: String,
    default: 'left'
  },
})

const theme = useTheme()

const selectedIndex = ref(0)

// const tabs = ref([])

function selectTab(idx) {
  selectedIndex.value = idx

  tabs.forEach((tab, index) => {
    tab.isActive = (index === idx)
  })
}

const classes = computed(() => {
  return ['tab-list', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="tabs-list">
      <ul class="tabs-header">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.title"
          :class=" { 'tab-selected': (index === selectedIndex) }"
          @click="selectTab(index)"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-list.scss";
@import "@/styles/ftva/_tab-list.scss";
</style>
