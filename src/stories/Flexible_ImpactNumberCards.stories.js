import FlexibleImpactNumberCards from "@/lib-components/Flexible/ImpactNumberCards"

export default {
    title: "FLEXIBLE / Impact Number Cards",
    component: FlexibleImpactNumberCards,
}

const mock = {
    id: "37071",
    sectionSummary: null,
    sectionTitle:
        "Remote Learning by the Numbers: Data from March 2020 through September 2021",
    impactNumberCards: [
        {
            id: "37072",
            title: "HathiTrust Partnership",
            text: "Pages Viewed Through HathiTrust Digital Library to Support Collections Access",
            impactNumber: "3,958,321",
        },
        {
            id: "37073",
            title: "Virtual Research Consultations",
            text: "One&#45;on&#45;one Appointments with Librarians and Staff to Advance UCLA Research",
            impactNumber: "6,059",
        },
        {
            id: "37074",
            title: "Device Loans",
            text: "Laptop, Tablet, Hotspot Loans &#150; Picked Up on Campus or Shipped to Users&#39; Residences",
            impactNumber: "2,902",
        },
        {
            id: "37075",
            title: "Books and Other Physical Materials Picked Up by Users at Charles E. Young Research Library",
            text: "Campus Pickup",
            impactNumber: "5,402",
        },
        {
            id: "37076",
            title: "Mail Delivery",
            text: "Items Shipped to Users&#39; Residences",
            impactNumber: "2,220",
        },
        {
            id: "37077",
            title: "Digital Delivery",
            text: "Book Chapters and Journal Articles Scanned and Delivered Digitally",
            impactNumber: "2,280",
        },
    ],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleImpactNumberCards },
    template: `
        <flexible-impact-number-cards
            :block="block"
        />
    `,
})
