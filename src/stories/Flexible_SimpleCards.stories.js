import FlexibleSimpleCards from "@/lib-components/Flexible/SimpleCards"
import StoryRouter from "storybook-vue-router"

import {
    mockTwoCards,
    mockThreeCards,
    mockFourCards,
    mockFiveCards,
    mockSixCards,
} from "./mock/Flexible_SimpleCards"

export default {
    title: "FLEXIBLE / Simple Cards",
    component: FlexibleSimpleCards,
    decorators: [StoryRouter()],
}

// Variations of stories below
// TwoCards
export const Default = () => ({
    data() {
        return { block: mockTwoCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards
          :block="block"
      />
  `,
})

export const ThreeCards = () => ({
    data() {
        return { block: mockThreeCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

export const FourCards = () => ({
    data() {
        return { block: mockFourCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

export const FiveCards = () => ({
    data() {
        return { block: mockFiveCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

export const SixCards = () => ({
    data() {
        return { block: mockSixCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})

const mockLibraryFlexibleSimpleCards = {
    id: "41058",
    typeHandle: "simpleCards",
    sectionTitle: "Planning Grant Resources",
    sectionSummary:
        "<p>These resources provide guidance related to documentation and survey projects.</p>",
    cards: [
        {
            id: "41059",
            typeHandle: "internalServiceOrResource",
            contentLink: [
                {
                    id: "40999",
                    uri: null,
                    title: "Template for Survey Planning",
                    summary: null,
                    externalResourceUrl:
                        "https://docs.google.com/document/d/1TU4ogqEiwWfSN7dyDkdYBm3gQYFvPCnYsV1jjMC2_6U/edit",
                },
            ],
        },
        {
            id: "41060",
            typeHandle: "internalServiceOrResource",
            contentLink: [
                {
                    id: "41001",
                    uri: null,
                    title: "Template for Item-Level Inventory",
                    summary:
                        "<p>This template provides guidance related to documentation and survey projects.</p>",
                    externalResourceUrl:
                        "https://docs.google.com/spreadsheets/d/1v3_fPBQSNXEPqRdMf0OQeQ3NB9tBwb_jTnPqcWtZYgg/edit#gid=15338334",
                },
            ],
        },
    ],
}

export const LibrarySimpleCards = () => ({
    data() {
        return { block: mockLibraryFlexibleSimpleCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
})
