<template>
    <component :is="componentType" :to="to" :class="classes">
        <svg-heading-arrow class="svg" aria-hidden="true" />
        <h2 :class="textClasses">
            {{ text }}
        </h2>
    </component>
</template>

<script>
import SvgHeadingArrow from "ucla-library-design-tokens/assets/svgs/graphic-chevron-right.svg"
import getSectionName from "@/mixins/getSectionName"

import SmartLink from "@/lib-components/SmartLink"

export default {
    name: "HeadingArrow",
    mixins: [getSectionName],
    components: {
        SvgHeadingArrow,
        SmartLink,
    },

    props: {
        text: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        section: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["heading-arrow", `color-${this.sectionName}`]
        },
        sectionName() {
            return this.section || this.getSectionName(this.to)
        },
        componentType() {
            let output = "div"
            if (this.to) {
                output = "smart-link"
            }
            return output
        },
        textClasses() {
            return ["heading", `color-${this.componentType}`]
        },
    },
}
</script>

<style lang="scss" scoped>
.heading-arrow {
    display: flex;
    align-items: center;
    flex-direction: row;

    text-decoration: none;

    // themes
    --color-theme: var(--color-primary-blue-03);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-03);
    }

    ::v-deep .svg__stroke--wayfinder {
        stroke: var(--color-theme);
    }
    .heading {
        margin-left: 30px;
        @include step-3;
        line-height: 100%;
        text-transform: capitalize;

        &.color-smart-link {
            color: var(--color-white);
        }
        &.color-div {
            color: var(--color-white);
        }
    }

    @media #{$medium} {
        .svg {
            height: 40px;
            width: auto;
            margin-right: 0;
        }
        .heading {
            font-size: 28px;
            margin-left: 8px;
        }
    }
}
</style>
