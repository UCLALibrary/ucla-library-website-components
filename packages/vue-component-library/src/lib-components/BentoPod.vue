<script setup lang="ts">
// Imports
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import SvgExternalLink from 'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
import DividerGeneral from './DividerGeneral.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ButtonShowDynamic from '@/lib-components/ButtonShowDynamic.vue'
import { useTheme } from '@/composables/useTheme'

const props = withDefaults(defineProps<BentoPodProps>(), {
  title: '',
  description: '',
  buttonLabel: '',
  buttonLink: '',
  items: () => [],
  labelOpen: 'Less',
  labelClose: 'More',
})

const theme = useTheme()

// Props
interface BentoPodProps {
  title: string
  description: string
  buttonLabel?: string
  buttonLink?: string
  items: Array<Record<string, any>>
  labelOpen?: string
  labelClose?: string
}
// Data
const isExpanded = ref(false)
const itemRefs = ref<(HTMLElement | null)[]>([])
const expandedHeight = ref(0)
const debounceTimeout = ref<number | undefined>(undefined)

// Computed
const classes = computed(() => [
  'bento-pod',
  theme?.value || '',
  {
    'is-expanded': isExpanded.value,
  },
])

const firstItems = computed(() => props.items.slice(0, 3))
const extraItems = computed(() => props.items.slice(3))

const showButton = computed(() => extraItems.value.length > 0)

const wrapperStyles = computed(() => ({
  height: isExpanded.value ? `${expandedHeight.value}px` : '0px',
  overflow: 'hidden',
  transition: 'height 0.3s',
}))

// Methods
function measureHeights() {
  nextTick(() => {
    // Only measure the expandable section
    let expanded = 0
    for (let i = 0; i < itemRefs.value.length; i++) {
      const el = itemRefs.value[i]
      if (el)
        expanded += el.getBoundingClientRect().height
    }
    expandedHeight.value = expanded
  })
}

function debounceMeasureHeights() {
  clearTimeout(debounceTimeout.value)
  debounceTimeout.value = window.setTimeout(() => {
    measureHeights()
  }, 100)
}

function toggle() {
  isExpanded.value = !isExpanded.value
  debounceMeasureHeights()
}

function getItemRef(idx: number) {
  return (el: HTMLElement | null) => setItemRef(idx, el)
}
function setItemRef(idx: number, el: HTMLElement | null) {
  itemRefs.value[idx] = el
}

// Lifecycle Hooks
onMounted(() => {
  debounceMeasureHeights()
  window.addEventListener('resize', debounceMeasureHeights)
})
onUnmounted(() => {
  window.removeEventListener('resize', debounceMeasureHeights)
})
</script>

<template>
  <div :class="classes">
    <h4
      v-if="title"
      class="title"
      v-html="title"
    />

    <SmartLink
      v-if="buttonLabel && buttonLink"
      class="pod-button"
      :to="buttonLink"
    >
      <span
        class="button-label underline-hover"
        v-html="buttonLabel"
      />
      <SvgExternalLink aria-hidden="true" />
    </SmartLink>

    <div>
      <!-- Always visible first 3 items -->
      <div class="items">
        <div
          v-for="(item, index) in firstItems"
          :key="item.title ? item.title + index : index"
          class="item"
        >
          <SmartLink
            v-if="item.to"
            :to="item.to"
            class="item-link"
          >
            <h5
              v-if="item.title"
              class="item-title"
              v-html="item.title"
            />
          </SmartLink>
          <h5
            v-else-if="item.title"
            class="item-title"
            v-html="item.title"
          />
          <div class="item-details">
            <span
              v-for="(value, key) in item.meta"
              :key="key"
              :class="`item-${key}`"
            >
              <strong>{{ key }}:</strong>
              <span
                class="detail"
                v-html="value"
              />
            </span>
          </div>
          <DividerGeneral class="divider" />
        </div>
      </div>
      <!-- Expandable extra items -->
      <div
        class="items"
        :style="wrapperStyles"
      >
        <div
          v-for="(item, index) in extraItems"
          :key="item.title ? item.title + (index + 3) : index + 3"
          :ref="(el) => getItemRef(index)(el as HTMLElement | null)"
          class="item extra"
        >
          <SmartLink
            v-if="item.to"
            :to="item.to"
            class="item-link"
          >
            <h5
              v-if="item.title"
              class="item-title"
              v-html="item.title"
            />
          </SmartLink>
          <h5
            v-else-if="item.title"
            class="item-title"
            v-html="item.title"
          />
          <div class="item-details">
            <span
              v-for="(value, key) in item.meta"
              :key="key"
              :class="`item-${key}`"
            >
              <strong>{{ key }}:</strong>
              <span
                class="detail"
                v-html="value"
              />
            </span>
          </div>
          <DividerGeneral class="divider" />
        </div>
      </div>
    </div>

    <ButtonShowDynamic
      :is-expanded="isExpanded"
      :label-open="labelOpen"
      :label-close="labelClose"
      :show="showButton"
      variant="default"
      @click="toggle"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-pod.scss";
</style>
