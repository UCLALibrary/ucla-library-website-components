<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-ftva-search.svg'
import { useTheme } from '@/composables/useTheme'

import SearchInput from '@/lib-components/SearchInput.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: 'Enter keywords to search this website',
  },
})

// Emitting events
const emit = defineEmits(['search-complete'])

const theme = useTheme()
const router = useRouter()
const route = useRoute()

// DEFAULT CONTENT
// if this component ever needs to be reused with different content,
// we can pass these as default props instead
const defaultBottomText = 'Looking for a specific collection item? Search the UCLA Film & Television Archive Catalog at '
const defaultBottomLink = {
  label: 'UC LIBRARY SEARCH >',
  to: 'https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&mode=advanced',
}
const classes = computed(() => {
  return ['nav-search', theme?.value || '']
})

// SEARCH
const searchWords = ref<string>(
  Array.isArray(route.query.q)
    ? route.query.q[0] || ''
    : route.query.q || ''
)
function doSearch() {
  router.push({
    path: '/search',
    query: { q: searchWords.value },
  })
  emit('search-complete')
}
</script>

<template>
  <div :class="classes">
    <span class="top-row">
      <IconSearch class="icon" />
      <SearchInput
        v-model="searchWords"
        class="search-input"
        :placeholder="placeholder"
        @clear="doSearch"
        @keyup.enter="doSearch"
      />
      <ButtonLink
        label="Search Site"
        icon-name="none"
        class="button-link"
        @click="doSearch"
      />
    </span>

    <span class="bottom-row">
      {{ defaultBottomText }}
      <SmartLink
        id="search-link"
        :to="defaultBottomLink.to"
        class="bottom-link"
      >
        {{ defaultBottomLink.label }}
      </SmartLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_nav-search.scss";
@import "@/styles/ftva/_nav-search.scss";
</style>
