<script setup lang="ts">
// Props
type BentoPodProps = {
    title: string
    description: string
    buttonLabel?: string
    buttonLink?: string
    items: Array<{
        title: string
        type: string
        date: string
        program: string
        to: string
    }>
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

// Data
const isExpanded = ref(false)
const itemsWrapper = ref<HTMLElement | null>(null)
const itemRefs = ref<(HTMLElement | null)[]>([])
const collapsedHeight = ref(0)
const expandedHeight = ref(0)
const debounceTimeout = ref<number | undefined>(undefined)

// Computed
const classes = computed(() => [
    "bento-pod",
    {
        "is-expanded": isExpanded.value,
    },
])
const dynamicLabel = computed(() =>
    isExpanded.value ? props.labelOpen : props.labelClose
)

const showButton = computed(() => (props.items?.length || 0) > 3)

const wrapperStyles = computed(() => ({
    height: isExpanded.value
        ? `${expandedHeight.value}px`
        : `${collapsedHeight.value}px`,
}))

// Methods
function measureHeights() {
    nextTick(() => {
        if (!props.items) return
        // Measure collapsed height (first 3 items)
        let collapsed = 0
        for (let i = 0; i < Math.min(3, itemRefs.value.length); i++) {
            const el = itemRefs.value[i]
            if (el) collapsed += el.getBoundingClientRect().height
        }
        collapsedHeight.value = collapsed
        // Measure expanded height (all items)
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

        <div class="items" :style="wrapperStyles" ref="itemsWrapper">
            <div
                :to="item.to"
                class="item"
                v-for="(item, index) in props.items"
                :key="item.title + index"
                :ref="(el) => getItemRef(index)(el as HTMLElement | null)"
            >
                <smart-link :to="item.to" class="item-link">
                    <h5 class="item-title" v-html="item.title" />
                </smart-link>
                <div class="item-details">
                    <span class="item-type">
                        Resource Type:
                        <span class="detail" v-html="item.type" />
                    </span>
                    <span class="item-date">
                        Date: <span class="detail" v-html="item.date" />
                    </span>
                </div>
                <span class="item-program">
                    Program: <span class="detail" v-html="item.program" />
                </span>
                <DividerGeneral class="divider" />
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
.bento-pod {
    padding: 20px;
    box-sizing: border-box;

    border-radius: 4px;
    border: 1px solid var(--color-primary-blue-05);

    .title {
        font-family: var(--font-primary);
        font-size: 36px;
        font-weight: 600;
        line-height: 100%; /* 36px */
        color: var(--color-primary-blue-05);
    }

    .description {
        font-family: var(--font-secondary); // Proxima Nova
        font-size: 16px;
        font-weight: 400;
        line-height: 160%; /* 25.6px */
        letter-spacing: 0.16px;
        color: var(--color-primary-blue-05);
    }

    .pod-button {
        display: flex;
        align-items: center;

        gap: 10px;

        font-family: var(--font-secondary); // Proxima Nova
        font-size: 18px;
        font-weight: 400;
        line-height: normal;
    }

    .items {
        overflow: hidden;
        transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        padding: 20px 0;
        box-sizing: border-box;

        position: relative;

        &:nth-child(3) {
            .divider {
                opacity: 0;
            }
        }
        &:last-child {
            .divider {
                opacity: 0;
            }
        }
    }

    .divider {
        position: absolute;
        width: 100%;
        bottom: 0;

        transition: opacity 0.3s ease-out;

        ::v-deep() {
            margin: 0;
        }
    }

    .item-link {
        padding: 0;
    }

    .item-title {
        text-align: left;
        font-size: 24px;
        font-family: var(--font-primary); // Karbon
        font-weight: 700;
        line-height: 120%; /* 28.8px */
        color: var(--color-primary-blue-03);
    }

    .item-details {
        display: flex;
        gap: 15px;
    }

    .item-type,
    .item-date,
    .item-program {
        font-family: var(--font-primary); // Karbon
        font-size: 16px;
        font-weight: 700;
        line-height: 160%; /* 25.6px */
        letter-spacing: 1.6px;
        text-transform: uppercase;
    }

    .item-program {
        display: block;
    }

    .detail {
        color: var(--color-primary-blue-03);
        font-family: var(--font-secondary); // Proxima Nova
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        text-transform: capitalize;
    }

    .caret-icon {
        transition: transform 0.5s ease-in-out;
        width: 30px;
        height: auto;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 4px;

        background-color: transparent;

        color: var(--color-primary-blue-03);
        font-family: var(--font-secondary); // Proxima Nova
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1; /* 24px */

        border: 1px solid var(--color-primary-blue-03);
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .caret-icon {
        ::v-deep(path) {
            transition: stroke 0.3s ease;
        }
    }

    // Expanded state
    &.is-expanded {
        .item:last-child {
            .divider {
                opacity: 0;
            }
        }
        .item {
            &:nth-child(3) {
                .divider {
                    opacity: 1;
                }
            }
        }

        .btn {
            background-color: var(--color-primary-blue-03);
            color: var(--color-white);

            .caret-icon {
                transform: rotate(180deg);
                ::v-deep(path) {
                    stroke: var(--color-white);
                }
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        .btn:hover {
            background-color: var(--color-primary-blue-03);
            color: var(--color-white);

            .caret-icon {
                ::v-deep(path) {
                    stroke: var(--color-white);
                }
            }
        }

        &.is-expanded .btn:hover {
            background-color: transparent;
            color: var(--color-primary-blue-05);

            .caret-icon {
                transform: rotate(180deg);
                ::v-deep(path) {
                    stroke: var(--color-primary-blue-05);
                }
            }
        }
    }
    // Breakpoints
    @media #{$medium} {
        .item-details {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
}
// Transitions
.fade-label-enter-active,
.fade-label-leave-active {
    transition: opacity 0.15s ease-in-out;
}
.fade-label-enter-from,
.fade-label-leave-to {
    opacity: 0;
}
.fade-label-enter-to,
.fade-label-leave-from {
    opacity: 1;
}
</style>
