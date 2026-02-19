<script lang="ts" setup>
// Components
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'
import IconCloseLarge from 'ucla-library-design-tokens/assets/svgs/icon-close-large.svg'
import Molecule3d from 'ucla-library-design-tokens/assets/svgs/molecule-3d.svg'
import IconMenu from 'ucla-library-design-tokens/assets/svgs/icon-menu.svg'
import LogoLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import SvgLibraryLogoDlc from 'ucla-library-design-tokens/assets/svgs/logo-library-digital-collections.svg'
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavMenuItemResponsive from '@/lib-components/NavMenuItemResponsive.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import SearchInput from '@/lib-components/SearchInput.vue'

// DLC
import GlobalHamburger from '@/lib-components/GlobalHamburger.vue'

// Vue
import { useTheme } from '@/composables/useTheme'

// types
import type { NavPrimaryItemType, NavSecondaryItemType } from '@/types/types'

const props = defineProps(
  {
    primaryNav: {
      // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
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
    acronym: {
      type: String,
      default: '',
    }
  },
)

const emit = defineEmits(['toggle-menu'])

const theme = useTheme()

const isOpened = ref(false)
const isItemOpened = ref(false)
const goBack = ref(false)
const moleculeColor = ref('cyan')

const classes = computed(() => {
  return [
    'header-main-responsive',
    isOpened.value ? 'fullHeight' : 'collapsedHeight',
    { 'has-title': props.title },
    { 'has-acronym': props.acronym },
    theme?.value || '',
  ]
})

const parsedLogo = computed(() => {
  return theme?.value === 'dlc'
    ? {
        width: undefined,
        height: '20',
        svg: SvgLibraryLogoDlc,
      }
    : {
        width: '155',
        height: '55',
        svg: LogoLibrary,
      }
})

const parseAriaLabel = computed(() => {
  return props.title ? props.title : 'UCLA Library home page'
})
const parsedSvgName = computed(() => {
  return IconCloseLarge
})
const parsedPrimaryMenuItems = computed(() => {
  // Return only items that have children (assume these are dropdowns)
  return props.primaryNav.filter((obj) => {
    return obj.children && obj.children.length
  })
})

function isSupportUsItem(item: NavSecondaryItemType): boolean {
  return item.name?.toLowerCase().includes('support') || false
}
const noChildren = computed(() => {
  // For DLC theme, show items without children even without a title
  if (!props.title && theme?.value !== 'dlc')
    return []

  return props.primaryNav.filter((obj) => {
    // Return items that don't have sub-menu children
    return !obj.children || !obj.children.length
  })
})
const supportLinks = computed(() => {
  // Generally this is just the last "Support Us" link, but we are going to allow it to be more than 1
  return props.primaryNav.filter((obj) => {
    // Return items that don't have sub-menu children
    return !obj.children || !obj.children.length
  })
})
function shouldOpen() {
  isItemOpened.value = !isItemOpened.value
  goBack.value = false
}
function handleCloseOrReturn() {
  goBack.value = !goBack.value
  moleculeColor.value = 'cyan'

  isOpened.value = false
}
function itemOpenedColor(itemIndex: number) {
  if (itemIndex === 0)
    moleculeColor.value = 'green'
  else if (itemIndex === 1)
    moleculeColor.value = 'pink'
  else if (itemIndex === 2)
    moleculeColor.value = 'purple'

  if (isItemOpened.value === false)
    moleculeColor.value = 'cyan'
}

function toggleMenu() {
  isOpened.value = !isOpened.value
  goBack.value = !goBack.value
}

const route = useRoute()
const searchWords = ref<string>(Array.isArray(route.query.q) ? route.query.q[0] || '' : route.query.q || '')

const router = useRouter()

function submitSearch() {
  toggleMenu()
  router.push({
    path: '/search-site',
    query: { q: searchWords.value },
  })
}
</script>

<template>
  <nav
    role="navigation"
    aria-label="Menu"
    :class="classes"
  >
    <div
      v-show="!isOpened"
      class="collapsed-menu"
    >
      <SmartLink
        class="clickable-parent"
        to="/"
        :aria-label="parseAriaLabel"
      >
        <div
          v-if="title"
          class="title"
        >
          <span class="full-title"> {{ title }} </span>
          <span
            v-if="acronym"
            class="acronym"
          > {{ acronym }} </span>
        </div>
        <component
          :is="parsedLogo.svg"
          v-else
          :width="parsedLogo.width"
          :height="parsedLogo.height"
          class="logo-ucla"
          role="button"
        />
      </SmartLink>
      <div class="more-menu">
        <button
          v-if="theme !== 'dlc'"
          class="search-button"
          role="button"
          aria-label="Search button"
          @click="toggleMenu"
        >
          <IconSearch class="icon-search" />
        </button>

        <GlobalHamburger
          v-if="theme === 'dlc'"
          class="hamburger show-mobile"
          :is-opened="isOpened"
          @toggle-menu="toggleMenu"
        />

        <button
          v-else
          role="button"
          class="open-menu"
          aria-label="Open menu"
          :is-opened="isOpened"
          @click="toggleMenu"
        >
          <component
            :is="IconMenu"
            class="hamburguer"
          />
        </button>
      </div>
    </div>
    <div
      v-show="isOpened"
      class="expanded-menu-container"
    >
      <div class="expanded-menu">
        <SmartLink
          class="clickable-parent"
          to="/"
          :aria-label="parseAriaLabel"
          @click="toggleMenu"
        >
          <div
            v-if="title"
            class="title opened-title"
          >
            <span class="full-title"> {{ title }} </span>
            <span
              v-if="acronym"
              class="acronym"
            >
              {{ acronym }}
            </span>
          </div>
          <component
            :is="parsedLogo.svg"
            v-else
            :width="parsedLogo.width"
            :height="parsedLogo.height"
            class="expanded-logo"
            @click="toggleMenu"
          />
        </SmartLink>

        <button
          v-if="theme !== 'dlc'"
          role="button"
          class="close-menu"
          aria-label="Close menu"
          @click="handleCloseOrReturn"
        >
          <component
            :is="parsedSvgName"
            class="close-svg"
          />
        </button>
        <GlobalHamburger
          v-if="theme === 'dlc'"
          class="hamburger show-mobile"
          :is-opened="isOpened"
          @toggle-menu="toggleMenu"
        />
      </div>
      <div
        v-if="theme !== 'dlc'"
        class="search-box"
      >
        <form
          class="input-container-wrapper"
          name="searchHome"
          @submit.prevent=""
        >
          <div class="input-container">
            <SearchInput
              v-model="searchWords"
              class="search-input"
              @clear="submitSearch"
              @keyup.enter="submitSearch"
            />
            <button
              class="button-submit"
              type="submit"
              aria-label="Submit search"
              @click="submitSearch"
            >
              <IconSearch class="icon" />
            </button>
          </div>
          <div class="divider" />
        </form>
      </div>
      <ul class="nav-menu-primary">
        <NavMenuItemResponsive
          v-for="(item, index) in parsedPrimaryMenuItems"
          :key="item.name"
          :item="item"
          :index="index"
          :go-back="goBack"
          @should-open="shouldOpen"
          @item-opened-color="itemOpenedColor"
          @close-main-menu="toggleMenu"
        />
        <li
          v-for="item in noChildren"
          :key="`nochildren-${item.name}`"
          class="nochildren-links"
        >
          <SmartLink
            class="nochildren-link"
            :to="item.to"
          >
            {{ item.name }}
          </SmartLink>
        </li>
      </ul>
      <div
        v-if="isOpened && !title && theme !== 'dlc'"
        class="nav-menu-secondary"
      >
        <ul class="list">
          <li
            v-for="item in secondaryNav"
            :key="item.name"
            class="list-item"
            @click="toggleMenu"
          >
            <SmartLink
              class="link underline-hover"
              :to="item.to"
              :link-target="item.target"
            >
              {{ item.name }}
            </SmartLink>
          </li>
        </ul>
      </div>

      <div
        v-if="theme === 'dlc' && secondaryNav.length"
        class="nav-menu-info"
      >
        <ul class="list">
          <li
            v-for="item in secondaryNav"
            :key="item.name"
            class="list-item"
            @click="toggleMenu"
          >
            <SmartLink
              class="link"
              :class="[{ 'support-link': isSupportUsItem(item) }]"
              :to="item.to"
              :link-target="item.target"
            >
              {{ item.name }}
            </SmartLink>
          </li>
        </ul>
      </div>
      <div
        v-if="!title && theme !== 'dlc'"
        class="support-us-container"
      >
        <ButtonLink
          v-if="supportLinks.length"
          :label="supportLinks[0].name"
          :is-secondary="true"
          class="button"
          :to="supportLinks[0].to"
          icon-name="none"
          @click="toggleMenu"
        />
      </div>
      <!-- moleculeColor class on this svg component does not do anything ask Axa -->
      <component
        :is="Molecule3d"
        width="150"
        height="247"
        viewBox="50 57 50 250"
        class="molecule"
        :class="moleculeColor"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_header-main-responsive.scss";
@import "@/styles/dlc/_header-main-responsive.scss";
</style>
