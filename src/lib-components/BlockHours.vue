<template>
    <div class="block-hours">
        <h3 class="title">Hours</h3>

        <div class="content">
            <!--div class="iframe-container"-->
            <iframe
                id="the-iframe"
                title="Hours for location"
                refs="hours_iframe"
                class="iframe"
                :src="parsedSrc"
                frameBorder="0"
                width="100%"
                height="100%"
            />
            <!-- @load="resizeIframe"
                @resize="resizeIframe" -->
            <!--/div-->
            <!--div
                class="hours-data"
                v-html="hoursData"
            /-->

            <button-link
                label="All Library Hours"
                :is-secondary="true"
                to="https://calendar.library.ucla.edu/hours"
                class="btn-lnk"
            />
        </div>
    </div>
</template>

<script>
import ButtonLink from "@/lib-components/ButtonLink"
export default {
    name: "BlockHours",
    components: {
        ButtonLink,
    },
    props: {
        lid: {
            type: String,
            default: "",
        },
        isClicc: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        parsedSrc() {
            if (!this.isClicc) {
                return `https://www.library.ucla.edu/blockHours.html?lid=${this.lid}`
            } else {
                return `https://www.library.ucla.edu/blockCliccHours.html?lid=0`
            }
        },
    },
    mounted() {
        window.addEventListener(
            "message",
            function (e) {
                var hours_iframe = document.getElementById("the-iframe")
                console.log("FIRST" + hours_iframe.height)
                var eventName = e.data[0]
                var data = e.data[1]
                // console.log("DATA: " + hours_iframe)
                console.log("TEST" + JSON.stringify(hours_iframe))

                switch (eventName) {
                    case "setHeight":
                        hours_iframe.height = data + 20
                        console.log("SECOND" + hours_iframe.height)
                        break
                }
            },
            false
        )
    },
    /* data() {
        return {
            hoursData: "",
        }
    },
    async fetch() {
        const response = await fetch("/blockHours.html")
        const html = await response.text()
        var parser = new DOMParser()
        var doc = parser.parseFromString(html, "text/html")
        // this.hoursData = doc.body.innerHTML
        // Get the image file

        console.log(doc.body)
        this.hoursData = doc.body.innerHTML
    },
    fetchKey(getCounter) {
        return `block-hours-${getCounter("block-hours")}`
    },*/
}
</script>

<style lang="scss" scoped>
.block-hours {
    max-width: 930px;
    width: 100%;

    .title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: var(--space-m);
    }

    .content {
        border-radius: var(--rounded-slightly-all);
        border: 2px solid var(--color-primary-blue-01);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: space-between;

        .btn-lnk {
            max-width: 300px;
            margin-left: 10px;
            margin-top: 8px;
            margin-bottom: 20px;
        }

        .iframe {
            max-width: 928px;
            padding: 12px;
            // resize: both;
        }

        table {
            height: 100%;
        }

        // .iframe-container {
        //     position: relative;
        //     overflow: hidden;
        //     width: 100%;
        //     padding-top: 25.25%;
        // }

        // .iframe {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     border: 0;
        // }
    }
    .s-lc-whw tr:last-child {
        /*border-bottom: 0; */
    }
}
</style>
