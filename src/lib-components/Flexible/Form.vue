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
                id="the_form"
                refs="the_form"
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
                var the_form = document.getElementById("the_form")
                console.log("FIRST" + the_form)
                console.log("HEIGHT" + the_form.height)
                var eventName = e.data[0]
                console.log("EDATA: " + e)
                var data = e.data[1]
                // console.log("DATA: " + the_form)
                console.log("TEST" + JSON.stringify(the_form))

                let testiframe = document.querySelector("#the_form").innerHTML

                testiframe.addEventListener("load", function () {
                    testiframe.style.height =
                        testiframe.contentDocument.body.scrollHeight +
                        the_form.height
                    console.log("TEST iFRAME: " + testiframe)
                })

                switch (eventName) {
                    case "setHeight":
                        the_form.height = data + 20
                        console.log("SECOND" + the_form.height)
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
}
</style>
