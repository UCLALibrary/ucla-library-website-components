<script lang="ts" setup>
// Components
import IconCloseLarge from "ucla-library-design-tokens/assets/svgs/icon-close-large.svg"
import Molecule3d from "ucla-library-design-tokens/assets/svgs/molecule-3d.svg"
import IconMenu from "ucla-library-design-tokens/assets/svgs/icon-menu.svg"
import LogoLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"
import NavMenuItemResponsive from '@/lib-components/NavMenuItemResponsive.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

import { computed, ref } from 'vue'
import type { PropType } from 'vue'

// types
import type { NavPrimaryItemType } from '@/types/types'
import type { NavSecondaryItemType } from '@/types/types'



const props = defineProps(
    {


        primaryNav: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array as PropType<NavPrimaryItemType[]>,
            default: () => [],
        },
        secondaryNav: {
            type: Array as PropType<NavSecondaryItemType[]>,
            default: () => [],
        },
        title: {
            type: String,
            default: '',
        },
        acronym: {
            type: String,
            default: '',
        },
    },
)


const isOpened = ref(false)
const isItemOpened = ref(false)
const goBack = ref(false)
const moleculeColor = ref('cyan')

const classes = computed(() => {
    return [
        'header-main-responsive',
        isOpened.value ? 'fullHeight' : 'collapsedHeight',
        { 'has-title': props.title },
        { 'has-acronym': props.acronym },
    ]
})
const parseAriaLabel = computed(() => {
    return props.title ? props.title : 'UCLA Library home page'
})
const parsedSvgName = computed(() => {
    return IconCloseLarge
})
const parsedPrimaryMenuItems = computed(() => {
    // Return only items that have children (assume these are dropdowns)
    return props.primaryNav.filter((obj) => {
        return obj.children && obj.children.length
    })
})
const parsedSecondaryMenuItems = computed(() => {
    return props.secondaryNav
})
const noChildren = computed(() => {
    if (!props.title)
        return []

    return props.primaryNav.filter((obj) => {
        // Return items that don't have sub-menu children
        return !obj.children || !obj.children.length
    })
})
const supportLinks = computed(() => {
    // Generally this is just the last "Support Us" link, but we are going to allow it to be more than 1
    return props.primaryNav.filter((obj) => {
        // Return items that don't have sub-menu children
        return !obj.children || !obj.children.length
    })
})
function shouldOpen() {
    isItemOpened.value = !isItemOpened.value
    goBack.value = false
}
function handleCloseOrReturn() {
    // console.log("Close clicked")

    goBack.value = !goBack.value
    moleculeColor.value = 'cyan'

    isOpened.value = false
}
function itemOpenedColor(itemIndex: number) {
    if (itemIndex === 0)
        moleculeColor.value = 'green'
    else if (itemIndex === 1)
        moleculeColor.value = 'pink'
    else if (itemIndex === 2)
        moleculeColor.value = 'purple'

    if (isItemOpened.value === false)
        moleculeColor.value = 'cyan'
}
function toggleMenu() {
    isOpened.value = !isOpened.value
    goBack.value = !goBack.value
}

</script>

<template>
    <nav role="navigation" aria-label="Menu" :class="classes">
        <div v-show="!isOpened" class="collapsed-menu">
            <SmartLink class="clickable-parent" to="/" :aria-label="parseAriaLabel">
                <div v-if="title" class="title">
                    <span class="full-title"> {{ title }} </span>
                    <span v-if="acronym" class="acronym"> {{ acronym }} </span>
                </div>
                <component :is="LogoLibrary" v-else width="155" height="55" class="logo-ucla" role="button" />
            </SmartLink>
            <button role="button" class="open-menu" aria-label="Open menu" :is-opened="isOpened" @click="toggleMenu">
                <component :is="IconMenu" class="hamburguer" />
            </button>
        </div>
        <div v-show="isOpened" class="expanded-menu-container">
            <div class="expanded-menu">
                <SmartLink class="clickable-parent" to="/" :aria-label="parseAriaLabel" @click="toggleMenu">
                    <div v-if="title" class="title opened-title">
                        <span class="full-title"> {{ title }} </span>
                        <span v-if="acronym" class="acronym">
                            {{ acronym }}
                        </span>
                    </div>
                    <component :is="LogoLibrary" v-else width="155" height="55" class="expanded-logo" @click="toggleMenu" />
                </SmartLink>

                <button role="button" class="close-menu" aria-label="Close menu" @click="handleCloseOrReturn">
                    <component :is="parsedSvgName" class="close-svg" />
                </button>
            </div>
            <ul class="nav-menu-primary">
                <NavMenuItemResponsive v-for="(item, index) in parsedPrimaryMenuItems" :key="item.name" :item="item"
                    :index="index" :go-back="goBack" @shouldOpen="shouldOpen" @itemOpenedColor="itemOpenedColor"
                    @closeMainMenu="toggleMenu" />
                <li v-for="(item, index) in noChildren" :key="index" class="nochildren-links">
                    <SmartLink class="nochildren-link" :to="item.to">
                        {{ item.name }}
                    </SmartLink>
                </li>
            </ul>
            <div v-if="isOpened && !title" class="nav-menu-secondary">
                <ul class="list">
                    <li v-for="item in parsedSecondaryMenuItems" :key="item.name" class="list-item" @click="toggleMenu">
                        <SmartLink class="link underline-hover" :to="item.to" :link-target="item.target">
                            {{ item.name }}
                        </SmartLink>
                    </li>
                </ul>
            </div>
            <div v-if="!title" class="support-us-container">
                <ButtonLink v-if="supportLinks.length" :label="supportLinks[0].name" :is-secondary="true" class="button"
                    :to="supportLinks[0].to" icon-name="none" @click="toggleMenu" />
            </div>
            <!-- moleculeColor class on this svg component does not do anything ask Axa -->
            <component :is="Molecule3d" width="150" height="247" viewBox="50 57 50 250" class="molecule"
                :class="moleculeColor" />
        </div>
    </nav>
</template>

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

        .clickable-parent,
        .hamburguer {
            display: inherit;
        }

        .open-menu {
            padding: 0;
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

        :deep(.svg__logo-library) {

            .svg__fill--primary-blue-03,
            .svg__fill--black {
                fill: var(--color-white);
            }
        }

        .close-menu {
            padding: 0;
        }

        .close-svg {
            cursor: pointer;

            :deep(.svg__fill--primary-blue-01) {
                fill: transparent;
            }
        }

        .go-back-svg {
            cursor: pointer;
            height: 48px;

            :deep(.svg__fill--primary-blue-01) {
                fill: transparent;
            }

            :deep(.svg__fill--primary-blue-03) {
                fill: var(--color-default-cyan-02);
            }
        }
    }

    ul {
        list-style-type: none;
    }

    .nav-menu-primary {
        margin: 64px var(--unit-gutter);
        z-index: 10;
        position: relative;
    }

    &.has-acronym .acronym {
        display: none;
    }

    &.has-title {
        .clickable-parent {
            position: relative;
        }

        .title {
            font-family: "Karbon", Helvetica, Arial, sans-serif;
            font-size: var(--step-1);
            font-weight: 500;
            line-height: 1.2;
            color: var(--color-primary-blue-03);
            text-transform: initial;
            letter-spacing: normal;
            @include min-clickable-area;

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
            @include min-clickable-area;
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
                    @include min-clickable-area;
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
        :deep(.svg__stroke--default-cyan-03) {
            stroke: var(--color-default-cyan-02);
        }
    }

    .green {
        :deep(.svg__stroke--default-cyan-03) {
            stroke: var(--color-help-green-02);
        }
    }

    .pink {
        :deep(.svg__stroke--default-cyan-03) {
            stroke: var(--color-visit-fushia-02);
        }
    }

    .purple {
        :deep(.svg__stroke--default-cyan-03) {
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

    @media #{$medium} {
        &.has-acronym {
            .full-title {
                display: none;
            }

            .acronym {
                display: block;
            }
        }
    }

    @media #{$small} {
        .support-us-container {
            padding-top: 0px;
        }
    }
}
</style>
