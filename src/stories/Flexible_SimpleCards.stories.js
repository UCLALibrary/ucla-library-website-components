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
export function Default() {
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

export function ThreeCards() {
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

export function FourCards() {
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

export function FiveCards() {
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

export function SixCards() {
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
