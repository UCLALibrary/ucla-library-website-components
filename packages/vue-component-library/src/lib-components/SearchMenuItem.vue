<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import { useRoute, useRouter } from 'vue-router'
import SearchInput from '@/lib-components/SearchInput.vue'
import { useTheme } from '@/composables/useTheme'

const isOpen = ref(false)
const inputEl = ref<HTMLInputElement | null>(null)

const route = useRoute()
const searchWords = ref<string>('')
const theme = useTheme()

watch(() => route.query.q, (newVal) => {
  console.log('searchWords', newVal)
  if (route.path.includes('search-site') && newVal)
    searchWords.value = Array.isArray(newVal) ? (newVal[0] || '') : (newVal || '')
}, { immediate: true })

const themeSettings = computed(() => {
  switch (theme?.value) {
    case 'ftva':
      return {
        url: '/search-site',
        queryParam: 'q',
        placeholder: 'Enter keywords to search this website',
      }
    case 'meap':
      return {
        url: '/search-site',
        queryParam: 'q',
        placeholder: 'Enter keywords to search this website',
      }
    default:
      return {
        url: '/search-site',
        queryParam: 'q',
        placeholder: 'Search the library website',
      }
  }
})

async function toggleSearch() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await nextTick()
    inputEl.value?.focus()
  }
}

function closeSearch() {
  isOpen.value = false
}

const router = useRouter()

function submitSearch() {
  closeSearch()
  router.push({
    path: themeSettings.value.url,
    query: { [themeSettings.value.queryParam as string]: searchWords.value },
  })
}
</script>

<template>
  <div class="search-dropdown">
    <!-- Trigger Button -->
    <button
      class="search-trigger"
      role="button"
      aria-label="Search"
      @click="toggleSearch"
    >
      <IconSearch class="icon-search" />
    </button>

    <!-- Overlay Container -->
    <div
      v-if="isOpen"
      class="search-box"
    >
      <button
        class="close-btn"
        aria-label="Close search"
        @click="closeSearch"
      >
        <SvgGlyphClose class="svg-glyph-close" />
      </button>
      <form
        class="input-container-wrapper"
        name="searchHome"
        @submit.prevent=""
      >
        <div class="input-container">
          <SearchInput
            v-model="searchWords"
            class="search-input"
            :placeholder="themeSettings.placeholder"
            @clear="submitSearch"
            @keyup.enter="submitSearch"
          />
          <button
            class="button-submit"
            type="submit"
            @click="submitSearch"
          >
            <IconSearch class="icon" />
          </button>
        </div>
        <div class="divider" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-dropdown {
  position: relative;

}

.search-trigger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.search-box {
  position: absolute;
  top: 44px;
  width: 700px;
  // max-width: 100%;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  padding: 0.5rem;
  z-index: 1000;
  height: 150px;
  line-height: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.input-container-wrapper {
  position: absolute;
  width: 640px;
  top: 40px;
  right: 30px;
  padding-bottom: 10px;
}

.close-btn {
  position: absolute;
  right: 15px;
  top: 0px;
  z-index: 1;
  height: 10px;
}

.svg-glyph-close {
  width: 20px;
}

.input-container {
  display: flex;
  background-color: var(--color-primary-blue-01);
  border-color: transparent;
  height: 60px;

  .icon {
    &:hover {
      :deep(.svg__fill--primary-blue-03) {
        fill: var(--color-default-cyan-03);
      }
    }
  }

  .search-input {
    flex-grow: 1;
  }

  :deep(.search-input-wrapper input[data-search-input=true]) {
    padding: 15px 20px;
  }

  .button-submit {
    display: flex;
    align-items: center;
    padding: 0 24px;
  }
}

.divider {
  margin-top: 16px;
  border-bottom: 2px solid var(--color-default-cyan-03);
  height: 1px;
}

.close-btn {
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
</style>
