import AlphabeticalBrowseBy from "../lib-components/AlphabeticalBrowseBy"

export default {
    title: "Search / AlphabeticalBrowseBy",
    component: AlphabeticalBrowseBy,
}

export const Default = () => ({
    components: { AlphabeticalBrowseBy },
    template: `<alphabetical-browse-by/>`,
})
