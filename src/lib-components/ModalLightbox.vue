<template>
    <div ref="lightbox" class="lightbox">
        <div />
        <!-- empty div to fill first row center -->
        <button class="button-close" @click="$emit('closeModal')">
            <svg-icon-close aria-label="Close" />
        </button>
        <slot />
    </div>
</template>

<script>
import SvgIconClose from "ucla-library-design-tokens/assets/svgs/icon-close-large.svg"

export default {
    name: "ModalLightbox",
    components: {
        SvgIconClose,
    },
    props: {
        extraStyle: {
            type: Object,
            default: () => {},
        },
    },
    mounted() {
        this.$refs.lightbox.focus()
    },
}
</script>

<style lang="scss" scoped>
@import "src/styles/vue-glide.scss";

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overscroll-behavior: contain;

    background: var(--color-primary-blue-05);
    z-index: 800;

    display: grid;
    grid-template-columns: 1fr 75vw 1fr;
    grid-template-rows: 1fr 75vh 1fr;
    grid-template-areas:
        ". . closeButton"
        ". main ."
        ". . .";
    grid-gap: var(--gap-width);
    grid-auto-flow: row;

    justify-content: stretch;

    > * {
        grid-area: main;
        // width: 100%;
    }

    .button-close {
        grid-area: closeButton;
        align-self: end;
        justify-self: start;

        // width: auto;
        padding: 0;
    }

    // Override colors of all the SVG icons
    ::v-deep svg {
        display: block;

        .svg__fill--primary-blue-03,
        .svg__fill--primary-blue-01 {
            fill: none;
        }

        .svg__stroke--primary-blue-03,
        .svg__stroke--default-cyan-02 {
            stroke: var(--color-white);
        }
    }

    @media #{$has-hover} {
        ::v-deep button:disabled {
            cursor: default;
        }
    }

    ::v-deep button:disabled {
        ::v-deep svg {
            .svg__fill--primary-blue-03 {
                fill: var(--color-white);
            }
        }
    }
}
</style>
