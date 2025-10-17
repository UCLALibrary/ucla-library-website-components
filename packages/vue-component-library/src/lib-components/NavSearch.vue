<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ButtonDropdownSearch from './ButtonDropdownSearch.vue'
import DividerGeneral from './DividerGeneral.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { useTheme } from '@/composables/useTheme'

import SearchInput from '@/lib-components/SearchInput.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import type { MediaItemType } from '@/types/types'

const props = withDefaults(defineProps<NavSearchProps>(), {
  placeholder: 'Enter keywords to search this website',
  dropdownOptions: () => [],
  dropdownModelValue: '',
  showDivider: false,
  bottomText:
        'Looking for a specific collection item? Search the UCLA Film & Television Archive Catalog at ',
  bottomLink: () => ({
    label: 'UC LIBRARY SEARCH >',
    to: 'https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&mode=advanced',
  }),
})
// Emitting events
const emit = defineEmits(['search-complete', 'update:dropdownModelValue'])
// Async import icons based on theme
const IconSearch = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-ftva-search.svg')
)
const IconSearchDlc = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-search.svg')
)

interface NavSearchProps {
  placeholder?: string
  backgroundImage?: MediaItemType
  dropdownOptions?: string[]
  dropdownModelValue?: string
  showDivider?: boolean
  bottomText?: string
  bottomLink?: {
    label: string
    to: string
  } | null
}

const theme = useTheme()
const router = useRouter()
const route = useRoute()

// DEFAULT CONTENT
// if this component ever needs to be reused with different content,
// we can pass these as default props instead
const hasDropdownOptions = computed(() => {
  console.log('hasDropdownOptions', props.dropdownOptions)
  return props.dropdownOptions && props.dropdownOptions.length > 0
})

const hasBackgroundImage = computed(() => {
  return (
    props.backgroundImage
        && typeof props.backgroundImage === 'object'
        && props.backgroundImage.src
  )
})

const hasDivider = computed(() => {
  if (theme?.value !== 'dlc')
    return false

  return props.showDivider && !hasBackgroundImage.value
})

const classes = computed(() => {
  return [
    'nav-search',
    theme?.value || '',
    { 'has-dropdown': hasDropdownOptions.value },
    { 'has-divider': hasDivider.value },
    { 'has-background': hasBackgroundImage.value },
  ]
})

const isDlcTheme = computed(() => {
  return theme?.value === 'dlc'
})

// SEARCH
const searchWords = ref<string>(
  Array.isArray(route.query.q) ? route.query.q[0] || '' : route.query.q || ''
)
const dropdownValue = computed({
  get: () => props.dropdownModelValue,
  set: (value: string) => {
    emit('update:dropdownModelValue', value)
  },
})

function doSearch() {
  if (dropdownValue.value) {
    router.push({
      path: '/search',
      query: { q: searchWords.value, scope: dropdownValue.value },
    })
  }
  else {
    router.push({
      path: '/search',
      query: { q: searchWords.value },
    })
  }
  emit('search-complete')
}
</script>

<template>
  <div :class="classes">
    <ResponsiveImage
      v-if="hasBackgroundImage"
      :media="backgroundImage!"
      class="background-image"
    />

    <span class="top-row">
      <IconSearch v-if="!isDlcTheme" class="icon" />
      <SearchInput
        v-model="searchWords"
        class="search-input"
        :placeholder="placeholder"
        @clear="doSearch"
        @keyup.enter="doSearch"
      />
      <button v-if="isDlcTheme" class="icon-button" @click="doSearch">
        <IconSearchDlc class="icon" />
      </button>

      <ButtonDropdownSearch
        v-if="hasDropdownOptions"
        v-model="dropdownValue"
        :options="dropdownOptions"
        :is-long="false"
        class="button-dropdown-search"
      />
      <ButtonLink
        v-if="!isDlcTheme"
        label="Search Site"
        icon-name="none"
        class="button-link"
        @click="doSearch"
      />
    </span>
    <DividerGeneral
      v-if="hasDivider"
      :is-tertiary="true"
      class="divider-general"
    />

    <span v-if="bottomText || bottomLink?.label" class="bottom-row">
      {{ bottomText }}
      <SmartLink
        v-if="bottomLink?.label"
        id="search-link"
        :to="bottomLink?.to"
        class="bottom-link"
      >
        {{ bottomLink?.label }}
      </SmartLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-search.scss";
@import "@/styles/ftva/_nav-search.scss";
@import "@/styles/dlc/_nav-search.scss";
</style>
