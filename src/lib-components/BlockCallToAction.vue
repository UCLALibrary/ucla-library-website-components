<template>
    <div :class="classes">
        <component :is="parsedContent.svgName" class="svg" />
        <div class="title" v-html="parsedContent.title" />
        <div class="text" v-html="parsedContent.text" />
        <button-link
            v-if="!isDark"
            :label="parsedContent.label"
            :to="parsedContent.to"
            :is-secondary="true"
            class="button-link"
        />
        <button-link
            v-if="isDark"
            :label="parsedContent.label"
            :to="parsedContent.to"
            :is-tertiary="true"
            class="button-link"
        />
    </div>
</template>

<script>
import ButtonLink from "@/lib-components/ButtonLink.vue"
export default {
    name: "BlockCallToAction",
    components: {
        ButtonLink,
        SvgCallToActionMoney: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/call-to-action-money.svg"
            ).then((d) => d.default),
        SvgCallToActionChat: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/call-to-action-chat.svg"
            ).then((d) => d.default),
        SvgCallToActionMail: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/call-to-action-mail.svg"
            ).then((d) => d.default),
        SvgCallToActionFind: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/call-to-action-find.svg"
            ).then((d) => d.default),
    },
    props: {
        svgName: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        isDark: {
            type: Boolean,
            default: false,
        },
        isSmallSize: {
            type: Boolean,
            default: false,
        },
        isGlobal: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "block-call-to-action",
                { "full-width": !this.isSmallSize },
                { "half-width": this.isSmallSize },
                { "theme-light": !this.isDark },
                { "theme-dark": this.isDark },
            ]
        },
        askALibrarian() {
            return this.$store.state.globals.askALibrarian
        },
        // Use Global Ask A Libarian data if isGlobal is true
        parsedContent() {
            if (this.isGlobal) {
                return {
                    to: this.askALibrarian.buttonUrl[0].buttonUrl,
                    title: this.askALibrarian.askALibrarianTitle,
                    text: this.askALibrarian.askALibrarianText,
                    label: this.askALibrarian.buttonUrl[0].buttonText,
                    svgName: "svg-call-to-action-chat",
                }
            } else {
                return {
                    to: this.to,
                    title: this.title,
                    text: this.text,
                    label: this.name,
                    svgName: this.svgName,
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    max-width: var(--block-width);
    background-color: var(--color-background);
    height: auto;
    margin: var(--unit-gutter) auto;
    padding: 60px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    // Sizes
    &.full-width {
        --block-width: #{$container-l-cta}px;
        --block-height: 700px;
        --block-padding-title: 70px;
        --block-padding-text: 10px;
    }

    &.half-width {
        --block-width: calc((#{$container-l-cta} / 2) - 10px);
        --block-height: 566px;
        --block-padding-title: 114px;
        --block-padding-text: 112px;
    }

    // Color Themes
    &.theme-light {
        --color-background: var(--color-primary-blue-01);
        --color-title: var(--color-primary-blue-03);
        --color-text: var(--color-black);
        --color-button-background: var(--color-primary-blue-03);
        --color-svg-molecule-outline: var(--color-primary-blue-03);
        --color-svg-molecule-inner-highlight: var(--color-help-green-03);
    }

    &.theme-dark {
        --color-background: var(--color-primary-blue-03);
        --color-title: var(--color-white);
        --color-text: var(--color-white);
        --color-svg-molecule-outline: var(--color-primary-blue-02);
        --color-svg-molecule-inner-highlight: var(--color-white);
        --color-button-background: var(--color-primary-blue-03);
        --color-button-border: 2px solid var(--color-default-cyan-02);
    }

    .svg {
        margin-bottom: 32px;
        margin-top: 60px;
        flex-grow: 0;
        flex-shrink: 0;
        .outline {
            stroke: var(--color-svg-molecule-outline);
        }

        .color {
            stroke: var(--color-svg-molecule-inner-highlight);
        }
    }

    .title {
        @include step-2;
        line-height: $line-height--1;
        text-align: center;
        letter-spacing: 0.0025em;
        color: var(--color-title);
        padding-left: var(--block-padding-title);
        padding-right: var(--block-padding-title);
        margin-bottom: 16px;
        max-width: 640px;
    }

    .text {
        @include step-0;
        text-align: center;
        color: var(--color-text);
        padding-left: var(--block-padding-text);
        padding-right: var(--block-padding-text);
        margin-bottom: 32px;
        max-width: 640px;
    }

    // Breakpoints
    @media #{$medium} {
        &.full-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
            margin: var(--unit-gutter);
        }
        &.half-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }
        .title,
        .text {
            padding: 0;
        }
    }

    @media #{$small} {
        width: 100%;
        &.full-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
            margin: 0;
        }
        &.half-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }
    }
}
</style>
