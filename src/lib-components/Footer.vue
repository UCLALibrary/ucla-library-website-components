<template>
    <footer class="footer">
        make these booleans true or false like iconLink
        <footer-sponser />
        <footer-primary :items="primaryItems" class="primary" />
        <footer-sock :items="secondaryItems" class="secondary" />
    </footer>
</template>

<script>
import FooterPrimary from "@/lib-components/FooterPrimary"
import FooterSecondary from "@/lib-components/FooterSecondary"

export default {
    name: "HeaderSticky",
    components: {
        FooterPrimary,
        FooterSecondary,
    },
    props: {
        sponser: {
            tyoe: Boolean,
            default: false,
        }
        primary: {
            tyoe: Boolean,
            default: false,
        }
        sock: {
            tyoe: Boolean,
            default: false,
        }
        primaryItems: {
            type: Array,
            default: () => [],
        },
        secondaryItems: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.footer {
    z-index: 100;

    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-secondary-grey-02);

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .primary {
        // position: absolute;
        --unit-height: 64px;
        padding: 0 18px;
        justify-content: flex-start;
        width: unset;
        ::v-deep {
            .section-name {
                color: var(--color-black);
                font-family: var(--font-primary);
                font-size: 15px;
                font-weight: 600;
            }
            .support-links {
                .item-top {
                    color: var(--color-black);
                    font-family: var(--font-primary);
                    font-size: 15px;
                }
            }
            .background-white {
                border-bottom: unset;
                height: unset;
            }
            .background-blue {
                width: 1920px;
            }
        }
    }
    .secondary {
        border-bottom: unset;
        margin-top: 10px;
        // margin-bottom: 21px;
        justify-content: flex-start;
        padding: 0 20px;
    }
}
</style>
