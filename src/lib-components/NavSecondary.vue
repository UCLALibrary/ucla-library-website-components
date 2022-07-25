<template>
    <nav class="nav-secondary">
        <div  :class="classes">
            <router-link to="/" v-if="isMicrosite" aria-label="UCLA Library home page">
                <svg-logo-ucla-library
                    class="svg logo-ucla"
                    alt="UCLA Library logo blue"
                />
            </router-link>

                <ul class="list">
                    <li
                        v-for="(item, index) in parsedItems"
                        :key="index"
                        class="list-item"
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
            <!-- <div class="support-us-container">
                <button-link
                    v-if="supportLinks.length"
                    :label="supportLinks[0].name"
                    :is-secondary="true"
                    class="button"
                    :to="supportLinks[0].to"
                    icon-name="none"
                    @click="toggleMenu"
                />

        // {
        //     "name": "Support Us",
        //     "text": "Support Us",
        //     "to": "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
        //     "target": "_self"
        // }
            </div> -->
        </div>
    </nav>
</template>

<script>
import SvgLogoUclaLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"
// Helpers
import formatLinkTarget from "@/mixins/formatLinkTarget"
import SmartLink from "@/lib-components/SmartLink"
import ButtonLink from "@/lib-components/ButtonLink"

export default {
    name: "NavSecondary",
    components: {
        SvgLogoUclaLibrary,
        SmartLink,
        ButtonLink,
    },
    mixins: [formatLinkTarget],
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        isMicrosite: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "flex-container",
                { "flex-container-not-microsite": !this.isMicrosite },
                { "flex-container-microsite": this.isMicrosite },
                { "ucla-logo": this.isMicrosite },
            ]
        },
        // supportLinks() {
        //     // Generally this is just the last "Support Us" link, but we are going to allow it to be more than 1
        //     return this.primaryNav.filter((obj) => {
        //         // Return items that don't have sub-menu children
        //         return !obj.children || !obj.children.length
        //     })
        // },
        parsedItems() {
            return this.items.map((obj) => {
                return {
                    ...obj,
                    target: this.formatLinkTarget(obj.target),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-secondary {
    height: 48px;
    padding: 0 94px;
    border-bottom: 1px solid var(--color-secondary-grey-02);

    .flex-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .flex-container-not-microsite {
        justify-content: flex-end;
        align-content: flex-end;
        align-items: center;
    }

    .flex-container-microsite {
        justify-content: space-between;
        align-content: flex-end;
        align-items: center;
    }

    // .ucla-logo {
    //     display: flex;
    //     flex-direction: column;
    //     flex-wrap: nowrap;
    //     justify-content: center;
    //     align-content: center;
    //     align-items: center;
    //     align-self: center;
    // }

        ul {
            margin-top: 3px;
            align-content: right;

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-end;
            align-content: center;
            align-items: center;
            align-self: center;
        }

        .list {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        .list-item {
            display: inline-block;
            margin-left: 50px;
            font-size: 18px;
            line-height: 1;

            &:first-child {
                margin-left: 0;
            }
        }

        .link {
            color: var(--color-black);
            text-decoration: none;
        }


    .support-us-container {
        margin: 64px var(--unit-gutter);

        .button {
            margin: 0px;
            border: 1.5px solid var(--color-primary-blue-02);
        }
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover,
        .link:active {
            color: var(--color-primary-blue-03);
        }
    }
}
</style>
