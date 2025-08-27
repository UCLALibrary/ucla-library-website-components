<script setup lang="ts">
// Props
type BentoPodProps = {
    title: string
    description: string
    buttonLabel?: string
    buttonLink?: string
    items: Array<Record<string, any>>
    labelOpen?: string
    labelClose?: string
}
const props = withDefaults(defineProps<BentoPodProps>(), {
    title: "",
    description: "",
    buttonLabel: "",
    buttonLink: "",
    items: () => [],
    labelOpen: "Less",
    labelClose: "More",
})

// Imports
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import DividerGeneral from "./DividerGeneral.vue"
import SvgExternalLink from "ucla-library-design-tokens/assets/svgs/icon-external-link.svg"
import SvgArrowDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

// Data
const isExpanded = ref(false)
const itemsWrapper = ref<HTMLElement | null>(null)
const itemRefs = ref<(HTMLElement | null)[]>([])
const expandedHeight = ref(0)
const debounceTimeout = ref<number | undefined>(undefined)

// Computed
const classes = computed(() => [
    "bento-pod",
    theme?.value || "",
    {
        "is-expanded": isExpanded.value,
    },
])

const dynamicLabel = computed(() =>
    isExpanded.value ? props.labelOpen : props.labelClose
)

const firstItems = computed(() => props.items.slice(0, 3))
const extraItems = computed(() => props.items.slice(3))

const showButton = computed(() => extraItems.value.length > 0)

const wrapperStyles = computed(() => ({
    height: isExpanded.value ? `${expandedHeight.value}px` : "0px",
    overflow: "hidden",
    transition: "height 0.3s",
}))

// Methods
function measureHeights() {
    nextTick(() => {
        // Only measure the expandable section
        let expanded = 0
        for (let i = 0; i < itemRefs.value.length; i++) {
            const el = itemRefs.value[i]
            if (el) expanded += el.getBoundingClientRect().height
        }
        expandedHeight.value = expanded
    })
}

function debounceMeasureHeights() {
    clearTimeout(debounceTimeout.value)
    debounceTimeout.value = window.setTimeout(() => {
        measureHeights()
    }, 100)
}

function toggle() {
    isExpanded.value = !isExpanded.value
    debounceMeasureHeights()
}

function getItemRef(idx: number) {
    return (el: HTMLElement | null) => setItemRef(idx, el)
}
function setItemRef(idx: number, el: HTMLElement | null) {
    itemRefs.value[idx] = el
}

// Lifecycle Hooks
onMounted(() => {
    debounceMeasureHeights()
    window.addEventListener("resize", debounceMeasureHeights)
})
onUnmounted(() => {
    window.removeEventListener("resize", debounceMeasureHeights)
})
</script>

<template>
    <div :class="classes">
        <h4 class="title" v-html="title" v-if="title" />
        <div class="description" v-html="description" v-if="description" />

        <smart-link
            class="pod-button"
            :to="buttonLink"
            v-if="buttonLabel && buttonLink"
        >
            <span class="button-label underline-hover" v-html="buttonLabel" />
            <SvgExternalLink aria-hidden="true" />
        </smart-link>

        <div>
            <!-- Always visible first 3 items -->
            <div class="items">
                <div
                    class="item"
                    v-for="(item, index) in firstItems"
                    :key="item.title ? item.title + index : index"
                >
                    <smart-link v-if="item.to" :to="item.to" class="item-link">
                        <h5
                            v-if="item.title"
                            class="item-title"
                            v-html="item.title"
                        />
                    </smart-link>
                    <h5
                        v-else-if="item.title"
                        class="item-title"
                        v-html="item.title"
                    />
                    <div class="item-details">
                        <span
                            v-for="(value, key) in item.meta"
                            :key="key"
                            :class="'item-' + key"
                        >
                            <strong>{{ key }}:</strong>
                            <span class="detail" v-html="value" />
                        </span>
                    </div>
                    <DividerGeneral class="divider" />
                </div>
            </div>
            <!-- Expandable extra items -->
            <div class="items" :style="wrapperStyles" ref="itemsWrapper">
                <div
                    class="item extra"
                    v-for="(item, index) in extraItems"
                    :key="item.title ? item.title + (index + 3) : index + 3"
                    :ref="(el) => getItemRef(index)(el as HTMLElement | null)"
                >
                    <smart-link v-if="item.to" :to="item.to" class="item-link">
                        <h5
                            v-if="item.title"
                            class="item-title"
                            v-html="item.title"
                        />
                    </smart-link>
                    <h5
                        v-else-if="item.title"
                        class="item-title"
                        v-html="item.title"
                    />
                    <div class="item-details">
                        <span
                            v-for="(value, key) in item.meta"
                            :key="key"
                            :class="'item-' + key"
                        >
                            <strong>{{ key }}:</strong>
                            <span class="detail" v-html="value" />
                        </span>
                    </div>
                    <DividerGeneral class="divider" />
                </div>
            </div>
        </div>

        <button
            v-if="showButton"
            class="btn"
            :aria-expanded="isExpanded"
            @click="toggle"
        >
            <transition name="fade-label" mode="out-in">
                <span :key="dynamicLabel" class="label" v-html="dynamicLabel" />
            </transition>
            <SvgArrowDown aria-hidden="true" class="caret-icon" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-pod.scss";
</style>
