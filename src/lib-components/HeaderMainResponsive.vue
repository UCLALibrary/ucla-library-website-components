<template>
    <nav role="navigation" aria-label="Menu" :class="classes">
        <div v-show="!isOpened" class="collapsed-menu">
            <router-link to="/" :aria-label="parseAriaLabel">
                <h1 v-if="title" class="title">{{ title }}</h1>
                <component
                    v-else
                    :is="`LogoLibrary`"
                    width="155"
                    height="55"
                    class="logo-ucla"
                    role="button"
                />
            </router-link>
            <button
                role="button"
                aria-label="Hamburguer button"
                :is-opened="isOpened"
                @click="toggleMenu"
            >
                <component :is="`IconMenu`" class="hamburguer" />
            </button>
        </div>
        <div v-show="isOpened" class="expanded-menu-container">
            <div class="expanded-menu">
                <router-link to="/" :aria-label="parseAriaLabel">
                    <h1 v-if="title" class="title opened-title">{{ title }}</h1>
                    <component
                        v-else
                        :is="`LogoLibrary`"
                        width="155"
                        height="55"
                        class="expanded-logo"
                        @click="toggleMenu"
                    />
                </router-link>
                <button
                    role="button"
                    aria-label="
                        Close button
                    "
                    @click="handleCloseOrReturn"
                >
                    <component :is="parsedSvgName" class="close-svg" />
                </button>
            </div>
            <ul class="nav-menu-primary">
                <nav-menu-item-responsive
                    v-for="(item, index) in parsedPrimaryMenuItems"
                    :key="item.id"
                    :item="item"
                    :index="index"
                    :go-back="goBack"
                    @shouldOpen="shouldOpen"
                    @itemOpenedColor="itemOpenedColor"
                />
                <li
                    v-for="(item, index) in noChildren"
                    class="nochildren-links"
                    :key="index"
                >
                    <smart-link class="nochildren-link" :to="item.to">
                        {{ item.name }}
                    </smart-link>
                </li>
            </ul>
            <div v-if="isOpened && !title" class="nav-menu-secondary">
                <ul class="list">
                    <li
                        v-for="item in parsedSecondaryMenuItems"
                        :key="item.id"
                        class="list-item"
                        @click="toggleMenu"
                    >
                        <smart-link
                            class="link underline-hover"
                            :to="item.to"
                            :target="item.target"
                        >
                            {{ item.name }}
                        </smart-link>
                    </li>
                </ul>
            </div>
            <div v-if="!title" class="support-us-container">
                <button-link
                    v-if="supportLinks.length"
                    :label="supportLinks[0].name"
                    :is-secondary="true"
                    class="button"
                    :to="supportLinks[0].to"
                    icon-name="none"
                    @click="toggleMenu"
                />
            </div>
            <component
                :is="`Molecule3d`"
                width="150"
                height="247"
                viewBox="50 57 50 250"
                class="molecule"
                :class="moleculeColor"
            />
        </div>
    </nav>
</template>

<script>
// Helpers
import formatLinkTarget from "@/mixins/formatLinkTarget"
import IconCloseLarge from "ucla-library-design-tokens/assets/svgs/icon-close-large.svg"
import IconCaretLeft from "ucla-library-design-tokens/assets/svgs/icon-caret-circle-left.svg"
import Molecule3d from "ucla-library-design-tokens/assets/svgs/molecule-3d.svg"
import IconMenu from "ucla-library-design-tokens/assets/svgs/icon-menu.svg"
import LogoLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"
import NavMenuItemResponsive from "@/lib-components/NavMenuItemResponsive"
import SmartLink from "@/lib-components/SmartLink"
import ButtonLink from "@/lib-components/ButtonLink"

export default {
    name: "HeaderMainResponsive",
    mixins: [formatLinkTarget],
    components: {
        IconCloseLarge,
        IconCaretLeft,
        Molecule3d,
        IconMenu,
        LogoLibrary,
        NavMenuItemResponsive,
        SmartLink,
        ButtonLink,
    },
    props: {
        iconCloseName: {
            type: String,
            default: "icon-close-large",
        },
        iconGoBackName: {
            type: String,
            default: "icon-caret-circle-left",
        },
        primaryNav: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array,
            default: () => [],
        },
        secondaryNav: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isOpened: false,
            isItemOpened: false,
            goBack: false,
            moleculeColor: "cyan",
        }
    },
    computed: {
        classes() {
            return [
                "header-main-responsive",
                this.isOpened ? "fullHeight" : "collapsedHeight",
                { "has-title": this.title },
            ]
        },
        parseAriaLabel() {
            return this.title ? this.title : `UCLA Library home page`
        },
        parsedSvgName() {
            return `${this.iconCloseName}`
        },
        parsedPrimaryMenuItems() {
            // Return only items that have children (assume these are dropdowns)
            return this.primaryNav.filter((obj) => {
                return obj.children && obj.children.length
            })
        },
        parsedSecondaryMenuItems() {
            return this.secondaryNav.map((obj) => {
                return {
                    ...obj,
                    target: this.formatLinkTarget(obj.target),
                }
            })
        },
        noChildren() {
            if (!this.title) {
                return []
            }

            return this.primaryNav.filter((obj) => {
                // Return items that don't have sub-menu children
                return !obj.children || !obj.children.length
            })
        },
        supportLinks() {
            // Generally this is just the last "Support Us" link, but we are going to allow it to be more than 1
            return this.primaryNav.filter((obj) => {
                // Return items that don't have sub-menu children
                return !obj.children || !obj.children.length
            })
        },
    },
    methods: {
        shouldOpen() {
            this.isItemOpened = !this.isItemOpened
            this.goBack = false
        },
        handleCloseOrReturn() {
            console.log("Close clicked")

            this.goBack = !this.goBack
            this.moleculeColor = "cyan"

            this.isOpened = false
        },
        itemOpenedColor(itemIndex) {
            if (itemIndex === 0) {
                this.moleculeColor = "green"
            } else if (itemIndex === 1) {
                this.moleculeColor = "pink"
            } else if (itemIndex === 2) {
                this.moleculeColor = "purple"
            }

            if (this.isItemOpened === false) {
                this.moleculeColor = "cyan"
            }
        },
        toggleMenu() {
            this.isOpened = !this.isOpened
            this.goBack = !this.goBack
        },
        closeItem() {
            this.isItemOpened = false
        },
    },
}
</script>

<style lang="scss" scoped>
.fullHeight {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 400;
}

.collapsedHeight {
    height: 100%;
    box-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
}

.header-main-responsive {
    width: 100vw;
    height: 100%;
    background-color: var(--color-primary-blue-03);
    display: flex;
    flex-direction: column;

    .collapsed-menu {
        width: 100vw;
        height: 100%;
        padding: 32px var(--unit-gutter) 0;
        background-color: var(--color-white);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hamburguer {
            cursor: pointer;
        }
    }

    .expanded-menu-container {
        overflow-y: auto;
    }

    .expanded-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        padding: 0 var(--unit-gutter);
        margin: 32px 0;
        background-color: var(--color-primary-blue-03);

        .svg__logo-library {
            .svg__fill--primary-blue-03,
            .svg__fill--black {
                fill: var(--color-white);
            }
        }

        .close-svg {
            cursor: pointer;

            .svg__fill--primary-blue-01 {
                fill: transparent;
            }
        }
        .go-back-svg {
            cursor: pointer;
            height: 48px;

            .svg__fill--primary-blue-01 {
                fill: transparent;
            }

            .svg__fill--primary-blue-03 {
                fill: var(--color-default-cyan-02);
            }
        }
    }

    ul {
        list-style-type: none;
    }

    .nav-menu-primary {
        margin: 64px var(--unit-gutter);
    }
    &.has-title {
        .title {
            font-family: "Karbon", Helvetica, Arial, sans-serif;
            font-size: var(--step-1);
            font-weight: 500;
            line-height: 1.2;
            color: var(--color-primary-blue-03);
            text-transform: initial;
            letter-spacing: normal;
            &.opened-title {
                color: white;
            }
        }
        .nochildren-link {
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
        }
    }

    .nav-menu-secondary {
        margin: 64px var(--unit-gutter);

        .list {
            color: white;

            .list-item {
                margin-bottom: 24px;
                font-family: var(--font-primary);
                font-size: 20px;
                font-weight: 400;
                line-height: 1;

                .link {
                    @include clickable-area;
                }
            }
        }
    }

    .support-us-container {
        margin: 64px var(--unit-gutter);

        .button {
            margin: 0px;
            border: 1.5px solid var(--color-primary-blue-02);
        }
    }

    .cyan {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-default-cyan-02);
        }
    }

    .green {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-help-green-02);
        }
    }

    .pink {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-visit-fushia-02);
        }
    }

    .purple {
        .svg__stroke--default-cyan-03 {
            stroke: var(--color-about-purple-03);
        }
    }

    .molecule {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;

        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        filter: FlipV;
        -ms-filter: "FlipV";
    }

    @media #{$small} {
        .support-us-container {
            padding-top: 0px;
        }
    }
}
</style>
