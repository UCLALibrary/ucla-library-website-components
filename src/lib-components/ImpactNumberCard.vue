<template>
    <li class="impact-number-card">
        <div class="card">
            <div
                v-if="impactNumber"
                class="impact-number"
                v-html="impactNumber"
            />
            <div v-if="title" class="title" v-html="title" />
        </div>
        <div v-if="text" class="text" v-html="text" />
    </li>
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
    width: calc((100% - 32px) / 3);

    display: flex;
    flex-direction: column;
    gap: 16px;

    .card {
        min-height: 300px;
        border-radius: var(--rounded-slightly-all);
        overflow: hidden;
        background-color: var(--color-primary-blue-01);

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .impact-number {
        @include step-5;
        font-weight: 500;
        color: var(--color-primary-blue-05);
        font-size: 80px;
        text-align: center;
    }
    .title {
        @include step-1;
        color: var(--color-primary-blue-05);
        text-align: center;
    }

    .text {
        padding-top: 16px;
        @include step-0;
        color: var(--color-primary-blue-05);
    }
}
</style>
