<script setup lang="ts">
// Imports
import Molecule3d from 'ucla-library-design-tokens/assets/svgs/molecule-3d.svg'
import { computed, ref } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useTheme } from '@/composables/useTheme'

// Props
type GlobalMenuPanelProps = {
  isOpened: boolean
  menuItems: any[]
  subMenuItems: any[]
}
const props = defineProps<GlobalMenuPanelProps>()

// Theme
const theme = useTheme()

// Emits
const emit = defineEmits<{
  'item-opened-color': [itemIndex: number]
}>()

// Data
const moleculeColor = ref('cyan')

// Methods
function itemOpenedColor(itemIndex: number) {
  if (itemIndex === 0)
    moleculeColor.value = 'green'
  else if (itemIndex === 1)
    moleculeColor.value = 'pink'
  else if (itemIndex === 2)
    moleculeColor.value = 'purple'

  if (props.isOpened === false)
    moleculeColor.value = 'cyan'

  emit('item-opened-color', itemIndex)
}

function handleAccountButtonClick() {
  console.log('Should do something with the users account');

}

// Expose methods for parent component
defineExpose({
  itemOpenedColor
})

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
