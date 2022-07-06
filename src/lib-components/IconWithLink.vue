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
import SvgIconConsultation from "ucla-library-design-tokens/assets/svgs/icon-chat.svg"
import SvgIconList from "ucla-library-design-tokens/assets/svgs/icon-list.svg"
import SvgIconLocation from "ucla-library-design-tokens/assets/svgs/icon-location.svg"
import SvgIconPhone from "ucla-library-design-tokens/assets/svgs/icon-phone.svg"
import SvgIconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"
import SvgIconVirtual from "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"
import SvgIconHeadphones from "ucla-library-design-tokens/assets/svgs/icon-headphones.svg"
import SvgIconVideo from "ucla-library-design-tokens/assets/svgs/icon-video.svg"
import SvgIconImageStack from "ucla-library-design-tokens/assets/svgs/icon-image-stack.svg"
import SvgIconMoney from "ucla-library-design-tokens/assets/svgs/icon-money.svg"
import SvgIconMessage from "ucla-library-design-tokens/assets/svgs/icon-message.svg"
import SvgIconPlay from "ucla-library-design-tokens/assets/svgs/icon-play.svg"
import SvgIconPlayFilled from "ucla-library-design-tokens/assets/svgs/icon-play-filled.svg"
import SvgIconEye from "ucla-library-design-tokens/assets/svgs/icon-eye.svg"
import SvgIconCheck from "ucla-library-design-tokens/assets/svgs/icon-check.svg"
import SvgIconEmail from "ucla-library-design-tokens/assets/svgs/icon-email.svg"
import SvgIconCard from "ucla-library-design-tokens/assets/svgs/icon-card.svg"
import SvgIconCalendar from "ucla-library-design-tokens/assets/svgs/icon-calendar.svg"
import SvgIconLaptop from "ucla-library-design-tokens/assets/svgs/icon-laptop.svg"
import SvgIconBook from "ucla-library-design-tokens/assets/svgs/icon-book.svg"
import SvgIconLocker from "ucla-library-design-tokens/assets/svgs/icon-locker.svg"
import SvgIconPerson from "ucla-library-design-tokens/assets/svgs/icon-person.svg"
import SvgIconAccessible from "ucla-library-design-tokens/assets/svgs/icon-accessible.svg"
import SvgIconClock from "ucla-library-design-tokens/assets/svgs/icon-clock.svg"
import SvgIconChair from "ucla-library-design-tokens/assets/svgs/icon-chair.svg"
import SvgIconLight from "ucla-library-design-tokens/assets/svgs/icon-light.svg"
import SvgIconLocationFilled from "ucla-library-design-tokens/assets/svgs/icon-location-filled.svg"
import SvgIconAlert from "ucla-library-design-tokens/assets/svgs/icon-alert.svg"
import SvgIconShareEmail from "ucla-library-design-tokens/assets/svgs/icon-share-email.svg"
import SvgIconSharePrinter from "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"
import SvgIconShareFacebook from "ucla-library-design-tokens/assets/svgs/icon-share-facebook.svg"
import SvgIconShareInstagram from "ucla-library-design-tokens/assets/svgs/icon-share-instagram.svg"
import SvgIconShareLinkedin from "ucla-library-design-tokens/assets/svgs/icon-share-linkedin.svg"
import SvgIconShareTwitter from "ucla-library-design-tokens/assets/svgs/icon-share-twitter.svg"
import SvgIconShareWhatsapp from "ucla-library-design-tokens/assets/svgs/icon-share-whatsapp.svg"
// SVGs
export default {
    name: "IconWithLink",
    components: {
        SmartLink,
        SvgIconConsultation,
        SvgIconList,
        SvgIconLocation,
        SvgIconPhone,
        SvgIconSearch,
        SvgIconVirtual,
        SvgIconHeadphones,
        SvgIconVideo,
        SvgIconImageStack,
        SvgIconMoney,
        SvgIconMessage,
        SvgIconPlay,
        SvgIconPlayFilled,
        SvgIconEye,
        SvgIconCheck,
        SvgIconEmail,
        SvgIconCard,
        SvgIconCalendar,
        SvgIconLaptop,
        SvgIconBook,
        SvgIconLocker,
        SvgIconPerson,
        SvgIconAccessible,
        SvgIconClock,
        SvgIconChair,
        SvgIconLight,
        SvgIconLocationFilled,
        SvgIconAlert,
        SvgIconShareEmail,
        SvgIconSharePrinter,
        SvgIconShareFacebook,
        SvgIconShareInstagram,
        SvgIconShareLinkedin,
        SvgIconShareTwitter,
        SvgIconShareWhatsapp,
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
