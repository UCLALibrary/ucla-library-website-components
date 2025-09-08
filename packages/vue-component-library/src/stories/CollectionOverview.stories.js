import CollectionOverview from "@/lib-components/CollectionOverview"
import { ButtonLinkIcons } from "@/types/components/buttonLink.types"
// Import mock api data
import * as API from "@/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Funkhaus / CollectionOverview",
    component: CollectionOverview,
}

// Variations of stories below
export function Default() {
    return {
        components: { CollectionOverview },
        data() {
            return {
                props: {
                    title: "Los Angeles Times Photographic Collection",
                    subtitle: "About this Collection",
                    itemsCount: 21963,

                    blockButtons: {
                        buttons: [
                            {
                                label: "Click Here for UCLA Library Locations",
                                to: "/help/more",
                                iconName: ButtonLinkIcons.ARROW_RIGHT,
                            },
                            { label: "Contact Us", to: "https://google.com" },
                        ],
                    },
                    description:
                        "Collection consists of photonegatives documenting events and people in So. CA and photographic prints documenting events and people in So. CA, the US, and the world. The material originates from the Los Angeles Times newspaper and includes glass negatives (ca. 1918-1932), nitrate negatives (ca. 1925-45), and safety negatives (ca. 1935-1990). Also includes prints and negatives from the Los Angeles Times Orange County and San Diego bureaus.",
                    image: API.image,
                },
            }
        },
        template: '<collection-overview v-bind="props" />',
    }
}

export function WithoutButtons() {
    return {
        components: { CollectionOverview },
        data() {
            return {
                props: {
                    title: "Collection Overview",
                    itemsCount: 150,
                    description:
                        "This is a collection overview without any buttons. It is used to demonstrate the component's basic functionality.",
                    image: API.image,
                },
            }
        },
        template: '<collection-overview v-bind="props" />',
    }
}
