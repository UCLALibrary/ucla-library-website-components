<template>
    <div class="impact-number-card">
        <div v-if="impactNumber" class="impact-number" v-html="impactNumber" />
        <div v-if="title" class="title" v-html="title" />
        <div v-if="text" class="title" v-html="text" />
    </div>
</template>

<script>
export default {
    name: "ImpactNumberCard",
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        impactNumber: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.impact-number-card {
    background-color: var(--color-white);
    max-width: var(--container-width);
    text-align: left;
    font-family: var(--font-primary);
    font-size: 24px;
    font-style: italic;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: var(--color-primary-blue-03);
    border-left: 4px solid var(--color-default-cyan-03);
    border-radius: 2px;
    padding: 24px var(--spacing-text-left);
    --spacing-text-left: 64px;
    --container-width: $container-m-text + px;

    // Breakpoints
    @media #{$small} {
        --spacing-text-left: 24px;
        --container-width: 100%;
    }

    .title {
        padding-top: 24px;
    }

    .text {
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        color: var(--color-secondary-grey-05);
        position: absolute;
        height: 58px;
    }

    .impact-number {
        font-weight: 400;
        font-size: 20px;
        font-style: normal;
        line-height: 140%;
        align-items: center;
        text-transform: uppercase;
        color: var(--color-secondary-grey-05);
        margin-left: 50px;
    }
}
</style>
