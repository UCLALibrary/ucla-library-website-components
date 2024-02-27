import FlexibleRichText from "@/lib-components/Flexible/RichText"

import { mock } from "./mock/Flexible_RichText"

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
