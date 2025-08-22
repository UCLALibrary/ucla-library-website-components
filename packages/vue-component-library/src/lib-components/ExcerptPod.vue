<script setup lang="ts">
// Imports
import { defineProps, computed } from "vue"
import NotesAccordion from "@/lib-components/NotesAccordion.vue"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

// Props
type ExcerptPodProps = {
    title: string
    subtitle: string
    text: string
    accordions: Array<{
        title: string
        text: string
    }>
    labelOpen: string
    labelClose: string
}

const props = withDefaults(defineProps<ExcerptPodProps>(), {
    title: "",
    subtitle: "",
    text: "",
    accordions: () => [],
    labelOpen: "",
    labelClose: "",
})

// Computed
const classes = computed(() => ["excerpt-pod", theme?.value || ""])

const showAccordion = computed(() => {
    return (
        props.accordions.length > 0 &&
        props.accordions.some((accordion) => accordion.title || accordion.text)
    )
})
</script>

<template>
    <div :class="classes">
        <h5 class="title" v-html="title" />
        <div class="info">
            <h6 class="subtitle" v-html="subtitle" />
            <div class="text-excerpt">
                <div class="text" v-html="text" />
                <NotesAccordion
                    v-if="showAccordion"
                    :items="accordions"
                    :labelOpen="labelOpen"
                    :labelClose="labelClose"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_excerpt-pod.scss";
</style>
