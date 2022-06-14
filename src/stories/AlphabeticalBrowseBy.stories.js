import AlphabeticalBrowseBy from "../lib-components/AlphabeticalBrowseBy"

export default {
    title: "SEARCH / AlphabeticalBrowseBy",
    component: AlphabeticalBrowseBy,
}

export const Default = () => ({
    components: { AlphabeticalBrowseBy },
    template: `<alphabetical-browse-by/>`,
})

export const CIsSelected = () => ({
    components: { AlphabeticalBrowseBy },
    template: `<alphabetical-browse-by selectedLetterProp="C"/>`,
})
