// Import component
import BlockSpaces from "@/lib-components/BlockSpaces"

// A storybook decorator that allows you to use routing-aware components in your stories
import StoryRouter from "storybook-vue-router"

// Storybook default settings
//TODO update stories with rich-text
export default {
    title: "BLOCK / Spaces",
    component: BlockSpaces,
    decorators: [StoryRouter()],
}

const mock = {
    to: "https://calendar.library.ucla.edu",
    title: "Bureaux de Garcons",
    location: "Fast Lane Building",
    text: "<p>Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub <a href='https://www.boeing.com/commercial/787'>Boeing 787</a> lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.</p>",
}

const mock2 = {
    to: "https://www.gettyimages.com/photos/cute-llamas",
    title: "Tote Bag Boutique",
    location: "Destination Building",
    text: "Nordic classic hand-crafted Marylebone elegant soft power bespoke signature punctual pintxos handsome discerning Asia-Pacific global international. Exquisite Asia-Pacific Washlet sharp. Exquisite Lufthansa hub, concierge cosy bureaux finest joy global iconic Nordic Singapore. Hand-crafted joy alluring intricate.",
}

const mock3 = {
    to: "",
    title: "Ginza Tsutaya Lounge",
    location: "K-pop Kanteen",
    text: "Punctual tote bag the highest quality Nordic, sharp Singapore Gaggenau international Ginza Tsutaya conversation joy lovely Helsinki perfect. Uniforms classic izakaya Ettinger. Signature ANA sharp, liveable Shinkansen Asia-Pacific soft power. Efficient Scandinavian liveable international craftsmanship remarkable cutting-edge premium business class eclectic K-pop lovely Washlet classic.",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockSpaces },
    template: `
      <block-spaces
        :to="to"
        :title="title"
        :location="location"
        :text="text"
      />
  `,
})

export const ExternalLink = () => ({
    data() {
        return {
            item: {
                ...mock2,
            },
        }
    },
    components: { BlockSpaces },
    template: `
      <block-spaces
        v-bind="item"
      />
  `,
})

export const NoLink = () => ({
    data() {
        return {
            item: {
                ...mock3,
            },
        }
    },
    components: { BlockSpaces },
    template: `
      <block-spaces
        v-bind="item"
      />
  `,
})
