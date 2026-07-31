// Storybook default settings
import SectionCardsWithIllustrations from '@/lib-components/SectionCardsWithIllustrations'
import { itemsVertical, itemsHorizontal } from './mock/Section_cardsWithIllustration'

export default {
  title: 'SECTION / Cards With Illustrations',
  component: SectionCardsWithIllustrations
}

export function Default() {
  return {
    data() {
      return {
        itemsVertical,
      }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsVertical"
            sectionTitle="Get Help With"
            sectionSummary="Our facility is equipped to accommodate children of various ages. For the younger ones, we offer a soft Baby Corner, a toddler swing, a slide, a carousel, and other educational play equipment."
            to="/help/foo/bar"
            :isHorizontal="false"
            button-text="See More"
        />
    `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export function NoText() {
  return {
    data() {
      return {
        itemsVertical,
      }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsVertical"
            title="Get Help With"
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
  }
}

export function OneCard() {
  return {
    data() {
      return {
        itemsVertical,
      }
    },
    components: { SectionCardsWithIllustrations },
    computed: {
      parsedItems() {
        return [{ ...this.itemsVertical[0] }]
      },
    },
    template: `
        <section-cards-with-illustrations
            :items="parsedItems"
            sectionTitle="Get Help With"
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
  }
}

export function TwoCards() {
  return {
    data() {
      return {
        itemsVertical,
      }
    },
    components: { SectionCardsWithIllustrations },
    computed: {
      parsedItems() {
        return [{ ...this.itemsVertical[0] }, { ...this.itemsVertical[1] }]
      },
    },
    template: `
        <section-cards-with-illustrations
            :items="parsedItems"
            sectionTitle="Get Help With"
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
  }
}

export function Horizontal() {
  return {
    data() {
      return {
        itemsHorizontal,
      }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsHorizontal"
            :isHorizontal="true"
        />
    `,
  }
}

// This story tests the case where the section has a level 1 heading but no title.
// The card titles should use the same level as the section title. (h1)
export function SectionWithLevel1NoTitle() {
  return {
    data() {
      return {
        itemsVertical,
      }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsVertical"
            :level="1"
            sectionSummary="Our facility is equipped to accommodate children of various ages. For the younger ones, we offer a soft Baby Corner, a toddler swing, a slide, a carousel, and other educational play equipment."
            to="/help/foo/bar"
            button-text="See More"
        />
    `,
  }
}
