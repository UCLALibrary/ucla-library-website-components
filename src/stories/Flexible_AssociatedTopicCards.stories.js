import FlexibleAssociatedTopicCards from "@/lib-components/Flexible/AssociatedTopicCards"
import StoryRouter from "storybook-vue-router"

import { itemsVertical } from "./mock/Flexible_AssociatedTopicCards"

export default {
    title: "FLEXIBLE / Associated Topic Cards",
    component: FlexibleAssociatedTopicCards,
    decorators: [StoryRouter()],
}

// Variations of stories below
// TwoCards
export const Default = () => ({
    data() {
        return { block: itemsVertical }
    },
    components: { FlexibleAssociatedTopicCards },
    template: `
      <flexible-associated-topic-cards
          :block="block"
      />
  `,
})
