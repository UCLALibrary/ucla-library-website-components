<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from "vue"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

type SearchResultsCountProps = {
    count: number
    label: string
    prefix: string
    animate?: boolean
}
const props = withDefaults(defineProps<SearchResultsCountProps>(), {
    animate: false,
    count: 0,
    label: "",
    prefix: "",
})

const parsedResults = computed(() => {
    if (props.prefix && props.label) {
        return `${props.prefix} ${props.label}`
    } else if (props.prefix) {
        return props.prefix
    } else if (props.label) {
        return props.label
    }
    return ""
})

const classes = computed(() => {
    return ["search-results-count", theme?.value || ""]
})

const animatedCount = ref(0)

// Easing function (easeOutQuad)
function easeOutQuad(t: number) {
    return t * (2 - t)
}

function animateCount(to: number) {
    // Dynamic duration: longer for bigger numbers
    const duration = to > 1000 ? 1000 : 600 // ms
    const start = animatedCount.value
    const startTime = performance.now()

    function update(now: number) {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeOutQuad(progress)
        animatedCount.value = Math.round(start + (to - start) * eased)
        if (progress < 1) {
            requestAnimationFrame(update)
        } else {
            animatedCount.value = to
        }
    }
    requestAnimationFrame(update)
}

let timeoutId: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
    if (props.animate) {
        timeoutId = setTimeout(() => {
            animateCount(props.count)
        }, 500)
    } else {
        animatedCount.value = props.count
    }
})

onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
    <div :class="classes">
        <span class="parsed-results">
            {{ parsedResults }}
        </span>
        <div class="count" aria-live="polite">
            <span>{{ animatedCount }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/dlc/_search-results-count.scss";
</style>
