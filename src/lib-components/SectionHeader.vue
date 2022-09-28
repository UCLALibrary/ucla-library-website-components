<template>
    <component
        :is="titleTag"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script>
export default {
    name: "SectionHeader",
    props: {
        theme: {
            type: String,
            default: "white",
        },
        level: {
            type: Number,
            default: 0,
        },
    },
    inject: {
        levelInjected: { from: "sectionLevel", default: 1 },
    },
    computed: {
        classes() {
            return ["section-header", `section-header${this.levelComputed}`]
        },
        levelComputed() {
            return Number(this.level || this.levelInjected)
        },
        titleTag() {
            return (this.levelComputed >= 1 && this.levelComputed <= 6) ? `h${this.levelComputed}` : "h6"
        },
    },
}
</script>

<style lang="scss" scoped>
.section-header {
    color: var(--color-primary-blue-03);
}

h1 {
    font-family: var(--font-primary);
    font-size: var(--step-5);
    font-weight: 400;
}

h2 {
    font-family: var(--font-primary);
    font-size: var(--step-4);
    font-weight: 400;
}

h3 {
    font-family: var(--font-primary);
    font-size: var(--step-3);
    font-weight: 400;
}

h4 {
    font-family: var(--font-primary);
    font-size: var(--step-3);
    font-weight: 400;
}

h5 {
    font-family: var(--font-primary);
    font-size: var(--step-3);
    font-weight: 400;
}

h6 {
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 500;
}
</style>
