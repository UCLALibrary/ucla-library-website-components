// Storybook default settings

import FooterMain from "@/lib-components/FooterMain"




export default {
    title: "FOOTER / Main",
    component: FooterMain,
}



export const Default = () => ({

    components: { FooterMain },


    template: `
        <footer-main />`,
})