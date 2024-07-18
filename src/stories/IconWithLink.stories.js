import IconWithLink from "@/lib-components/IconWithLink"

export default {
    title: "Icon With Link",
    component: IconWithLink,
}

export function Default() {
    return {
        components: { IconWithLink },
        template: `
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
    `,
    }
}

export function WithExternalLink() {
    return {
        components: { IconWithLink },
        template: `
        <icon-with-link
            text="See More"
            icon-name="svg-icon-search"
            to="https://www.google.com/"
        />
    `,
    }
}

export function InternalLink() {
    return {
        components: { IconWithLink },
        template: `
        <icon-with-link
            text="Emergency Phone Booth"
            icon-name="svg-icon-phone"
            to= "/help/services-and-resources"
        />
    `,
    }
}

export function ConsultationIconLink() {
    return {
        components: { IconWithLink },
        template: `
        <icon-with-link
            text="Book a Consultation"
            icon-name="svg-icon-consultation"
            to= "/help/services-and-resources"
        />
    `,
    }
}

export function LongText() {
    return {
        components: { IconWithLink },
        template: `
        <icon-with-link
            text="A Icon with Link with Very Very Long Text What Happens?"
            icon-name="svg-icon-share-twitter"
            to= "/help/services-and-resources"
        />
    `,
    }
}

export function GeneralIcons() {
    return {
        components: { IconWithLink },
        template: `
        <ul>
            <li>
            <icon-with-link
                text="Consultation"
                icon-name="svg-icon-consultation"
                to= "/help/services-and-resources"
            /></li>
            <li>
            <icon-with-link
                text="List"
                icon-name="svg-icon-list"
                to= "/help/services-and-resources"
            /></li>
            <li>
            <icon-with-link
                text="Location"
                icon-name="svg-icon-location"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Phone"
                icon-name="svg-icon-phone"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Search"
                icon-name="svg-icon-search"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Virtual"
                icon-name="svg-icon-virtual"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Headphones"
                icon-name="svg-icon-headphones"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Video"
                icon-name="svg-icon-video"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Image Stack"
                icon-name="svg-icon-image-stack"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Money"
                icon-name="svg-icon-money"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Message"
                icon-name="svg-icon-message"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Play"
                icon-name="svg-icon-play"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Play Filled"
                icon-name="svg-icon-play-filled"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Eye"
                icon-name="svg-icon-eye"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Check"
                icon-name="svg-icon-check"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Email"
                icon-name="svg-icon-email"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Card"
                icon-name="svg-icon-card"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Calendar"
                icon-name="svg-icon-calendar"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Laptop"
                icon-name="svg-icon-laptop"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Book"
                icon-name="svg-icon-book"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Locker"
                icon-name="svg-icon-locker"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Person"
                icon-name="svg-icon-person"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Accessible"
                icon-name="svg-icon-accessible"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Clock"
                icon-name="svg-icon-clock"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Chair"
                icon-name="svg-icon-chair"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Light"
                icon-name="svg-icon-light"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Location Filled"
                icon-name="svg-icon-location-filled"
                to= "/help/services-and-resources"
            /></li>
            <li><icon-with-link
                text="Alert"
                icon-name="svg-icon-alert"
                to= "/help/services-and-resources"
            /></li>
        </ul>
    `,
    }
}

export function SocialIcons() {
    return {
        components: { IconWithLink },
        template: `
        <ul>
            <li><icon-with-link
                text="Share Email"
                icon-name="svg-icon-share-email"
                to= "/help/services-and-resources"
            /></li>

            <li><icon-with-link
                text="Share Facebook"
                icon-name="svg-icon-share-facebook"
                to= "/help/services-and-resources"
            /></li>

            <li><icon-with-link
                text="Share Instagram"
                icon-name="svg-icon-share-instagram"
                to= "/help/services-and-resources"
            /></li>

            <li><icon-with-link
                text="Share LinkedIn"
                icon-name="svg-icon-share-linkedin"
                to= "/help/services-and-resources"
            /></li>

            <li><icon-with-link
                text="Share Twitter"
                icon-name="svg-icon-share-twitter"
                to= "/help/services-and-resources"
            /></li>
            
            <li><icon-with-link
                text="Share Whatsapp"
                icon-name="svg-icon-share-whatsapp"
                to= "/help/services-and-resources"
            /></li>
        </ul>
    `,
    }
}

export function FTVACalendarIcons() {
    return {
        components: { IconWithLink },
        template: `
        <ul>
            <li><icon-with-link
                text="iCal"
                icon-name="svg-icon-ftva-appleinc"
                to= ""
            /></li>

            <li><icon-with-link
                text="Google Calendar"
                icon-name="svg-icon-ftva-gcal"
                to= ""
            /></li>

            <li><icon-with-link
                text="Outlook.com"
                icon-name="svg-icon-ftva-outlook"
                to= ""
            /></li>

            <li><icon-with-link
                text="Download .ics file"
                icon-name="svg-icon-ftva-download"
                to= ""
            /></li>
        </ul>
    `,
    }
}

export function FTVASocialIcons() {
    return {
        components: { IconWithLink },
        template: `
        <ul>
            <li><icon-with-link
                text="Share"
                icon-name="svg-icon-ftva-share"
                to= ""
            /></li>

            <li><icon-with-link
                text="Confirm"
                icon-name="svg-icon-ftva-social-confirm"
                to= ""
            /></li>

                        <li><icon-with-link
                text="Copy Link"
                icon-name="svg-icon-ftva-social-link"
                to= ""
            /></li>

            <li><icon-with-link
                text="Email"
                icon-name="svg-icon-ftva-social-email"
                to= ""
            /></li>

            <li><icon-with-link
                text="Facebook"
                icon-name="svg-icon-ftva-social-facebook"
                to= ""
            /></li>

            <li><icon-with-link
                text="X"
                icon-name="svg-icon-ftva-social-x"
                to= "/help/services-and-resources"
            /></li>
        </ul>
    `,
    }
}
