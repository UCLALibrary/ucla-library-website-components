import SectionHeader from "@/lib-components/SectionHeader"
import SectionWrapper from "@/lib-components/SectionWrapper"

// Storybook default settings
export default {
    title: "Section Header",
    component: SectionHeader,
}

const Template = (args, { argTypes }) => ({
    components: { SectionHeader },
    props: Object.keys(argTypes),
    template: `<section-header v-bind="$props">Header goes here</section-header>`,
})

// Variations of stories below
export const Default = Template.bind({})
Default.args = {
    level: 0,
}

export const InsideSectionWraper = () => ({
    components: { SectionHeader, SectionWrapper },
    template: `
    <section-wrapper level=1>
        <section-header>Level 1</section-header>
        <section-wrapper>
            <section-header>Level 2</section-header>
            <section-wrapper>
                <section-header>Level 3</section-header>
                <section-wrapper>
                    <section-header>Level 4</section-header>
                    <section-wrapper>
                        <section-header>Level 5</section-header>
                        <section-wrapper>
                            <section-header>Level 6</section-header>
                        </section-wrapper>
                    </section-wrapper>
                </section-wrapper>
            </section-wrapper>
        </section-wrapper>
    </section-wrapper>
  `,
})
