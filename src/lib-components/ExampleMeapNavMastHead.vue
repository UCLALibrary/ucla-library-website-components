<script>
import { mapState } from 'pinia'
import MastheadSecondary from '@/lib-components/MastheadSecondary'
import SearchGeneric from '@/lib-components/SearchGeneric'
import HeaderSmart from '@/lib-components/HeaderSmart'

// Pinia
import { useGlobalStore } from '@/stores/GlobalStore'

export default {
  name: 'ExampleMeapNavMastHead',
  components: {
    MastheadSecondary,
    HeaderSmart,
    SearchGeneric,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        {
          name: 'Neque porro quisquam',
        },
        {
          name: 'Qui dolorem ipsum quia dolor',
        },
        {
          name: 'Consectetur, adipisci velit.',
        },
        {
          name: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        },
        {
          name: 'Excepteur sint occaecat cupidatat non proident',
        },
        {
          name: 'Vel illum qui dolorem eum fugiat',
        },
        {
          name: 'Quis nostrum exercitationem ullam',
        },
        {
          name: 'Quis autem vel eum iure reprehenderit',
        },
        {
          name: 'Excepteur sint occaecat cupidatat non proident1',
        },
        {
          name: 'Vel illum qui dolorem eum fugiat1',
        },
        {
          name: 'Quis nostrum exercitationem ullam1',
        },
        {
          name: 'Quis autem vel eum iure reprehenderit1',
        },
      ],

      searchFilters: [
        {
          label: 'Location',
          esFieldName: 'location',
          inputType: 'radio',
          items: this.items
        },
        {
          label: 'Department',
          esFieldName: 'departments.title.keyword',
          inputType: 'checkbox',
          items: this.items
        },
        {
          label: 'Subject Librarian',
          esFieldName: 'subjectLibrarian.keyword',
          inputType: 'single-checkbox',
        },
      ],

      searchGenericQuery: {
        queryText: '',
        queryFilters: {},
      }

    }
  },
  computed: {
    ...mapState(useGlobalStore, ['header', 'winWidth']),
    primaryMenuItems() {
      return this.header.primary
    },
    secondaryMenuItems() {
      return this.header.secondary
    },
    isMobile() {
      return this.winWidth <= 1150
    },
    whichHeader() {
      return this.isMobile ? 'header-main-responsive' : 'header-main'
    },
  },
  methods: {
    getSearchData() {
      console.log('search is ready')
    }
  },
}
</script>

<template>
  <div class="test-meap-nav-masthead">
    <HeaderSmart title="Modern Endangered Archives Program" />

    <main id="main">
      <MastheadSecondary
        title="Modern Endangered Archives Program"
        text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities."
        theme="meap"
      />
      <SearchGeneric
        v-if="isSearch"
        search-type="about"
        :filters="searchFilters"
        class="generic-search"
        :search-generic-query="searchGenericQuery"
        :placeholder="Test"
        @search-ready="getSearchData"
      />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@media #{$medium} {
  .brand-bar {
    position: absolute;
    width: 100%;
  }
}
</style>
