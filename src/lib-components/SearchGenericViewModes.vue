<script setup>
import { ref, computed } from 'vue'

import SvgIconCaretDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg"
import SvgIconCalendar from "ucla-library-design-tokens/assets/svgs/icon-calendar.svg"
import SvgIconCard from "ucla-library-design-tokens/assets/svgs/icon-card.svg"
import SvgIconList from "ucla-library-design-tokens/assets/svgs/icon-list.svg"

const props = defineProps({
  isOpened: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => [],
  },
  selected: {
    type: String,
    default: "",
  },
})

const emit = defineEmits(['update:isOpened', 'update:selected', 'view-changed'])

const isOpened = ref(props.isOpened)

const classes = computed(() => {
  return ["search-generic-view-modes", { "is-opened": isOpened.value }]
})

const selectedItem = computed(() => {
  return props.items.find(item => item.slug == props.selected) || {}
})

const parsedItems = computed(() => {
  return props.items.map(item => {
    let classes = "list-item"
    if (item.slug == props.selected) {
      classes += " is-active"
    }
    return { ...item, classes }
  })
})
const svgList = new Map([
  ["icon-calendar", SvgIconCalendar],
  ["icon-list", SvgIconList],
  ["icon-card", SvgIconCard]
])
const parsedSelectedSVG = (iconName) => {
  return svgList.get(iconName)
}
const toggleOpen = () => {
  isOpened.value = !isOpened.value
  emit('update:isOpened', isOpened.value)
}

const onClick = (slug) => {
  emit('update:selected', slug)
  emit('view-changed', slug)
}
</script>
<template>
  <div
    :class="classes"
    @click="toggleOpen"
  >
    <button class="view-btn">
      <div class="selected">
        <span v-if="!selected">View</span>
        <component
          :is="parsedSelectedSVG(selectedItem.iconName)"
          class="svg"
        />
      </div>

      <div class="chevron">
        <SvgIconCaretDown class="svg" />
      </div>
    </button>

    <ul class="view-list">
      <li
        v-for="view in parsedItems"
        :key="view.slug"
        :class="view.classes"
        @click.stop="onClick(view.slug)"
      >
        <component
          :is="parsedSelectedSVG(view.iconName)"
          class="svg"
        />
        <div v-html="view.title" />
      </li>
    </ul>
  </div>
</template>

<style
  scoped
  lang="scss"
>
.search-generic-view-modes {
  position: relative;

  margin-left: 8px;
  font-family: var(--font-secondary);
  font-size: 18px;

  .view-btn {
    width: 106px;
    height: 60px;
    font-size: 18px;
    overflow: hidden;

    font-family: var(--font-secondary);
    color: var(--color-white);
    background-color: var(--color-primary-blue-03);
    padding: 0 50px 0 16px;
    position: relative;

    border-radius: 0;
    border: 1.5px solid transparent;

    transition-property: border-color, border-radius;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  .selected {
    width: 100%;
    text-align: center;

    .svg {
      display: inline-block;
      transform: translateY(2px);

      rect {
        stroke: white;
      }

      .svg__stroke--default-cyan-03 {
        stroke: white;
      }

      .svg__icon-list svg {
        stroke: white;
      }
    }


  }

  .svg__icon-calendar {
    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }

    :deep(.svg__stroke--default-cyan-03) {
      stroke: white;
    }
  }

  .svg__icon-card {
    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }

    :deep(.svg__stroke--default-cyan-03) {
      stroke: white;
    }
  }

  .svg__icon-list {
    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }

    :deep(.svg__stroke--default-cyan-03) {
      stroke: white;
    }
  }

  .chevron {
    font-size: 16px;
    color: var(--color-white);
    position: absolute;
    width: 40px;
    right: 0;
    top: 0;
    height: 100%;
    transition: background-color 400ms ease-in-out;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    .svg path {
      stroke: var(--color-white);
    }


  }

  .svg__icon-caret-down {
    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }
  }

  .svg path {
    stroke: var(--color-white); // default list
  }

  .view-list {
    margin-top: 8px;
    list-style: none;
    background-color: var(--color-primary-blue-03);
    color: var(--color-white);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    text-align: center;
    border-radius: var(--rounded-slightly-all);
    border: 1.5px solid transparent;
    padding: 16px 8px;

    position: absolute;
    top: 100%;
    /*right: 0;*/

    transition-property: opacity, max-height, border;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
  }

  .list-item {
    height: 72px;
    padding: 12px 8px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: var(--rounded-slightly-all);
    transition: background-color 400ms ease-in-out;

    .svg {
      display: block;
      margin: 0 auto;

      rect {
        stroke: white; // card
      }
    }
  }

  // Open state
  &.is-opened {
    .view-btn {
      border-radius: var(--rounded-slightly-all);
      border-color: var(--color-fushia-03);
    }

    .view-list {
      max-height: 275px;
      opacity: 1;
      border-color: var(--color-fushia-03);
    }
  }

  // Hovers
  @media #{$has-hover} {
    .list-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
