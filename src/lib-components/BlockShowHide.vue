<template>
    <component :is="tag" :class="classes">
        <slot />
        <button-hide
            v-if="!disable && shown"
            class="button-toggle"
            @click.native="shown = false"
        />
        <button-show
            v-else-if="!disable"
            class="button-toggle"
            @click.native="shown = true"
        />
    </component>
</template>

<script>
import ButtonHide from "./ButtonHide.vue"
import ButtonShow from "./ButtonShow.vue"

export default {
    name: "BlockShowHide",
    components: { ButtonShow, ButtonHide },
    props: {
        disable: {
            type: Boolean,
            default: false,
        },
        tag: {
            type: String,
            default: "div",
        },
    },
    data() {
        return { shown: false }
    },
    computed: {
        classes() {
            return ["block-show-hide", this.shown ? "shown" : "hidden"]
        },
    },
}
</script>

<style lang="scss" scoped>
.block-show-hide {
    .button-toggle {
        margin: 24px auto 0;
    }

    &.hidden {
        ::v-deep .show-hide-hideable {
            display: none;
        }
    }
}
</style>
