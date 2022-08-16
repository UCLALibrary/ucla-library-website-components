import FooterSponsor from "@/lib-components/FooterSponsor"

// Storybook default settings
export default {
    title: "FOOTER / Sponsor",
    component: FooterSponsor,
}

const mockFooterSponsor = {
    funders: [
        {
            id: "28231",
            funderLogo: [
                {
                    id: "28636",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/logo-arcadia1.svg",
                    height: 569,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-arcadia1.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-arcadia1.svg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/logo-arcadia1.svg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/logo-arcadia1.svg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/logo-arcadia1.svg 2560w",
                    alt: "Logo arcadia1",
                    focalPoint: [0.5, 0.5],
                    altText: null,
                },
            ],
            funderName: "Arcadiaaaaaa",
            funderUrl:
                "https://www.hostesscakes.com/products/cupcakes/chocolate/",
        },
        {
            id: "28259",
            funderLogo: [
                {
                    id: "28637",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/logo-library.svg",
                    height: 490,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-library.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-library.svg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/logo-library.svg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/logo-library.svg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/logo-library.svg 2560w",
                    alt: "Logo library",
                    focalPoint: [0.5, 0.5],
                    altText: null,
                },
            ],
            funderName: "Etch A Sketch",
            funderUrl: "https://en.wikipedia.org/wiki/Etch_A_Sketch",
        },
    ],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mockFooterSponsor }
    },
    components: { FooterSponsor },
    template: `
        <footer-sponsor :funders="funders" />
    `,
})
