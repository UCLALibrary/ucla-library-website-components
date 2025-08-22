<script setup lang="ts">
// Imports
import {
    computed,
    defineProps,
    onMounted,
    onUnmounted,
    ref,
    nextTick,
} from "vue"
import { useTheme } from "@/composables/useTheme"
import SvgArrowDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg"

const theme = useTheme()

// Props
type NotesAccordionItem = {
    items: Array<{
        title: string
        text: string
    }>
    labelOpen?: string
    labelClose?: string
}
const props = withDefaults(defineProps<NotesAccordionItem>(), {
    items: () => [],
    labelOpen: "Less",
    labelClose: "More",
})

// Data
const isOpen = ref(false)
const textRefs = ref<(HTMLElement | null)[]>([])
const textHeight = ref(0)

// Computed
const classes = computed(() => [
    "notes-accordion",
    theme?.value || "",
    { "is-open": isOpen.value },
])

const dynamicLabel = computed(() =>
    isOpen.value ? props.labelOpen : props.labelClose
)

const wrapperStyles = computed(() => ({
    height: isOpen.value ? `${textHeight.value}px` : "0",
}))

// Methods
function measureTextHeight() {
    let totalHeight = 0
    for (const ref of textRefs.value) {
        if (ref) {
            totalHeight += ref.getBoundingClientRect().height
        }
    }
    textHeight.value = totalHeight
}

function toggle() {
    isOpen.value = !isOpen.value
    nextTick(() => {
        measureTextHeight()
    })
}

function getTextRef(idx: number) {
    return (el: HTMLElement | null) => setTextRef(idx, el)
}

function setTextRef(idx: number, el: HTMLElement | null) {
    textRefs.value[idx] = el
}

// Lifecycle Hook
onMounted(() => {
    measureTextHeight()
    window.addEventListener("resize", measureTextHeight)
})
onUnmounted(() => {
    window.removeEventListener("resize", measureTextHeight)
})
</script>

<template>
    <div :class="classes">
        <div class="wrapper" :style="wrapperStyles">
            <div
                v-for="(item, idx) in items"
                :key="idx"
                :ref="getTextRef(idx)"
                class="text-wrapper"
            >
                <span class="title" v-html="item.title" />
                <div class="text" v-html="item.text" />
            </div>
        </div>
        <button class="btn" :aria-expanded="isOpen" @click="toggle">
            <transition name="fade-label" mode="out-in">
                <span :key="dynamicLabel" class="label" v-html="dynamicLabel" />
            </transition>
            <SvgArrowDown class="caret-icon" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_notes-accordion.scss";
</style>
