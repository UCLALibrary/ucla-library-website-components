import { computed } from "vue"

// Import components
import HeaderSticky from "../lib-components/HeaderSticky.vue"
import FooterPrimary from "../lib-components/FooterPrimary.vue"

// Import mock data
import { primaryItems, secondaryItems } from "./mock/Funkhaus/MockGlobal"
import { mockCollectionBrowsePage } from "./mock/Funkhaus/MockCollectionBrowsePage"

// Import styles
import "./CollectionBrowsePage.scss"

export default {
    title: "Funkhaus / Pages / Collection Browse Page",
    component: {},
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "A single page layout with header, main content area, and footer. This serves as a template for collection browse pages.",
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
                mockCollectionBrowsePage,
            }
        },
        computed: {},
        template: `
       <div class="collection-browse-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <main class="main-content">
            This is going to be the collection browse page
            <pre>{{ mockCollectionBrowsePage }}</pre>
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
