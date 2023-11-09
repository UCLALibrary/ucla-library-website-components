<script lang="ts" setup>
import SvgLogoUclaLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import NavMenuItem from '@/lib-components/NavMenuItem.vue'

import type { NavPrimaryItemType } from '@/types/types'

const { items, currentPath, title, acronym } = defineProps({
  items: {
    type: Array as PropType<NavPrimaryItemType[]>,
    default: () => [],
  },
  currentPath: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  acronym: {
    type: String,
    default: '',
  },
})

const route = useRoute()
const isOpened = ref(false)
const activeMenuIndex = ref(-1)

const classes = computed(() => [
  'nav-primary',
  { 'is-opened': isOpened.value },
  { 'not-hovered': activeMenuIndex.value === -1 },
  { 'has-title': title },
  { 'has-acronym': acronym },
])
const shouldRenderSmartLink = computed(() => title || acronym)
const noChildren = computed(() => {
  if (!title)
    return []
  return items.filter(item => !item.children || !item.children.length)
})

const supportLinks = computed(() => {
  return items.filter(item => !item.children || !item.children.length)
})

const currentPathActiveIndex = computed(() => {
  const currentPathNew = currentPath || route.path
  return items.findIndex(item => item.url && currentPathNew.includes(item.url))
})

const parsedItems = computed(() =>
  items
    .filter(item => item.children && item.children.length)
    .map((item, index) => ({
      ...item,
      isActive: index === activeMenuIndex.value,
    }))
)

onMounted(() => {
  activeMenuIndex.value = currentPathActiveIndex.value
})

function toggleMenu() {
  isOpened.value = !isOpened.value
  if (!isOpened.value) {
    document.body.setAttribute('tabindex', '-1')
    document.body.focus()
    document.body.removeAttribute('tabindex')
  }
}

function setActive(index: number) {
  activeMenuIndex.value = index
}

function clearActive() {
  activeMenuIndex.value = currentPathActiveIndex.value
}
</script>

<template>
  <nav aria-label="Primary Navigation" :class="classes">
    <div class="item-top">
      <SmartLink v-if="shouldRenderSmartLink" to="/" :aria-label="title ? '' : `UCLA Library home page`">
        <div v-if="title" class="title">
          <span class="full-title"> {{ title }} </span>
          <span v-if="acronym" class="acronym"> {{ acronym }} </span>
        </div>
        <SvgLogoUclaLibrary v-else class="svg logo-ucla" alt="UCLA Library logo blue" />
      </SmartLink>
      <a v-else href="/" :aria-label="title ? '' : `UCLA Library home page`">
        <div v-if="title" class="title">
          <span class="full-title"> {{ title }} </span>
          <span v-if="acronym" class="acronym"> {{ acronym }} </span>
        </div>
        <SvgLogoUclaLibrary v-else class="svg logo-ucla" alt="UCLA Library logo blue" />
      </a>
    </div>

    <ul class="menu">
      <NavMenuItem
        v-for="(item, index) in parsedItems" :key="`NavMenuItem-${item.name}`" :item="item"
        :is-active="item.isActive" :is-opened="isOpened" @click="toggleMenu" @mouseover="setActive(index)"
        @mouseleave="clearActive"
      />
      <li v-for="item in noChildren" :key="`nav-primary-${item.name}`" class="nochildren-links">
        <SmartLink class="nochildren-link underline-hover" :to="item.to" :link-target="item.target">
          {{ item.name }}
        </SmartLink>
      </li>
    </ul>

    <div v-if="!title" class="support-links">
      <div v-for="item in supportLinks" :key="`nav-primary-support-${item.name}`" class="item-top">
        <SmartLink class="support-link underline-hover" :to="item.to">
          {{ item.name }}
        </SmartLink>
      </div>
    </div>

    <div class="background-white" />
    <div v-if="isOpened" class="background-blue" @click="toggleMenu" />
    <div v-if="isOpened" class="click-blocker" @click="toggleMenu" />
  </nav>
</template>

<style lang="scss" scoped>
.nav-primary {
  --unit-height: 80px;
  padding: 0 var(--unit-gutter);
  position: relative;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: flex-start;

  .item-top {
    height: var(--unit-height);
    position: relative;
    z-index: 10;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .nuxt-link-active {
      color: var(--color-primary-blue-03);
    }
  }

  .logo-ucla {
    height: 23px;
    width: auto;
  }

  .title {
    @include step-1;
    color: var(--color-primary-blue-03);
    text-transform: initial;
    letter-spacing: normal;
    position: relative;
    @include min-clickable-area;
  }

  .menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: relative;
    z-index: 10;
  }

  .support-links {
    // removing support-link from nav-primary with display
    display: none;
    position: relative;
    z-index: 10;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 18px;
      bottom: 18px;
      width: 1px;
      background-color: var(--color-secondary-grey-02);
    }

    .item-top {
      display: inline-flex;
      margin-left: 30px;
    }
  }

  .background-white {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-secondary-grey-02);
    z-index: 0;
  }

  .background-blue {
    background-color: var(--color-primary-blue-03);
    position: absolute;
    top: var(--unit-height);
    bottom: 0;
    width: 100%;
    left: 0;
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
    border-bottom: 1px solid var(--color-secondary-grey-02);
    z-index: 0;
  }

  .click-blocker {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
  }

  &.has-acronym .acronym {
    display: none;
  }

  &.has-title {
    .nochildren-links {
      padding: 0;
      position: relative;
      min-width: 128px;
      max-width: 300px;
      display: inline-block;
      vertical-align: top;

      .nochildren-link {
        height: var(--unit-height);
        line-height: var(--unit-height);
        text-align: center;

        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        position: relative;

        @include min-clickable-area;
      }
    }
  }

  // States
  &.is-opened {
    .background-blue {
      opacity: 0.9;
    }
  }

  // Hovers
  &.not-hovered {
    ::v-deep .nav-menu-item .sub-menu {
      opacity: 1;
    }
  }

  // Hover states
  @media (max-width: 1330px) {
    &.has-acronym {
      .full-title {
        display: none;
      }

      .acronym {
        display: block;
      }
    }
  }
}
</style>
