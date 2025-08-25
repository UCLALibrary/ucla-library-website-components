<script setup lang="ts">
// Imports
import BentoBoxBlock from "@/lib-components/BentoBoxBlock.vue"
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from "vue"
import type { MediaItemType } from "@/types/types"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()
// Props
type BentoBoxResultProps = {
    title: string
    items: Array<{
        to: string
        image: MediaItemType
        title: string
        text: string
        count?: number
    }>
}
defineProps<BentoBoxResultProps>()

// Data
const itemsRef = ref<HTMLElement | null>(null)
const thumbRef = ref<HTMLElement | null>(null)

let dragging = ref(false)
let dragStartX = ref(0)
let startScrollLeft = ref(0)
let thumbStartLeft = ref(0)

// Computed
const classes = computed(() => {
    return ["bento-box-result", theme?.value || ""]
})

// Methods
function updateThumb() {
    const items = itemsRef.value
    const thumb = thumbRef.value
    if (!items || !thumb) return
    const { scrollWidth, clientWidth, scrollLeft } = items
    if (scrollWidth <= clientWidth) {
        thumb.style.opacity = "0"
        return
    } else {
        thumb.style.opacity = "1"
    }
    const ratio = clientWidth / scrollWidth
    const thumbWidth = Math.max(clientWidth * ratio, 40)
    const maxThumbLeft = clientWidth - thumbWidth
    const maxScrollLeft = scrollWidth - clientWidth
    const thumbLeft = maxScrollLeft
        ? (scrollLeft / maxScrollLeft) * maxThumbLeft
        : 0
    thumb.style.width = thumbWidth + "px"
    thumb.style.left = thumbLeft + "px"
}

function onScroll() {
    updateThumb()
}

function onThumbMousedown(e: MouseEvent) {
    dragging.value = true
    dragStartX.value = e.clientX
    startScrollLeft.value = itemsRef.value?.scrollLeft || 0
    thumbStartLeft.value = thumbRef.value?.offsetLeft || 0
    document.addEventListener("mousemove", onThumbMousemove)
    document.addEventListener("mouseup", onThumbMouseup)
}

function onThumbMousemove(e: MouseEvent) {
    if (!dragging.value || !itemsRef.value || !thumbRef.value) return
    const items = itemsRef.value
    const thumb = thumbRef.value
    const { scrollWidth, clientWidth } = items
    const thumbWidth = thumb.offsetWidth
    const maxThumbLeft = clientWidth - thumbWidth
    const maxScrollLeft = scrollWidth - clientWidth
    const deltaX = e.clientX - dragStartX.value
    const newThumbLeft = Math.min(
        Math.max(thumbStartLeft.value + deltaX, 0),
        maxThumbLeft
    )
    const newScrollLeft = (newThumbLeft / maxThumbLeft) * maxScrollLeft
    items.scrollLeft = newScrollLeft
}

function onThumbMouseup() {
    dragging.value = false
    document.removeEventListener("mousemove", onThumbMousemove)
    document.removeEventListener("mouseup", onThumbMouseup)
}

// Lifecycle Hooks
onMounted(() => {
    nextTick(() => {
        updateThumb()
        itemsRef.value?.addEventListener("scroll", onScroll)
        window.addEventListener("resize", updateThumb)
    })
})
onBeforeUnmount(() => {
    itemsRef.value?.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", updateThumb)
})
</script>

<template>
    <div :class="classes">
        <h5 class="title" v-html="title" />
        <div class="items" ref="itemsRef">
            <div
                class="item"
                v-for="(item, index) in items"
                :key="item.title + index"
            >
                <BentoBoxBlock
                    class="block"
                    :to="item.to"
                    :image="item.image"
                    :title="item.title"
                    :text="item.text"
                    :count="item.count"
                />
            </div>
        </div>
        <div class="custom-scrollbar">
            <div
                class="custom-scrollbar-thumb"
                ref="thumbRef"
                @mousedown="onThumbMousedown"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-box-result.scss";
</style>
