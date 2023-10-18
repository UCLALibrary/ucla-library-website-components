// Storybook default settings

import HeaderSmart from "@/lib-components/HeaderSmart"


export default {
    title: "GLOBAL / Header Smart",
    component: HeaderSmart,
}



// Variations of stories below
export const Default = () => ({

    components: { HeaderSmart },


    template: `<header-smart />`,
})

// Variations of stories below
export const DefaultMicrosite = () => ({

    components: { HeaderSmart },


    template: `<header-smart title="Modern Endangered Archives Program"/>`,
})

export const DesktopWindowWidth = () => ({

    components: { HeaderSmart },


    template: `<header-smart />`,
})

export const DesktopWindowWidthMicrosite = () => ({

    components: { HeaderSmart },


    template: `<header-smart 
            title="Modern Endangered Archives Program" />`,
})