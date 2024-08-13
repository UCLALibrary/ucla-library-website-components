<script
    setup
    lang="ts"
>
// UTILITY FUNCTIONS
import { computed } from 'vue'
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

import { useTheme } from '@/composables/useTheme'

const theme = useTheme()

const props = defineProps({
    richTextContent: {
        type: String,
        default: '',
    },
})

const classes = computed(() => {
    return ['rich-text', theme?.value || '']
})

const parsedContent = computed(() => {
    const content = stripCraftURLFromText(props.richTextContent)

    return accessibleExternalLinks(content)
})
</script>

<template>
    <div :class="classes">
        <div
            class="parsed-content"
            v-html="parsedContent"
        />
        <slot />
    </div>
</template>

<style
    lang="scss"
    scoped
>
@import "@/styles/default/_rich-text.scss";
@import "@/styles/ftva/_rich-text.scss";
</style>
