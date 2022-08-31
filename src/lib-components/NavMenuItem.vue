<template>
    <li :class="classes">
        <button class="section-name" v-html="item.name" />

        <ul class="sub-menu">
            <li
                v-for="child in parsedChildren"
                :key="child.id"
                class="sub-menu-item"
            >
                <smart-link
                    :class="child.classes"
                    :to="child.to"
                    :target="child.target"
                >
                    {{ child.name }}
                </smart-link>
            </li>
        </ul>
    </li>
</template>

<script>
// Helpers
import formatLinkTarget from "@/mixins/formatLinkTarget"
import SmartLink from "@/lib-components/SmartLink"

export default {
    name: "NavMenuItem",
    components: {
        SmartLink,
    },
    mixins: [formatLinkTarget],
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isOpened: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        classes() {
            return [
                this.item.classes,
                "nav-menu-item",
                { "is-active": this.isActive },
                { "is-opened": this.isOpened },
            ]
        },
        parsedChildren() {
            return this.item.children.map((obj) => {
                return {
                    ...obj,
                    target: this.formatLinkTarget(obj.target),
                    classes: `sub-menu-link ${obj.classes || ""}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-menu-item {
    padding: 0;
    position: relative;
    min-width: 128px;
    max-width: 172px;

    display: inline-block;
    vertical-align: top;

    &:focus-within:not(.is-opened) > .section-name::after {
        opacity: 1;
    }

    &:focus-within:not(.is-opened) > .sub-menu {
        opacity: 0.9;
        max-height: 100vh;
        background: var(--color-primary-blue-03);
        overflow: unset;

        display: flex;
        flex-direction: column;

        transition-property: none;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100vw;
            height: 100%;
            background-color: var(--color-primary-blue-03);
        }

        &::before {
            right: 100%;
        }

        &::after {
            left: 100%;
        }
    }

    // Top level menu
    .section-name {
        height: var(--unit-height);
        line-height: var(--unit-height);
        text-align: center;
        display: block;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        position: relative;
        width: 100%;
        padding: 0;

        &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            height: 5px;
            width: 100%;
            opacity: 0;
            background-color: var(--color-primary-yellow-01);
            transition: opacity 400ms ease-in-out;
        }
    }

    // Sub menu columns
    .sub-menu {
        position: relative;
        z-index: 10;
        list-style: none;
        font-size: 16px;
        font-weight: 600;
        font-family: var(--font-secondary);
        line-height: 120%;
        letter-spacing: 0.01em;
        color: var(--color-white);
        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition-property: max-height, opacity;
        transition-duration: $transition-timing-slow;
        transition-timing-function: ease-in-out;
    }
    .sub-menu-item {
        transition: background-color $transition-timing-normal ease-in-out;

        &:first-child {
            margin-top: 36px;
        }
        &:last-child {
            margin-bottom: 36px;
        }
    }
    .sub-menu-link {
        padding: 12px 32px;
        display: block;
    }
    .sub-menu-link:focus {
        background-color: rgba(#ffffff, 0.1);
        text-decoration: underline;
        text-decoration-color: var(--color-primary-yellow-01);

        outline-color: white;
        outline-offset: -2px;
        outline-width: 2px;
        outline-style: solid;
    }

    // States
    &.is-active {
        .section-name::after {
            opacity: 1;
        }
    }
    &.is-opened {
        .sub-menu {
            max-height: 100vh;
            opacity: 0.45;
        }
    }
    &.is-opened.is-active {
        .sub-menu {
            opacity: 1;
        }
    }

    // Hover
    @media #{$has-hover} {
        .sub-menu-item:hover {
            background-color: rgba(#ffffff, 0.1);
            text-decoration: underline;
            text-decoration-color: var(--color-primary-yellow-01);
        }
    }
}
</style>
