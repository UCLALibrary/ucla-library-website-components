// Storybook default settings
import { computed } from "vue"
import SearchResultsCount from "@/lib-components/SearchResultsCount.vue"

export default {
    title: "Funkhaus / SearchResultsCount",
    component: SearchResultsCount,
    argTypes: {
        count: {
            control: "number",
            description: "Number of results to display",
        },
        prefix: {
            control: "text",
            description: "Prefix text before the count",
        },
        label: {
            control: "text",
            description: "Label text after the count",
        },
        animate: {
            control: "boolean",
            description: "Whether to animate the count",
        },
    },
}

function Template(args) {
    return {
        components: { SearchResultsCount },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        setup() {
            return { args }
        },
        template: `
        <search-results-count
          :count="args.count"
          :prefix="args.prefix"
          :label="args.label"
          :animate="args.animate"
        />
    `,
    }
}

export const Default = Template.bind({})
Default.args = {
    count: 110,
    prefix: "Catalogue",
    label: "Results",
    animate: true,
}

export const LotsOfResults = Template.bind({})
LotsOfResults.args = {
    count: 11342340,
    prefix: "Catalogue",
    label: "Results",
    animate: true,
}

export const BigPrefixLabel = Template.bind({})
BigPrefixLabel.args = {
    count: 140,
    prefix: "Featured News and Articles from the Funkhaus Team",
    label: "Cherry-picked Results for you",
    animate: true,
}

export const PrefixOnly = Template.bind({})
PrefixOnly.args = {
    count: 10,
    prefix: "Featured News",
    label: "",
    animate: true,
}

export const LabelOnly = Template.bind({})
LabelOnly.args = {
    count: 2340,
    prefix: "",
    label: "Cherry-picked Results for you",
    animate: true,
}

export const NotAnimated = Template.bind({})
NotAnimated.args = {
    count: 11,
    prefix: "Catalogue",
    label: "Results",
    animate: false,
}
