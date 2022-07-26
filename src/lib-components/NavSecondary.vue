<template>
    <nav class="nav-secondary">
        <div :class="classes">
            <router-link
                to="/"
                v-if="isMicrosite"
                aria-label="UCLA Library home page"
            >
                <svg-logo-ucla-library
                    class="svg logo-ucla"
                    alt="UCLA Library logo blue"
                />
            </router-link>

            <div class="navigation-list">
                <ul class="list" v-if="!isMicrosite">
                    <li
                        v-for="(item, index) in parsedItemsMinusAccount"
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

                <button-link
                    v-if="!isMicrosite"
                    :label="accountLink.text"
                    class="account-button"
                    :to="accountLink.to"
                    :is-secondary="true"
                    icon-name="none"
                />

                <ul class="link-list" v-if="isMicrosite">
                    <li
                        v-for="(item, index) in parsedItemsAll"
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
            ]
        },
        parsedItemsAll() {
            return this.items.map((obj) => {
                return {
                    ...obj,
                    target: this.formatLinkTarget(obj.target),
                }
            })
        },
        parsedAccount() {
            return this.items.map((obj) => {
                return {
                    ...obj,
                    target: this.formatLinkTarget(obj.target),
                }
            })
        },
        parsedItemsMinusAccount() {
            return this.parsedItemsAll.slice(0, -1)
        },
        accountLink() {
            return this.items.find((obj) => {
                return obj.name == "My Account"
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-secondary {
    height: 48px;
    padding: 24px 94px;
    // border-bottom: 1px solid var(--color-secondary-grey-02);

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

    .navigation-list {
        margin-top: 3px;
        align-content: right;
        list-style-type: none;
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        align-self: center;
    }

    .list-item {
        display: inline-block;
        margin-left: 50px;
        font-size: 18px;
        line-height: 1;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            font-weight: $font-weight-medium;
            color: var(--color-primary-blue-04);
        }
    }

    .link-list {
        // display: flex;
        // flex-direction: row;
        // flex-wrap: nowrap;
        // justify-content: flex-end;
        // align-content: center;
        // align-items: center;
        // align-self: center;
    }

    .account-button {
        color: var(--color-white);
        background-color: var(--color-primary-blue-04);
        border-radius: 4px;
        padding: 0 12px;
        font-weight: $font-weight-medium;
        margin-left: 48px;
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
