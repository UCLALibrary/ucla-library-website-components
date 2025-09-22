import { computed } from "vue"

// Import components
import HeaderSticky from "../lib-components/HeaderSticky.vue"
import FooterPrimary from "../lib-components/FooterPrimary.vue"

// Import mock data
import { primaryItems, secondaryItems } from "./mock/Funkhaus/MockGlobal"
import { mockAboutPage } from "./mock/Funkhaus/MockAboutPage"

// Import styles
import "./AboutPage.scss"

export default {
    title: "Funkhaus / Pages / About Page",
    component: {},
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "A single page layout with header, main content area, and footer. This serves as a template for about pages.",
            },
        },
    },
    argTypes: {
        theme: {
            control: { type: "select" },
            options: ["default", "dlc"],
            description: "Theme variant for the page",
        },
    },
}

// Template function for the main landing page
function Template(args) {
    return {
        components: {
            HeaderSticky,
            FooterPrimary,
        },
        provide() {
            return {
                theme: computed(() => args.theme),
            }
        },
        setup() {
            return {
                args,
                primaryItems,
                secondaryItems,
                mockAboutPage,
            }
        },
        computed: {},
        template: `
       <div class="about-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <main class="main-content">
            This is going to be the about page
            <pre>{{ mockAboutPage }}</pre>
        </main>
         
         <!-- Footer -->
         <FooterPrimary />
       </div>
     `,
    }
}

// Default story
export const Default = Template.bind({})
Default.args = {
    theme: "dlc",
}
