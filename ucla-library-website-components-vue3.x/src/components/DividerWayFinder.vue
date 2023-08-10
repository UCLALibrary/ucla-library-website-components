<template>
    <div :class="classes">
        <div class="solid" />
        <div class="dotted" />
    </div>
</template>

<script setup>
// Helpers
import getSectionName from "@/utils/getSectionName"
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

defineProps({
    color: {
        type: String,
        default: "", // This will be "visit", "about", "help".
    },
})

const classes = computed(() => ["divider-way-finder", `color-${sectionName}`])
const sectionName = computed(() => this.color || this.getSectionName(route.path))


</script>

<style lang="scss" scoped>
.divider-way-finder {
    &.color-help {
        --color-border: var(--color-help-green-03);
    }

    &.color-visit {
        --color-border: var(--color-visit-fushia-03);
    }

    &.color-about {
        --color-border: var(--color-about-purple-03);
    }

    &.color-default {
        --color-border: var(--color-default-cyan-03);
    }

    &.search-margin {
        margin: var(--space-2xl) auto;
    }

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: space-between;
    align-items: center;

    max-width: $container-l-main (+px);
    margin: var(--space-2xl) auto;

    .solid {
        height: 1px;
        width: 96px;
        margin-right: 17px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: var(--color-border, var(--color-default-cyan-03));
    }

    .dotted {
        border-bottom: 2px dotted var(--color-secondary-grey-02);
        height: 1px;

        flex: 1 1 auto;
    }
}
</style>