import FlexibleRichText from "@/lib-components/Flexible/RichText"

import {
  mock,
  mockTwo,
  mockFour,
  mockFive,
  mockWithCraftEntries,
} from "./mock/Flexible_RichText"

export default {
  title: "FLEXIBLE / Rich Text",
  component: FlexibleRichText,
}

export const Default = () => ({
  data() {
    return {
      block: mock,
    }
  },
  components: { FlexibleRichText },
  template: `
        <flexible-rich-text
            :block="block"
        />
    `,
})

export const QuoteImage = () => ({
  data() {
    return {
      block: mockTwo,
    }
  },
  components: { FlexibleRichText },
  template: `
        <flexible-rich-text
            :block="block"
        />
    `,
})

export const ImagePositionLeft = () => ({
  data() {
    return {
      block: mockFour,
    }
  },
  components: { FlexibleRichText },
  template: `
         <flexible-rich-text
            :block="block"
         />
    `,
})

export const AllRichText = () => ({
  data() {
    return {
      block: mockFive,
    }
  },
  components: { FlexibleRichText },
  template: `
         <flexible-rich-text
            :block="block"
         />
    `,
})

export const CraftEntriesInRichText = () => ({
  data() {
    return {
      block: mockWithCraftEntries,
    }
  },
  components: { FlexibleRichText },
  template: `
        <flexible-rich-text
            :block="block"
        />
    `,
})
