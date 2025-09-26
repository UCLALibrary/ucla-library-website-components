<script setup lang="ts">
// Imports
import Molecule3d from 'ucla-library-design-tokens/assets/svgs/molecule-3d.svg'
import { computed, ref } from 'vue'

// Props
type GlobalMenuPanelProps = {
  isOpened: boolean
  menuItems: any[]
  subMenuItems: any[]
}
const props = defineProps<GlobalMenuPanelProps>()

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
  return ['global-menu-panel', props.isOpened ? 'is-opened' : 'is-closed']
})

// Parsed Sub Menu Items - to give classes
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
    <div class="menu-items">
      <ul>
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
    </div>

    <div class="sub-menu-items">
      <ul>
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
    </div>

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
.global-menu-panel {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 54px;

  min-height: 100dvh;

  background-color: var(--color-primary-blue-03);

  .menu-items {
    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;

      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      font-size: 28px;
      font-weight: 500;
      text-transform: uppercase;
      color: var(--color-white);
    }
  }

  .sub-menu-items {
    ul {

      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .menu-item {
      font-family: var(--font-primary);
      font-weight: 400;
      line-height: 1;
      color: var(--color-white);
    }

    &.support-us {
      margin-top: 24px;

      font-family: var(--font-primary);
      font-size: 20px;
      font-weight: 400;
      line-height: 1;
    }
  }

  .account-button {
    padding: 2px 12px;
    box-sizing: border-box;
    border-radius: 4px;

    max-width: max-content;

    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;
    color: var(--color-primary-blue-03);

    background-color: var(--color-white);
  }

  .molecule {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;

    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    filter: FlipV;
    -ms-filter: "FlipV";
  }

  .cyan {
    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--color-default-cyan-02);
    }
  }

  .green {
    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--color-help-green-02);
    }
  }

  .pink {
    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--color-visit-fushia-02);
    }
  }

  .purple {
    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--color-about-purple-03);
    }
  }

  // Hovers
  @media #{$has-hover} {}

  // Breakpoints
  @media #{$extra-large} {}

  @media #{$medium} {}

  @media #{$small} {}
}
</style>
