import BlockSponsor from "@/lib-components/BlockSponsor"

export default {
    title: "BLOCK / Sponsor",
    component: BlockSponsor,
}

const mock = {
    funderLogo: [
        {
            id: "28636",
            src: "https://static.library.ucla.edu/craftassetstest/logo-arcadia1.svg",
            height: 569,
            width: 2560,
            srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-arcadia1.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-arcadia1.svg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/logo-arcadia1.svg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/logo-arcadia1.svg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/logo-arcadia1.svg 2560w",
            alt: "Logo arcadia1",
            focalPoint: [0.5, 0.5],
            altText: null,
        },
    ],
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockSponsor },
    template: `
    <block-sponsor 
        :funderLogo= "funderLogo"
        funderName="Hostess Cupcakes"
        funderUrl="https://www.hostesscakes.com/products/cupcakes/chocolate/"
    />
  `,
})
