// Import component
import SectionWrapper from "@/lib-components/SectionWrapper"

import BlockMediaWithText from "@/lib-components/BlockMediaWithText"
import DividerWayFinder from "@/lib-components/DividerWayFinder"

import { mock as mockMediaWithText } from "./mock/BlockMediaWithText"

const propsForMediaWithText = {
    sectionHeader: mockMediaWithText.mediaWithText[0].titleLink,
    shortDescription: mockMediaWithText.mediaWithText[0].description,
    buttonText: mockMediaWithText.mediaWithText[0].buttonText,
    buttonUrl: mockMediaWithText.mediaWithText[0].buttonUrl,
    mediaLink: mockMediaWithText.mediaWithText[0].linkToMedia,
    item: mockMediaWithText.mediaWithText[0].coverImage,
    typeMedia: mockMediaWithText.mediaWithText[0].typeMedia,
}

// Storybook default settings
export default {
    title: "Section Wrapper",
    component: SectionWrapper,
}

export const Default = () => ({
    data() {
        return {
            sectionTitle: "Whatever content.",
            sectionSummary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor eros in luctus tincidunt. Cras a magna volutpat, hendrerit leo at, posuere ex. Vivamus enim enim, euismod eu elit sed, pulvinar dignissim odio.",
            propsForMediaWithText: propsForMediaWithText,
        }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
  `,
})

export const NoMeta = () => ({
    data() {
        return {
            propsForMediaWithText: propsForMediaWithText,
        }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper>
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
`,
})

export const GrayTheme = () => ({
    data() {
        return {
            sectionTitle: "Whatever content.",
            sectionSummary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor eros in luctus tincidunt. Cras a magna volutpat, hendrerit leo at, posuere ex. Vivamus enim enim, euismod eu elit sed, pulvinar dignissim odio.",
            propsForMediaWithText: propsForMediaWithText,
        }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary" theme="gray">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
  `,
})

export const Nested = () => ({
    components: { SectionWrapper },
    template: `
    <section-wrapper sectionTitle="level 2 (auto)">
        <section-wrapper sectionTitle="level 3 (auto)">
        </section-wrapper>
        <section-wrapper sectionTitle="level 3 (auto)">
            <section-wrapper sectionTitle="level 4 (auto)" />
        </section-wrapper>
        <section-wrapper sectionTitle="level 3 (auto)" />
        <section-wrapper level=6 sectionTitle="level 6 (via prop)">
            <section-wrapper sectionTitle="level 7 (auto)" />
        </section-wrapper>
    </section-wrapper>
  `,
})

export const Divider = () => ({
    data() {
        return {
            sectionTitle: "Whatever content.",
            sectionSummary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor eros in luctus tincidunt. Cras a magna volutpat, hendrerit leo at, posuere ex. Vivamus enim enim, euismod eu elit sed, pulvinar dignissim odio.",
            propsForMediaWithText: propsForMediaWithText,
        }
    },
    components: { SectionWrapper, BlockMediaWithText, DividerWayFinder },
    template: `
    <div>
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    <section-wrapper theme="divider">
        <divider-way-finder color="help" />
    </section-wrapper>
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    </div>
  `,
})
