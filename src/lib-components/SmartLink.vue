<template>
    <router-link
        v-if="isRelative && !isDownload && !parsedTarget"
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
import formatLinkTarget from "@/mixins/formatLinkTarget"
import isRelativeLink from "@/mixins/isRelativeLink"

export default {
    name: "SmartLink",
    mixins: [isRelativeLink, formatLinkTarget],
    props: {
        to: {
            type: String,
            default: "",
        },
        linkTarget: {
            type: String,
            default: "",
        },
        isDownload: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        parsedTarget() {
            return this.formatLinkTarget(this.linkTarget, this.to)
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
