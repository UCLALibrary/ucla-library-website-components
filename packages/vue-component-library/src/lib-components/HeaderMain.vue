<script lang="ts" setup>
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import type { PropType } from 'vue'
import NavPrimary from '@/lib-components/NavPrimary.vue'
import NavSecondary from '@/lib-components/NavSecondary.vue'
import { useTheme } from '@/composables/useTheme'

// types
import type { NavPrimaryItemType, NavSecondaryItemType } from '@/types/types'

// Define props and destructure them
const props = defineProps({
  primaryNav: {
    type: Array as PropType<NavPrimaryItemType[]>,
    default: () => [],
  },
  secondaryNav: {
    type: Array as PropType<NavSecondaryItemType[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
})
const theme = useTheme()
const classes = computed(() => {
  return ['header-main', theme?.value || '']
})

// Use `toRefs` to make each prop reactive individually
const { primaryNav, secondaryNav, title } = toRefs(props)

// Set up reactive refs for each prop
const primaryNavRef = ref(primaryNav.value)
const secondaryNavRef = ref(secondaryNav.value)
const titleRef = ref(title.value)

// Move the watcher inside onMounted hook
onMounted(() => {
  watch(
    [primaryNav, secondaryNav, title],
    ([newPrimaryNav, newSecondaryNav, newTitle]) => {
      // console.log("HeaderMain: new values", newPrimaryNav, newSecondaryNav, newTitle)
      primaryNavRef.value = newPrimaryNav
      secondaryNavRef.value = newSecondaryNav
      titleRef.value = newTitle
    },
    { deep: true }
  )
})

// Computed property to parse the title
const parseTitle = computed(() => {
  return !!titleRef.value
})
</script>

<template>
  <div :class="classes">
    <NavSecondary
      v-if="secondaryNavRef.length > 0 && theme !== 'dlc'"
      :items="secondaryNavRef"
      :is-microsite="parseTitle"
    />
    <NavPrimary
      v-if="primaryNavRef.length > 0"
      class="primary"
      :items="primaryNavRef"
      :title="titleRef"
    />
  </div>
</template>

<style lang="scss" scoped>
.header-main {
    z-index: 200;

    position: relative;
    height: 128px;

    .primary {
        position: absolute;
    }

    // TODO nav on smaller viewports
}
</style>
