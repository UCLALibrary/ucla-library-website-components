<script setup lang="ts">
// Imports
import BentoBoxBlock from "@/lib-components/BentoBoxBlock.vue"
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import type { MediaItemType } from "@/types/types"
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
    if (!dragging || !itemsRef.value || !thumbRef.value) return
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
    <div class="bento-box-result">
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
.bento-box-result {
    height: auto;

    background-color: var(--color-primary-blue-01);

    padding: 17px 30px 35px;
    box-sizing: border-box;

    max-height: max-content;
    .title {
        margin: 0 0 10px;

        text-align: center;

        font-family: var(--font-primary);
        font-size: 38px;
        font-style: normal;
        font-weight: 600;
        line-height: 110%; /* 41.8px */
    }
    .items {
        padding: 0 0 20px;
        box-sizing: border-box;

        display: flex;
        gap: 20px;

        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .items::-webkit-scrollbar {
        display: none;
    }
    .custom-scrollbar {
        width: 100%;
        height: 16px;
        background: var(--color-white);
        border-radius: 10px;
        margin-top: 4px;
        position: relative;
        overflow: hidden;
    }
    .custom-scrollbar-thumb {
        height: 100%;
        background: var(--color-grey-03, #999);
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;

        cursor: pointer;
        transition: opacity 0.15s ease-in-out;
    }
    .item {
        min-width: 275px;
        max-width: 275px;

        background-color: var(--color-white);

        border-radius: 5px;
    }
}
</style>
