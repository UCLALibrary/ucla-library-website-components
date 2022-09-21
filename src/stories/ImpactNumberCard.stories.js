import ImpactNumberCard from "../lib-components/ImpactNumberCard"

export default {
    title: "IMPACT REPORT / Impact Number Card",
    component: ImpactNumberCard,
}

const mock = {
    id: "37072",
    title: "HathiTrust Partnership",
    text: "Pages Viewed Through HathiTrust Digital Library to Support Collections Access",
    impactNumber: "3,958,321",
    icon: [],
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { ImpactNumberCard },
    template: `
        <impact-number-card
            :text="text"
            :title="title"
            :impact-number="impactNumber"
        />
    `,
})
