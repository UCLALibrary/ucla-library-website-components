// Import component
import SocialShare from "@/lib-components/SocialShare"

const mock = {
    socialShare: [
        "icon-share-twitter",
        "icon-share-instagram",
        "icon-share-facebook",
        "icon-share-printer",
        "icon-share-email",
        "icon-share-linkedin",
        "icon-share-medium",
        "icon-share-whatsapp",
        "icon-close",
    ],
}

export default {
    title: "SocialShare",
    component: SocialShare,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { SocialShare },
    template: `
        <social-share
            :social-share="social-share"
        />
    `,
})
