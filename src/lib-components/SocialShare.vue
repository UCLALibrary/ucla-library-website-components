<template>
    <div class="social-share">
        hello
        <div class="social-share-column">
            <ul class="social-share-list">
                <li
                    v-for="(item, index) in parsedSocialShare"
                    :key="index"
                    class="social-share-row"
                >
                    <component :is="item.svgIcon" v-if="item.svgIcon" />

                    <span class="social-share-name" v-html="item.svgLabel" />
                </li>
            </ul>
            <!-- <icon-with-link
                    v-if="reserveSeat"
                    text="Reserve a Seat"
                    icon-name="svg-icon-calendar"
                    :to="reserveSeat"
                    class="reserve"
                />
                <icon-with-link
                    :text="address"
                    icon-name="svg-icon-location"
                    :to="addressLink"
                    class="location"
                />
             -->
        </div>
    </div>
</template>

<script>
export default {
    name: "SocialShare",
    components: {
        IconTwitter: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-twitter.svg"
            ).then((d) => d.default),
        IconInstagram: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-instagram.svg"
            ).then((d) => d.default),
        IconFacebook: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-facebook.svg"
            ).then((d) => d.default),
        IconVirtual: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"
            ).then((d) => d.default),
        IconPrinter: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-email.svg"
            ).then((d) => d.default),
        IconLinkedin: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-linkedin.svg"
            ).then((d) => d.default),
        IconMedium: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-medium.svg"
            ).then((d) => d.default),
        IconWhatsapp: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-whatsapp.svg"
            ).then((d) => d.default),
        IconClose: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-close.svg"
            ).then((d) => d.default),
        // IconEllipsis: () =>
        //     import(
        //         "ucla-library-design-tokens/assets/svgs/icon-ellipsis.svg"
        //     ).then((d) => d.default),
    },
    props: {
        socialShare: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            socialShareMapping: {
                "icon-share-twitter": "Twitter",
                "icon-share-instagram": "Instagram",
                "icon-share-facebook": "Facebook",
                "icon-share-printer": "Printer",
                "icon-share-email": "Email",
                "icon-share-linkedin": "Linked In",
                "icon-share-medium": "Medium",
                "icon-share-whatsapp": "Whatsapp",
                "icon-close": "Close",
                // "icon-ellipsis": "Ellipsis",
            },
        }
    },
    computed: {
        parsedSocialShare() {
            return this.socialShare.map((obj) => {
                let label = this.socialShareMapping[obj]
                console.log(obj)
                console.log(label)
                return {
                    svgLabel: label,
                    svgIcon: obj,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.social-share {
    //max-height: 200px;
    max-width: $container-l-main + px;
    width: 100%;

    .social-share-title {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: 16px;
        margin-left: 2px;
    }

    .social-share-column ul {
        display: flex;
        flex-wrap: wrap;
    }

    .social-share-column ul li {
        list-style: none;
        flex-basis: 32%;
    }

    .social-share-row {
        margin-bottom: 16px;
        display: flex;
        align-content: center;
    }
    .social-share-name {
        color: var(--color-black);
        @include step-0;
        padding-left: 5px;
    }

    // Adjusts: Svg shareprinter to white bg and blue stroke
    .svg__fill--secondary-grey-01 {
        fill: var(--color-white);
    }
    .svg__stroke--black {
        stroke: var(--color-primary-blue-03);
    }
    .svg__fill--black {
        fill: var(--color-primary-blue-03);
    }

    // Breakpoints

    @media #{$medium} {
        .social-share-column ul {
            display: flex;
            flex-wrap: wrap;
        }

        .social-share-column ul li {
            list-style: none;
            flex-basis: 50%;
        }
    }

    @media #{$small} {
        .social-share-column ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }

        .social-share-column ul li {
            list-style: none;
            flex-basis: 20%;
        }
    }
}
</style>
