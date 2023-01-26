<template>
    <div class="form">
        <div class="section-header">
            <h2
                v-if="block.sectionTitle"
                class="section-title"
                v-html="block.sectionTitle"
            />
            <div
                v-if="block.sectionSummary"
                class="section-summary"
                v-html="block.sectionSummary"
            />
        </div>

        <div class="content">
            <iframe
                id="the-iframe"
                refs="form_iframe"
                class="iframe"
                :srcdoc="parsedFormContent"
                frameBorder="0"
                width="100%"
                height="100%"
                onload="this.width=screen.width;this.height=screen.height;"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "FlexibleForm",
    components: {},

    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedFormContent() {
            return this.block.form
        },
    },
}
</script>

<style lang="scss" scoped>
.form {
    max-width: 930px;
    width: 100%;
    height: auto;
    margin: var(--space-3xl) auto;
    max-width: $container-l-main + px;

    .content {
        //height: 375px;
        border: 1px var(--color-primary-blue-01) solid;
        border-radius: 4px;
    }

    .section-header {
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .section-summary {
        @include step-0;

        ::v-deep p {
            margin: 0;
        }
    }

    .iframe {
        max-width: 928px;
        padding: 12px;
    }
}
</style>
