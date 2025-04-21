<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'
import SearchInput from '@/lib-components/SearchInput.vue'
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import { useTheme } from '@/composables/useTheme'
import { useRouter, useRoute } from 'vue-router'


const isOpen = ref(false)
const searchQuery = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

const route = useRoute()
const searchWords = ref(route.query.q)
const theme = useTheme()

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

const toggleSearch = async () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await nextTick()
    inputEl.value?.focus()
  }
}

const closeSearch = () => {
  isOpen.value = false
  searchQuery.value = ''
}

const router = useRouter()


const submitSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: themeSettings.value.url,
      query: { [themeSettings.value.queryParam as string]: searchWords.value },
    })
  }
  closeSearch()
}

</script>
<template>
  <div class="search-dropdown">
    <!-- Trigger Button -->
    <ButtonLink
      class="search-trigger"
      icon-name="none"
      aria-label="Search"
      @click="toggleSearch"
    >
      <IconSearch class="icon-search" />
    </ButtonLink>



    <!-- Overlay Container -->
    <div
      v-if="isOpen"
      class="search-box"
    >

      <button
        @click="closeSearch"
        class="close-btn"
        aria-label="Close search"
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

.svg__icon-close.svg-glyph-close {
  position: absolute;
  right: 24px;
  width: 20px;
  top: 10px;
  z-index: 1;
}

/*.search-input {
  flex: 1;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
}*/
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
