<script setup lang="ts">
// Imports
import Molecule3d from 'ucla-library-design-tokens/assets/svgs/molecule-3d.svg'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

// Props
interface GlobalMenuPanelProps {
  isOpened: boolean
  menuItems: any[]
  subMenuItems: any[]
}
const props = defineProps<GlobalMenuPanelProps>()

// Emits
const emit = defineEmits<{
  'item-opened-color': [itemIndex: number]
  'close': []
}>()

// Theme
const theme = useTheme()

// Data
const moleculeColor = ref('cyan')

// Methods
function handleAccountButtonClick() {
  console.log('Should do something with the users account')
  emit('close')
}

function handleMenuClick() {
  emit('close')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.isOpened)
    emit('close')
}

// Computed
const classes = computed(() => {
  return ['global-menu-panel', theme?.value || '', { 'is-opened': props.isOpened }]
})

// Parsed Sub Menu Items - to add classes
const parsedSubMenuItems = computed(() => {
  return props.subMenuItems.map((item) => {
    const supportUsClass = item.label?.toLowerCase() === 'support us' ? ' support-us' : ''

    return {
      ...item,
      classes: supportUsClass
    }
  })
})

// Lifecycle Hooks
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div :class="classes">
    <ul class="menu-items">
      <li
        v-for="item in menuItems"
        :key="item.label"
        class="menu-item"
      >
        <SmartLink
          :to="item.to"
          class="menu-link"
          @click="handleMenuClick"
        >
          {{ item.label }}
        </SmartLink>
      </li>
    </ul>

    <ul class="sub-menu-items">
      <li
        v-for="item in parsedSubMenuItems"
        :key="item.label"
        class="menu-item"
      >
        <SmartLink
          :to="item.to"
          :class="item.classes"
          class="menu-link"
          @click="handleMenuClick"
        >
          {{ item.label }}
        </SmartLink>
      </li>

      <button
        class="account-button"
        @click="handleAccountButtonClick"
      >
        My Account
      </button>
    </ul>

    <component
      :is="Molecule3d"
      width="150"
      height="247"
      viewBox="50 57 50 250"
      class="molecule"
      :class="moleculeColor"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_global-menu-panel.scss";
</style>
