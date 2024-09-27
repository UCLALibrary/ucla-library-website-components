<script lang="ts" setup>
// components
import SvgLogoUclaLibrary from 'ucla-library-design-tokens/assets/svgs/logo-library.svg'
import { computed, ref, shallowRef, watch } from 'vue'
import type { PropType } from 'vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

// vue

// types
import type { NavSecondaryItemType } from '@/types/types'

const { items, isMicrosite } = defineProps({
  items: {
    type: Array as PropType<NavSecondaryItemType[]>,
    default: () => [],
  },
  isMicrosite: {
    type: Boolean,
    default: false,
  },
})

// Convert `items` to a shallow reactive reference
const itemsRef = shallowRef(items) // Or you can use `toRef(props, 'items')`

const secondaryItems = ref(itemsRef.value || [])
console.log(items, secondaryItems.value)

watch(
  itemsRef, // This is now a reactive source
  (newVal, oldVal) => {
    console.log('NavSecondary updated from nuxt layout or nuxt app.vue', newVal, oldVal)
    secondaryItems.value = newVal || []
  },
  { deep: true, immediate: true }
)

const classes = computed(() => {
  return [
    'flex-container',
    { 'flex-container-not-microsite': !isMicrosite },
    { 'flex-container-microsite': isMicrosite },
  ]
})
const parsedLinks = computed(() => {
  return (secondaryItems.value || []).map((obj) => {
    console.log('nav-secondary:', JSON.stringify(obj))
    let support = 'list-item'
    if (obj?.classes)
      support = `${support} ${obj?.classes}`
    return {
      ...obj,
      classes: support,
    }
  })
})

const parsedItemsMinusAccount = computed(() => {
  return parsedLinks?.value?.slice(0, -1)
})
const accountLink = computed(() => {
  return parsedLinks.value && parsedLinks.value.length > 0 ? parsedLinks?.value[parsedLinks?.value?.length - 1] : null
})
</script>

<template>
  <nav
    aria-label="Secondary Navigation"
    class="nav-secondary"
  >
    <div :class="classes">
      <a
        v-if="isMicrosite"
        href="https://www.library.ucla.edu"
        target="_blank"
        aria-label="UCLA Library home page"
      >
        <SvgLogoUclaLibrary
          class="svg logo-ucla"
          alt="UCLA Library logo blue"
        />
      </a>

      <div class="navigation-list">
        <ul
          v-if="!isMicrosite"
          class="list"
        >
          <li
            v-for="item in parsedItemsMinusAccount"
            :key="`nav-secondary-${item.name}`"
            :class="item.classes"
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

        <ButtonLink
          v-if="!isMicrosite && accountLink"
          :label="accountLink?.name"
          class="account-button"
          :link-target="accountLink?.target"
          :to="accountLink?.to"
          :is-secondary="true"
        />

        <ul
          v-if="isMicrosite"
          class="link-list"
        >
          <li
            v-for="item in parsedLinks"
            :key="`nav-secondary-${item.name}`"
            :class="item.classes"
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
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-secondary {
  padding: 12px var(--unit-gutter);
  border-bottom: 1px solid var(--color-secondary-grey-02);

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .flex-container-not-microsite {
    justify-content: flex-end;
    align-content: flex-end;
    align-items: center;
  }

  .flex-container-microsite {
    justify-content: space-between;
    align-content: flex-end;
    align-items: center;
  }

  .navigation-list {
    margin-top: 3px;
    align-content: right;
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    align-self: center;
  }

  .list-item {
    display: inline-block;
    margin-left: 50px;
    font-size: 18px;
    line-height: 1;

    &:first-child {
      margin-left: 0;
    }
  }

  .support-link {
    font-weight: $font-weight-medium;
    color: var(--color-primary-blue-04);
  }

  :deep(.account-button) {
    color: var(--color-white);
    background-color: var(--color-primary-blue-04);
    border-color: var(--color-primary-blue-04);
    border-radius: 4px;
    padding: 2px 12px;
    font-weight: $font-weight-medium;
    margin-left: 48px;
    min-height: unset;

    :not(:only-child):first-child {
      padding: 0;
    }

    .arrow {
      display: none;
    }
  }

  // Hover states
  @media #{$has-hover} {

    .link:hover,
    .link:active {
      color: var(--color-primary-blue-03);
    }
  }
}
</style>
