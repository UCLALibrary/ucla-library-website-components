<script lang="ts" setup>
import { computed, onMounted } from "vue"
import ButtonLink from '@/lib-components/ButtonLink.vue'
//Props
const props = defineProps({
    lid: {
        type: String,
        default: "",
    },
    isClicc: {
        type: Boolean,
        default: false,
    },
})
// Computed
const parsedSrc = computed(() => {
    if (!props.isClicc) {
        return `https://www.library.ucla.edu/blockHours.html?lid=${props.lid}`
    } else {
        return `https://www.library.ucla.edu/blockCliccHours.html?lid=0`
    }
})
// Mounted
onMounted(() => {
    window.addEventListener(
        "message",
        function (e) {
            var hours_iframe = document.getElementById("the-iframe")
            console.log("FIRST" + hours_iframe?.height) // TODO REMOVE
            var eventName = e.data[0]
            var data = e.data[1]
            // console.log("DATA: " + hours_iframe)
            console.log("TEST" + JSON.stringify(hours_iframe))
            console.log("EVENT" + eventName)
            switch (eventName) {
                case "setHeight":
                    hours_iframe.height = data + 20
                    console.log("SECOND" + hours_iframe?.height)
                    break
            }
        },
        false
    )
})
</script>
<template>
    <div class="block-hours">
        <h3 class="title">Hours</h3>
        <div class="content">
            <iframe id="the-iframe" title="Hours for location" refs="hours_iframe" class="iframe" :src="parsedSrc"
                frameBorder="0" width="100%" height="100%" />
            <ButtonLink label="All Library Hours" :is-secondary="true" to="https://calendar.library.ucla.edu/hours"
                class="btn-lnk" />
        </div>
    </div>
</template>

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
        }

        table {
            height: 100%;
        }
    }
}
</style>