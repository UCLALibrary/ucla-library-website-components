<template>
    <li class="nav-menu-item">
        <button
            class="section-name block"
            :data-sub-menu-title-id="index"
            @click="toggleItem(index)"
        >
            {{ item.name }}
        </button>

        <ul :data-sub-menu-item-id="index" class="sub-menu hidden">
            <li
                v-for="child in parsedChildren"
                :key="child.id"
                class="sub-menu-item"
                @click="closeMenu"
            >
                <smart-link
                    :class="child.classes"
                    :to="child.to"
                    :linkTarget="child.target"
                >
                    {{ child.name }}
                </smart-link>
            </li>
        </ul>
    </li>
</template>

<script>
// Helpers
import SmartLink from "@/lib-components/SmartLink"

export default {
    name: "NavMenuItemResponsive",
    components: {
        SmartLink,
    },
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        index: {
            type: Number,
            default: 0,
        },
        goBack: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        parsedChildren() {
            return this.item.children.map((obj) => {
                return {
                    ...obj,
                    classes: `sub-menu-link ${obj.classes || ""}`,
                }
            })
        },
    },
    watch: {
        goBack: function (newVal) {
            // console.log("goback value updated " + newVal)
            if (newVal) this.resetAccordion()
        },
    },
    methods: {
        toggleItem(itemIndex) {
            const subMenuItemInfoElement = document.querySelectorAll(
                '[data-sub-menu-item-id="' + itemIndex + '"]'
            )[0]
            const subMenuItemInfoElementReset = document.querySelectorAll(
                'ul:not([data-sub-menu-item-id="' + itemIndex + '"])'
            )
            const subMenuTitleElement = document.querySelectorAll(
                'li span:not([data-sub-menu-title-id="' + itemIndex + '"])'
            )
            if (subMenuItemInfoElement.classList.contains("block")) {
                subMenuItemInfoElement.classList.remove("block")
                subMenuItemInfoElement.classList.add("hidden")

                for (let title of subMenuTitleElement) {
                    // title.classList.remove("hidden")
                    title.classList.add("block")
                }
            } else {
                subMenuItemInfoElement.classList.remove("hidden")
                subMenuItemInfoElement.classList.add("block")

                for (let title of subMenuTitleElement) {
                    title.classList.remove("block")
                    //title.classList.add("hidden")
                }
                for (let title of subMenuItemInfoElementReset) {
                    // title.classList.remove("hidden")
                    title.classList.remove("block")
                    title.classList.add("hidden")
                }
            }
            this.$emit("shouldOpen")
            this.$emit("itemOpenedColor", itemIndex)
        },
        resetAccordion() {
            // this.$emit("shouldOpen")

            const subMenuTitleElement = document.querySelectorAll(
                "[data-sub-menu-title-id]"
            )
            for (let title of subMenuTitleElement) {
                title.classList.remove("hidden")
                title.classList.add("block")
            }
            const subMenuItemInfoElement = document.querySelectorAll(
                "[data-sub-menu-item-id]"
            )
            for (let item of subMenuItemInfoElement) {
                item.classList.remove("block")
                item.classList.add("hidden")
            }
        },
        closeMenu() {
            this.$emit("closeMainMenu")
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-menu-item {
    margin: 0;
    padding: 0;
    position: relative;

    // Top level menu
    .section-name {
        margin-bottom: 24px;
        line-height: 28px;
        font-size: 28px;
        font-weight: 600;
        text-align: left;
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        position: relative;
        color: white;
        cursor: pointer;
        @include min-clickable-area;
        padding: 0;

        &.block {
            display: block;
        }

        &.hidden {
            display: none;
        }
    }

    // Sub menu
    .sub-menu {
        list-style: none;
        font-size: 20px;
        font-weight: 400;
        font-family: var(--font-secondary);
        line-height: 24px;
        letter-spacing: 0.01em;
        color: var(--color-white);

        &.block {
            display: block;
        }

        &.hidden {
            display: none;
        }
    }

    .sub-menu-item {
        &:first-child {
            margin-top: 32px;
        }
        &:last-child {
            margin-bottom: 32px;
        }
    }
    .sub-menu-link {
        margin-bottom: 24px;
        display: inline-block;
        position: relative;

        @include min-clickable-area;
    }
}
</style>
