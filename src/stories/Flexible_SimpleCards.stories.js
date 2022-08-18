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
