<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { PropType } from 'vue'

import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'

import SearchInput from '@/lib-components/SearchInput.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

import type { SearchLinkItemType } from '@/types/types'

const { linkItems, advancedSearchLink } = defineProps({

  linkItems: {
    type: Array as PropType<SearchLinkItemType[]>,
    default: () => [],
  },

  advancedSearchLink: {
    type: Object as PropType<SearchLinkItemType>,
    default: () => {},
  },
})

const tabs = [
  {
    title: 'Site Search',
    actionURL: '/search-site',
    queryParam: 'q',
    placeholder: 'Search the library website',
  },
  {
    title: 'UC Library Search',
    actionURL:
          'https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&tab=Articles_books_more_slot&search_scope=ArticlesBooksMore&lang=en&query=any,contains,',
    placeholder: 'Search articles, books and more',
  },
]

const router = useRouter()

const searchtab = ref(null)
const searchWords = ref('')
const activeTabIndex = ref(1)

const parsedTabs = computed(() => {
  return tabs.map((obj, index) => {
    let classes = 'tab'
    if (index === activeTabIndex.value)
      classes = 'tab is-active'

    return {
      ...obj,
      classes,
    }
  })
})

// const isMaterialsSearch = computed(() => {
//   return activeTabIndex.value === 1
// })

const isSiteSearch = computed(() => {
  return activeTabIndex.value === 0
})

const actionUrl = computed(() => {
  return tabs[activeTabIndex.value].actionURL
})

const placeholder = computed(() => {
  return tabs[activeTabIndex.value].placeholder
})

const queryParam = computed(() => {
  return tabs[activeTabIndex.value].queryParam
})

const queryifySearchWords = computed(() => {
  // Replaces spaces with '+' for search words.
  return searchWords.value.split(' ').join('+')
})

function doSearch() {
  if (isSiteSearch.value) {
    router.push({
      path: actionUrl.value,
      query: { [queryParam as any]: searchWords.value },
    })
  }
  else {
    window.location.href = `${actionUrl.value}${queryifySearchWords.value}`
  }
}

function setActiveTab(index: number) {
  activeTabIndex.value = index
}
</script>

<template>
  <div class="search-home">
    <div v-if="parsedTabs.length" class="tabs">
      <button
        v-for="(tab, index) in parsedTabs"
        :key="tab.title"
        ref="searchtab"
        :class="tab.classes"
        @click="setActiveTab(index)"
        v-text="tab.title"
      />
    </div>

    <div class="box">
      <form name="searchHome" :action="actionUrl" @submit.prevent="">
        <div class="input-container">
          <!-- input
                      v-model="searchWords"
                      type="search"
                      class="input-search"
                      :placeholder="placeholder"
                  / -->
          <SearchInput
            v-model:model-value="searchWords"
            class="search-input"
            :placeholder="placeholder"
            @keyup.enter="doSearch"
          />
          <button class="button-submit" @click="doSearch">
            <IconSearch class="icon" />
          </button>
        </div>
      </form>

      <div class="divider" />

      <nav v-if="linkItems.length || advancedSearchLink" class="links">
        <div v-if="linkItems.length" class="regular-links">
          <SmartLink
            v-for="link in linkItems"
            :key="link.url"
            class="link"
            :to="link.url"
            v-text="link.text"
          />
        </div>

        <div v-if="advancedSearchLink" class="advanced-links">
          <SmartLink
            :to="advancedSearchLink.url"
            v-text="advancedSearchLink.text"
          />
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-home {
  .tabs {
      display: flex;
      justify-content: flex-end;

      cursor: pointer;
  }

  .tab {
      padding: 20px 25px;
      background-color: var(--color-primary-blue-01);
      border: 1px solid transparent;
      border-radius: var(--rounded-slightly-top);
      transition: background-color 400ms ease-in-out;

      &.is-active {
          background-color: var(--color-white);
          margin-right: 0;
      }

      &:not(.is-active) {
          margin: 0 4px 4px 4px;
      }

      &:last-child {
          margin-right: 0;
      }
  }

  .box {
      background-color: var(--color-white);
      padding: 30px 50px 0 50px;
      border: 1px solid transparent;
      border-top-left-radius: 4px;
  }

  .input-container {
      display: flex;
      background-color: var(--color-primary-blue-01);
      border-color: transparent;

      .icon {
          &:hover {
              :deep(.svg__fill--primary-blue-03) {
                  fill: var(--color-default-cyan-03);
              }
          }
      }

      input {
          font-family: var(--font-primary);
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 100%;
          letter-spacing: 0.01em;
          background-color: var(--color-primary-blue-01);
          border-color: transparent;
          padding: 24px;
          width: 100%;

          &::placeholder {
              text-transform: uppercase;
              font-family: var(--font-primary);
          }
      }

      .search-input {
          flex-grow: 1;
      }

      .button-submit {
          display: flex;
          align-items: center;
          padding: 0 24px;
      }
  }

  .input-search {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0.01em;
      background-color: var(--color-primary-blue-01);
      border-color: transparent;
      padding: 27px 37px 27px 95px;
      width: 100%;

      &::placeholder {
          text-transform: uppercase;
      }
  }

  .divider {
      margin-top: 16px;
      border-bottom: 2px solid var(--color-default-cyan-03);
      height: 1px;
  }

  .links {
      display: flex;
      margin: 24px 0;
  }

  .regular-links {
      display: flex;

      .link {
          display: flex;

          &:after {
              content: "";
              border-right: 2px solid #efefef;
              margin: 0 24px;
          }

          &:last-child:after {
              display: none;
          }
      }
  }

  .advanced-links {
      color: var(--color-primary-blue-03);
      margin-left: auto;
      text-transform: uppercase;
  }

  // Breakpoints
  @media #{$small} {
      .tabs {
          font-size: 14px;
      }

      .box {
          padding: 18px 24px;
      }

      .input-container {
          .input-search {
              font-size: 16px;
              padding: 20px 0 20px 12px;
          }

          .button-submit {
              padding-right: 12px;
              padding-left: 0;
          }
      }

      .links {
          display: unset;
          font-size: 14px;
      }

      .regular-links {
          margin-top: 20px;
          margin-right: 12px;

          .vertical-divider {
              margin: 0 4px;
          }
      }

      .advanced-links {
          margin-top: 24px;
      }
  }
}
</style>
