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
                id="form-iframe"
                refs="form_iframe"
                class="iframe"
                :srcdoc="parsedFormContent"
                frameBorder="0"
                width="100%"
                height="100%"
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
    mounted() {
        window.addEventListener(
            "message",
            function (e) {
                // var form_iframe = document.getElementById("form-iframe")
                var form_iframe = document.getElementById("form-iframe").height
                var eventName = e.data[0]
                var data = e.data[1]

                let testiframe = document.querySelector("#form-iframe")

                testiframe.addEventListener("load", function () {
                    testiframe.style.height =
                        testiframe.contentDocument.body.scrollHeight +
                        form_iframe.height
                })

                switch (eventName) {
                    case "setHeight":
                        form_iframe.height = testiframe.style.height
                        break
                }
            },
            false
        )
    },
}
</script>

<style lang="scss" scoped>
.form {
    max-width: 930px;
    width: 100%;
    height: auto;
    margin: var(--space-2xl) auto;
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
}
</style>
