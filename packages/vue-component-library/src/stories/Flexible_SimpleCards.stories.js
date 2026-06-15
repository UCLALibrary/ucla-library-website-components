import { computed } from 'vue'

import {
  mockFiveCards,
  mockFourCards,
  mockSixCards,
  mockThreeCards,
  mockTwoCards,
} from './mock/Flexible_SimpleCards'
import FlexibleSimpleCards from '@/lib-components/Flexible/SimpleCards'

export default {
  title: 'FLEXIBLE / Simple Cards',
  component: FlexibleSimpleCards,
}

// Variations of stories below
// TwoCards
const DefaultTemplate = (args) => {
  return {
    data() {
      return { block: mockTwoCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards
          :block="block"
      />
  `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const ThreeCardsTemplate = (args) => {
  return {
    data() {
      return { block: mockThreeCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
  }
}

export const ThreeCards = ThreeCardsTemplate.bind({})
ThreeCards.args = {}

const FourCardsTemplate = (args) => {
  return {
    data() {
      return { block: mockFourCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
  }
}

export const FourCards = FourCardsTemplate.bind({})
FourCards.args = {}

const FiveCardsTemplate = (args) => {
  return {
    data() {
      return { block: mockFiveCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
  }
}

export const FiveCards = FiveCardsTemplate.bind({})
FiveCards.args = {}

const SixCardsTemplate = (args) => {
  return {
    data() {
      return { block: mockSixCards }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards :block="block" />
  `,
  }
}

export const SixCards = SixCardsTemplate.bind({})
SixCards.args = {}

// FTVA
const FTVADefaultTemplate = (args) => {
  return {
    data() {
      return { block: mockTwoCards }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleSimpleCards },
    template: `
      <flexible-simple-cards
          :block="block"
      />
  `,
  }
}

export const FTVADefault = FTVADefaultTemplate.bind({})
FTVADefault.args = {}
