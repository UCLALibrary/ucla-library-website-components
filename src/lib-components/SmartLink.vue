<template>
    <router-link
        v-if="isRelative && !isDownload"
        class="smart-link is-router-link"
        :to="to"
    >
        <slot />
    </router-link>

    <a v-else-if="isDownload" :href="to" class="smart-link is-link" download>
        <slot />
    </a>

    <a v-else :href="to" :target="parsedTarget" class="smart-link is-link">
        <slot />
    </a>
</template>

<script>
// Helper functions
import isRelativeLink from "~/utils/isRelativeLink"
import isInternalLink from "~/utils/isInternalLink"

export default {
    name: "SmartLink",
    mixins: [isRelativeLink, isInternalLink],
    props: {
        to: {
            type: String,
            default: "",
        },
        target: {
            type: String,
            default: "_self",
        },
        isDownload: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        parsedTarget() {
            let output = "blank"

            switch (true) {
                case this.isInternalLink(this.to):
                    output = "_self"
                    break
            }
            return output
        },
        isRelative() {
            return this.isRelativeLink(this.to) ? true : false
        },
    },
}
</script>

<style lang="scss" scoped>
.link-icon {
    &:hover {
        @include link-hover;
    }
}
</style>
