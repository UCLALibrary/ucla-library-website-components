<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'
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
const theme = useTheme()
const router = useRouter()

// DEFAULT CONTENT
// if this component ever needs to be reused with different content,
// we can pass these as default props instead
const defaultBottomText = 'Looking for something else? Search the Film & Television Archive Catalog at '
const defaultBottomLink = {
  label: 'UC LIBRARY SEARCH >',
  to: 'https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&tab=Articles_books_more_slot&search_scope=ArticlesBooksMore&lang=en&query=any,contains,',
}
const classes = computed(() => {
  return ['nav-search', theme?.value || '']
})

// SEARCH
const searchWords = ref('')
function doSearch() {
  router.push({
    path: '/search-site',
    query: { q: searchWords.value },
  })
}
</script>

<template>
  <div :class="classes">
    <span class="top-row">
      <IconSearch class="icon" />
      <SearchInput
        v-model="searchWords" class="search-input" :placeholder="placeholder" @clear="doSearch"
        @keyup.enter="doSearch"
      />
      <ButtonLink label="search site" icon-name="none" class="button-link" @click="doSearch" />
    </span>
    <span class="bottom-row">
      {{ defaultBottomText }}
      <SmartLink id="search-link" :to="defaultBottomLink.to" class="bottom-link">
        {{ defaultBottomLink.label }}
      </SmartLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
