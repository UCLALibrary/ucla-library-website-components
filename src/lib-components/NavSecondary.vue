<template>
    <nav class="nav-secondary">
        <div v-if="isMeap" class="ucla-logo">
            <router-link to="/" aria-label="UCLA Library home page">
                <svg-logo-ucla-library
                    class="svg logo-ucla"
                    alt="UCLA Library logo blue"
                />
            </router-link>
        </div>
        <div class="parsed-items">
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
    </nav>
</template>

<script>
import SvgLogoUclaLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"
// Helpers
import formatLinkTarget from "@/mixins/formatLinkTarget"
import SmartLink from "@/lib-components/SmartLink"

export default {
    name: "NavSecondary",
    components: {
        SvgLogoUclaLibrary,
        SmartLink,
    },
    mixins: [formatLinkTarget],
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        isMeap: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
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

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: flex-start;

    .flex-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: center;
    }

    .ucla-logo {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex: 1 0 auto;
        align-self: center;

        margin-right: 50px;
    }
    .parsed-items {
        margin-top: 3px;
        align-content: right;
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-end;
            align-content: center;
            align-items: center;
            flex: 4 0 auto;
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
