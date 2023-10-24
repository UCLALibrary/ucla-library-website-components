<script setup>

// vue
import { computed, watch, ref } from 'vue'

// components
import SmartLink from '@/lib-components/SmartLink.vue'



const { item, index, goBack } = defineProps(
    {
        item: {
            type: Object,
            default: () => { },
        },
        index: {
            type: Number,
            default: 0,
        },
        goBack: {
            type: Boolean,
            default: false,
        },
    }
)
const emits = defineEmits(['shouldOpen', 'itemOpenedColor', 'closeMainMenu'])

const parsedChildren = computed(() => {
    return item.children.map((obj) => {
        return {
            ...obj,
            classes: `sub-menu-link ${obj.classes || ''}`,
        }
    })
})

function toggleItem(itemIndex) {
    const subMenuItemInfoElement = document.querySelectorAll(
        `[data-sub-menu-item-id="${itemIndex}"]`
    )[0]
    const subMenuItemInfoElementReset = document.querySelectorAll(
        `ul:not([data-sub-menu-item-id="${itemIndex}"])`
    )
    const subMenuTitleElement = document.querySelectorAll(
        `li span:not([data-sub-menu-title-id="${itemIndex}"])`
    )
    if (subMenuItemInfoElement.classList.contains('block')) {
        subMenuItemInfoElement.classList.remove('block')
        subMenuItemInfoElement.classList.add('hidden')

        for (const title of subMenuTitleElement) {
            // title.classList.remove("hidden")
            title.classList.add('block')
        }
    }
    else {
        subMenuItemInfoElement.classList.remove('hidden')
        subMenuItemInfoElement.classList.add('block')

        for (const title of subMenuTitleElement)
            title.classList.remove('block')
        // title.classList.add("hidden")

        for (const title of subMenuItemInfoElementReset) {
            // title.classList.remove("hidden")
            title.classList.remove('block')
            title.classList.add('hidden')
        }
    }
    emits('shouldOpen')
    emits('itemOpenedColor', itemIndex)
}
function resetAccordion() {
    // this.$emit("shouldOpen")

    const subMenuTitleElement = document.querySelectorAll(
        '[data-sub-menu-title-id]'
    )
    for (const title of subMenuTitleElement) {
        title.classList.remove('hidden')
        title.classList.add('block')
    }
    const subMenuItemInfoElement = document.querySelectorAll(
        '[data-sub-menu-item-id]'
    )
    for (const item of subMenuItemInfoElement) {
        item.classList.remove('block')
        item.classList.add('hidden')
    }
}
function closeMenu() {
    emits('closeMainMenu')
}

// Wrap the goBack prop in a ref to make it reactive
const goBackRef = ref(goBack)

// Define a watcher for goBackRef
watch(goBackRef, (newVal) => {
    if (newVal) {
        resetAccordion()
    }
})
</script>

<template>
    <li class="nav-menu-item">
        <button class="section-name block" :data-sub-menu-title-id="index" @click="toggleItem(index)">
            {{ item.name }}
        </button>

        <ul :data-sub-menu-item-id="index" class="sub-menu hidden">
            <li v-for="child in parsedChildren" :key="child.id" class="sub-menu-item" @click="closeMenu">
                <SmartLink :class="child.classes" :to="child.to" :link-target="child.target">
                    {{ child.name }}
                </SmartLink>
            </li>
        </ul>
    </li>
</template>

<style lang="scss" scoped>
.nav-menu-item {
    margin: 0;
    padding: 0;
    position: relative;

    // Top level menu
    .section-name {
        margin-bottom: 24px;
        line-height: 28px;
        font-size: 28px;
        font-weight: 600;
        text-align: left;
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        position: relative;
        color: white;
        cursor: pointer;
        @include min-clickable-area;
        padding: 0;

        &.block {
            display: block;
        }

        &.hidden {
            display: none;
        }
    }

    // Sub menu
    .sub-menu {
        list-style: none;
        font-size: 20px;
        font-weight: 400;
        font-family: var(--font-secondary);
        line-height: 24px;
        letter-spacing: 0.01em;
        color: var(--color-white);

        &.block {
            display: block;
        }

        &.hidden {
            display: none;
        }
    }

    .sub-menu-item {
        &:first-child {
            margin-top: 32px;
        }

        &:last-child {
            margin-bottom: 32px;
        }
    }

    .sub-menu-link {
        margin-bottom: 24px;
        display: inline-block;
        position: relative;

        @include min-clickable-area;
    }
}
</style>
