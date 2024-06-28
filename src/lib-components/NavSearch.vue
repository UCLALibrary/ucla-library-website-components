<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useTheme } from '@/composables/useTheme' 

import SearchInput from '@/lib-components/SearchInput.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import SmartLink from './SmartLink.vue'
// TODO ftva version?
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'

const theme = useTheme()

// SEARCH
const emit = defineEmits(['search-ready'])
const searchWords = ref('')
// const searchWords = ref(searchGenericQuery ? searchGenericQuery.queryText : '') // this.$route.query.q
// const selectedFilters = ref(searchGenericQuery ? searchGenericQuery.queryFilters : {})

// DEFAULT CONTENT
// if this component is every reused with different content, we can pass this text as props
const defaultBottomText = 'text text text link link link'
const defaultBottomLink = {
    label: 'link',
    to: '/search',
}

function doSearch() {
    // console.log('dosearch called')
    // console.log(
    //     `selected filters in component are: ${JSON.stringify(selectedFilters.value)}`
    // )
    // console.log(
    //     `search text in component are: ${JSON.stringify(searchWords.value)}`
    // )
    emit('search-ready', {
        // filters: selectedFilters.value,
        text: searchWords.value,
    })
}

const parsedClasses = computed(() => {
    return ['nav-search', theme?.value || '']
})
</script>
<template>
    <div :class="parsedClasses">
        <span class="top-row">
            <SearchInput v-model="searchWords" class="search-input" :placeholder="placeholder" @clear="doSearch"
                @keyup.enter="doSearch" />
            <button class="button-submit" @click="doSearch">
                <!-- TODO FTVA ICON-->
                <IconSearch class="icon" />
            </button>
            <!-- can button link get correct jcon / content ? -->
            <!-- <ButtonLink v-if="!isDark" :label="parsedContent.label" :to="parsedContent.to" :is-secondary="true"
                class="button-link" /> -->
        </span>
        <span class="bottom-row">
            {{ defaultBottomText }}
            <SmartLink id="search-link" :to="defaultBottomLink.to">
                {{ defaultBottomLink.label }}
            </SmartLink>
        </span>
    </div>
</template>
<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>