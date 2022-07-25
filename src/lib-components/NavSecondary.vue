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

            <ul class="list" v-if="!isMicrosite">
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

            <ul class="list" v-if="isMicrosite">
                <li
                    v-for="(item, index) in parsedMicrositeItems"
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
                v-if="isMicrosite"
                :label="supportLink.name"
                :is-secondary="true"
                class="support-button"
                :to="supportLink.to"
                icon-name="none"
                @click="toggleMenu"
            />
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
        parsedItems() {
            return this.items.map((obj) => {
                return {
                    ...obj,
                    target: this.formatLinkTarget(obj.target),
                }
            })
        },
        parsedMicrositeItems() {
            return this.parsedItems.slice(0, -1)
        },
        supportLink() {
            return this.items.find((obj) => {
                return obj.name == "Support Us"
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-secondary {
    height: 48px;
    padding: 24px 94px;

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

    .support-button {
        margin: 0px;
        border: 1.5px solid var(--color-primary-blue-02);
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
