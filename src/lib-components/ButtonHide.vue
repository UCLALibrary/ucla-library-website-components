<template>
    <div class="button-hide">
        <div class="icon" aria-hidden="true">
            <molecule-stroke class="molecule-stroke" />
            <icon-collapse class="icon-collapse" />
        </div>

        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
import IconCollapse from "ucla-library-design-tokens/assets/svgs/icon-collapse.svg"
import MoleculeStroke from "ucla-library-design-tokens/assets/svgs/molecule-stroke.svg"

export default {
    name: "ButtonHide",
    components: {
        IconCollapse,
        MoleculeStroke,
    },
    props: {
        text: {
            type: String,
            default: "See Less",
        },
    },
}
</script>

<style lang="scss" scoped>
.button-hide {
    background-color: var(--color-white);
    width: fit-content;
    max-width: 80px;
    line-height: #{$line-height--2};

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

    .icon {
        position: relative;
        margin-bottom: 16px;
    }
    .molecule-border {
        width: 83px;
        height: 83px;

        stroke: var(--color-default-cyan-03);
        stroke-width: 1.5px;
    }
    .icon-collapse {
        position: absolute;
        z-index: 0;
        width: 49px;
        height: 49px;
        left: 50%;

        // Center this way so button can be streched and it still centers
        top: 50%;
        transform: translate(-50%, -50%);
        transition-property: left;
        @include animate-normal;

        ::v-deep .svg__stroke--primary-blue-03 {
            stroke: var(--color-primary-blue-03);
            stroke-width: 1.25px;
            transition-property: stroke;
            @include animate-normal;
        }
    }

    .text {
        color: var(--color-primary-blue-05);
        @include overline;
        letter-spacing: 0.01em;
        transition: color;
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            cursor: pointer;
            .icon- {
                ::v-deep .svg__stroke--primary-blue-03 {
                    stroke: var(--color-default-cyan-03);
                }
                left: calc(50% + 4px);
            }
            .text {
                color: var(--color-primary-blue-03);
            }
        }
    }
}
</style>
