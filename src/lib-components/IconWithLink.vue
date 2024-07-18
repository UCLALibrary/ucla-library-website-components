<script>
import { defineAsyncComponent } from "vue"
import SmartLink from "@/lib-components/SmartLink.vue"

export default {
    name: "IconWithLink",
    components: {
        SmartLink,
        SvgIconConsultation: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-chat.svg")
        ),
        SvgIconList: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-list.svg")
        ),
        SvgIconLocation: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-location.svg")
        ),
        SvgIconPhone: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-phone.svg")
        ),
        SvgIconSearch: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-search.svg")
        ),
        SvgIconVirtual: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-virtual.svg")
        ),
        SvgIconHeadphones: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-headphones.svg")
        ),
        SvgIconVideo: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-video.svg")
        ),
        SvgIconImageStack: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-image-stack.svg"
            )
        ),
        SvgIconMoney: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-money.svg")
        ),
        SvgIconMessage: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-message.svg")
        ),
        SvgIconPlay: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-play.svg")
        ),
        SvgIconPlayFilled: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-play-filled.svg"
            )
        ),
        SvgIconEye: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-eye.svg")
        ),
        SvgIconCheck: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-check.svg")
        ),
        SvgIconEmail: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-email.svg")
        ),
        SvgIconCard: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-card.svg")
        ),
        SvgIconCalendar: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-calendar.svg")
        ),
        SvgIconLaptop: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-laptop.svg")
        ),
        SvgIconBook: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-book.svg")
        ),
        SvgIconLocker: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-locker.svg")
        ),
        SvgIconPerson: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-person.svg")
        ),
        SvgIconAccessible: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-accessible.svg")
        ),
        SvgIconClock: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-clock.svg")
        ),
        SvgIconChair: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-chair.svg")
        ),
        SvgIconLight: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-light.svg")
        ),
        SvgIconLocationFilled: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location-filled.svg"
            )
        ),
        SvgIconAlert: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-alert.svg")
        ),
        SvgIconShareEmail: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-email.svg"
            )
        ),
        SvgIconSharePrinter: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"
            )
        ),
        SvgIconShareFacebook: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-facebook.svg"
            )
        ),
        SvgIconShareInstagram: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-instagram.svg"
            )
        ),
        SvgIconShareLinkedin: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-linkedin.svg"
            )
        ),
        SvgIconShareTwitter: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-twitter.svg"
            )
        ),
        SvgIconShareWhatsapp: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-whatsapp.svg"
            )
        ),

        // FTVA Icons
        SvgIconFtvaAppleinc: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-appleinc.svg"
            )
        ),

        SvgIconFtvaGcal: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-ftva-gcal.svg")
        ),

        SvgIconFtvaOutlook: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-outlook.svg"
            )
        ),

        SvgIconFtvaDownload: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-download.svg"
            )
        ),

        SvgIconFtvaShare: defineAsyncComponent(() =>
            import("ucla-library-design-tokens/assets/svgs/icon-ftva-share.svg")
        ),

        SvgIconFtvaSocialConfirm: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-social_confirm.svg"
            )
        ),

        SvgIconFtvaSocialEmail: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-social_email.svg"
            )
        ),

        SvgIconFtvaSocialFacebook: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-social_facebook.svg"
            )
        ),

        SvgIconFtvaSocialLink: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-social_link.svg"
            )
        ),

        SvgIconFtvaSocialX: defineAsyncComponent(() =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-social_x.svg"
            )
        ),
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
        to: {
            // URL to link to
            type: String,
            default: "",
        },
    },
}
</script>

<template>
    <div class="icon-with-link">
        <SmartLink v-if="to" :to="to" class="icon-with-link-container link">
            <component :is="iconName" class="icon" aria-hidden="true" />
            <div class="text" v-text="text" />
        </SmartLink>
        <div v-else class="icon-with-link-container">
            <component :is="iconName" class="icon" aria-hidden="true" />
            <div class="text" v-text="text" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon-with-link {
    --link-color: var(--color-primary-blue-03);
    --icon-color: var(--color-primary-blue-03);
    --icon-color-highlight: var(--color-default-cyan-03);

    display: inline-block;
    line-height: 1;

    .text {
        @include button;
        white-space: pre-wrap;
    }

    .link {
        color: var(--link-color);
    }

    .icon-with-link-container {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--space-xs);
    }

    .icon {
        flex-shrink: 0;

        .svg__stroke--primary-blue-03 {
            stroke: var(--icon-color);
        }

        .svg__fill--primary-blue-03 {
            fill: var(--icon-color);
        }

        .svg__stroke--default-cyan-03 {
            stroke: var(--icon-color-highlight);
        }
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover {
            @include link-hover;
        }
    }
}
</style>
