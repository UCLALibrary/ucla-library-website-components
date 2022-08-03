<template>
    <div class="icon-with-link">
        <smart-link :to="to" class="link">
            <component :is="iconName" class="icon" />
            <span class="text" v-html="text" />
        </smart-link>
    </div>
</template>

<script>
import SmartLink from "@/lib-components/SmartLink"

// SVGs
export default {
    name: "IconWithLink",
    components: {
        SmartLink,
        SvgIconConsultation: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-chat.svg").then(
                (d) => d.default
            ),
        SvgIconList: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-list.svg").then(
                (d) => d.default
            ),
        SvgIconLocation: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location.svg"
            ).then((d) => d.default),
        SvgIconPhone: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-phone.svg"
            ).then((d) => d.default),
        SvgIconSearch: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-search.svg"
            ).then((d) => d.default),
        SvgIconVirtual: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"
            ).then((d) => d.default),
        SvgIconHeadphones: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-headphones.svg"
            ).then((d) => d.default),
        SvgIconVideo: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-video.svg"
            ).then((d) => d.default),
        SvgIconImageStack: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-image-stack.svg"
            ).then((d) => d.default),
        SvgIconMoney: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-money.svg"
            ).then((d) => d.default),
        SvgIconMessage: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-message.svg"
            ).then((d) => d.default),
        SvgIconPlay: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-play.svg").then(
                (d) => d.default
            ),
        SvgIconPlayFilled: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-play-filled.svg"
            ).then((d) => d.default),
        SvgIconEye: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-eye.svg").then(
                (d) => d.default
            ),
        SvgIconCheck: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-check.svg"
            ).then((d) => d.default),
        SvgIconEmail: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-email.svg"
            ).then((d) => d.default),
        SvgIconCard: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-card.svg").then(
                (d) => d.default
            ),
        SvgIconCalendar: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-calendar.svg"
            ).then((d) => d.default),
        SvgIconLaptop: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-laptop.svg"
            ).then((d) => d.default),
        SvgIconBook: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-book.svg").then(
                (d) => d.default
            ),
        SvgIconLocker: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-locker.svg"
            ).then((d) => d.default),
        SvgIconPerson: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-person.svg"
            ).then((d) => d.default),
        SvgIconAccessible: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-accessible.svg"
            ).then((d) => d.default),
        SvgIconClock: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-clock.svg"
            ).then((d) => d.default),
        SvgIconChair: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-chair.svg"
            ).then((d) => d.default),
        SvgIconLight: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-light.svg"
            ).then((d) => d.default),
        SvgIconLocationFilled: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location-filled.svg"
            ).then((d) => d.default),
        SvgIconAlert: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-alert.svg"
            ).then((d) => d.default),
        SvgIconShareEmail: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-email.svg"
            ).then((d) => d.default),
        SvgIconSharePrinter: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"
            ).then((d) => d.default),
        SvgIconShareFacebook: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-facebook.svg"
            ).then((d) => d.default),
        SvgIconShareInstagram: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-instagram.svg"
            ).then((d) => d.default),
        SvgIconShareLinkedin: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-linkedin.svg"
            ).then((d) => d.default),
        SvgIconShareTwitter: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-twitter.svg"
            ).then((d) => d.default),
        SvgIconShareWhatsapp: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-whatsapp.svg"
            ).then((d) => d.default),
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

<style lang="scss" scoped>
.icon-with-link {
    display: inline-block;
    .text {
        @include button;
    }
    .link {
        color: var(--color-primary-blue-03);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--space-xs);
    }
    .icon {
        flex-shrink: 0;
    }

    // Hover states
    @media #{$has-hover} {
        .link:hover {
            @include link-hover;
        }
    }
}
</style>
