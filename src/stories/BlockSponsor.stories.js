import BlockSponsor from "@/lib-components/BlockSponsor"

export default {
    title: "BLOCK / Sponsor",
    component: BlockSponsor,
}

export const Default = () => ({
    components: { BlockSponsor },
    template: `
    <block-sponsor 
        funderLogo="https://www.hostesscakes.com/wp-content/uploads/2020/03/CC_Hero_Chocolate_Cut.png"
        funderName="Hostess Cupcakes"
        funderUrl="https://www.hostesscakes.com/products/cupcakes/chocolate/"
    />
  `,
})
